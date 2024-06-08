import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(newNote) {
    setNoteList((preList) => {
      return [...preList, newNote];
    });
  }

  function deleteNote(idNote) {
    setNoteList((preList) => {
      return preList.filter((noteItems, index) => {
        return index !== idNote;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteList.map((noteItems, index) => (
        <Note
          key={index}
          id={index}
          title={noteItems.title}
          content={noteItems.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
