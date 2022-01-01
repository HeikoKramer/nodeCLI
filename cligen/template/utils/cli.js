const meow     = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
    clear: {
        type: `boolean`,
        default: true,
        alias: `c`,
        desc: `Clear the console`
    },
    debug: {
        type: `boolean`,
        alias: `d`,
        desc: `Print debug info`
    },
    version: {
        type: `boolean`,
        alias: `v`,
        desc: `Print CLI version`  
    },
    help: {
        type: `boolean`,
        alias: `h`,
        desc: `Print CLI help`  
    }
};

const commands = {
    help: {
        description: `Print CLI help`
    }
}

const helpText = meowHelp({
    name: `{{command}}`,
    flags,
    commands,
});

const options = {
    inferType: true,
    description: false,
    hardRejection: false,
    flags
};

module.exports = meow(helpText, options);