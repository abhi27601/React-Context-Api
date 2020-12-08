import React,{useState , useContext} from 'react';
import NotesContext from "../context/notes-context";

 const AddNoteForm = () => {
    const {dispatch} = useContext(NotesContext);
    const [title, setTitle] = useState('');
    const [body, setbody] = useState('');
    
    
    const addNote = (e) => {
        e.preventDefault();
        /*setNotes([
          ...notes,
          {title,body}
        ])*/
        dispatch({
          type:'ADD_NOTE',
          title,
          body
        })
    
        setTitle('')
        setbody('')
      }

return ( 
    <form onSubmit={addNote}>
            <input value={title} onChange ={ (e) => setTitle(e.target.value)} />
            <textarea value={body} onChange = {(e) => setbody(e.target.value)} />
            <button> Add Note</button>
    </form>
    )
 
} 

export default AddNoteForm
