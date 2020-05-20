//----------------------------------- CHECK COMMAND FILE -----------------------------------------
// Responsible for the creating the function related to the 'check' child-command.
// price(cmd) - Using the previously stored key, via the KeyManager class, it communicates 
//    with the API, through the NomicsAPI class, and returns and prints the cryptocurrency prices. 
//    This method can receive two arguments, coin and currency, to modify the returned content.
//------------------------------------------------------------------------------------------------

// Loading requirements
const KeyManager = require('../lib/KeyManager');
const NomicsAPI = require('../lib/NomicsAPI');

const check = {
    // Instantiates a new KeyManager object and retrieves the stored key.
    // Instantiates a new NomicsAPI object and, using the key, communicates
    // with the API. It then prints the returned data. Method receive two args.
    async price(cmd) {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            const api = new NomicsAPI(key);

            const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

            console.log(priceOutputData);
        } catch (error) {
            console.error(error.message.red);
        }
    }
};

// Exporting the file
module.exports = check;