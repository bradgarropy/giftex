exports.onCreatePage = async({page, actions}) => {
    const {createPage} = actions

    if (page.path.match(/^\/group\/(?!new).*/)) {
        page.matchPath = "/group/:id"
        createPage(page)
    }
}
