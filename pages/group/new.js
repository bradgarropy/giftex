import React from "react"
import Layout from "../../components/Layout"
import {Meta, Facebook, Twitter} from "../components/SEO"
import NewGroup from "../../components/NewGroup"

const NewGroupPage = () => {
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

export default NewGroupPage
