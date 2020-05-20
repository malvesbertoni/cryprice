//---------------- CHECK CORE FILE -----------------
// Establishes the 'check' child-command: 'price'. 
//--------------------------------------------------

// Loading requirements
const program = require('commander');
const check = require('../commands/check');

// Establishing the child-command
program
    .command('price')
    .description('Checks the price of crypto-coins')
    .option('--coin <type>', 'Add specific coin type in CSV format', 'BTC,ETH,XRP')
    .option('--cur <currency>', 'Change the displayed currency', 'USD')
    .action(cmd => check.price(cmd));

program.parse(process.argv);