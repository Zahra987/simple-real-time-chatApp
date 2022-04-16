import React,{useState} from 'react'

export default function Messagebox({handleClick}) {
const [inputValue,setInputValue]=useState("");


  return (
    <div className="message-box">
        <textarea  value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} type="text" className="message-input" placeholder="Type message..."></textarea>
        <button onClick={(e)=>
                  {if(inputValue ==""){console.log(inputValue);
                 } else {
                  handleClick(inputValue);
                  setInputValue(""); 
                   }
               }
           } 
          type="submit" className="message-submit">Send
        </button>
    </div>
  )
}
