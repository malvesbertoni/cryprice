const KeyManager = require('../lib/KeyManager');
const NomicsAPI = require('../lib/NomicsAPI');

const check = {
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

module.exports = check;