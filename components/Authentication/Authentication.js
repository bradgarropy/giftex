import React from "react"
import {useContext} from "react"
import {UserContext} from "../../context/user"
import Link from "next/link"
import Logout from "./Logout"

const Authentication = () => {
    const userContext = useContext(UserContext)
    const {user} = userContext

    return user ? (
        <Logout/>
    ) : (
        <>
            <Link href="/register">
                <a>REGISTER</a>
            </Link>

            <Link href="/login">
                <a>LOGIN</a>
            </Link>
        </>
    )
}

export default Authentication
