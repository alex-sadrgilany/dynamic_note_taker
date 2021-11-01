const fs = require("fs");
const { createNewNote, findNoteById, validateNote, deleteNote } = require("../lib/notes");
const { notes } = require("../data/notes.json");

jest.mock("fs");

test("creates a note object", () => {
    const note = createNewNote({
        title: "New Note",
        text: "This is the text for a new note",
        id: "12345"},
        notes
        );
    
    expect(note.title).toBe("New Note");
    expect(note.text).toBe("This is the text for a new note");
    expect(note.id).toBe("12345");
});

test("filter notes by id", () => {
    const startingNotes = [
        {
            title: "Note 1",
            text: "Note 1 text",
            id: "1"
        },
        {
            title: "Note 2",
            text: "Note 2 text",
            id: "2"
        },
        {
            title: "Note 3",
            text: "Note 3 text",
            id: "3"
        }
    ];

    const result = findNoteById("3", startingNotes);

    expect(result.title).toBe("Note 3");
    expect(result.text).toBe("Note 3 text");
    expect(result.id).toBe("3");
});

test("validate note", () => {
    const validNote = {
        title: "Valid Note",
        text: "Valid note text",
        id: "000"
    };
    const invalidNote = {
        title: 10,
        text: "",
        id: 3
    };

    const check1 = validateNote(validNote);
    const check2 = validateNote(invalidNote);

    expect(check1).toBe(true);
    expect(check2).toBe(false);
});

test("delete a note", () => {
    const startingNotes = [
        {
            title: "Note 1",
            text: "Note 1 text",
            id: "1"
        },
        {
            title: "Note 2",
            text: "Note 2 text",
            id: "2"
        },
        {
            title: "Note 3",
            text: "Note 3 text",
            id: "3"
        }
    ];

    const result = deleteNote("3", startingNotes);
    
    expect(result.length).toEqual(2);
});

