let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Unity game 1',
        tag: 'unity',
        price: 100,
        inCart: 0
    },
    {
        name: 'Roblox 1',
        tag: 'roblox',
        price: 300,
        inCart: 0
    },
    {
        name: 'Blender 1',
        tag: 'blender',
        price: 200,
        inCart: 0
    }
]

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

window.onLoadCarNumbers = function(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.so6 sup').textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.so6 sup').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.so6 sup').textContent = 1;
    }

    setItem(product);
}

function setItem(product){
    let cartItems = localStorage.getItem('productsIncart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[products.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart = 1;
        cartItems = {
        [product.tag]: product
       }
    }
    
    localStorage.setItem("productsIncart", JSON.stringify (cartItems));
}

function totalCost(product){

    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");


    console.log(cartItems);
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class = "product">
                <ion-icon name="close-circle"></ion-icon>
                <img src = "./${item.tag}.jpg">
                <sup>${item.name}</sup>
            </div>
            `  
        });

    }
}

onLoadCarNumbers();

displayCart();