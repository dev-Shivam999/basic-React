import axios from "axios"


export async function api(p:true|false,i?:string) {
    let a ="https://fakestoreapi.com/products"
    if (p) {
        a =`https://fakestoreapi.com/products/${i}`
    }
    const { data } = await axios.get(a)
    
    return data
}