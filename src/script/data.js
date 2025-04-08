document.addEventListener("DOMContentLoaded", function () {
    const notesGrid = document.getElementById("notesGrid");
    const addNoteButton = document.getElementById("addNoteBtn");
    const floatingForm = document.getElementById("floatingForm");
    const noteForm = document.getElementById("noteForm");
    const noteTitleInput = document.getElementById("noteTitle");
    const noteContentInput = document.getElementById("noteContent");
    const deleteButton = document.getElementById("deleteButton");
    const saveButton = document.getElementById("saveButton");
    const cancelButton = document.getElementById("cancelButton");
    const loadingElement = document.getElementById("loading");

    let editingNoteId = null;

    // Data Api
    const API_URL = "https://notes-api.dicoding.dev/v2";

    // GET data from API
    async function fetchNotes() {
        showLoading();
        try {
            const response = await fetch(`${API_URL}/notes`);
            if (!response.ok) throw new Error("Failed to fetch notes");
            await sleep();
            const { data } = await response.json();
            renderNotes(data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        } finally {
            hideLoading();
        }
    }

    // Load notes to UI
    function renderNotes(notesData) {
        notesGrid.innerHTML = "";
        notesData.forEach((note) => {
            const noteCard = document.createElement("note-card");
            noteCard.setAttribute("note-id", note.id);
            noteCard.setAttribute("note-title", note.title);
            noteCard.setAttribute("note-content", note.body);
            noteCard.setAttribute(
                "note-status",
                note.archived ? "Archived" : "Active"
            );

            noteCard.addEventListener("click", () => showEditNoteForm(note));
            notesGrid.appendChild(noteCard);
        });
    }

    // Post notes to API
    async function saveNote(event) {
        event.preventDefault();

        const title = noteTitleInput.value.trim();
        const body = noteContentInput.value.trim();

        if (!title || !body) {
            console.log("Title or body empty!");
            return;
        }

        try {
            const response = await fetch(`${API_URL}/notes`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, body }),
            });

            if (!response.ok)
                throw new Error(result.message || "Failed to add note");

            hideLoading(loading);
            await fetchNotes();
            closeNoteForm();
        } catch (error) {
            console.error("Error adding note:", error);
        }
    }

    function showLoading() {
        loadingElement.style.display = "block";
        notesGrid.innerHTML = "";
    }

    function hideLoading() {
        loadingElement.style.display = "none";
    }

    function sleep(response = null) {
        return new Promise((resolve) =>
            setTimeout(() => {
                resolve(response);
            }, 3000)
        );
    }

    // DELETE note from API
    async function deleteNote() {
        if (!editingNoteId) return;
        try {
            const response = await fetch(`${API_URL}/notes/${editingNoteId}`, {
                method: "DELETE",
            });
            if (!response.ok) throw new Error("Failed to delete note");

            await fetchNotes();
            closeNoteForm();
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    }

    // Arcived note from API
    async function ToggleArchieveStatus(noteId, archived) {
        try {
            const response = await fetch(`${API_URL}/notes/${noteId}/archive`, {
                method: archived ? "POST" : "DELETE",
            });
            if (!response.ok)
                throw new Error("Failed to update archive status");
            await fetchNotes();
        } catch (error) {
            console.error("Error updating archive status: ", error);
        }
    }

    // Show add note form
    function showAddNoteForm() {
        noteForm.reset();
        editingNoteId = null;
        floatingForm.style.display = "flex";
        saveButton.textContent = "Save";
        saveButton.style.display = "inline-block";
        deleteButton.style.display = "none";
        cancelButton.style.display = "inline-block";
    }

    function showEditNoteForm(note) {
        noteTitleInput.value = note.title;
        noteContentInput.value = note.body;
        editingNoteId = note.id;
        floatingForm.style.display = "flex";
        saveButton.style.display = "none";
        deleteButton.style.display = "inline-block";
        cancelButton.style.display = "inline-block";
    }

    // Close note form
    function closeNoteForm() {
        floatingForm.style.display = "none";
        editingNoteId = null;
    }

    // Event listeners
    addNoteButton.addEventListener("click", showAddNoteForm);
    noteForm.addEventListener("submit", saveNote);
    saveButton.addEventListener("click", saveButton);
    deleteButton.addEventListener("click", deleteNote);
    cancelButton.addEventListener("click", closeNoteForm);
    floatingForm.addEventListener("click", (event) => {
        if (event.target === floatingForm) closeNoteForm();
    });

    // Initial render
    fetchNotes();
});
