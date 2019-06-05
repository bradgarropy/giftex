import React from "react"
import {useContext} from "react"
import {auth} from "../../utils/firebase"
import {UserContext} from "../../context/user"

const Logout = () => {
    const userContext = useContext(UserContext)

    const onClick = async event => {
        event.preventDefault()

        await auth.signOut()

        userContext.setUser({})
        userContext.setLoggedIn(false)
    }

    return <button onClick={onClick}>Log Out</button>
}

export default Logout
