const meow = require('meow');

// Help text
// will print with package.json description on --help flag (meow functionality)
const helpTest = `
    Usage:
        npx heiko [OPTIONS]

    Options:
        s, social         Show social information (default: true)
        --no-social       Hide social information
        dis, disclaimer   Show disclaimer (default: true)
        --no-disclaimer   Hide disclaimer
        d, debug          Show CLI debug information

    Example:
        npx heiko --no-social
        npx heiko --no-dis
        npx heiko -d
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