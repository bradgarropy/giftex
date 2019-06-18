import React from "react"
import App, {Container} from "next/app"
import {ThemeProvider} from "styled-components"
import {UserProvider} from "../context/user"
import {GlobalStyles} from "../styles"
import theme from "../styles/theme"

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render() {
        const {Component, pageProps} = this.props

        return (
            <Container>
                <ThemeProvider theme={theme}>
                    <UserProvider>
                        <GlobalStyles/>
                        <Component {...pageProps}/>
                    </UserProvider>
                </ThemeProvider>
            </Container>
        )
    }
}

export default MyApp
