import React from 'react';
import Joke from './Joke';
import jokeDatas from './JokeDatas';

function ViewA() {

    const jokeComponents = jokeDatas.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
  
  return (
    <div>
      <h2>This is View B</h2>
      
      {jokeComponents}
    </div>
  );
}

export default ViewA;