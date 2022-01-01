#!/usr/bin/env node
const path        = require('path');
const copy        = require('copy-template-dir');
const init        = require('./utils/init');
const ask         = require('./utils/ask');

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
})();
