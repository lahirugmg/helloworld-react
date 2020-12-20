import React, { useState } from 'react';
import Tweet from './Tweet';

function App(){

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  
  const increment = ()  => {
    setCount(count + 1);
    setRed(true)
  };

  return (
    <div>
      <h1>Hello React</h1>
      
      <button onClick={increment}>Imcrement</button>
      <h1 >{count}</h1>
      <h2 className="{isRed ? 'red' : ''}"> Change color </h2>
    </div>
  );
}



export default App; 