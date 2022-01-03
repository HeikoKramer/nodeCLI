#!/usr/bin/env node

/**
 * cli-todo
 * CLI to manage todos
 * 
 * @author Heiko Krämer <https://heikokraemer.de>
 */ 

const path    = require('path');
const fs      = require('fs');
const makeDir = require('make-dir');

// Database
const dbTodos = path.join(process.cwd(), `.todo/todos.json`);

const init = require('./utils/init');
const cli  = require('./utils/cli');
const log  = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
    init({ clear });
    input.includes(`help`) && cli.showHelp(0);

    if(!fs.existsSync(dbTodos)) {
        await makeDir(`.todo`);
        process.chdir(`.todo`);
        fs.writeFileSync(`todos.json`, `{}`);
    }

    debug && log(flags);
})();