const meow  = require('meow');
const chalk = require('chalk');

const bold  = chalk.bold;
const blue  = chalk.blue;
const green = chalk.green;
const yel   = chalk.yellow;

// Help text
// will print with package.json description on --help flag (meow functionality)
const helpTest = `
    ${bold('Usage:')}
        ${yel('npx heiko')} ${green('[OPTION]')} ${blue('<COMMAND>')}

    ${bold('Options:')}
        ${green(`-s, --social         Print social information (default: true)
        --no-social          Hide social information
        -dis, --disclaimer   Print disclaimer (default: true)
        --no-disclaimer      Hide disclaimer
        -d, --debug          Print CLI debug information
        -v, --version        Print current package version
        -h, --help           Print help page
        `)}
    ${bold('Commands:')}
        ${blue(`help                 Print help page
        `)}
    ${bold('Usage:')}
        ${yel('npx heiko')} ${green('--no-social')}
        ${yel('npx heiko')} ${green('--no-dis')}
        ${yel('npx heiko')} ${green('-d')}
        ${yel('npx heiko')} ${blue('help')}
`;

// Flags
// add --no- to a flag to set it false (meow functionality)
const options  = {
    flags: {
        social: {
            type: 'boolean',
            default: true,
            alias: 's'
        },
        disclaimer: {
            type: 'boolean',
            default: true,
            alias: 'dis'
        },
        debug: {
            type: 'boolean',
            default: false,
            alias: 'd'
        },
        version: {
            type: 'boolean',
            default: false,
            alias: 'v'
        },
        help: {
            type: 'boolean',
            default: false,
            alias: 'h'
        }
    }
};

module.exports = meow(helpTest, options);