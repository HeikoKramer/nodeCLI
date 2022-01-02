const path  = require('path');
const copy  = require('copy-template-dir');
const chalk = require('chalk');
const execa = require('execa');
const ora   = require('ora');
const questions = require('./questions');

const spinner = ora({ text: '' });

// colors
const b  = chalk.bold;
const g  = chalk.green;
const bg = chalk.bold.green;
const gb = chalk.bold.green.inverse;
const yb = chalk.bold.yellow.inverse;
const w  = chalk.white;
const bw = chalk.bold.white;
const d  = chalk.dim;

module.exports = async () => {
    const vars   = await questions();
    const outDir = vars.name;
    const inDirPath  = path.join(__dirname, `../template`);
    const outDirPath = path.join(process.cwd(), outDir);
    
    copy(inDirPath, outDirPath, vars, async (err, createdFiles) => {
        if (err) throw err;
  
        console.log(bw(`\n  creating files in`), g(`./${outDir}\n`));
  
        createdFiles.forEach((filePath) => {
          const fileName = path.basename(filePath);
          console.log(g(`✔`), w(`created:`), g(fileName));
        });

        console.log();
        spinner.start(`${yb(`DEPENDENCIES`)} ${w(`installing …`)}`);
        process.chdir(outDirPath);

        const pkgs = [
            `meow@8.0.0`,
            `chalk@4.1.2`,
            `cli-alerts@1.2.2`,
            `cli-welcome@2.2.2`,
            `cli-meow-help@2.0.2`,
            `cli-handle-error@4.4.0`,
            `cli-handle-unhandled@1.1.1`
        ];

        await execa(`npm`, [`install`, ...pkgs, `-E`]);
        await execa(`npm`, [`dedupe`]);

        spinner.succeed(`${gb(`DEPENDENCIES`)} ${w(`installed!`)}`);
  
        console.log(gb(`\n✔ SUCCESS`), w(`new project`), g(`${outDir}`), w(`has been created!\n`));
      });
}