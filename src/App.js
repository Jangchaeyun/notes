import { useState } from "react";
import { nanoid } from "nanoid"
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "나의 첫 번째 노트!!",
      date: "2022.10.22",
    },
    {
      id: nanoid(),
      text: "나의 두 번째 노트!!",
      date: "2022.10.22",
    },
    {
      id: nanoid(),
      text: "나의 세 번째 노트!!",
      date: "2022.10.22",
    },
    {
      id: nanoid(),
      text: "나의 새로운 노트!!",
      date: "2022.10.22",
    },
  ]);

  const AddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return <div className="container">
    <NotesList notes={notes} handleAddNote={AddNote} handleDeleteNote={deleteNote}/>
  </div>
}

export default App;