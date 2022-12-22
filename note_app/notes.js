const chalk = require('chalk')
const fs = require('fs')

const getNotes = function(){
    return 'Your notes...'
}
const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length===0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'));
    }else{
        console.log(chalk.red.inverse('note title taken'));
    }
   
}



const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
    
}
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = function(title){
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note){
        return note.title !== title;
    })

    if(notes.length>notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse("Note removed"))
    }else{
        console.log(chalk.red.inverse('No note found'));
    }

    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}