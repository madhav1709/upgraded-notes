const chalk = require('chalk');
const yargs = require('yargs')
const getNotes = require('./notes.js');

//console.log(process.argv)
 
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder :{
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
       body:{
           describe:'Add body',
           demandOption:true,
        type:'string'

       }
    },
    handler: function(argv) {
        //console.log('Adding a new note!',argv)
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})
yargs.command({
    command:'remove',
    describe: 'Removing a new note',
    handler: function() {
        console.log('Removing a new note!')
    }
})
yargs.command({
    command:'list',
    describe: 'List all notes',
    handler: function() {
        console.log('Listing all notes')
    }
})
yargs.command({
    command:'read',
    describe: 'Read new note',
    handler: function() {
        console.log('Read new note!')
    }
})
yargs.parse()
//console.log(yargs.argv)
