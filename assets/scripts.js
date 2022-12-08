const cart = {
    currentPrice: 0,
    items: [],
    addItem: function(cookie, price) {
        // add a cookie (string) to the items array
        this.items.push(cookie)
        
        //add the price (number) to the currentPrice properties
        this.currentPrice = price + this.currentPrice
    },
    clear: function() {
        //reset the currentPrice and items properties
        this.currentPrice = 0,
        this.items = []
    },
}


//let currentPrice=0, itemCount=0

function addToCart(cookie) {
    /* 
        PRICES
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
    */

   console.log('The user is adding this type of cookie to their cart: ' , cookie) 

   //add 1 to the itemCount variable
  
    //itemCount = itemCount+1
    //console.log(itemCount)
    
    document.getElementById("cartItems").innerHTML= cart.items.length +1

        

   //add the correct price to the currentPrice variable
   if (cookie == 'peanut butter') {
    cart.addItem(cookie, 20)
    //currentPrice = currentPrice + 20
    }
    else if (cookie == 'sandies') {
    cart.addItem(cookie, 30)        
    //currentPrice = currentPrice + 30
    }
    else if (cookie == 'party press') {
    cart.addItem(cookie, 35)
    // /currentPrice = currentPrice + 35
    }
    else if (cookie == 'chocolate chip') {
    cart.addItem(cookie, 25)
    // currentPrice = currentPrice + 25
    }

    document.querySelector(".hoverText").innerHTML = "$"+ cart.currentPrice

}

function checkout() {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price
    
    //window.alert(`You have ${itemCount} items that will cost $${currentPrice}.  Thank you for shopping with us!`)

    window.prompt(`Please provide your name and address \nThank you for shopping with us!`)

    console.log(cart)

    cart.clear()

    document.getElementById("cartItems").innerHTML= cart.items.length
    document.querySelector(".hoverText").innerHTML = "$" + cart.currentPrice
}

function darkMode() {
	// add your code here
    
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector("main").style.color = "white"
    document.querySelector("h1").style.color = "white"

}
