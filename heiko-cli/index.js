#!/usr/bin/env node

// Required packages and files
const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');
const chalk   = require('chalk');

// Aliases
const log = console.log;

// Colored Logos
linkedIn   = chalk.bold.bgWhite.hex('#0A66C2')('Linked') 
           + chalk.white.bold.bgHex('#0A66C2')('in');
salesForce = chalk.white.bold.bgHex('#00A1E0')('sales') 
           + chalk.white.bold.italic.bgHex('#00A1E0')('f') 
           + chalk.white.bold.bgHex('#00A1E0')('orce');
trailHead  = chalk.bgWhite.hex('#032E61')('TRAILHEAD');
gitHub     = chalk.bgWhite.black.bold('GitHub');

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

${chalk.hex('#48483E')(`${myAge()} years old father with overall ${workSince()} years of work experience in diverse roles and fields. 
Main focus areas were print-media (7 years) and telecommunications (9 years).
Motivated learner, emphatic listener and keen observer. Just-do-it mentality.`)} 

${salesForce} ${chalk.hex('#48483E').dim(`enthusiast since 2012. 
Certified Admin, App Builder and Developer (PD1). 
Strongly interested in process efficiency, simplification and automation.`)}

${linkedIn}  ${chalk.dim.underline.blue(`https://www.linkedin.com/in/heikokraemer/`)}
${gitHub}    ${chalk.dim.underline.blue(`https://github.com/HeikoKramer`)}
${trailHead} ${chalk.dim.underline.blue(`https://trailblazer.me/id/hkrmer`)}

`);


// FUNCTIONS
// Calculate my age
function myAge () {
    birthDate = new Date("10/09/1981");
    thisDay   = new Date();

    const years = (thisDay.getFullYear() - birthDate.getFullYear()).toString();

    return years;
}

// Calculate my years of work experience
function workSince () {
    startDate = new Date("08/01/1998");
    thisDay   = new Date();

    const years = (thisDay.getFullYear() - startDate.getFullYear()).toString();

    return years;
}