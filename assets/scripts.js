const cart = {
    currentPrice: 0,
    items: [],
    addItem: function(cookie, price) {
        // add a cookie (string) to the items array

        //add the price (number) to the currentPrice properties

    },
    clear: function() {
        //reset the currentPrice and items properties
        
    },
}

let currentPrice=0, itemCount=0

function addToCart(cookie) {
    /* 
        PRICES
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
    */
   
   console.log('The user is adding this type of cookie to their cart: ' , cookie) 

   itemCount = itemCount + 1
   console.log(itemCount)

    document.getElementById("cartItems").innerHTML= itemCount

   //add 1 to the itemCount variable
   //add the correct price to the currentPrice variable
   if (cookie == 'peanut butter'){currentPrice = currentPrice + 20 }
   if (cookie == 'sandies') {currentPrice = currentPrice + 30}
   if (cookie == 'party press') {currentPrice = currentPrice + 35}
   if (cookie == 'chocolate chip') {currentPrice = currentPrice + 25}

   document.querySelector(".hoverText").innerHTML = currentPrice

   console.log(currentPrice)
}

function checkout() {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price
    prompt(`What is your name and address so we can bill you and send you your purchases?`)
    currentPrice = 0
    itemCount = 0
    document.getElementById("cartItems").innerHTML= itemCount
    document.querySelector(".hoverText").innerHTML = currentPrice
}


function darkMode() {
	document.querySelector("body").style.backgroundColor="navy"
    document.querySelector("body").style.color="white"
}