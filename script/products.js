function CreateItem(id, name, category, image, description,quantity, price){
    this.id = id
    this.name = name
    this.category = category
    this.image = image
    this.description = description
    this.price = price
    this.quantity = quantity
}

 let item1 = new CreateItem(1, 'Blueberry Swade', "hoodies", "https://media.takealot.com/covers_images/c07b162b9b374b93914a54f2a598b693/s-pdpxl.file", 'This is a warm hoodie that combines comfort and style - blue',1, 249)
 let item2 = new CreateItem(2, 'Pink Power', "hoodies", "https://media.takealot.com/covers_images/f527a62cdac640168a5a54c796caf855/s-pdpxl.file", 'This is a warm hoodie that combines comfort and style - pink',1, 229)
 let item3 = new CreateItem(3, 'Space Grey', "hoodies", "https://media.takealot.com/covers_images/31124f56eb8c4ad0945fce2c92cefeca/s-pdpxl.file", 'This is a warm hoodie that combines comfort and style - Gray',1, 240)
 let item4 = new CreateItem(4, 'Bonteville Black', "hoodies", "https://media.takealot.com/covers_images/27a502bd10a143fbb4e8adcd0b988b59/s-pdpxl.file", 'This is a warm hoodie that combines comfort and style - Black',1, 243)
 let item5 = new CreateItem(5, 'Royal Red', "hoodies", "https://media.takealot.com/covers_images/4d36da1fed73469a9497ec0277465187/s-pdpxl.file", 'This is a warm hoodie that combines comfort and style - Red',1, 229)

 let items = [item1,item2,item3,item4,item5]
 localStorage.setItem('items', JSON.stringify(items))


// adding them to the html page
let gridParent = document.querySelector('.grid')

 items.forEach(item =>{
gridParent.innerHTML += `<div class="grid-item">
<img src="${item.image}">
<div><a href="">#${item.id} - ${item.name} - ${item.category}</a></div>
<div><button value="${item.id}">add to cart</button></div>
</div>`
 })

 let buttons = document.querySelectorAll('button')
 let purchasedItems = []
buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        purchasedItems.push(button.value)
        console.log(purchasedItems)
        localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems))
    })
})