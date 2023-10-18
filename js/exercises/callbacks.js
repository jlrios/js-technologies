const getUserById = (id, callBackUser) => {
    const user = {
        id,
        name: 'Ringo Starr'
    }

    setTimeout(() => {
        callBackUser(user)
    }, 1000)
}

getUserById(3, (user) => {
    console.log(`${user.id}: ${user.name}`)
})