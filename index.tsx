#!/usr/bin/env node
import {program, CommandOptions} from 'commander';
import pkg from './package.json';
import cycle from './src/cycle';
import issue from './src/issue';
import Error from './src/affordance/Error';
import React from 'react';
import {LinearClient} from '@linear/sdk';
import {render, Text, Box} from 'ink';
import {default as InkSpinner} from 'ink-spinner';

function Spinner(props) {
    return <Box>
        <Text color="yellow">
            <InkSpinner type="dots" />
        </Text>
        <Text> {props.children}</Text>
    </Box>
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
            () => cycle({linearClient, group, offset: parseInt(offset, 10), env}),
            'Fetching Cycle'
        )
    });

program
    .command('issue [id]')
    .description('list issues for the current or future cycle')
    .action(async (id, env) => wrapView(
        () => issue({linearClient, id, env}),
        'Fetching Issue'
    ));

program.on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('  $ linear cycle');
    console.log('  $ linear cycle +1');
});

program.parse(process.argv);
