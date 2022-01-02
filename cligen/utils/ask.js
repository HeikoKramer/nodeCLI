const { Input }   = require('enquirer');
const to          = require('await-to-js').default;
const handleError = require('cli-handle-error');
const fs          = require('fs');
const path        = require('path');
const { Store }   = require('data-store');

module.exports = async ({ name, message, hint, initial }) => {
    let history = false;
    if(
        !initial && 
        name !== `name` && 
        name !== `command` && 
        name !== `description`
    ) {
        history = {
            autosave: true,
            store: new Store({
                path: path.join(__dirname, `/../.history/${name}.json`)
            })
        }
    }

    const [err, response] = await to(
        new Input({
            name,
            message,
            hint,
            initial,
            history,
            validate(value, state) {
                if (state && state.name === `command`) return true;
                if (state && state.name === `name`) {
                    if (fs.existsSync(value)) {
                        return `directory already exists: ./${value}`;
                    } else {
                        return true;
                    }
                }
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