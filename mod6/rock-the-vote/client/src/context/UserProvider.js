import React, { useState } from 'react';
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props) {
    const initUserState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: []
    }
    const [userState, setUserState] = useState(initUserState)
    const [issues, setIssues] = useState([])

    function signup(credentials) {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prev => ({...prev, token, user}))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getAllTodos()
                setUserState(prev => ({...prev, token, user}))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getAllTodos() {
        userAxios.get("/api/issue")
            .then(res => setIssues(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addIssue(newIssue) {
        userAxios.post("/api/issue", newIssue)
            .then(res => {
                setIssues(prevIssues => [...prevIssues, res.data])
                setUserState(prev => ({...prev, issues: [...prev.issues, res.data]}))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                addIssue,
                issues
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;