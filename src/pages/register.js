import React from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import Register from "../components/Authentication/Register"

const RegisterPage = () => {
    return (
        <Layout>
            <Meta title="register"/>
            <Facebook/>
            <Twitter/>

            <h1>Register</h1>
            <Register/>
        </Layout>
    )
}

export default RegisterPage
