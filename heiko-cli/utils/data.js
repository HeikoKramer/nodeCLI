const chalk = require('chalk');
const { myAge, workSince } = require('../calctime');

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

// Short biography intro
const bio = `
${header('Heiko Krämer')}

${text(`${myAge()} years old father with overall ${workSince()} years of work experience in diverse roles and fields. 
Main focus areas were print-media (7 years) and telecommunications (9 years).
Motivated learner, emphatic listener and keen observer. Just-do-it mentality.`)} 

${salesForce} ${text(`enthusiast since 2012. 
Certified Admin, App Builder and Developer (PD1). 
Strongly interested in process efficiency, simplification and automation.`)}
`
// Social lnfos (excludable with flag --no-social)
const social = `
${linkedIn}  ${link(`https://www.linkedin.com/in/heikokraemer/`)}
${gitHub}    ${link(`https://github.com/HeikoKramer`)}
${trailHead} ${link(`https://trailblazer.me/id/hkrmer`)}
`;

const disclaimer = `This cli is still under construction!`;

module.exports = {
    bio,
    social,
    disclaimer
};