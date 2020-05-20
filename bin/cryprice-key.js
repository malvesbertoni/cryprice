//------------------------ KEY CORE FILE ---------------------------
// Establishes the 'key' child-commands: 'set', 'show' and 'remove'. 
//------------------------------------------------------------------

// Loading requirements
const program = require('commander');
const key = require('../commands/key');

// Establishing the child-commands
program
    .command('set')
    .description('Set API key -- Get at https://nomics.com')
    .action(key.set);

program
    .command('show')
    .description('Show API key')
    .action(key.show);

program
    .command('remove')
    .description('Remove API key')
    .action(key.remove);

program.parse(process.argv);