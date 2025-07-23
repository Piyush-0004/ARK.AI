import './App.css';
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import { MyContext } from './MyContext.jsx';
import { useState } from 'react';
import {v1 as uuidv1} from "uuid";

function App() {
  const [prompt, setPrompt] = useState("");   // message 
  const [reply,setReply] = useState(null);
  const [currThreadId, setCurrThreadId] = useState(uuidv1());
  const [prevChats, setPrevChats] = useState([]);   //stores all chats of current threads
  const [newChat, setNewChat] = useState(true);     // create new chat when we start our app
  const [allThreads, setAllThreads] = useState([]);  //store all thread 

  const providerValues = {                // passing values
    prompt,setPrompt,
    reply,setReply,
    currThreadId, setCurrThreadId,
    newChat, setNewChat,
    prevChats, setPrevChats,
    allThreads, setAllThreads
  };     
  
  return (
    <div className='app'>
      <MyContext.Provider value={providerValues}>
          <Sidebar></Sidebar>
          <ChatWindow></ChatWindow>
        </MyContext.Provider>
    </div>
  )
}

export default App
