import React from "react"
import {useState, useContext} from "react"
import {UserContext} from "../../context"
import {Form, FormField, Label, Input, Button} from "../../styles"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login} = useContext(UserContext)

    const onSubmit = async event => {
        event.preventDefault()
        login(email, password)
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

            <Button>Login</Button>
        </Form>
    )
}

export default Login
