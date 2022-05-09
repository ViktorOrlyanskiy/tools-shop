export const getRole = (email) => {

    if (email.includes('admin')) {
        return 'admin'
    }
    else if (email.includes('moderator')) {
        return 'moderator'
    }
    else {
        return 'customer'
    }
}


export const getStatusAuth = (token) => {
    return (token !== undefined || token !== null)
}