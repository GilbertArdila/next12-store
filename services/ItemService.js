export async function getItems() {
    const res = await fetch('https://geekstore-i11c.onrender.com/api/v1/geeks')
    const data = await res.json()
    return data
}

//getting latest items
export async function getLatestItems() {
    const request = await getItems()
    const data = request.slice(0, 4)
    return data
}

//getting single item
export async function getItem(id) {
    const res = await fetch(`https://geekstore-i11c.onrender.com/api/v1/geeks/${id}`)
    const data = await res.json()
    return data
}


