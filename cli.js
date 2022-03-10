const { Command } = require('commander');
const program = new Command();
const api = require('./index.js')
program
    .option('-d, --demo', 'demo')
program
    .command('add <taskName>')
    .description('add a task')
    .action((...words) => {
        const taskName = words[words.length - 1].args.join(' ')
        api.create(taskName)
    });
program
    .command('clear')
    .description('clear all tasks')
    .action(() => {
        console.log("tasks cleared");
    });

program.parse(process.argv);


