//-------------------------- KeyManager CLASS FILE -----------------------
// Creates the KeyManager class, responsible for managing the user's key.
// KeyManager can store a given key, return it or delete it.
// This class is used by '../commands/key.js' and '../commands/check.js'
//------------------------------------------------------------------------

// Loading requirements
const Configstore = require('configstore');
const pkg = require('../package.json');

// Creating the class
class KeyManager {
    constructor() {
        this.conf = new Configstore(pkg.name)
    }

    // Stores a given key
    setKey(key) {
        this.conf.set('apiKey', key);
        return key;
    }

    // Returns the stored key
    getKey() {
        const key = this.conf.get('apiKey');

        if(!key) {
            throw new Error('No API key found - Get a key at https://nomics.com');
        }

        return key;
    }

    // Deletes the stored key
    deleteKey() {
        const key = this.conf.get('apiKey');

        if(!key) {
            throw new Error('No API key found - Get a key at https://nomics.com');
        }

        this.conf.delete('apiKey');

        return;
    }
}

// Exporting the class
module.exports = KeyManager;