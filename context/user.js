import React from "react"
import {useState, createContext} from "react"
import PropTypes from "prop-types"

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState()

    const context = {
        user,
        setUser,
    }

    return (
        <UserContext.Provider value={context}>{children}</UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node,
}

export {UserContext, UserProvider}
