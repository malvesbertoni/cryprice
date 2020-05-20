//----------------------------------- KEY COMMAND FILE ---------------------------------
// Responsible for the creating the functions related to the 'key' child-commands.
// set() - Receives the user's key via input and stores it, using the KeyManager class.
// show() - Retrieves the user's key previously stored, using the KeyManager class.
// remove() - Removes the previously stored key, using the KeyManager class.
//--------------------------------------------------------------------------------------

// Loading requirements
const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const { isRequired } = require('../utils/validation');

const key = {
    // Instantiates a new KeyManager object, receives the user's key via input
    // and use the 'setKey(key)' method from the KeyManager class to store it
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API key'.green + ' https://nomics.com',
                validate: isRequired
            }
        ]);

        const key = keyManager.setKey(input.key);

        if (key) {
            console.log('API key has been set.'.blue);
        }
    },

    // Instantiates a new KeyManager object, and uses the 'getKey()'
    // method from the KeyManager class to retrieve the stored key
    show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            
            console.log('Current API key: ', key.yellow);

            return key;
        } catch (error) {
            console.error(error.message.red);
        }
    },

    // Instantiates a new KeyManager object, and uses the 'deleteKey()'
    // method from the KeyManager class to remove the stored key
    remove() {
        try {
            const keyManager = new KeyManager();

            keyManager.deleteKey();

            console.log('API key removed.'.blue);

            return;
        } catch (error) {
            console.error(error.message.red);
        }
    }
}

// Exporting the file
module.exports = key;