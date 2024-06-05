purchasedItems = JSON.parse(localStorage.getItem('purchasedItems'))
items = JSON.parse(localStorage.getItem('items'))
console.log(items[0])

let gridParent = document.querySelector('.grid')

function getData(item) {
    gridParent.innerHTML += `<div class="grid-item">
    <img src="${item.image}">
    <div><a href="">#${item.id} - ${item.name} - ${item.category}</a> amnt: ${item.quantity}</div>
    <div><button value="${item.id}">add to cart</button></div>
    </div>`
}


let results = purchasedItems.filter(purchasedItem =>{
    for (let i = 0; i < items.length; i++) {
        if (purchasedItem == items[i].id) {
           getData(items[i])
        }
    }
})
