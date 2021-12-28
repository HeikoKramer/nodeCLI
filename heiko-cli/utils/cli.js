const meow  = require('meow');
const chalk = require('chalk');

const bold  = chalk.bold;
const blue  = chalk.blue;
const green = chalk.green;
const yel   = chalk.yellow;
const grit  = chalk.grey.italic; 

// Help text
// will print with package.json description on --help flag (meow functionality)
const helpTest = `
    ${bold('Usage:')}
        ${yel('npx heiko')} ${green('[OPTION]')} ${blue('<COMMAND>')}

    ${bold('Options:')}
        ${green(`-b, --bio`)}            Print biographic information ${grit(`(default: true)`)}
        ${green(`--no-bio`)}             Hide biographic information
        ${green(`-s, --social`)}         Print social information ${grit(`(default: true)`)} 
        ${green(`--no-social`)}          Hide social information
        ${green(`-dis, --disclaimer`)}   Print disclaimer ${grit(`(default: true)`)}
        ${green(`--no-disclaimer`)}      Hide disclaimer
        ${green(`-m, --minimal`)}        Print minimal information
        ${green(`-d, --debug`)}          Print CLI debug information
        ${green(`-v, --version`)}        Print current package version
        ${green(`-h, --help`)}           Print help page
        ${green(`-c, --clear`)}          Clear the console ${grit(`(default: true)`)}
        ${green(`--no-clear`)}           Don't clear the console
        ${green(`-g, --greeting`)}       Enter your name for a personal greeting ${grit(`(default: true)`)}
        ${green(`--no-greeting`)}        Start CLI without personal greeting
        
    ${bold('Commands:')}
        ${blue(`help`)}                 Print help page
        
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
        greeting: {
            type: 'boolean',
            default: true,
            alias: 'g'
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