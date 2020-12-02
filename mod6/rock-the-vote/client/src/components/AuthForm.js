import React from 'react';

function AuthForm(props) {
    const { inputs, handleChange, handleSubmit, btnText } = props

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>{btnText}</h1>
            <label htmlFor="username">Username</label>
            <input 
                type="text" 
                name="username"
                value={inputs.username}
                onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                name="password"
                value={inputs.password}
                onChange={handleChange}
            />
            <button type="submit">{btnText}</button>
        </form>
    );
}

export default AuthForm;