// App functionality
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

  // Data Array
  const notesData = [
    {
      id: "notes-jT-jjsyz61J8XKiI",
      title: "Welcome to Notes, Dimas!",
      body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
      createdAt: "2022-07-28T10:03:12.594Z",
      archived: false,
    },
    {
      id: "notes-aB-cdefg12345",
      title: "Meeting Agenda",
      body: "Discuss project updates and assign tasks for the upcoming week.",
      createdAt: "2022-08-05T15:30:00.000Z",
      archived: false,
    },
    {
      id: "notes-XyZ-789012345",
      title: "Shopping List",
      body: "Milk, eggs, bread, fruits, and vegetables.",
      createdAt: "2022-08-10T08:45:23.120Z",
      archived: false,
    },
    {
      id: "notes-1a-2b3c4d5e6f",
      title: "Personal Goals",
      body: "Read two books per month, exercise three times a week, learn a new language.",
      createdAt: "2022-08-15T18:12:55.789Z",
      archived: false,
    },
    {
      id: "notes-LMN-456789",
      title: "Recipe: Spaghetti Bolognese",
      body: "Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",
      createdAt: "2022-08-20T12:30:40.200Z",
      archived: false,
    },
    {
      id: "notes-QwErTyUiOp",
      title: "Workout Routine",
      body: "Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",
      createdAt: "2022-08-25T09:15:17.890Z",
      archived: false,
    },
    {
      id: "notes-abcdef-987654",
      title: "Book Recommendations",
      body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
      createdAt: "2022-09-01T14:20:05.321Z",
      archived: false,
    },
    {
      id: "notes-zyxwv-54321",
      title: "Daily Reflections",
      body: "Write down three positive things that happened today and one thing to improve tomorrow.",
      createdAt: "2022-09-07T20:40:30.150Z",
      archived: false,
    },
    {
      id: "notes-poiuyt-987654",
      title: "Travel Bucket List",
      body: "1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",
      createdAt: "2022-09-15T11:55:44.678Z",
      archived: false,
    },
    {
      id: "notes-asdfgh-123456",
      title: "Coding Projects",
      body: "1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",
      createdAt: "2022-09-20T17:10:12.987Z",
      archived: false,
    },
    {
      id: "notes-5678-abcd-efgh",
      title: "Project Deadline",
      body: "Complete project tasks by the deadline on October 1st.",
      createdAt: "2022-09-28T14:00:00.000Z",
      archived: false,
    },
    {
      id: "notes-9876-wxyz-1234",
      title: "Health Checkup",
      body: "Schedule a routine health checkup with the doctor.",
      createdAt: "2022-10-05T09:30:45.600Z",
      archived: false,
    },
    {
      id: "notes-qwerty-8765-4321",
      title: "Financial Goals",
      body: "1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",
      createdAt: "2022-10-12T12:15:30.890Z",
      archived: false,
    },
    {
      id: "notes-98765-54321-12345",
      title: "Holiday Plans",
      body: "Research and plan for the upcoming holiday destination.",
      createdAt: "2022-10-20T16:45:00.000Z",
      archived: false,
    },
    {
      id: "notes-1234-abcd-5678",
      title: "Language Learning",
      body: "Practice Spanish vocabulary for 30 minutes every day.",
      createdAt: "2022-10-28T08:00:20.120Z",
      archived: false,
    },
  ];

  //Load notes
  function renderNotes() {
    notesGrid.innerHTML = "";
    notesData.forEach((note) => {
      const noteCard = document.createElement("note-card");
      noteCard.setAttribute("note-id", note.id);
      noteCard.setAttribute("note-title", note.title);
      noteCard.setAttribute("note-content", note.body);
      noteCard.setAttribute(
        "note-status",
        isValidNote(note) ? "valid" : "invalid"
      );
      notesGrid.appendChild(noteCard);
    });
  }

  //Validation Function
  function isValidNote(note) {
    return note.title.trim().lenght > 0 && note.body.trim().lenght > 0;
  }

  // Validation title
  function validateTitle() {
    const title = noteTitleInput.value.trim();
    if (title.lenght === 0) {
      titleValidation.textContent = "Title is required";
      return false;
    } else if (title.lenght < 4) {
      titleValidation.textContent = "Title must be at least 4 characters";
      return false;
    } else {
      titleValidation.textContent = "";
      return true;
    }
  }

  //Validate content
  function validateContent() {
    const content = noteContentInput.value.trim();
    if (content.lenght === 0) {
      contentValidation.textCOntent = "Content is required";
      return false;
    } else if (content.lenght < 10) {
      contentValidation.textContent = "Content must be at least 10 character";
      return false;
    } else {
      contentValidation.textContent = "";
      return true;
    }
  }

  //Add event listeners to real-time validation
  noteTitleInput.addEventListener("input", validateTitle);
  noteContentInput.addEventListener("input", validateContent);

  //Show form for adding new note
  function showAddNoteForm() {
    noteForm.reset();
    editingNoteId = null;
    floatingForm.style.display = "flex";
    titleValidation.textContent = "";
    contentValidation.textContent = "";
    noteTitleInput.focus();
  }

  // Show form for editing notes
  function showEditNoteForm(note) {
    noteTitleInput.value = note.title;
    noteContentInput.value = note.body;
    editingNoteId = note.id;
    floatingForm.style.display = "flex";
    titleValidation.textContent = "";
    contentValidation.textContent = "";
    noteTitleInput.focus();
  }

  // Save a note
  function saveNote(event) {
    console.log("Saving Note...");
    event.preventDefault();

    const title = noteTitleInput.value.trim();
    const body = noteContentInput.value.trim();

    if (!title || !body) {
      console.log("Title or body is empty!");
      return;
    }
      
    if (editingNoteId) {
        // Update existing note
        console.log("Editing existing note, ID:", editingNoteId); 
      const index = notesData.findIndex((note) => note.id === editingNoteId);
      if (index !== -1) {
          notesData[index] = { ...notesData[index], title, body };
      } 
    } else {
        // Add new note
      const newId =
        notesData.length > 0
          ? Math.max(...notesData.map((note) => note.id)) + 1
          : 1;
    }

    renderNotes();
    closeNoteForm();
  }

  // Close the form
  function closeNoteForm() {
    floatingForm.style.display = "none";
  }

  // Event listeners
  addNoteButton.addEventListener("add-note", showAddNoteForm);

  // Edit note
  document.addEventListener("edit-note", (event) => {
    const { id, title, body } = event.detail;
    notesData.find((note) => note.id == id);
    showEditNoteForm(event.detail);
  });

  cancelButton.addEventListener("click", closeNoteForm);
  noteForm.addEventListener("submit", saveNote);

  // Close form when clicking outside of it
  floatingForm.addEventListener("click", (event) => {
    if (event.target === floatingForm) {
      closeNoteForm();
    }
  });

  // Initial render
  renderNotes();
});
