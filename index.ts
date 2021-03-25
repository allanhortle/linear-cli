#!/usr/bin/env node
import {program} from 'commander';
import pkg from './package.json';
import cycle from './src/cycle';
import {LinearClient} from '@linear/sdk';

const linearClient = new LinearClient({apiKey: process.env.LINEAR_TOKEN});

program
    .version(pkg.version)
    .description('Linear cli')
    .arguments('<command>')
    .action(async (command, env) => {
        try {
            switch (command) {
                case 'cycle':
                    return await cycle({linearClient, env});
            }
        } catch (e) {
            return console.log(`Error: ${e.message}`);
        }
    });

program.on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('  $ linear cycle');
    console.log('  $ linear cycle +1');
});

program.parse(process.argv);
