import React, { useState } from 'react';

import LoginForm from './components/LoginForm';

const axios = require('axios');

function App() {

  const [user, setUser] = useState({
    name: "",
    email: ""
  });
  const [error, setError] = useState("");

  const login = async details => {

    const postLogin = () => {
      axios.post('http://localhost:8080/users/login', details)
      .then((res) => {
        console.log(res)
      })
    }

  }

  const logout = () => {
    console.log("logout");
  }

  return (
    <div className = "App" >
        {(user.email !== "") ? (
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