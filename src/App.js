import React, { useState } from 'react';
import Header from './Header';
import { Note } from './CreateArea';
import CreateArea from './CreateArea';
import Footer from './Footer';

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      <div style={{ flex: 1 }}>
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => (
          <Note key={index} title={noteItem.title} content={noteItem.content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
