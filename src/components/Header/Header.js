import React from "react"
import {useContext} from "react"
import styled from "styled-components"
import {UserContext} from "../../context/user"
import Welcome from "../Welcome"
import Navigation from "./Navigation"

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.colors.darkPurple};
    color: ${({theme}) => theme.colors.white};
    padding: 1.5rem;

    p {
        margin: 0;
    }
`

const Header = () => {
    const userContext = useContext(UserContext)
    const {user} = userContext

    return (
        <StyledHeader>
            <p>giftex</p>
            {user && <Welcome/>}
            <Navigation/>
        </StyledHeader>
    )
}

export default Header
