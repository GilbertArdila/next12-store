import {getPathsFromNames} from '../lib/utils'

export async function getItems() {
    const res = await fetch('https://geekstore-i11c.onrender.com/api/v1/geeks')
    const data = await res.json()
    return data
}

//getting latest items
export async function getLatestItems() {
    const request = await getItems()
    const data = request.slice(0, 3)
    return data
}

//getting single item
export async function getItem(id) {
    const items = await getItems()
    const item = items.find(item => getPathsFromNames( item.name) === id)
    return {
        id:id,
        data: item
    }
}


