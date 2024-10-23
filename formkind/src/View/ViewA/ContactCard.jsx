import React from 'react';
import './ContactCard.css';


function ContactCard(props) {

  return (
    <div className='ContactCard'>
      <img src={props.imgUrl} alt="profile" />
      <h2>{props.name}</h2>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  )

}



export default ContactCard