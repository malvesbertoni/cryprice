# CryPrice
CryPrice is a Node.js CLI for consulting cryptocurrency coin prices.

This is based on [Nomics API](https://nomics.com).

## Commands
There are two main commands 'key' and 'check'.

### Key
The commands derived from 'key' are related to the use of the API key.

Run this command to set the key and enable the 'check' command. 

```
cryprice key set
```

Without a key, it won't work. Get a key at https://nomics.com


Run this command to show the current key.

```
cryprice key show
```

Run this command to remove the current key.

```
cryprice key remove
```

### Check
There is only one command derived from 'check'. This command takes two optional arguments: coin and cur.

'coin' is related to the crypto coin abbreviated name and 'cur' is related to the displayed currency. 

By default, coin is set to 'BTC,ETH,XRP' and 'cur' is set to 'USD'.

Run this command to show the crypto coin's price.

```
cryprice check price
```

To alter the coin, follow these examples.

```
cryprice check price --coin='BSV'
```

```
cryprice check price --coin='LTC,EOS,BNB,XTZ'
```

To alter the currency, follow this example.

```
cryprice check price --cur='BRL'
```

To alter both, follow this example.

```
cryprice check price --coin='LTC,EOS,BNB,XTZ' --cur='AUD'
```

## Technologies
* Node.js
  * Commander
  * Inquirer
  * Configstore
  * Colors
  * Axios

## Credits
TraversyMedia and [Nomics](https://nomics.com)