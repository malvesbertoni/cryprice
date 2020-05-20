#!/usr/bin/env node

//----------------------------- PROGRAM CORE FILE ---------------------------------
// Establishes the 'cryprice' main command and its sub-commands, 'key' and 'check'.
//---------------------------------------------------------------------------------

// Loading requirements
const program = require('commander');
const pkg = require('../package.json');

// Establishing the main command
program
    .version(pkg.version)
    .command('key', 'Manage API key -- https://nomics.com')
    .command('check', 'Check crypto-coin price info')
    .parse(process.argv);