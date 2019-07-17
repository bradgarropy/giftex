import React from "react"
import Layout from "../components/Layout"
import {Meta, Facebook, Twitter} from "../components/SEO"
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
