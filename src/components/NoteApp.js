import React,{ useState , useEffect , useReducer } from 'react';
import notesReducer from "../reducers/notes";
import Note from "./Note";
import NoteList from "./NoteList";
import AddNoteForm from './AddNoteForm';
import NotesContext from "../context/notes-context";

const NoteApp = () => {
    //const json = JSON.parse(localStorage.getItem('notes'));
    //state and dispatch function.
    const [notes,dispatch] =useReducer(notesReducer, [])
    //const [notes, setNotes] = useState([]);
    
    useEffect(() => {
      const notesData = JSON.parse(localStorage.getItem('notes'))
      if(notesData) {
        dispatch({type:'POPULATE_NOTES',notes:notesData})
       // setNotes(notesData)
      } 
      return () => {
  
      }
    }, []);
    
    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
    },[notes]); //only run the useeffect on change of notes state,otherwise it ll run everytime.

    
    return (
          <NotesContext.Provider value={{notes,dispatch}}>
          <h1> Notes </h1>
           <NoteList />
          <p> Add Note </p>  
          <AddNoteForm />
          </NotesContext.Provider>
        
    )
  }

  export {NoteApp as default}