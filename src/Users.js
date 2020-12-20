import React, { useState } from 'react';
import Tweet from './Tweet';

function Users ({name, message}) {

  const [users, setUsers] = useState(
    [
      { name: "Lahiru", message: "Lahirus message" },
      { name: "Nirmal", message: "Nirmals message" },
      { name: "Kasun", message: "Kasuns message" }
    ]
  );

  return (
    <div> 
      {
        users.map(user => (
          <Tweet name={user.name} message={user.message}/>
        ))
      }
    </div>
  );
}

export default Users;