import React, {useState, useRef, useEffect} from 'react';
import {render, Text, Box, Spacer} from 'ink';
import {LinearClient, Cycle, Issue, User, Project, WorkflowState} from '@linear/sdk';

type LocalIssue = {
    state: WorkflowState;
    assignee: User;
    project: Project;
};
function Cycle(props: {cycle: Cycle; issues: Array<Issue & LocalIssue>}) {
    const order = ['started', 'unstarted', 'completed', 'canceled'];
    const {completedScopeHistory = [], scopeHistory = [], name, number} = props.cycle;
    const done = completedScopeHistory[completedScopeHistory.length - 1];
    const total = scopeHistory[scopeHistory.length - 1];
    return (
        <Box flexDirection="column" padding={1}>
            <Box marginBottom={1}>
                <Text underline bold>
                    {name}
                </Text>
                <Text color="grey"> #{number}</Text>
                <Spacer />
                <Text color="grey">
                    {Math.round((100 * done) / total)}% done ({done}/{total})
                </Text>
            </Box>
            {props.issues
                .sort((aa, bb) => Number(bb.state.position) - Number(aa.state.position))
                .sort(
                    (aa, bb) =>
                        order.indexOf(aa.state.type || '') - order.indexOf(bb.state.type || '')
                )
                .map((issue, index: number) => (
                    <Box key={index}>
                        <Text color="grey">{issue.identifier} </Text>
                        <Box width={12}>
                            <Text color={issue.state.color}>{issue.state.name} </Text>
                        </Box>
                        <Box width={14} marginRight={1}>
                            <Text bold wrap="truncate-end">
                                {issue.assignee?.name}
                            </Text>
                        </Box>
                        <Text>{issue.title} </Text>
                        <Spacer />

                        {issue.project && (
                            <Box width={14}>
                                <Text wrap="truncate" color={issue.project.color}>
                                    {issue.project.name}
                                </Text>
                            </Box>
                        )}
                    </Box>
                ))}
        </Box>
    );
}

export default async function cycle(props: {linearClient: LinearClient; env: any}) {
    //const me = await props.linearClient.viewer;

    const offset = parseInt(props.env?.args[1] || 0);
    const cycles = await props.linearClient.cycles();
    const currentCycle = (cycles || {}).nodes
        ?.filter((ii) => (ii.endsAt || 0) > new Date())
        .reverse()[offset];

    const issues = await props.linearClient.client.rawRequest<
        {
            cycle: Cycle & {issues: {nodes: Issue[]}};
        },
        {}
    >(
        `
        query cycle($id: String!) {
              cycle(id: $id) {
              number
              name
              completedScopeHistory,
              scopeHistory,
                    issues {
                    nodes {
                        identifier
                        title
                        state {type, color, name, position}
                        assignee {name}
                        project {name, color}
                        }
                    }
              }
                  }
    `,
        {id: currentCycle?.id}
    );
    //console.log(issues.data.);
    render(
        <Cycle
            cycle={issues.data?.cycle}
            issues={issues.data?.cycle.issues.nodes || new Array<Issue>()}
        />
    );
}
