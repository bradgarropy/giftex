import React from "react"
import Link from "next/link"
import styled from "styled-components"
import Logout from "../Authentication/Logout"

const StyledNavigation = styled.nav`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: auto;
    column-gap: 1rem;
    color: ${({theme}) => theme.colors.white};

    a {
        color: ${({theme}) => theme.colors.white};
    }
`

const Navigation = () => {
    return (
        <StyledNavigation>
            <Link href="/">
                <a>HOME</a>
            </Link>

            <Link href="/register">
                <a>REGISTER</a>
            </Link>

            <Link href="/login">
                <a>LOGIN</a>
            </Link>

            <Logout/>
        </StyledNavigation>
    )
}

export default Navigation
