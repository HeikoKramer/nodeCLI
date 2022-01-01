const { Input }   = require('enquirer');
const to          = require('await-to-js').default;
const handleError = require('cli-handle-error');

module.exports = async ({ name, message, hint, initial }) => {
    const [err, response] = await to(
        new Input({
            name,
            message,
            hint,
            initial,
            validate(value, state) {
                if (state && state.name === `command`) return true;
                return !value ? `Please add a value` : true;
            }
        })
        .on('cancel', () => { 
            console.log(`┌( ಠ_ಠ)┘ process aborted!`);
            process.exit(1) })
            .run()
    );
    handleError(`INPUT`, err);

    return response;
};