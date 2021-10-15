// Main js

// Variables

let addToCartBtn = document.querySelectorAll(".addToCart");



// User Inputs

let userCart = [];

let currentTotal = [];

let current = 0;

// Check if page is ready 

$("document").ready(function () {

                // if loaded page before load localstorage menu

                if (sessionStorage.getItem("hasRunBefore") == null) {

                        sessionStorage.setItem("userCart", JSON.stringify(userCart));

                        sessionStorage.setItem("currentTotal", JSON.stringify(currentTotal));

                        sessionStorage.setItem("current", JSON.stringify(current));

                        sessionStorage.setItem("hasRunBefore", true);
                } else {

                        sessionStorage.getItem("userCart", JSON.stringify(userCart))

                        sessionStorage.getItem("currentTotal", JSON.stringify(currentTotal))

                        userCart = JSON.parse(sessionStorage.getItem("userCart"))

                        currentTotal = JSON.parse(sessionStorage.getItem("currentTotal"))

                        current = JSON.parse(sessionStorage.getItem("current"))

                };


        }

);

// Constructor function for items

class ElectItem {

        constructor(image, productName, description, price, numPrice) {

                this.image = image;
                this.productName = productName;
                this.description = description;
                this.price = price;
                this.numPrice = numPrice;
                this.numPriceExcluding = numPrice - ((numPrice / 100) * 15);
        };
};


// Constructed Items

let item0 = new ElectItem(

        "images/productimages/laptop.png",
        "Macbook pro 13inch",
        "Stylish design, with a 24h battery life.",
        "R 31 000. 00",
        31000

);


let item1 = new ElectItem(

        "images/productimages/phone.png",
        "Samsung Note 20",
        "The minimal design features a metal body elevated by exquisite details and transcendent colors and durable.",
        "R 18 000. 00",
        18000

);



let item2 = new ElectItem(

        "images/productimages/ipad.jpg",
        "Samsung Galaxy A5 Tablet",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis porro placeat mollitia",
        "R 11 000. 00",
        11000

);

let item3 = new ElectItem(

        "images/productimages/watch.jpg",
        "Apple Watch",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis porro placeat mollitia",
        "R 20 000. 00",
        20000

);

let item4 = new ElectItem(

        "images/productimages/camera.jpg",
        "Fujitsu Camera",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis porro placeat mollitia",
        "R 35 000. 00",
        35000

);


let item5 = new ElectItem(

        "images/productimages/dell.jpg",
        "Dell Notebook 13",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis porro placeat mollitia",
        "R 18 000. 00",
        18000

);

// Nav Bar

// Add to cart button

// Control click


for (i = 0; i < addToCartBtn.length; i++) {

        addToCartBtn[i].addEventListener("click", function () {


                let currentBtn = this.value;

                let currentItem

                if (currentBtn == "item0") {

                        currentItem = item0

                } else if (currentBtn == "item1") {

                        currentItem = item1

                } else if (currentBtn == "item2") {

                        currentItem = item2

                } else if (currentBtn == "item3") {

                        currentItem = item3;

                } else if (currentBtn == "item4") {

                        currentItem = item4;

                } else if (currentBtn == "item5") {

                        currentItem = item5;

                }

                addItem(currentItem);

        })
};

// // Add item to cart and update session storage

function addItem(currentItem) {

        current = current + currentItem.numPrice;

        let awnser = prompt(`Do you want to add ${currentItem.productName} for ${currentItem.price} || Yes/No`);

        if (awnser == "yes") {


                userCart.push(currentItem);

                currentTotal.push(currentItem.numPrice);

                console.log(userCart);

                sessionStorage.setItem("current", JSON.stringify(current));

                sessionStorage.setItem("userCart", JSON.stringify(userCart));

                sessionStorage.setItem("currentTotal", JSON.stringify(currentTotal));

                alert(`Item Added, Your Current Total Is R${current}. 00`);

        } else {

                alert("Item Not Added");
        }

};


// quick total sum
for (i = 0; i < currentTotal.length; i++) {

        current = current + currentTotal[i];


}


// Quick add to cart

// Control click

let currentQuickAdd = document.querySelectorAll(".quickAdd");

for (i = 0; i < currentQuickAdd.length; i++) {

        currentQuickAdd[i].addEventListener("click", function () {


                let quickAdd = this.id;

                let quickAddCurrent

                if (quickAdd == "item0") {

                        quickAddCurrent = item0

                } else if (quickAdd == "item1") {

                        quickAddCurrent = item1

                } else if (quickAdd == "item2") {

                        quickAddCurrent = item2

                } else if (quickAdd == "item3") {

                        quickAddCurrent = item3;

                } else if (quickAdd == "item4") {

                        quickAddCurrent = item4;

                } else if (quickAdd == "item5") {

                        quickAddCurrent = item5;

                }

                quickadditem(quickAddCurrent)

        })
};


function quickadditem(quickAddCurrent) {

        current = current + quickAddCurrent.numPrice;

        userCart.push(quickAddCurrent);

        currentTotal.push(quickAddCurrent.numPrice);

        sessionStorage.setItem("current", JSON.stringify(current));

        sessionStorage.setItem("userCart", JSON.stringify(userCart));

        sessionStorage.setItem("currentTotal", JSON.stringify(currentTotal));

        alert(`Item Added, Your Current Total Is R${current}. 00`);

};