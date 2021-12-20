#!/usr/bin/env node

// Required packages and files
const welcome   = require('cli-welcome');
const pkgJSON   = require('./package.json');
const chalk     = require('chalk');
const alert     = require('./alerts');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

// Aliases
const log = console.log;

// chalk variables
const header = chalk.hex('#6d1f56').bold.inverse;
const text   = chalk.hex('#48483E');

// Colored Logos
const linkedIn   = chalk.bold.bgWhite.hex('#0A66C2')('Linked') 
                    + chalk.white.bold.bgHex('#0A66C2')('in');
const salesForce = chalk.white.bold.bgHex('#00A1E0')('sales') 
                    + chalk.white.bold.italic.bgHex('#00A1E0')('f') 
                    + chalk.white.bold.bgHex('#00A1E0')('orce');
const trailHead  = chalk.bgWhite.hex('#032E61')('TRAILHEAD');
const gitHub     = chalk.bgWhite.black.bold('GitHub');

unhandled();

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

checkNode('12');

// Demo unhandled error
// Promise.reject(new Error('This is unhandled'));

// Demo alert
// alert({
//     type: `success`,
//     msg: `This is a Success Message :)`
// });

log(`
${header('Heiko Krämer')}

${text(`${myAge()} years old father with overall ${workSince()} years of work experience in diverse roles and fields. 
Main focus areas were print-media (7 years) and telecommunications (9 years).
Motivated learner, emphatic listener and keen observer. Just-do-it mentality.`)} 

${salesForce} ${text(`enthusiast since 2012. 
Certified Admin, App Builder and Developer (PD1). 
Strongly interested in process efficiency, simplification and automation.`)}

${linkedIn}  ${chalk.dim.underline.blue(`https://www.linkedin.com/in/heikokraemer/`)}
${gitHub}    ${chalk.dim.underline.blue(`https://github.com/HeikoKramer`)}
${trailHead} ${chalk.dim.underline.blue(`https://trailblazer.me/id/hkrmer`)}

`);


// FUNCTIONS
// Calculate my age
function myAge () {
    const birthDate = new Date("10/09/1981");
    const thisDay   = new Date();

    const years = (thisDay.getFullYear() - birthDate.getFullYear()).toString();

    return years;
}

// Calculate my years of work experience
function workSince () {
    const startDate = new Date("08/01/1998");
    const thisDay   = new Date();

    const years = (thisDay.getFullYear() - startDate.getFullYear()).toString();

    return years;
}