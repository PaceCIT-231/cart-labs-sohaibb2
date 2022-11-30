const cart = {
    currentPrice: 0,
    items: [],
    addItem: function(cookie, price) {
        // add a cookie (string) to the items array

        //add the price (number) to the currentPrice properties

        function addPriceToProduct (product, price) {
            product.price = price;
            return product;
        }
        cart.addItem(cookie, 20)
        
    },
    clear: function() {
        //reset the currentPrice and items properties
        
    },
}