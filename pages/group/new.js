import React from "react"
import Layout from "../../components/Layout"
import Meta from "../../components/SEO/Meta"
import Facebook from "../../components/SEO/Facebook"
import Twitter from "../../components/SEO/Twitter"
import NewGroup from "../../components/NewGroup"

const newGroupPage = () => {
    return (
        <Layout>
            <Meta title="new group"/>
            <Facebook/>
            <Twitter/>

            <h1>New Group</h1>
            <NewGroup/>
        </Layout>
    )
}

export default newGroupPage
