import React,{useContext} from 'react';
import NotesContext from "../context/notes-context";


const Note = ({note}) => {
const {dispatch } = useContext(NotesContext);
   /* useEffect(() => {
      console.log('Setting up effect')
      return () => {
        console.log('cleaning of effect')
      };
    }, []);*/
  
    return (
      <div >
      <h3>{note.title}</h3>
      <h3>{note.body}</h3>
     <button onClick = { () => dispatch({type:'REMOVE_NOTE', title:note.title})}>x</button>
  </div>
    )
  
  }
  
  export {Note as default}