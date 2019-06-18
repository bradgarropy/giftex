import React from "react"
import {useContext} from "react"
import styled from "styled-components"
import {UserContext} from "../../context"
import Welcome from "../Welcome"
import Navigation from "./Navigation"

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.colors.red};
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
            <h4>
                <span role="img" aria-label="present">
                    🎁
                </span>{" "}
                giftex
            </h4>
            {user && <Welcome/>}
            <Navigation/>
        </StyledHeader>
    )
}

export default Header
