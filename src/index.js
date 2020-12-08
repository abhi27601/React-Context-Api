import React,{useState , useEffect } from 'react';
import ReactDOM from 'react-dom';
import NoteApp from "./components/NoteApp";
import reportWebVitals from './reportWebVitals';


 const App = (props) => {
  //const array = useState(count)
  const [count, setcount] = useState(props.count);
  const [text, setText] = useState('');
  useEffect(() => {
    console.log('useEffect ran');
   document.title = count ;
  });

    /*const [state, setstate] = useState({
      count:props.count,
      text:''
    });*/
  const increment = () => {
    /* setstate({
      count:state.count + 1
    });*/
    setcount(count + 1)
  }
  const decrement = () => {
    setcount(count - 1)
  }
  const reset = () =>{
    setcount(props.count)
  }


   return (
    <div>
      <p> The current {text || 'count'} is {count} </p>
      <button onClick = {increment}> +1 </button>
      <button onClick = {decrement}> -1 </button>
      <button onClick = {reset}> Reset </button>

      <input value={text} onChange={ (e) => setText(e.target.value)} />
    </div>
  )
}
App.defaultProps = {
  count:0
}






ReactDOM.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
