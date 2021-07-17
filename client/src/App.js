import React, { useState } from 'react';
import axios from 'axios';

import LoginForm from './components/LoginForm';

function App() {

  const [user, setUser] = useState({
    name: "",
    email: ""
  });
  const [error, setError] = useState("");

  const login = details => {
    console.log(details);


    axios.post('http://localhost:8080/users/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: details
    }).then(res => {
      console.log(`statusCode: ${res.statusCode}`)
      console.log(res)
    }).catch(error => {
      console.error(error)
    })

  }

  const logout = () => {
    console.log("logout");
  }

  return (
    <div className = "App" >
        {(user.email != "") ? (
          <div className="welcome">
            <h2>Welcome <span>{user.name}</span></h2>
            <button>Logout</button>
          </div>
        ) : (
          <LoginForm login={login} error={error}/>
        )}
    </div>
  );
}

export default App;