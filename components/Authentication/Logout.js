import React from "react"
import {useContext} from "react"
import Router from "next/router"
import {auth} from "../../utils/firebase"
import {UserContext} from "../../context"
import {Button} from "../../styles"

const Logout = () => {
    const userContext = useContext(UserContext)

    const onClick = async event => {
        event.preventDefault()

        await auth.signOut()
        userContext.setUser()
        Router.push("/")
    }

    return <Button onClick={onClick}>LOGOUT</Button>
}

export default Logout
