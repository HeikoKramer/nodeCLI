#!/usr/bin/env node

/**
 * img-sizer
 * CLI to resize images
 * 
 * @author Heiko Krämer <https://heikokraemer.de>
 */ 
const resizeOptimizeImages = require('resize-optimize-images');
const globby = require('globby');
const init   = require('./utils/init');
const cli    = require('./utils/cli');
const log    = require('./utils/log');
const alert  = require('cli-alerts');

const input = cli.input;
const flags = cli.flags;
const { clear, debug, source, width, quality } = flags;

(async () => {
    init({ clear });
    input.includes(`help`) && cli.showHelp(0);

    if (source) {
        var images = await globby(source);
        const options = {
            images,
            width: width ? width : 300,
            quality: quality ? quality : 90
        };
    
        await resizeOptimizeImages(options);

        imgDebug = images;
    } else {
        alert({
            type: `error`,
            msg: `You forgot to specify a source.`
        });
    }
    
    debug && log(images);
    debug && log(flags);
})();