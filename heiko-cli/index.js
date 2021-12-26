#!/usr/bin/env node

// Required packages and files
const alert       = require('./alerts');
const init        = require('./utils/init');
const handleError = require('cli-handle-error');
const data        = require('./utils/data');
const cli         = require('./utils/cli');
const debug       = require('./utils/debug');

const input = cli.input;
const flags = cli.flags;


(async () => {
    init(); 

    if (flags.disclaimer) {
        alert({ type: 'warning', msg: data.disclaimer, name: 'DISCLAIMER' });
    }

    console.log(data.bio);
    if (flags.social) {
        console.log(data.social)
    }

    // debug info if needed
    debug(flags.debug, cli);
    
})();