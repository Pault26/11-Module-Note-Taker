// Importing the necessary modules and data
const router = require("express").Router();
const { notes } = require('../../db/db.json');
const { createNewNote, deleteNote } = require('../../helpers/index');
// Route to handle the GET request for retrieving all notes
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
});
// Route to handle the POST request for creating a new note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
});
// Route to handle the DELETE request for deleting a note by its ID
router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
});
// Exporting the router to be used in other files
module.exports = router;
