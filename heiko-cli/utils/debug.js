const alert = require('../alerts');

module.exports = (isDebug, input, flags) => {

    if (!isDebug) {
        return;
    }

    alert({ type: 'info', msg: '↓ CLI DEBUG INFORMATION ↓' });
    console.log('input', input);
    console.log('flags', flags);
}
