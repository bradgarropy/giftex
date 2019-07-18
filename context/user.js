import React from "react"
import {useState, createContext} from "react"
import PropTypes from "prop-types"
import Router from "next/router"
import cookies from "js-cookie"
import {auth} from "../utils/firebase"

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState()

    const register = async(email, password) => {
        const {user} = await auth.createUserWithEmailAndPassword(
            email,
            password,
        )

        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
        Router.push("/groups")
    }

    const login = async(email, password) => {
        const {user} = await auth.signInWithEmailAndPassword(email, password)
        const token = await user.getIdToken()

        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
        cookies.set("token", token)

        Router.push("/groups")
    }

    const logout = async() => {
        await auth.signOut()

        cookies.remove("token")
        localStorage.removeItem("user")
        setUser()

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
