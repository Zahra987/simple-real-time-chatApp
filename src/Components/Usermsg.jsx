import React from 'react'

export default function Usermsg({time,message}) {
  return (
  
    <div className="message message-personal new" >
       
      {message}
        <div className="timestamp" >
          {time}
        </div>
      </div>
      
   
  )
}
