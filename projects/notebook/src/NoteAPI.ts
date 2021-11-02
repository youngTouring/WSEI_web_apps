export default class NotesAPI {
    static getAllNotes() { 
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");
        return notes.sort((a: any, b: any) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNotes(notesToSave : any) {
        const notes = NotesAPI.getAllNotes();
        const existing = notes.find((note: { id: any; }) => note.id == notesToSave.id);
        
        // Edit/Updatea
        if (existing) {
            existing.title = notesToSave.title;
            existing.body = notesToSave.body;
            existing.updated = new Date().toISOString();

        } else {

            notesToSave.id = Math.floor(Math.random() * 1000000);
            notesToSave.updated = new Date().toISOString();
            notes.push(notesToSave);
        }
        
        localStorage.setItem('notesapp-notes', JSON.stringify(notes));
    }

    static deleteNotes(id: number) {
        const notes = NotesAPI.getAllNotes();
        const newNotes = notes.filter((note: { id: number; }) => note.id != id);
        localStorage.setItem('notesapp-notes', JSON.stringify(newNotes));

    }
}