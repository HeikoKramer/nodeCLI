const alert = require('../alerts');

module.exports = (isDebug, cli) => {

    if (!isDebug) {
        return;
    }

    alert({ type: 'info', msg: '↓ CLI DEBUG INFORMATION ↓' });
    console.log('input', cli.input);
    console.log('flags', cli.flags);
}
