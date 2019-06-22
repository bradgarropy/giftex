import React from "react"
import {useContext} from "react"
import {UserContext} from "../../context"
import {Button} from "../../styles"

const Logout = () => {
    const {logout} = useContext(UserContext)

    const onClick = async event => {
        event.preventDefault()
        logout()
    }

    return <Button onClick={onClick}>LOGOUT</Button>
}

export default Logout
