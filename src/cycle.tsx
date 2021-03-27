import React from 'react';
import {render, Text, Box, Spacer} from 'ink';
import {LinearClient} from '@linear/sdk';
import {Cycle, Issue} from '@linear/sdk/dist/_generated_documents';
import sortBy from 'unmutable/sortBy';


type Props = {
    group: string;
    cycle: Cycle;
};

function sortIssues(grouping: string, issues: Array<Issue>) {
    if (grouping === 'state') {
        const order = ['started', 'unstarted', 'completed', 'canceled'];
        console.log({grouping});
        return issues
            .sort((aa, bb) => Number(bb.state.position) - Number(aa.state.position))
            .sort((a, b) => order.indexOf(a.state.type || '') - order.indexOf(b.state.type || ''))
    }

    return sortBy(ii => ii[grouping]?.name || 'ZZZZZZ')(issues);
}
function CycleView(props: Props) {
    const {cycle, group} = props;
    const {completedScopeHistory = [], scopeHistory = [], name, number} = cycle;
    const done = completedScopeHistory[completedScopeHistory.length - 1];
    const total = scopeHistory[scopeHistory.length - 1];
    return (
        <Box flexDirection="column">
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
            {
                sortIssues(group, cycle.issues.nodes)
                    .map((issue: Issue, index: number) => (
                        <Box key={index}>
                            <Box flexShrink={0} marginRight={1}>
                                <Text wrap="truncate" color="grey">{issue.identifier}</Text>
                            </Box>
                            <Box flexShrink={0} width={12} marginRight={1}>
                                <Text wrap="truncate" color={issue.state.color}>{issue.state.name} </Text>
                            </Box>
                            <Box flexShrink={0} marginRight={1} width="10%">
                                <Text bold wrap="truncate">
                                    {issue.assignee?.name}
                                </Text>
                            </Box>
                            <Box flexShrink={1} marginRight={1}>
                                <Text wrap="truncate">{issue.title}</Text>
                            </Box>
                            <Spacer />
                            <Box flexShrink={1} width="12%">
                                {issue.project && (
                                    <Text wrap="truncate" color={issue.project.color}>
                                        {issue.project.name}
                                    </Text>
                                )}
                            </Box>
                        </Box >
                    ))
            }
        </Box >
    );
}

export default async function cycle(props: {linearClient: LinearClient; group: string; env: any, offset?: number}) {
    const cycles = await props.linearClient.cycles();
    const currentCycle = (cycles?.nodes || [])
        .filter((ii) => (ii.endsAt || 0) > new Date())
        .reverse()[props.offset || 0];

    const query = `
        query cycle($id: String!) {
            cycle(id: $id) {
            number
                name
                completedScopeHistory
                scopeHistory
                issues {
                    nodes {
                        identifier
                        title
                        state {
                            type
                            color
                            name
                            position
                        }
                        assignee {
                            name
                        }
                        project {
                            name
                            color
                        }
                    }
                }
            }
        }
    `;

    const {data} = await props.linearClient.client.rawRequest<{cycle: Cycle}, {id: string}>(
        query,
        {id: currentCycle.id || ''}
    );
    if (!data) return null;
    render(<CycleView group={props.group}
        cycle={data.cycle} />);
}
