import NotesView from "./NotesView";
import NotesAPI from "./NoteAPI";

export default class App {
    notes: any[];
    activeNotes: any;
    view: any;
    
    constructor(root: HTMLElement | null) {
        this.notes = [];
        this.activeNotes = null;
        this.view = new NotesView(root,this._handlers());

        this._refreshNotes();
    }

    _refreshNotes() {
        const notes = NotesAPI.getAllNotes();

        this._setNotes(notes);

        if(notes.length > 0) {
            this._setActiveNote(notes[0]);
        }
    }

    _setNotes(notes: any){
        this.notes = notes;
        this.view.updateNotesList(notes);
        this.view.updateNotePreviewVisibility(notes.length > 0);
    }

    _setActiveNote(note: any) {
        this.activeNotes = note;
        this.view.updateActiveNote(note);
    }

    _handlers() {
        return{
            onNoteSelect: (noteId: any) => {
                const selectedNote = this.notes.find(note => note.id == noteId);
                this._setActiveNote(selectedNote);
            },
            onNoteAdd: () => {
                const newNote = {
                    title: "Nowa notatka",
                    body: "Zapisz notatkę..."
                };

                NotesAPI.saveNotes(newNote);
                this._refreshNotes();
            },
            onNoteEdit: (title: string, body: string) => {
                NotesAPI.saveNotes({
                    id: this.activeNotes?.id,
                    title,
                    body
                });

                this._refreshNotes();
            },
            onNoteDelete: (noteId: any) => {
                NotesAPI.deleteNotes(noteId);
                this._refreshNotes();
            }
        }
    }
}