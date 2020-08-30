import React,{useState,useEffect} from 'react';
import './App.css';
import Messages from './Components/Messages/Messages';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setinput] = useState('');
  const [mesages, setmesages] = useState([]);
  const [username, setusername] = useState('');

  useEffect(() => {
    console.log("db");
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapShot=>{
      setmesages(snapShot.docs.map(doc=>({id:doc.id,data:doc.data()}) ))
    })
  }, [])

  useEffect(() => {
    setusername(prompt("Pleae Enter Your Name"));
  }, [])

  const sendMesages=(event)=>{
    event.preventDefault();

    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    // setmesages([...mesages,{username:username,message:input}]);
    setinput('');
  }
  return (
    <div className="App">
      <h1>Hello World Welcome:{username}</h1>
      <form className="App__form">
      <FormControl className="App__formControl">
        
        <Input className="App__input" placeholder="Enter a message..." value={input} onChange={event=>setinput(event.target.value)}/>


        <IconButton className="App__iconButtom" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMesages}>
          <SendIcon/>
        </IconButton>
        {/* <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMesages}>Send message</Button> */}
      </FormControl>
      </form> 
      <FlipMove>
        
      {
       mesages.map((mg)=>{
         console.log("mesage",mg.data);
       return<Messages key={mg.id} username={username} message={mg.data}/>
       })
      }
      </FlipMove>
    </div>
  );
}

export default App;
