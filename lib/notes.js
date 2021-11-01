const fs = require("fs");
const path = require("path");

// function to create a new note
function createNewNote(body, notesArr) {
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../data/notes.json"),
        JSON.stringify({ notes: notesArr }, null, 2)
    );

    return note;
};

// function to find a note by id
function findNoteById(id, notesArr) {
    const result = notesArr.filter(note => note.id === id)[0];
    return result;
}

// validation function to make sure a note is saved properly
function validateNote(note) {
    if (!note.title || typeof note.title !== "string") {
        return false;
    }
    if (!note.text || typeof note.text !== "string") {
        return false;
    }
    return true;
};

// function to delete a note
function deleteNote(id, notesArr) {
    let deleteId = notesArr.findIndex(note => note.id === id);
    notesArr.splice(deleteId, 1);

    fs.writeFileSync(
        path.join(__dirname, "../data/notes.json"),
        JSON.stringify({ notes: notesArr }, null, 2)
    );

    return notesArr;
};

module.exports = {
    createNewNote,
    findNoteById,
    validateNote,
    deleteNote
};