#!/usr/bin/env node
const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');

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

console.log(`
Heiko Krämer

40 years old father (daughter, 7) with overall 23 years of professional work experience in diverse roles and fields. 
Focused on the telecommunications sector for the past nine years. Fast, continuous and motivated learner, emphatic listener and keen observer. 
Just-do-it mentality. Salesforce enthusiast since 2012. Certified Admin, App Builder and Developer (PD1). 
Strongly interested in process efficiency, simplification and automation.

👨 LinkedIn:  https://www.linkedin.com/in/heikokraemer/
🐻 Trailhead: https://trailblazer.me/id/hkrmer

`);
