//-------------------------- NomicsAPI CLASS FILE -------------------------
// Creates the NomicsAPI class, responsible for communicating with the API.
// It establishes communication with the nomics API, using the previosly 
// stored key. It can also modify the request if the user has passed any
// 'coin' or 'cur' args when calling 'cryprice check price'.
// This class is used by '../commands/check.js'
//--------------------------------------------------------------------------

// Loading requirements
const axios = require('axios');
const colors = require('colors');

// Creating the class
class NomicsAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }

    async getPriceData(coinOption, curOption) {
        try {
            // Currency formatter
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: curOption
            });

            // Communication with the nomics API
            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`);

            let output = '';

            // Prints out a single line for each returned coin
            res.data.forEach(coin => {
                output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.price).green} | Rank: ${coin.rank.blue}\n`;
            });

            return output;
        } catch (error) {
            handleApiError(error);
        }
    }
}

// General error messages for some errors
function handleApiError(error) {
    if (error.response.status === 401) {
        throw new Error('Your API key is invalid -- Get one at https://nomics.com');
    } else if (error.response.status === 404) {
        throw new Error('The API is not responding.');
    } else {
        throw new Error('Something is not working.');
    }
}

// Exporting the class
module.exports = NomicsAPI;