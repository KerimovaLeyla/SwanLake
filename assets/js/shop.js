const awesomeproducts =document.getElementById('product')

function getbaskets () {
    awesomeproducts.innerHTML = ''

    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item,index) => {
        let product = document.createElement('div')
        product.className = 'remBox col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3'
        product.innerHTML = `
        <img src="${item.image}" alt="">
        <p>"${item.name}"</p>
        <p>"${item.price}"</p>
        <button onclick="removefromBasket(${index})"><i class="fa-solid fa-trash" style="color: #401f51;"></i>Remove from cart</button>
        `
        awesomeproducts.appendChild(product)
    })
}
getbaskets();
function removefromBasket(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    getbaskets() 
}