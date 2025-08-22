import React, { useState } from 'react';

function Note({ title, content }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
function CreateArea({ onAdd }) {
  const [note, setNote] = useState({ title: '', content: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  function submitNote(event) {
    event.preventDefault();
    if (note.title.trim() || note.content.trim()) {
      onAdd(note);
      setNote({ title: '', content: '' });
    }
  }

  return (
    <form onSubmit={submitNote} className="create-area-form">
      
      <input
        id="title"
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />
      <textarea
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows="3"
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default CreateArea;
export { Note };
