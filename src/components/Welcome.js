import React from "react"
import {useContext} from "react"
import {UserContext} from "../context/user"

const Welcome = () => {
    const userContext = useContext(UserContext)
    const {user} = userContext

    return <h3>Welcome, {user.email}</h3>
}

export default Welcome
