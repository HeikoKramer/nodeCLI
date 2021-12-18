#!/usr/bin/env node

// Required packages and files
const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');
const chalk   = require('chalk');

// Aliases
const log = console.log;

// Colored Logos
linkedIn   = chalk.bold.bgWhite.hex('#0A66C2')(' Linked') 
           + chalk.white.bold.bgHex('#0A66C2')('in ');
salesForce = chalk.white.bold.bgHex('#00A1E0')(' sales') 
           + chalk.white.bold.italic.bgHex('#00A1E0')('f') 
           + chalk.white.bold.bgHex('#00A1E0')('orce ');
trailHead  = chalk.bgWhite.hex('#032E61')(' TRAILHEAD ');
gitHub     = chalk.bgWhite.black.bold(' GitHub ');

// Add a CLI Welcome
welcome({
    title: `${pkgJSON.name}`,
    tagLine: `${pkgJSON.description}`,
    bgColor: `#6d1f56`,
    color: `#ffffff`,
    bold: true,
    clear: true,
    version: `${pkgJSON.version}`
});

log(`
${chalk.hex('#6d1f56').bold('Heiko Krämer')}

40 years old father (daughter, 7) with overall 23 years of professional work experience in diverse roles and fields. 
Focused on the telecommunications sector for the past nine years. Fast, continuous and motivated learner, emphatic listener and keen observer. 
Just-do-it mentality. ${salesForce} enthusiast since 2012. Certified Admin, App Builder and Developer (PD1). 
Strongly interested in process efficiency, simplification and automation.

👨 ${linkedIn}  ${chalk.dim.underline.blue(`https://www.linkedin.com/in/heikokraemer/`)}

🐙 ${gitHub}    ${chalk.dim.underline.blue(`https://github.com/HeikoKramer`)}

🐻 ${trailHead} ${chalk.dim.underline.blue(`https://trailblazer.me/id/hkrmer`)}

`);
