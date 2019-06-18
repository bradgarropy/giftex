import React from "react"
import Link from "next/link"
import styled from "styled-components"
import Authentication from "../Authentication/Authentication"

const StyledNavigation = styled.nav`
    display: grid;
    align-items: center;
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

            <Authentication/>
        </StyledNavigation>
    )
}

export default Navigation
