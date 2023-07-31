const router = require('express').Router();
const { notesRoute } = require('./notes');

router.use(notesRoute);

module.exports = router;