const chalk = require('chalk');
const sym   = require('log-symbols');

module.exports = options => {
  const defaultOptions = {
    type: `error`,
    msg: `No options provided`
  };
  const opts = {...defaultOptions, ...options};
  const {type, msg} = opts;

  if (type === `success`) {
    console.log(`${sym.success} ${chalk.green.bold('SUCCESS:')} ${chalk.green(msg)}`)
  }

  if (type === `info`) {
    console.log(`${sym.info} ${chalk.blue.bold('INFO:')} ${chalk.blue(msg)}`)
  }

  if (type === `warning`) {
    console.log(`${sym.warning} ${chalk.yellow.bold('WARNING:')} ${chalk.yellow(msg)}`)
  }

  if (type === `error`) {
    console.log(`${sym.error} ${chalk.red.bold('ERROR:')} ${chalk.red(msg)}`)
  }

}


