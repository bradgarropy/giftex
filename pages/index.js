import React from "react"
import Layout from "../components/Layout"
import {Meta, Facebook, Twitter} from "../components/SEO"

const IndexPage = () => {
    return (
        <Layout>
            <Meta title="giftex"/>
            <Facebook/>
            <Twitter/>

            <h1>Home</h1>
        </Layout>
    )
}

export default IndexPage
