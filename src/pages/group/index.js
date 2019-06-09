import React from "react"
import Layout from "../../components/Layout"
import Meta from "../../components/SEO/Meta"
import Facebook from "../../components/SEO/Facebook"
import Twitter from "../../components/SEO/Twitter"

const groupPage = props => {
    console.log(props)

    return (
        <Layout>
            <Meta title="group"/>
            <Facebook/>
            <Twitter/>

            <h1>Group</h1>
        </Layout>
    )
}

export default groupPage
