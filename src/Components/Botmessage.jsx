import React from 'react'

export default function Botmessage({message,time}) {
  
  return (
    <div id="mCSB-1-container" className="mCSB-container mCS-y-hidden mCS-no-scrollbar-y sclass" dir="ltr" >
    
    <div className="message new" >
    <figure className="avator">
    
      </figure>
      
     {message}
      <div className="timestamp" >
        {time}
      </div>
    </div>

    
  </div>
  )
}
