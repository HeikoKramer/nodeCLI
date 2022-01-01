#!/usr/bin/env node
const path  = require('path');
const copy  = require('copy-template-dir');
const chalk = require('chalk');

const init = require('./utils/init');
const ask  = require('./utils/ask');

// colors
const b  = chalk.bold;
const g  = chalk.green;
const bg = chalk.bold.green;
const gb = chalk.bold.green.inverse;
const w  = chalk.white;
const bw = chalk.bold.white;
const d  = chalk.dim;

(async() => {
  init();

  const name = await ask({ 
    message: `please enter CLI name`,
    hint: `(camel case only)`,
  });

  const description = await ask({ 
    message: `please enter description`  
  });

  const version = await ask({ 
    message: `please enter initial version`,
    initial: `0.0.0`  
  });

  const license = await ask({ 
    message: `please the license`,
    initial: `UNLICENSED`  
  });

  const authorName = await ask({ 
    message: `please enter the author's name`  
  });

  const authorEmail = await ask({ 
    message: `please enter the author's email address`  
  });

  const authorUrl = await ask({ 
    message: `please enter the author's website`  
  });

  const vars = { 
    name,
    description,
    version,
    license,
    authorName,
    authorEmail,
    authorUrl
    };
  
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
