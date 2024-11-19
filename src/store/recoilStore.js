import { atomFamily, selectorFamily } from "recoil";

export const productsAtom = atomFamily({
    id:"productsAtom",
    default: selectorFamily({
        id:"productsAtomSelector",
        get:id=> async({get})=>{
            const response = await fetch('https://fakestoreapi.com/products/').then(res=> res.json())
            return response
        }
        
    })
})