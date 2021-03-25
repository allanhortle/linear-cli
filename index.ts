#!/usr/bin/env node
import {program} from 'commander';
import pkg from './package.json';
import cycle from './src/cycle';
import {LinearClient} from '@linear/sdk';

const linearClient = new LinearClient({apiKey: process.env.LINEAR_TOKEN});

program.version(pkg.version);

program
    .command('cycle [offset]')
    .description('list issues for the current or future cycle')
    .action(async (offset, env) => {
        return await cycle({linearClient, env});
    });

program.on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('  $ linear cycle');
    console.log('  $ linear cycle +1');
});

program.parse(process.argv);
