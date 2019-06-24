import React from "react"
import Layout from "../components/Layout"
import {Meta, Facebook, Twitter} from "../components/SEO"
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
