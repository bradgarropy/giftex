import React from "react"
import {useContext} from "react"
import {auth} from "../../utils/firebase"
import {UserContext} from "../../context/user"

const Logout = () => {
    const userContext = useContext(UserContext)

    const onClick = async event => {
        event.preventDefault()

        await auth.signOut()
        userContext.setUser()
    }

    return <button onClick={onClick}>LOGOUT</button>
}

export default Logout
