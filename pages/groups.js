import React from "react"
import {useState, useEffect} from "react"
import Link from "next/link"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import {firestore} from "../utils/firebase"

const GroupsPage = () => {
    const [groups, setGroups] = useState([])

    const getGroups = async() => {
        const query = await firestore.collection("groups").get()
        const groups = query.docs.map(group => {
            return {
                id: group.id,
                ...group.data(),
            }
        })

        setGroups(groups)
    }

    useEffect(() => {
        getGroups()
    }, [])

    return (
        <Layout>
            <Meta title="groups"/>
            <Facebook/>
            <Twitter/>

            <h1>Groups</h1>
            {groups.map(group => (
                <Link key={group.id} href={`/group?id=${group.id}`}>
                    <a>{group.name}</a>
                </Link>
            ))}
        </Layout>
    )
}

export default GroupsPage
