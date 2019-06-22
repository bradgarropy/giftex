import React from "react"
import {useContext} from "react"
import {UserContext} from "../../context"
import Link from "next/link"
import Logout from "./Logout"

const Authentication = () => {
    const userContext = useContext(UserContext)
    const {user} = userContext

    return user ? (
        <>
            <Link href="/group/new">
                <a>NEW GROUP</a>
            </Link>

            <Link href="/groups">
                <a>GROUPS</a>
            </Link>

            <Logout/>
        </>
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
