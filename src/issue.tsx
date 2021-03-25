import React, {useState, useRef, useEffect} from 'react';
import {render, Text, Box, Spacer} from 'ink';
import {LinearClient, Cycle, Issue, User, Project, WorkflowState, Label} from '@linear/sdk';
import KeyValueTable from './affordance/KeyValueTable';
import {format} from 'stringdate';

function Issue(props: {
    issue: Issue;
    state: WorkflowState;
    assignee?: User;
    cycle?: Cycle;
    project?: Project;
    labels?: Array<Label>;
}) {
    const {issue, state, cycle, project, labels} = props;
    const {title, identifier} = props.issue;
    const date = format('yyyy-MM-dd HH:mm');
    return (
        <Box flexDirection="column" padding={1}>
            <Box marginBottom={1} flexDirection="column">
                <Text bold>
                    [{identifier}] {title}
                </Text>
                <Text color="grey">{issue.url}</Text>
            </Box>
            <Box>
                <KeyValueTable
                    keyWidth={12}
                    data={[
                        ['State', <Text color={state.color}>{state.name}</Text>],
                        labels?.length && [
                            'Labels',
                            labels.map(({name, color}) => (
                                <Text key={name} color={color} children={name} />
                            ))
                        ],
                        project && [
                            'Project',
                            project ? <Text color={project.color}>{project.name}</Text> : '-'
                        ],
                        ['Cycle', cycle?.name || '-'],
                        ['Assignee', props.assignee?.name || '-'],
                        ['Priority', issue.priorityLabel],
                        ['Created At', date(issue.createdAt)],
                        ['Updated At', date(issue.updatedAt)],
                        issue.completedAt && ['Completed At', date(issue.completedAt)]
                    ]}
                />
            </Box>
            <Box paddingY={1}>
                <Text>{props.issue.description}</Text>
            </Box>
        </Box>
    );
}

export default async function cycle(props: {linearClient: LinearClient; id: string; env: any}) {
    const issue = await props.linearClient.issue(props.id);
    if (!issue) return null;
    const [state, assignee, cycle, project, labels] = await Promise.all([
        issue.state,
        issue.assignee,
        issue.cycle,
        issue.project,
        issue.labels()
    ]);
    if (!state) return null;

    render(
        <Issue
            issue={issue}
            state={state}
            assignee={assignee}
            cycle={cycle}
            project={project}
            labels={labels?.nodes}
        />
    );
}
