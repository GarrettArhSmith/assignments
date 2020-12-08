import React, { useState, useContext } from 'react';
import AuthForm from './AuthForm';
import { UserContext } from '../context/UserProvider'

function Auth(props) {
    const { signup, login } = useContext(UserContext)

    const initInputs = {
        username: "",
        password: ""
    }
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(true)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSignup(e) {
        e.preventDefault()
        signup(inputs)
    }
    function handleLogin(e) {
        e.preventDefault()
        login(inputs)
    }

    return (
        <div>
            {toggle ?
            <AuthForm
                handleChange={handleChange}
                handleSubmit={handleSignup}
                inputs={inputs}
                btnText="Sign Up"
            /> :
            <AuthForm
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="Login"
            />}
            <p 
                className="authToggle"
                onClick={() => {
                    setToggle(prev => !prev)
                }}
            >
                {toggle ? "Already a member?" : "Not a member?"}
            </p>
        </div>
    );
}

export default Auth;