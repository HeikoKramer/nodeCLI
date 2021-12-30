const meow      = require('meow');
const meowHelp  = require('cli-meow-help');
const pkgJSON   = require('../package.json');

const commands = {
    help: {
        desc: `Print help page`
    }
    };

const flags = {
    bio: {
        type: 'boolean',
        default: true,
        alias: 'b',
        desc: `Print biographic information`
    },
    'no-bio': {
        type: 'boolean',
        default: false,
        desc: `Hide biographic information`
    },
    clear: {
        type: 'boolean',
        default: true,
        alias: 'c',
        desc: `Clear the console when starting CLI`
    },
    'no-clear': {
        type: 'boolean',
        default: false,
        desc: `Don't clear the console when starting CLI`
    },
    debug: {
        type: 'boolean',
        alias: 'd',
        desc: `Print CLI debug information`
    },
    disclaimer: {
        type: 'boolean',
        default: true,
        alias: 'dis',
        desc: `Print disclaimer`
    },
    'no-disclaimer': {
        type: 'boolean',
        default: false,
        desc: `Hide disclaimer`
    },
    greeting: {
        type: 'boolean',
        default: false,
        alias: 'g',
        desc: `Enter your name for a personal greeting`
    },
    help: {
        type: 'boolean',
        alias: 'h',
        desc: `Print help page`
    },
    minimal: {
        type: 'boolean',
        alias: 'm',
        desc: `Print information in minimal format`
    },
    social: {
        type: 'boolean',
        default: true,
        alias: 's',
        desc: `Print social information`
    },
    'no-social': {
        type: 'boolean',
        default: false,
        desc: `Hide social information`
    },
    version: {
        type: 'boolean',
        alias: 'v',
        desc: `Print current package version`
    }
};


// Help text, generated with cli-meow-help
const helpText = meowHelp({
    name: `npx heiko-cli`,
    flags,
    commands,
    desc: `HELP page for ${pkgJSON.name} v${pkgJSON.version}\n– ${pkgJSON.description}`
});


// add --no- to a flag to set it false (meow functionality)
const options  = {
    hardRejection: false,
    description: false,
    flags
};


module.exports = meow(helpText, options);