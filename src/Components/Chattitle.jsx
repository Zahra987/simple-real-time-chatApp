import React, { useState } from 'react'
import s from './../Asset/Images/s.jpg'

export default function Chattitle() {

  const [contactName, setContactName]=useState("Sara");
  const [contactStatus, setContactStatus]=useState("online");


  return (
  <div className="chat-title">
    <h1>{contactName}</h1>
    <h2>{contactStatus}</h2>
    <figure className="avatar">
      <img src={s}  alt='s' />
    </figure>
  </div>
  )
}
