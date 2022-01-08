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
    add: {
        desc: `Add a new todo to list`
    },
    help: {
        desc: `Print CLI help`
    },
    ls: {
        desc: `List all todos`
    },
    del: {
        desc: `Select and remove todos from list`
    }
}

const helpText = meowHelp({
    name: `todo`,
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