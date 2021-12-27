const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');
const welcome   = require('cli-welcome');
const pkgJSON   = require('../package.json');


module.exports = (minimal, clear) => {
    unhandled();
    
    // Add a CLI Welcome
    if (!minimal) { 
        welcome({
            title: `${pkgJSON.name}`,
            tagLine: `${pkgJSON.description}`,
            bgColor: `#6d1f56`,
            color: `#ffffff`,
            bold: true,
            clear,
            version: `${pkgJSON.version}`
        });
    }

    if (minimal) {
        console.log(pkgJSON.name, pkgJSON.version);
    }
    
    checkNode('12');
}
