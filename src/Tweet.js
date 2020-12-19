import React from 'react';

function Tweet ({name, message}) {

  return (
    <div> 
    <h1>Name is {name} and my message is {message}</h1>
    </div>
  );
}

export default Tweet;