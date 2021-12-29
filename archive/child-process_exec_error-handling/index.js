#!/usr/bin/env node
const { exec } = require('child_process');

// get 3rd value from process.argv
//  this is the first input after the command
const dirName = process.argv[2];

// error handling call back
const callBack = (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
};

// execute command mkdir (1st input = directory name)
// we also give it the callBack function, where we're handling errors
// without that function, errors will not be printed to the console
// "dir utils/libs" would for example fail without explanations 
// with the callBack, we get the error message:
// mkdir: cannot create directory ‘utils/libs’: No such file or directory
// the -p flag was missing to create nested dirs
exec(`mkdir ${dirName}`, callBack);