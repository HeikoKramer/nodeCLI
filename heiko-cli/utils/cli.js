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
        ${green(`-b, --bio            Print biographic information (default: true)
        --no-bio             Hide biographic information
        -s, --social         Print social information (default: true) 
        --no-social          Hide social information
        -dis, --disclaimer   Print disclaimer (default: true)
        --no-disclaimer      Hide disclaimer
        -m, --minimal        Print minimal information
        -d, --debug          Print CLI debug information
        -v, --version        Print current package version
        -h, --help           Print help page
        -c, --clear          Clear the console (default: true)
        --no-clear           Don't clear the console
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
    hardRejection: false,
    flags: {
        clear: {
            type: 'boolean',
            default: true,
            alias: 'c'
        },
        bio: {
            type: 'boolean',
            default: true,
            alias: 'b'
        },
        social: {
            type: 'boolean',
            default: true,
            alias: 's'
        },
        minimal: {
            type: 'boolean',
            alias: 'm'
        },
        disclaimer: {
            type: 'boolean',
            default: true,
            alias: 'dis'
        },
        debug: {
            type: 'boolean',
            alias: 'd'
        },
        version: {
            type: 'boolean',
            alias: 'v'
        },
        help: {
            type: 'boolean',
            alias: 'h'
        }
    }
};

module.exports = meow(helpTest, options);