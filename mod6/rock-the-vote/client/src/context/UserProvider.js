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
        userIssues: []
    }
    const [userState, setUserState] = useState(initUserState)
    const [allIssues, setAllIssues] = useState([])

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
                getAllIssues()
                getUserIssues()
                setUserState(prev => ({...prev, token, user}))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getAllIssues() {
        userAxios.get("/api/issue")
            .then(res => setAllIssues(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getUserIssues() {
        userAxios.get("/api/issue/user")
            .then(res => setUserState(prevUserState => ({
                ...prevUserState,
                userIssues: res.data
            })))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addIssue(newIssue) {
        userAxios.post("/api/issue", newIssue)
            .then(res => {
                setAllIssues(prev => [...prev, res.data])
                setUserState(prev => ({...prev, userIssues: [...prev.userIssues, res.data]}))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addVote(issueId, type) {
        userAxios.put(`/api/vote/${type}/add/${issueId}`)
            .then(res => console.log())
            .catch(err => console.log(err.response.data.errMsg))
    }
    function deleteVote(issueId, type) {
        userAxios.put(`/api/vote/${type}/delete/${issueId}`)
            .then(res => console.log())
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                addIssue,
                getAllIssues,
                getUserIssues,
                allIssues,
                vote: { addVote, deleteVote }
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;