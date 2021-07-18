import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';

function LoginForm({ login, error }) {

    const [details, setDetails] = useState({ name: "", "password": "" });

    const submitHandler = e => {
        e.preventDefault();

        login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/* ERROR */}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input current-username="true" type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password:</label>
                    <input current-password="true" type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}/>
                </div>
                <Button variant="dark" type="submit" value="Login">Login</Button>
            </div>
        </form>
    )
}

export default LoginForm

