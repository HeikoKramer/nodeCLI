#!/usr/bin/env node
const execa = require('execa');

// get 3rd value from process.argv
//  this is the first input after the command
const dirName = process.argv[2];

// Execute using execa https://www.npmjs.com/package/execa
// You can wrap it in an IIFE https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(async () => {
  execa(`mkdir`, [`-p`, dirName]);
})();