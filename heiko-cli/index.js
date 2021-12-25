#!/usr/bin/env node

// Required packages and files
const chalk       = require('chalk');
const alert       = require('./alerts');
const init        = require('./utils/init');
const handleError = require('cli-handle-error');

// Arguments
const args = process.argv.slice(2);

// Aliases
const log = console.log;

// chalk variables
const header = chalk.hex('#6d1f56').bold.inverse;
const text   = chalk.hex('#48483E');
const link   = chalk.dim.underline.blue;

// Colored Logos
const linkedIn   = chalk.bold.bgWhite.hex('#0A66C2')('Linked') 
                    + chalk.white.bold.bgHex('#0A66C2')('in');
const salesForce = chalk.white.bold.bgHex('#00A1E0')('sales') 
                    + chalk.white.bold.italic.bgHex('#00A1E0')('f') 
                    + chalk.white.bold.bgHex('#00A1E0')('orce');
const trailHead  = chalk.bgWhite.hex('#032E61')('TRAILHEAD');
const gitHub     = chalk.bgWhite.black.bold('GitHub');

// Social Infos (excludable with flag --no-social)
const socialInfo = `
${linkedIn}  ${link(`https://www.linkedin.com/in/heikokraemer/`)}
${gitHub}    ${link(`https://github.com/HeikoKramer`)}
${trailHead} ${link(`https://trailblazer.me/id/hkrmer`)}
`;

const printSocial = args.indexOf('--no-social') === -1;
const social = printSocial ? socialInfo : '';

( async () => {

    init(); 
    const { myAge, workSince } = require('./calctime');

    log(`
    ${header('Heiko Krämer')}

    ${text(`${myAge()} years old father with overall ${workSince()} years of work experience in diverse roles and fields. 
    Main focus areas were print-media (7 years) and telecommunications (9 years).
    Motivated learner, emphatic listener and keen observer. Just-do-it mentality.`)} 

    ${salesForce} ${text(`enthusiast since 2012. 
    Certified Admin, App Builder and Developer (PD1). 
    Strongly interested in process efficiency, simplification and automation.`)}

    ${social}

    `);

    alert({ type: 'info', msg: args, name: `ARGUMENTS` });
})();
