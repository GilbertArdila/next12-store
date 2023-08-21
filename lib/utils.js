import { getItems } from "../services/ItemService";

export async function getPathsFromIds() {
    const items = await getItems();
    const ids = items.map((item)=> {
        return {
            params: {
                id: getPathsFromNames(item.name)
            }
        }
    })
    return ids
    }

    //function to convert name  into path
    export function getPathsFromNames(name) {
        //reemplazar espacio con guion en name
        const path = name.replace(/\s+/g, '-').toLowerCase()
        return path
        
    }