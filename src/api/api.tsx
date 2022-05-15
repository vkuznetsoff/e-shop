export const productsAPI: any = {
    getProducts: async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json()).then(json => json)
       
       return data
    }
}
