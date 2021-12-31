#!/usr/bin/env node
const path = require('path');
const copy = require('copy-template-dir');

const vars   = { name: `heiko` };
const inDir  = path.join(__dirname, `template`);
const outDir = path.join(process.cwd(), `output`);

copy(inDir, outDir, vars, (err, createdFiles) => {
    if (err) throw err;
    createdFiles.forEach(filePath => console.log(`Created ${filePath}`));
    console.log('done!');
  });