import React from "react"
import {useState, useEffect} from "react"
import {useRouter} from "next/router"
import Layout from "../../components/Layout"
import {Meta, Facebook, Twitter} from "../../components/SEO"
import {firestore} from "../../utils/firebase"

const GroupPage = () => {
    const router = useRouter()
    const {id} = router.query
    const [group, setGroup] = useState()

    useEffect(() => {
        const getUsers = async() => {
            const query = await firestore.doc(`/groups/${id}`).get()
            const group = await query.data()
            setGroup(group)
        }

        getUsers()
    }, [id])

    return (
        <Layout>
            <Meta title="group"/>
            <Facebook/>
            <Twitter/>

            <h1>Group</h1>
            {group && (
                <>
                    <h3>Name</h3>
                    <p>{group.name}</p>

                    <h3>Members</h3>
                    {group.members.map((member, index) => (
                        <p key={index}>{member}</p>
                    ))}

                    <h3>Date</h3>
                    <p>{group.date}</p>

                    <h3>Limit</h3>
                    <p>{group.limit}</p>
                </>
            )}
        </Layout>
    )
}

export default GroupPage