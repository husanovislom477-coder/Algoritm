// Fetch

let btn = document.getElementById("btn")
let products = document.getElementById("products")

console.log(btn,products)

btn.addEventListener('click', () => {
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        products.innerHTML = data.products.map(
            product => `
            <div id="card">
            <img src=${product.images}>
            <h3>${product.title}</h3>
            <em>${product.price}</em>
            <p>${product.brand}</p>
            <i>${product.dimensions}</i>
            <q>${product.weight}</q>
            </div>`
        )
    })
    .catch(err => console.error(err))
})


// JSON - Javascript object notation => parse, stringify