import React from "react"
import {useState, createContext} from "react"
import PropTypes from "prop-types"
import Router from "next/router"
import {auth} from "../utils/firebase"

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState()

    auth.onAuthStateChanged(user => setUser(user))

    const register = async(email, password) => {
        await auth.createUserWithEmailAndPassword(
            email,
            password,
        )

        Router.push("/groups")
    }

    const login = async(email, password) => {
        await auth.signInWithEmailAndPassword(email, password)
        Router.push("/groups")
    }

    const logout = async() => {
        await auth.signOut()
        Router.push("/")
    }

    const context = {
        user,
        register,
        login,
        logout,
    }

    return (
        <UserContext.Provider value={context}>{children}</UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node,
}

export {UserContext, UserProvider}
