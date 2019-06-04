import React from "react"
import {useState, useEffect} from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import {firestore} from "../utils/firebase"

const Index = () => {
    console.log("everything okay?")
    const [users, setUsers] = useState([])

    const getUsers = async() => {
        const query = await firestore.collection("users").get()
        const users = query.docs.map(user => {
            return {
                id: user.id,
                ...user.data(),
            }
        })

        setUsers(users)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Layout>
            <Meta title="gatsby starter"/>
            <Facebook/>
            <Twitter/>

            <h1>home</h1>
            {users.map(user => (
                <p key={user.id}>
                    {user.firstName} {user.lastName}
                </p>
            ))}
        </Layout>
    )
}

export default Index
