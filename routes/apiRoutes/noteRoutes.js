const { createNewNote, findNoteById, validateNote, deleteNote } = require("../../lib/notes");
const { notes } = require("../../data/notes.json");
const uniqid = require("uniqid");
const router = require("express").Router();

router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
});

router.get("/notes/:id", (req, res) => {
    const result = findNoteById(req.params.id, notes);
    if (result) {
        res.json(result);
    }
    else {
        res.sendStatus(404);
    }
});

router.post("/notes", (req, res) => {
    req.body.id = uniqid();

    if(!validateNote(req.body)) {
        res.status(400).send("The note cannot be left blank!");
    }
    else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete("/notes/:id", (req, res) => {
    deleteNote(req.params.id, notes);
    res.end();
});

module.exports = router;