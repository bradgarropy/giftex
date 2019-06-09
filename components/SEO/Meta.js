import React from "react"
import PropTypes from "prop-types"
import config from "../../static/config"
import Helmet from "react-helmet"

const Meta = ({title}) => {
    const {description, keywords} = config

    return (
        <Helmet>
            <html lang="en"/>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <link rel="icon" type="image/png" href="/static/icon.png"/>
        </Helmet>
    )
}

Meta.propTypes = {
    title: PropTypes.string,
}

export default Meta
