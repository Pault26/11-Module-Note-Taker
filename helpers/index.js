// Importing the required modules
const fs = require("fs");
const path = require("path");
// Function to create a new note and save it to the 'db.json' file
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    // Write the updated notesArray to the 'db.json' file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, 
        null, 2));
    return note;
}
// Function to delete a note from the 'db.json' file
function deleteNote(notesArray, id) {
    let deleteID = parseInt(id);
    notesArray.splice(deleteID, 1);

    // Update the 'id' property of the remaining notes after the deletion
    for (let i = deleteID; i < notesArray.length; i++) {
        notesArray[i].id = i.toString();
    }
    // Write the updated notesArray to the 'db.json' file after deletion
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, 
        null, 2));
}
// Exporting the functions to be used in other files
module.exports = {
    createNewNote,
    deleteNote
};