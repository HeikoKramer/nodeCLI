const meow = require('meow');

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
        },
        debug: {
            type: 'boolean',
            default: false,
        }
    }
};

module.exports = meow(helpTest, options);