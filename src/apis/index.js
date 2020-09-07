const fetchUsers = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let json = await response.json()
    console.log("json=>", json)
    if (response.status !== 200) {
        throw new Error(json.error)
    }
    return json
}


export { fetchUsers }