#!/usr/bin/env node
const { exec } = require('child_process');

// get 3rd value from process.argv
//  this is the first input after the command
const dirName = process.argv[2];

// execute command mkdir (1st input = directory name)
exec(`mkdir ${dirName}`);