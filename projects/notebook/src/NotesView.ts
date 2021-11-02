export default class NotesView {
    root: HTMLElement | null;
    onNoteSelect: any;
    onNoteAdd: any;
    onNoteEdit: any;
    onNoteDelete: any;
    constructor(root: HTMLElement | null, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } : any = {}) {
        
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        this.root!.innerHTML = `
        
            <div class="notes_sidebar">
                <button class="add_notes" type="button">Dodaj</button>
                <div class="notes_list"></div>
            </div>
            <div class="notes_preview">
                <input class="notes_title" type="text" placeholder="Nowa notatka...">
                <textarea class="notes_body">Wpisz notatkę...</textarea>
            </div>

        `;

        const btnAddNote = this.root?.querySelector(".add_notes");
        const inpTitle: HTMLInputElement | null | any = this.root?.querySelector(".notes_title");
        const inpBody: HTMLTextAreaElement | null | any = this.root?.querySelector(".notes_body");

        btnAddNote?.addEventListener("click", () => {
            this.onNoteAdd();
        });

        [inpTitle, inpBody].forEach(inputField => {
            inputField?.addEventListener("blur", () =>{
                const updateTitle = inpTitle.value.trim();
                const updateBody = inpBody.value.trim();

                this.onNoteEdit(updateTitle, updateBody);
            });
        });

        this.updateNotePreviewVisibility(false);

    }

    _createListItemHTML(id: number, title:string, body:string, updated: Date) {
        const MAX_BODY_LENGTH = 60;

        return `

            <div class="notes_list_item" data-note-id="${id}">
                <div class="notes_small_title">${title}</div>
                <div class="notes_small_body">
                ${body.substring(0, MAX_BODY_LENGTH)}
                ${body.length > MAX_BODY_LENGTH ? "..." : ""}
                </div>
                <div class="notes_small_updated">${updated.toLocaleString(undefined, 
                    { dateStyle: "full", timeStyle: "short"})}</div>
            </div>

        `;
    }

    updateNotesList(notes:[any]) {
        let notesListContainer : HTMLElement | any = this.root!.querySelector(".notes_list");

        //Empty list
        notesListContainer!.innerHTML = '';

        for(const note of notes) {
            const html = this._createListItemHTML(note.id, note.title,note.body,new Date(note.updated));

            notesListContainer?.insertAdjacentHTML("beforeend",html);
        }

        // Add select/delete events for each list item
        // dziwny bug i dziwny quick fix ale działa 
        notesListContainer?.querySelectorAll(".notes_list_item").forEach((noteListItem: { addEventListener: (arg0: string, arg1: () => void) => void; dataset: { noteId: any; }; }) => {
            noteListItem.addEventListener("click", () => {
                this.onNoteSelect(noteListItem.dataset.noteId);
            });

            noteListItem.addEventListener("dblclick", () => {
                const doDelete = confirm("Jesteś pewny, że chcesz usunąć tą notatkę?");
                if (doDelete) {
                    this.onNoteDelete(noteListItem.dataset.noteId);
                }
            })
        });

    }

    updateActiveNote(note: any) {
        let title: HTMLInputElement | any = this.root!.querySelector(".notes_title");
        let body: HTMLInputElement | any = this.root!.querySelector(".notes_body");
        title.value = note.title;
        body.value = note.body;

        this.root?.querySelectorAll(".notes_list_item").forEach(noteListItem => {
            noteListItem.classList.remove("notes_list_item_selected");
        });

        this.root?.querySelector(`.notes_list_item[data-note-id="${note.id}"]`)!.classList.add("notes_list_item_selected");
    }

    updateNotePreviewVisibility(visible: boolean) {
        let preview: HTMLElement | null | any = this.root?.querySelector(".notes_preview");
        preview.style.visibility = visible ? "visible" : "hidden";
    }
}   