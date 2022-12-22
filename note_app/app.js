//FS

// const fs = require('fs')

// fs.writeFileSync('notes.txt', "Hello, i am learning node")

//Validator 

const validator = require('validator')

// console.log(validator.isURL('https://google.com'));

//Chalk 

const chalk = require('chalk')
const yargs = require('yargs');
const notes = require('./notes.js')

// const success = chalk.green('success');

// console.log(success);

// const command = process.argv[2]

// if(command === 'add'){
//     console.log(chalk.green('adding note....'))
// }
// else if(command === 'remove'){
//     console.log(chalk.red('removing note.....'));
// }

// console.log(process.argv);


//create add command

yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
        
    }
})

// creating list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function(){
        console.log('Listing the notes...');
    }
})
 //creating read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Note Title'
        }
    },
    handler: function(){
        console.log('Reading a note...');
    }
})
// create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
        
    }

})


yargs.parse();