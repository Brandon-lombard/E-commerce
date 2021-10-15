// 
// Shopping page Create Elements
// 

$("document").ready(function () {

        addItemToPage()

    }

);


// Variables

let cart = document.getElementById("cart")

let couponUsed = false;

// amount due function 

let total = 0;

let vat = 0;

let totalEx = 0;

// Form variable

let deliveryFee = 0;



// Creating elements Function



function addItemToPage() {




    for (i = 0; i < userCart.length; i++) {

        amountDue(i);



        // Created elements

        let itemContainer = document.createElement("div");

        let divCol = document.createElement("table");

        let tableRow = document.createElement("tr");

        let tableColImg = document.createElement("td");

        let tableColDes = document.createElement("td");

        let tableColPrice = document.createElement("td");

        let tdImg = document.createElement("img");

        let tdForm = document.createElement("form");

        let labelName = document.createElement("h6");

        let formLabel = document.createElement("label")

        let deleteItem = document.createElement("button");

        let tdPrice = document.createElement("h6");

        let tdPriceEx = document.createElement("p");


        // Element Styles

        cart.style.minWidth = "550px"

        divCol.style.width = "100%";

        divCol.style.border = "1px solid rgb(0, 0, 0)";

        tableColImg.style.width = "30%";

        tableColImg.style.margin = "auto";

        tdImg.classList.add("img-fluid");

        tdImg.style.width = " 300px";

        itemContainer.style.margin = "10px";

        tableColDes.style.width = "50%";

        tableColDes.style.padding = "10px";

        deleteItem.classList.add("btn");

        deleteItem.classList.add("dltItem");

        itemContainer.classList.add("dltDisplay");

        deleteItem.style.border = "1px solid black";

        deleteItem.style.borderRadius = "8px";

        deleteItem.innerText = "Delete Item";

        deleteItem.style.margin = "10px"

        $("#totalToPay").css("borderRadius", "10px");


        // Element values

        tdImg.src = userCart[i].image;

        labelName.innerText = userCart[i].productName;

        formLabel.innerText = userCart[i].description;

        tdPrice.innerText = `Incl : ${userCart[i].price}`;

        tdPriceEx.innerText = `Excl : R ${userCart[i].numPriceExcluding}. 00`;

        // Append to window 

        tableColImg.appendChild(tdImg);

        tableColDes.appendChild(labelName);

        tableColDes.appendChild(tdForm);

        tdForm.appendChild(formLabel);

        tableColPrice.appendChild(tdPriceEx);

        tableColPrice.appendChild(tdPrice);

        tableColPrice.appendChild(deleteItem);

        // <td>
        tableRow.appendChild(tableColImg);
        tableRow.appendChild(tableColDes);
        tableRow.appendChild(tableColPrice);

        // <tr>
        divCol.appendChild(tableRow);

        // <table>
        itemContainer.appendChild(divCol);

        // to section
        cart.appendChild(itemContainer);

        // Append to window end

    };

    $(".dltItem").click(function () {

        let index = $(".dltItem").index(this);

        newAmount(index);

        userCart.splice(index, 1);

        $(".dltDisplay")[index].remove();

    })
};

function newAmount(i) {

    current = userCart[i].numPrice;

    console.log(current);

    total = total - current;

    console.log("new", total)

    vat = Math.floor((total / 100) * 15);

    totalEx = Math.floor(total - vat);



    $("#displayExPrice").text(`Total Excl R ${totalEx}. 00`);

    $("#vat").text(`VAT R ${vat}. 00`);

    $("#displayPrice").text(`Total Incl R ${total}. 00`);

    sessionStorage.setItem("current", JSON.stringify(current));

    sessionStorage.setItem("userCart", JSON.stringify(userCart));

    sessionStorage.setItem("currentTotal", JSON.stringify(currentTotal));

}




// Forms,coupon and totals

// Adding total of cart to page and the total excluding vat


let displayPrice = $("#displayPrice");

function amountDue(i) {

    total = (total + currentTotal[i]);

    vat = (total / 100) * 15;

    totalEx = total - vat;

    $("#displayExPrice").text(`Total Excl R ${totalEx}. 00`);

    $("#vat").text(`VAT R ${vat}. 00`);

    $("#displayPrice").text(`Total Incl R ${total}. 00`);

};


// Coupon 

let userCouponInput = document.getElementById("couponInput");

let returnPrompt

// CouponBtn

$(".couponAdd").click(function () {

    if (couponUsed == false) {
        couponAdded()

    } else if (couponUsed == true) {

        alert("Coupon already added")
    }


})

// Coupon input handle

function couponAdded() {

    if (userCouponInput.value == "WOW30%OFF") {

        alert("Coupon applied");

        couponUsed = true;

        sessionStorage.setItem("couponUsed", JSON.stringify(couponUsed));

        couponCalc();

    } else if (userCouponInput.value == "") {

        returnPrompt = prompt("dont you want to save with 30% 0ff using coupon code WOW30%OFF")

        if (returnPrompt == "yes") {

            alert("coupon applied");

            couponCalc();

        } else {

            alert("Coupon not applied")
        }

    } else {

        alert("Invalid coupon")
    };

};

