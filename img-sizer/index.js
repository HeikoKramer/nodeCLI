#!/usr/bin/env node

/**
 * img-sizer
 * CLI to resize images
 * 
 * @author Heiko Krämer <https://heikokraemer.de>
 */ 
const resizeOptimizeImages = require('resize-optimize-images');
const { yellow : y, green : g } = require('chalk');
const globby = require('globby');
const init   = require('./utils/init');
const cli    = require('./utils/cli');
const log    = require('./utils/log');
const alert  = require('cli-alerts');
const ora    = require('ora');

const input = cli.input;
const flags = cli.flags;
const { clear, debug, source, width, quality } = flags;
const spinner = ora({ text: `` });

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
    
        spinner.start(`${y(`RUNNING`)} ${images.length} images are getting resized & optimized …`);
        await resizeOptimizeImages(options);
        spinner.succeed(`${g(`COMPLETED`)} all images are resized & optimized!`);

    } else {
        alert({
            type: `error`,
            msg: `You forgot to specify a source.`
        });
    }
    
    debug && log(images);
    debug && log(flags);
})();