import React from "react"
import {useState} from "react"
import Router from "next/router"
import {firestore} from "../utils/firebase"
import {Form, FormField, Label, Input, Button} from "../styles"

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
        Router.push(`/group/${id}`)
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormField>
                <Label>Name</Label>
                <Input
                    type="text"
                    onChange={event => setName(event.target.value)}
                />
            </FormField>

            <FormField>
                <Label>Members</Label>
                <Input type="text" onChange={onMembersChange}/>
            </FormField>

            <FormField>
                <Label>Date</Label>
                <Input
                    type="date"
                    onChange={event => setDate(event.target.value)}
                />
            </FormField>

            <FormField>
                <Label>Limit</Label>
                <Input
                    type="number"
                    onChange={event => setLimit(event.target.value)}
                />
            </FormField>

            <Button>Create</Button>
        </Form>
    )
}

export default NewGroup
