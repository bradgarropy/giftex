import React from "react"
import {useState, useEffect, useContext, useCallback} from "react"
import Link from "next/link"
import styled from "styled-components"
import Layout from "../components/Layout"
import {Meta, Facebook, Twitter} from "../components/SEO"
import {firestore} from "../utils/firebase"
import {UserContext} from "../context"

const GroupsWrapper = styled.div`
    display: grid;
    row-gap: 1rem;
    justify-items: start;
`

const Group = styled.a`
    cursor: pointer;
    text-decoration: underline;
`

const GroupsPage = () => {
    const userContext = useContext(UserContext)
    const {user} = userContext

    const [groups, setGroups] = useState([])

    const getGroups = useCallback(async() => {
        const query = await firestore
            .collection("groups")
            .where("members", "array-contains", user.email)
            .get()
        const groups = query.docs.map(group => {
            return {
                id: group.id,
                ...group.data(),
            }
        })

        setGroups(groups)
    }, [user.email])

    useEffect(() => {
        getGroups()
    }, [getGroups])

    return (
        <Layout>
            <Meta title="groups"/>
            <Facebook/>
            <Twitter/>

            <h1>Groups</h1>
            <GroupsWrapper>
                {groups.map(group => (
                    <Link
                        key={group.id}
                        as={`/group/${group.id}`}
                        href={"/group/[id]"}
                    >
                        <Group>{group.name}</Group>
                    </Link>
                ))}
            </GroupsWrapper>
        </Layout>
    )
}

export default GroupsPage
