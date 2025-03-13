document.addEventListener("DOMContentLoaded", function () {
  const notesGrid = document.getElementById("notesGrid");
  const addNoteButton = document.getElementById("addNoteBtn");
  const floatingForm = document.getElementById("floatingForm");
  const cancelButton = document.getElementById("cancelButton");
  const noteForm = document.getElementById("noteForm");
  const noteTitleInput = document.getElementById("noteTitle");
  const noteContentInput = document.getElementById("noteContent");
  const titleValidation = document.getElementById("titleValidation");
  const contentValidation = document.getElementById("contentValidation");

  let editingNoteId = null;

  // Data Api
  const API_URL = "https://notes-api.dicoding.dev/v2";

  // GET data from API
  async function fetchNotes() {
    try {
      const response = await fetch(`${API_URL}/notes`, {
        method: "GET",
      });
      const result = await response.json();
      const notesData = Array.isArray(result) ? result : result.data || [];
      
      renderNotes(notesData);
    } catch (error) {
      console.error("Error fetching notes:", error);
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
      notesGrid.appendChild(noteCard);
    });
  }

  // Put notes to API
  async function saveNote(event) {
    event.preventDefault();

    const title = noteTitleInput.value.trim();
    const body = noteContentInput.value.trim();

    if (!title || !body) {
      console.log("Validation failed!");
      return;
    }

    const noteData = { title, body };

    try {
      if (editingNoteId) {
        // Update existing note
        await fetch(`${API_URL}/notes/${editingNoteId}`, {
          method: "PUT",
          body: JSON.stringify(noteData),
        });
      } else {
        // Add new note
        await fetch(`${API_URL}/notes`, {
          method: "POST",
          body: JSON.stringify(noteData),
        })
      }

      fetchNotes();
      closeNoteForm();
    } catch (error) {
      console.error("Error saving note:", error);
    }
  }

  // DELETE note from API
  async function deleteNote(noteId) {
    try {
      await fetch(`${API_URL}/notes/{note_id}`, { method: "DELETE" });
      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  }

  // Show add note form
  function showAddNoteForm() {
    noteForm.reset();
    editingNoteId = null;
    floatingForm.style.display = "flex";
    titleValidation.textContent = "";
    contentValidation.textContent = "";
    noteTitleInput.focus();
  }

  // Show edit note form
  function showEditNoteForm(note) {
    noteTitleInput.value = note.title;
    noteContentInput.value = note.body;
    editingNoteId = note.id;
    floatingForm.style.display = "flex";
    titleValidation.textContent = "";
    contentValidation.textContent = "";
    noteTitleInput.focus();
  }

  // Close note form
  function closeNoteForm() {
    floatingForm.style.display = "none";
  }

  // Event listeners
  addNoteButton.addEventListener("click", showAddNoteForm);
  cancelButton.addEventListener("click", closeNoteForm);
  noteForm.addEventListener("submit", saveNote);

  // Close form when clicking outside of it
  floatingForm.addEventListener("click", (event) => {
    if (event.target === floatingForm) {
      closeNoteForm();
    }
  });

  // Initial render
  fetchNotes();
});
