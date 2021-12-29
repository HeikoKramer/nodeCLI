#!/usr/bin/env node

// spawn child process https://nodejs.org/api/child_process.html
const { spawn } = require('child_process');

// define command for child process [options in square brackets]
const lsCommand = spawn('ls', ['-lath']);

// child process runs per default in the background
//  here we takle its output and print it in the console.
lsCommand.stdout.on('data', (data) => {
  console.log(`DATA FROM CHILD PROCESS: \n${data}`);
});