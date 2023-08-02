// Importing the necessary modules
const router = require('express').Router();
const { notesRoute } = require('./notes');
// Using the 'notesRoute' for handling the routes related to notes
router.use(notesRoute);
// Exporting the router to be used in other files
module.exports = router;
