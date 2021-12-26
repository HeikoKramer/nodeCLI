#!/usr/bin/env node

// Required packages and files
const meow        = require('meow');
const alert       = require('./alerts');
const init        = require('./utils/init');
const handleError = require('cli-handle-error');
const data        = require('./utils/data');

// Help text
// will print with package.json description on --help flag (meow functionality)
const helpTest = `
    Usage:
        npx heiko [OPTIONS]

    Options:
        social           Show social information (default: true)
        --no-social      Hide social information
        disclaimer       Show disclaimer (default: true)
        --no-disclaimer  Hide disclaimer
        
    Example:
        npx heiko --no-social
        npx heiko --no-disclaimer
`;

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

const cli   = meow(helpTest, options);
const input = cli.input;
const flags = cli.flags;

(async () => {
    init(); 

    console.log(data.bio);
    if (flags.social) {
        console.log(data.social)
    }

    
    if (flags.disclaimer) {
        alert({ type: 'info', msg: data.disclaimer, name: 'DISCLAIMER' });
    }
    
    alert({ type: 'info', msg: 'CLI DATA ↓' });
    console.log('input', input);
    console.log('flags', flags);
})();
