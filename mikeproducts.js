var testArray = ["this", "is", "a", "test."];

var products = [{type:"Red", desc:"Red Ink", price:"$200.00/bucket", img:"mike-products/mike-images/ink-product-images/red.jpg"}, {type:"Orange", desc:"Orange Ink", price:"$250.00/bucket", img:"mike-products/mike-images/ink-product-images/orange.jpg"}, {type:"Yellow", desc:"Yellow Ink", price:"$200.00/bucket", img:"mike-products/mike-images/ink-product-images/yellow.jpg"}, {type:"Green", desc:"Green Ink", price:"$250.00/bucket", img:"mike-products/mike-images/ink-product-images/green.jpg"}, {type:"Blue", desc:"Blue Ink", price:"$200.00/bucket", img:"mike-products/mike-images/ink-product-images/blue.jpg"}, {type:"Purple", desc:"Purple Ink", price:"$300.00/bucket", img:"mike-products/mike-images/ink-product-images/purple.jpg"}, {type:"Black", desc:"Black Ink", price:"$400.00/bucket", img:"mike-products/mike-images/ink-product-images/black.jpg"}, {type:"White", desc:"White Ink", price:"$150.00/bucket", img:"mike-products/mike-images/ink-product-images/white.jpg"}];

console.log(testArray);
console.log(products);

//var output = document.getElementById("products");

for (var i = 0; i < products.length; i++) {
    var productString = "<section class=card>";
    	productString += "<h2>" + products[i].type + "</h2>";
        productString += "<img class=ink src=" + products[i].img + ">";
        productString += "<h4>" + products[i].desc + "</h4>";
        productString += "<h4>" + "Price: " + products[i].price + "</h4>";
        productString += "</section>";
    	//output.innerHTML += productString;
    	document.getElementById("products").innerHTML += productString;
}




