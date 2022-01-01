#!/usr/bin/env node
const path        = require('path');
const copy        = require('copy-template-dir');
const init        = require('./utils/init');
const { Input }   = require('enquirer');
const to          = require('await-to-js').default;
const handleError = require('cli-handle-error');

(async() => {
    init();

    const [err, name] = await to(
        new Input({
            message: `please enter CLI name`,
            hint: `enter name here (camel case only)`
        }).run()
    );
    handleError(`INPUT`, err);

    const vars = { 
      name,
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
})();
