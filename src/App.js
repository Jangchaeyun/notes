import { useState, useEffect } from "react";
import { nanoid } from "nanoid"
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

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

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

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

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) => 
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={AddNote}
          handleDeleteNote={deleteNote}  
        />
      </div>
    </div>
  );
}

export default App;