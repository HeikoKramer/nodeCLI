#!/usr/bin/env node

const { prompt } = require('enquirer');

// Required packages and files
const alert = require('./alerts');
const init  = require('./utils/init');
const data  = require('./utils/data');
const cli   = require('./utils/cli');
const debug = require('./utils/debug');
const stats = require('./utils/stats');

const input = cli.input;
const flags = cli.flags;


(async () => {

    if (flags.greeting) {
        var response = await prompt({
            type: 'input',
            name: 'username',
            message: 'Would you please tell me your name?'
        });
    }

    init(flags.minimal, flags.clear); 
    input.includes('help') && cli.showHelp(0);

    if (response) {
        console.log(`Hello ${response.username}! Thank you for visiting my CLI.
        `);
    }

    if (flags.disclaimer) {
        alert({ type: 'warning', msg: data.disclaimer, name: 'DISCLAIMER' });
    }

    if (flags.bio) {
        console.log(data.bio);
    }
    
    if (flags.social) {
        console.log(data.social)
    }

    // Stats
    await stats(flags.debug);


    // debug info if needed
    debug(flags.debug, cli);
    
})();