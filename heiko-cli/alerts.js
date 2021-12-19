const chalk = require('chalk');
const sym   = require('log-symbols');

module.exports = options => {
  const defaultOptions = {
    type: `error`,
    msg: `No options provided`,
    name: ``
  };
  const opts = {...defaultOptions, ...options};
  const {type, msg, name} = opts;
  const printName = name ? name : type.toUpperCase();

  if (type === `success`) {
    console.log(`${sym.success} ${chalk.green.bold(`${printName}:`)} ${chalk.green(msg)}`)
  }

  if (type === `info`) {
    console.log(`${sym.info} ${chalk.blue.bold(`${printName}:`)} ${chalk.blue(msg)}`)
  }

  if (type === `warning`) {
    console.log(`${sym.warning} ${chalk.yellow.bold(`${printName}:`)} ${chalk.yellow(msg)}`)
  }

  if (type === `error`) {
    console.log(`${sym.error} ${chalk.red.bold(`${printName}:`)} ${chalk.red(msg)}`)
  }

}


