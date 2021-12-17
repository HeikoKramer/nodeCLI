#!/usr/bin/env node
const clearConsole = require('clear-any-console');
const pkgJSON      = require('./package.json');
 
// Clears the console.
clearConsole();

// Add a CLI Header
console.log(`
NAME: ${pkgJSON.name}
VERSION: ${pkgJSON.version}
DESCRIPTION: ${pkgJSON.description}
`);

console.log(`
Heiko Krämer

40 years old father (daughter, 7) with overall 23 years of professional work experience in diverse roles and fields. 
Focused on the telecommunications sector for the past nine years. Fast, continuous and motivated learner, emphatic listener and keen observer. 
Just-do-it mentality. Salesforce enthusiast since 2012. Certified Admin, App Builder and Developer (PD1). 
Strongly interested in process efficiency, simplification and automation.

👨 LinkedIn:  https://www.linkedin.com/in/heikokraemer/
🐻 Trailhead: https://trailblazer.me/id/hkrmer

`);
