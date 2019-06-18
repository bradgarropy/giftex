import React from "react"
import {useState, useContext} from "react"
import {auth} from "../../utils/firebase"
import {UserContext} from "../../context"
import {Form, FormField, Label, Input, Button} from "../../styles"

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const userContext = useContext(UserContext)

    const onSubmit = async event => {
        event.preventDefault()

        const {user} = await auth.createUserWithEmailAndPassword(
            email,
            password,
        )

        userContext.setUser(user)
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormField>
                <Label>Email</Label>
                <Input
                    type="email"
                    autoComplete="email"
                    onChange={event => setEmail(event.target.value)}
                />
            </FormField>

            <FormField>
                <Label>Password</Label>
                <Input
                    type="password"
                    autoComplete="current-password"
                    onChange={event => setPassword(event.target.value)}
                />
            </FormField>

            <Button>Register</Button>
        </Form>
    )
}

export default Register
