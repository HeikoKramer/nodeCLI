const meow     = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
    source: {
        type: `string`,
        alias: `s`,
        desc: `Source file or directory of images`
    },
    width: {
        type: `string`,
        alias: `w`,
        desc: `Width of images in pixels`
    },
    quality: {
        type: `string`,
        alias: `q`,
        desc: `Quality of images in pixels`
    },
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
        desc: `Print CLI help`
    }
}

const helpText = meowHelp({
    name: `isi`,
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