// Importing the necessary modules
const path = require('path');
const router = require('express').Router();
// Route to handle the GET request for accessing the 'notes' page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});
// Route to handle all other GET requests (catch-all route)
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
// Exporting the router to be used in other files
module.exports = router;