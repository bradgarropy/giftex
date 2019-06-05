import React from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import Login from "../components/Authentication/Login"

const LoginPage = () => {
    return (
        <Layout>
            <Meta title="login"/>
            <Facebook/>
            <Twitter/>

            <h1>Login</h1>
            <Login/>
        </Layout>
    )
}

export default LoginPage
