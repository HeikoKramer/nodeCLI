const unhandled = require('cli-handle-unhandled');
const welcome   = require('cli-welcome');
const pkgJSON   = require('../package.json');

module.exports = ( clear = true ) => {
    unhandled();
    
// Add a CLI Welcome
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