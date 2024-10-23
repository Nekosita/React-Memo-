import React from 'react';
import './Joke.css';



function Joke(props) {

  return (
    <div className="Joke">
    <h3 style={{display :!props.question && "none "}}>Queation: {props.question}</h3>
    <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</h3>
   </div>
  )

}


export default Joke