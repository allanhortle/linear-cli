#!/usr/bin/env node
import {program} from 'commander';
import CycleView from './cycle/CycleView';
import IssueView from './issue/IssueView';
import ProjectView from './project/ProjectView';
import Error from './affordance/Error';
import React from 'react';
import {LinearClient} from '@linear/sdk';
import {render, Text, Box} from 'ink';
import {default as InkSpinner} from 'ink-spinner';

const pkg = require('../package.json');

function Spinner(props) {
    return (
        <Box>
            <Text color="yellow">
                <InkSpinner type="dots" />
            </Text>
            <Text> {props.children}</Text>
        </Box>
    );
}

async function wrapView(view: Function, message?: string) {
    try {
        render(<Spinner>{message}</Spinner>);
        await view();
    } catch (e) {
        render(<Error error={e} />);
    }
}

if (!process.env.LINEAR_TOKEN) {
    render(<Text color="red">process.env.LINEAR_TOKEN is missing</Text>);
    process.exit(1);
}

const linearClient = new LinearClient({apiKey: process.env.LINEAR_TOKEN});

program.version(pkg.version);

program
    .command('cycle [offset]')
    .option('-p, --project', 'group by project')
    .option('-a, --assignee', 'group by assignee')
    .description('list issues for the current or future cycle')
    .action(async (offset, env) => {
        let group = 'state';
        if (env.project) group = 'project';
        if (env.assignee) group = 'assignee';
        return wrapView(
            () => CycleView({linearClient, group, offset: parseInt(offset, 10)}),
            'Fetching Cycle'
        );
    });

program
    .command('issue [id] <subcommand>')
    .description('show details on an issue')
    .action(async (id, env) => wrapView(() => IssueView({linearClient, id}), 'Fetching Issue'));

program
    .command('project [id]')
    .description('list issues for the a project')
    .action(async (id, env) => wrapView(() => ProjectView({linearClient, id}), 'Fetching Project'));

program.on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('  $ linear cycle');
    console.log('  $ linear cycle +1');
});

program.parse(process.argv);
