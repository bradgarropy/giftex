import React from "react"
import {Link} from "gatsby"
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
            <Link to="/">HOME</Link>
            <Link to="/register">REGISTER</Link>
            <Link to="/login">LOGIN</Link>
            <Logout/>
        </StyledNavigation>
    )
}

export default Navigation
