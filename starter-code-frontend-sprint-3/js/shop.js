// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [ 
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];
var total = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cartList.push(products[i]);
            document.getElementById(products[i].id).hidden = false;
        }
    }
}

// Exercise 2
function cleanCart() {
    cartList = [];

    document.getElementById("total_price").innerHTML = 0;

    for (let i = 0; i < products.length; i++) {
        document.getElementById(products[i].id).hidden = true;
    }
}


// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let sum = 0;

    for (let i = 0; i < cartList.length; i++) {
        sum += cartList[i].price;
    }
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    for (let i = 0; i < cartList.length; i++) {
        if (cart.length === 0 || cart.includes(cartList[i]) !== true) { //array vacío o no tiene este objeto
            cartList[i].quantity = 1; //se añade la categoría cantidad con valor 1
            cart.push(cartList[i]);//se añade el objeto al array cart
        } else if (cart.includes(cartList[i])) {
            cartList[i].quantity += 1;
        }
    }

    for (let i = 0; i < cart.length; i++) {
        cart[i].subtotal = cart[i].price * cart[i].quantity;
        cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
    }

}

function calculateTotal2() {
    // Calculate total price of the cart using the "cartList" array
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].subtotalWithDiscount;
    }

    return (Number(sum).toFixed(2));
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === 'cooking oil' && cart[i].quantity >= 3) {
            cart[i].subtotalWithDiscount = 10 * cart[i].quantity;
        }

        if (cart[i].name === 'Instant cupcake mixture' && cart[i].quantity >= 10) {
            cart[i].subtotalWithDiscount = (cart[i].subtotal * 2 / 3).toFixed(2);
        }

    }
}


// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    cart = [];

    generateCart();
    applyPromotionsCart();

    document.getElementById("total_price").innerHTML = calculateTotal2();

    for (let i = 0; i < cart.length; i++) {
        switch (cart[i].name) {
            case "cooking oil":
                document.getElementById("cantidad1").innerHTML = cart[i].quantity;
                document.getElementById("total1").innerHTML = cart[i].subtotalWithDiscount;
                break;
            case "Pasta":
                document.getElementById("cantidad2").innerHTML = cart[i].quantity;
                document.getElementById("total2").innerHTML = cart[i].subtotalWithDiscount;
                break;

            case "Instant cupcake mixture":
                document.getElementById("cantidad3").innerHTML = cart[i].quantity;
                document.getElementById("total3").innerHTML = cart[i].subtotalWithDiscount;
                break;

            case "All-in-one":
                document.getElementById("cantidad4").innerHTML = cart[i].quantity;
                document.getElementById("total4").innerHTML = cart[i].subtotalWithDiscount;
                break;

            case "Zero Make-up Kit":
                document.getElementById("cantidad5").innerHTML = cart[i].quantity;
                document.getElementById("total5").innerHTML = cart[i].subtotalWithDiscount;
                break;

            case "Lip Tints":
                document.getElementById("cantidad6").innerHTML = cart[i].quantity;
                document.getElementById("total6").innerHTML = cart[i].subtotalWithDiscount;
                break;
            case "Lawn Dress":
                document.getElementById("cantidad7").innerHTML = cart[i].quantity;
                document.getElementById("total7").innerHTML = cart[i].subtotalWithDiscount;
                break;

            case "Lawn-Chiffon Combo":
                document.getElementById("cantidad8").innerHTML = cart[i].quantity;
                document.getElementById("total8").innerHTML = cart[i].subtotalWithDiscount;
                break;

            case "Toddler Frock":
                document.getElementById("cantidad9").innerHTML = cart[i].quantity;
                document.getElementById("total9").innerHTML = cart[i].subtotalWithDiscount;
                break;
            default:
                break;
        }
    }

    let artNoComprados = [];
    artNoComprados = products.filter(x => !cart.includes(x));

    for (let i = 0; i < artNoComprados.length; i++) {
        document.getElementById(artNoComprados[i].id).hidden = true;
    }
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}