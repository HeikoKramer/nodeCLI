#!/usr/bin/env node
const path  = require('path');
const copy  = require('copy-template-dir');
const chalk = require('chalk');

const init      = require('./utils/init');
const cli       = require('./utils/cli');
const questions = require('./utils/questions');

// colors
const b  = chalk.bold;
const g  = chalk.green;
const bg = chalk.bold.green;
const gb = chalk.bold.green.inverse;
const w  = chalk.white;
const bw = chalk.bold.white;
const d  = chalk.dim;

const input = cli.input;
const flags = cli.flags;
const { clear } = flags;

(async() => {
  init(clear);
  input.includes(`help`) && cli.showHelp(0);

  
  const vars   = await questions();
  const outDir = vars.name;
  const inDirPath  = path.join(__dirname, `template`);
  const outDirPath = path.join(process.cwd(), outDir);
  
  copy(inDirPath, outDirPath, vars, (err, createdFiles) => {
      if (err) throw err;

      console.log(bw(`\n  creating files in`), g(`./${outDir}\n`));

      createdFiles.forEach((filePath) => {
        const fileName = path.basename(filePath);
        console.log(g(`✔`), w(`created:`), g(fileName));
      });

      console.log(gb(`\n✔ SUCCESS`), w(`new project`), g(`${outDir}`), w(`has been created!\n`));
    });
})();
