import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import {Container} from "../styles"

const StyledLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    font-family: "Roboto", sans-serif;
`

const Layout = ({children}) => (
    <StyledLayout>
        <Header/>
        <Container>{children}</Container>
        <Footer/>
    </StyledLayout>
)

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
