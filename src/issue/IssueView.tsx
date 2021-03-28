import React from 'react';
import {render, Text, Box} from 'ink';
import {LinearClient} from '@linear/sdk';
import KeyValueTable from '../affordance/KeyValueTable';
import {format} from 'stringdate';
import {IssueQueryVariables, IssueQuery} from '../generated/graphql';
import IssueQueryRaw from './IssueQuery';

function IssueView(props: {data: IssueQuery}) {
    const {
        createdAt,
        updatedAt,
        assignee,
        priorityLabel,
        completedAt,
        url,
        title,
        identifier,
        description,
        state,
        cycle,
        project,
        labels
    } = props.data.issue;
    const date = format('yyyy-MM-dd HH:mm');
    return (
        <Box flexDirection="column" padding={1}>
            <Box marginBottom={1} flexDirection="column">
                <Text bold>
                    [{identifier}] {title}
                </Text>
                <Text color="grey">{url}</Text>
            </Box>
            <Box>
                <KeyValueTable
                    keyWidth={12}
                    data={[
                        ['State', <Text color={state.color}>{state.name}</Text>],
                        labels?.nodes.length && [
                            'Labels',
                            labels.nodes.map(({name, color}) => (
                                <Text key={name} color={color} children={name} />
                            ))
                        ],
                        project && [
                            'Project',
                            project ? <Text color={project.color}>{project.name}</Text> : '-'
                        ],
                        ['Cycle', cycle?.name || '-'],
                        ['Assignee', assignee?.name || '-'],
                        ['Priority', priorityLabel],
                        ['Created At', date(createdAt)],
                        ['Updated At', date(updatedAt)],
                        completedAt && ['Completed At', date(completedAt)]
                    ]}
                />
            </Box>
            <Box paddingY={1}>
                <Text>{description}</Text>
            </Box>
        </Box>
    );
}

export default async function IssueData(props: {linearClient: LinearClient; id: string}) {
    const {id, linearClient} = props;
    const {data} = await linearClient.client.rawRequest<IssueQuery, IssueQueryVariables>(
        IssueQueryRaw,
        {id}
    );

    if (!data) return null;
    render(<IssueView data={data} />);
}
