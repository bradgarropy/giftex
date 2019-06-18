import React from "react"
import {useContext} from "react"
import {UserContext} from "../context"

const Welcome = () => {
    const userContext = useContext(UserContext)
    const {user} = userContext

    return <p>{user.email}</p>
}

export default Welcome
