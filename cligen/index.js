#!/usr/bin/env node
const path = require('path');
const copy = require('copy-template-dir');

const vars = { 
  name: `cli-img`,
  description: `CLI to resize and optimize images`,
  version: `0.0.0`
};

const inDir  = path.join(__dirname, `template`);
const outDir = path.join(process.cwd(), vars.name);

copy(inDir, outDir, vars, (err, createdFiles) => {
    if (err) throw err;
    console.log(`\nCreating files in ./${vars.name}\n`);
    createdFiles.forEach((filePath) => {
      const fileName = path.basename(filePath);
      console.log(`Created: ${fileName}`);
    });
    console.log(`\nSuccess – new project "${vars.name}" has been created!\n`);
  });