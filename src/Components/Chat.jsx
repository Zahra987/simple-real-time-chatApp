import React, { useState,useEffect} from 'react'
import Messages from './Messages'
import Chattitle from './Chattitle'
import Messagebox from './Messagebox';

export default function Chat() {

const [usermsg,setUsermsg]=useState("");
const [msges,setmsges]=useState([]);

function handleClick(inputValue){
  setUsermsg(inputValue);
}

function createBotmsg(i){
  
  setInterval(()=>{
    const botms= [
      'Hi there, I\'m Fabio and you?',
      'Nice to meet you',
      'How are you?',
      'Not too bad, thanks',
      'What do you do?',
      'That\'s awesome',
      'Codepen is a nice place to stay',
      'I think you\'re a nice person',
      'Why do you think that?',
      'Can you explain?',
      'Anyway I\'ve gotta go now',
      'It was a pleasure chat with you',
      'Time to make a new codepen',
      'Bye',
      ':)'
    ];
    const j=new Date();
    const k=(j.getSeconds())%15;
    setmsges((msges)=>{return ([...msges,{type:"recive" , message:botms[k] ,time:new Date().toLocaleTimeString()}])});
   },16000);
}
   
useEffect(()=>{
 createBotmsg();
 if (usermsg !=="") {
  setmsges((msges)=>{return ([...msges,{type:"send" , message:usermsg ,time:new Date().toLocaleTimeString}])})
 }
},[usermsg]);

  return (
    
  <>
    <div className="chat">
      <Chattitle/>
      <Messages msges={msges} />
      <Messagebox handleClick={handleClick} />
    </div>

    <div className="bg"></div> 

  </>
  )
} 