function couponCalc() {

    let percent

    percent = (total / 100) * 30;

    total = Math.floor(total - percent);

    vat = Math.floor((total / 100) * 15);

    totalEx = Math.floor(total - vat);

    $("#displayExPrice").text(`Total Excl R ${totalEx}. 00`);

    $("#vat").text(`VAT R ${vat}. 00`);

    $("#displayPrice").text(`Total Incl R ${total}. 00`);

}



// Show

$("#dialogShow").click(function () {

    $("#couponCode").css("z-index", "1");

    $("#couponCode").show();

});

// Hide 

$("#dialogClose").click(function () {

    $("#couponCode").hide();

});

// Delivery form

let deliverOption = document.getElementById("deliver");

let collectOption = document.getElementById("collection");

let radios = document.querySelectorAll(".radioSelect");

radios[0].checked = true;

for (i = 0; i < radios.length; i++) {

    radios[i].addEventListener("click", function () {

            if (collectOption.checked) {

                deliveryFee = 0;

                select.hide();

            } else if (deliverOption.checked) {

                select.show();

            }

        }

    )
};

// function deliver() {

// creating the elements

let deliveryFeeDisplay = $("<h4></h4>")

let select = $("<select></select>");

let option1 = $("<option></option>");

let option2 = $("<option></option>");

let option3 = $("<option></option>");

let option4 = $("<option></option>");


// Element text edit and Style

$(select).hide();

select.css("width", "100px");

option1.text("24 Hour Delivery");

option2.text("1-3 Working Days");

option3.text("7 Working Days");

// Get value of delivery option

select.change(function () {

    deliveryFee = $(this).children("option:selected").val();

    deliveryFeeDisplay.text(`Delivery Fee : R ${deliveryFee}. 00`)

    deliveryCalc(deliveryFee);

    // total = Math.floor((total - currentDeliveryFee) + Number(deliveryFee));

    // currentDeliveryFee = deliveryFee;

    // vatExVat()

});

// Calculation for Delivery Fee

let currentDeliveryFee = 0;

function deliveryCalc(deliveryFee) {


    console.log(currentDeliveryFee)

    total = Math.floor((total - currentDeliveryFee) + Number(deliveryFee));

    vat = Math.floor((total / 100) * 15);

    totalEx = Math.floor(total - vat);

    currentDeliveryFee = deliveryFee;

    $("#displayExPrice").text(`Total Excl R ${totalEx}. 00`);

    $("#vat").text(`VAT R ${vat}. 00`);

    $("#displayPrice").text(`Total Incl R ${total}. 00`);

}

option1.val(169);

option2.val(60);

option3.val(0);

deliveryFeeDisplay.text(`Delivery Fee : R ${deliveryFee}. 00`);

$(".deliveryOptions").append(select);

$(".deliveryOptions").append(deliveryFeeDisplay);

select.append("<option></option>");

select.append(option1);

select.append(option2);

select.append(option3);


// // Clear cart button

$("#clearCart").click(function () {

    userCart = []

    total = 0;

    vat = 0;

    totalEx = 0;

    currentTotal = []

    current = 0;

    deliveryFee = 0;

    cart.innerHTML = "";

    $("#displayExPrice").text(`Total Excl R ${totalEx}. 00`);

    $("#vat").text(`VAT R ${vat}. 00`);

    $("#displayPrice").text(`Total Incl R ${total}. 00`);



    sessionStorage.setItem("current", JSON.stringify(current));

    sessionStorage.setItem("userCart", JSON.stringify(userCart));

    sessionStorage.setItem("currentTotal", JSON.stringify(currentTotal));

})


// Pay now button

$("#payNow").click(function () {

    let reference = Math.floor(Math.random() * 100000000000000)

    console.log(reference);

    alert(`Your order was confirmed your Reference number is : #${reference}`)

    userCart = []

    total = 0;

    vat = 0;

    totalEx = 0;

    currentTotal = []

    current = 0;

    deliveryFee = 0;

    cart.innerHTML = "";

    $("#displayExPrice").text(`Total Excl R ${totalEx}. 00`);

    $("#vat").text(`VAT R ${vat}. 00`);

    $("#displayPrice").text(`Total Incl R ${total}. 00`);



    sessionStorage.setItem("current", JSON.stringify(current));

    sessionStorage.setItem("userCart", JSON.stringify(userCart));

    sessionStorage.setItem("currentTotal", JSON.stringify(currentTotal));

})

// function vatExVat() {

//     vat = Math.floor((total / 100) * 15);

//     totalEx = Math.floor(total - vat);

//     $("#displayExPrice").text(`Total Excl R ${totalEx}. 00`);

//     $("#vat").text(`VAT R ${vat}. 00`);

//     $("#displayPrice").text(`Total Incl R ${total}. 00`);

// }


