import React from "react"
import {useState} from "react"

const NewGroup = () => {
    const [name, setName] = useState("")
    const [members, setMembers] = useState([])

    const onMembersChange = event => {
        const members = event.target.value
            .split(",")
            .map(member => member.trim())
            .filter(member => member)

        setMembers(members)
    }

    const onSubmit = event => {
        event.preventDefault()
        console.log("onSubmit")
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

            <button>Create</button>
        </form>
    )
}

export default NewGroup
