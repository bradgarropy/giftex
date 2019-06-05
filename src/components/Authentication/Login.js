import React from "react"
import {useState, useContext} from "react"
import {auth} from "../../utils/firebase"
import {UserContext} from "../../context/user"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const userContext = useContext(UserContext)

    const onSubmit = async event => {
        event.preventDefault()

        const {user} = await auth.signInWithEmailAndPassword(email, password)
        userContext.setUser(user)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Email</label>
            <input
                type="email"
                autoComplete="email"
                onChange={event => setEmail(event.target.value)}
            />

            <label>Password</label>
            <input
                type="password"
                autoComplete="current-password"
                onChange={event => setPassword(event.target.value)}
            />

            <button>Log In</button>
        </form>
    )
}

export default Login
