import React,{useState,useEffect}  from 'react'
import Botmessage from './Botmessage';
import Usermsg from './Usermsg';


export default function Messages({msges}) {
  
  const messageList= msges.map((chat,index)=>{
    const isLeft= 'recive'== chat.type;
    if (isLeft==true) {
      return <Botmessage
       key={index}
       time={chat.time} 
       message={chat.message}/>
    }else{
      return <Usermsg
      key={index}
       time={chat.time} 
       message={chat.message}/>
    }
  })


  
   
 
  return (
<div className="messages">
  <div className="message-content mCustomScrollbar -mCS-no-scrollbar"  >
    <div id="mCSB-1" className="mCustomScrollBox mCS-light mCSB-vertical mCSB-insid fclass " tabIndex="0" >
      {messageList}
    </div>
  </div>
</div>
  )
}
