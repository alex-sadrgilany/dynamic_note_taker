const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArr) {
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../data/notes.json"),
        JSON.stringify({ notes: notesArr }, null, 2)
    );

    return note;
};

function findNoteById(id, notesArr) {
    const result = notesArr.filter(note => note.id === id)[0];
    return result;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== "string") {
        return false;
    }
    if (!note.text || typeof note.text !== "string") {
        return false;
    }
    return true;
};

module.exports = {
    createNewNote,
    findNoteById,
    validateNote
};