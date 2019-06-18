import React from "react"
import {useState, useEffect} from "react"
import PropTypes from "prop-types"
import {withRouter} from "next/router"
import Layout from "../../components/Layout"
import Meta from "../../components/SEO/Meta"
import Facebook from "../../components/SEO/Facebook"
import Twitter from "../../components/SEO/Twitter"
import {firestore} from "../../utils/firebase"

const GroupPage = ({router}) => {
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

GroupPage.propTypes = {
    router: PropTypes.object.isRequired,
}

export default withRouter(GroupPage)
