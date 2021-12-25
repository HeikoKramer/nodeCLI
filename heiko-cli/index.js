#!/usr/bin/env node

// Required packages and files
const alert       = require('./alerts');
const init        = require('./utils/init');
const handleError = require('cli-handle-error');
const data        = require('./utils/data');



(async () => {
    init(); 

    console.log(data.bio);
    console.log(data.social)

    alert({ type: 'info', msg: data.disclaimer, name: 'DISCLAIMER' });
})();
