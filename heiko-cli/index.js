#!/usr/bin/env node

// Required packages and files
const meow        = require('meow');
const alert       = require('./alerts');
const init        = require('./utils/init');
const handleError = require('cli-handle-error');
const data        = require('./utils/data');

const helpTest = `RUN npx heiko`;

// Flags
// add --no- to a flag to set it false (meow functionality)
const options  = {
    flags: {
        social: {
            type: 'boolean',
            default: true,
        },
        disclaimer: {
            type: 'boolean',
            default: true,
        }
    }
};

const cli = meow(helpTest, options);

(async () => {
    init(); 

    console.log(data.bio);
    if (cli.flags.social) {
        console.log(data.social)
    }

    
    if (cli.flags.disclaimer) {
        alert({ type: 'info', msg: data.disclaimer, name: 'DISCLAIMER' });
    }
    
    alert({ type: 'info', msg: 'CLI DATA ↓' });
    console.log('cli.input', cli.input);
    console.log('cli.flags', cli.flags);
})();
