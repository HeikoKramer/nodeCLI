#!/usr/bin/env node

// get 3rd value from process.argv
//  this is the first input after the command
const dirName = process.argv[2];

// With shellJS you can use their exec command to execute commands
const {exec} = require('shelljs');
exec(`mkdir ${dirName}`);

// Or you can use their build-in implementations of common commands
const {ls} = require('shelljs');
output = ls('-A');
console.log(`ls command after creating directories: \n${output.stdout}`);

// Either by extracting them as above or via dot notation like below
const shell = require('shelljs');
shell.touch('testfile');
shell.mv('testfile', dirName);
shell.cd(dirName);
console.log(`now we should be in the dir and see the testfile:`)
console.log(shell.pwd().stdout);
console.log(shell.ls('-A').stdout);
shell.cd('..');
shell.rm('-r', dirName);
console.log(`now we should be back where we started, dir should be gone: \n ${shell.ls('-A').stdout}`);

// https://www.npmjs.com/package/shelljs
// shx is the little brother, used for direct shell execution: 
// https://www.npmjs.com/package/shx