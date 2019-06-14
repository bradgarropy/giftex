import React from "react"
import {useState} from "react"
import Router from "next/router"
import {firestore} from "../utils/firebase"

const NewGroup = () => {
    const [name, setName] = useState()
    const [members, setMembers] = useState()
    const [date, setDate] = useState()
    const [limit, setLimit] = useState()

    const onMembersChange = event => {
        const members = event.target.value
            .split(",")
            .map(member => member.trim())
            .filter(member => member)

        setMembers(members)
    }

    const onSubmit = async event => {
        event.preventDefault()

        const group = {
            name,
            members,
            date,
            limit,
        }

        const {id} = await firestore.collection("groups").add(group)
        Router.push(`/group?id=${id}`)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input
                type="text"
                onChange={event => setName(event.target.value)}
            />

            <label>Members</label>
            <input type="text" onChange={onMembersChange}/>

            <label>Date</label>
            <input
                type="date"
                onChange={event => setDate(event.target.value)}
            />

            <label>Limit</label>
            <input
                type="number"
                onChange={event => setLimit(event.target.value)}
            />

            <button>Create</button>
        </form>
    )
}

export default NewGroup
