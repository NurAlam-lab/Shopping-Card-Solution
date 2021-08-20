function updateProductNumber(product, price, isIncriseing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncriseing) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // update case price total
    const productAmountTotal = document.getElementById(product + '-amount');
    productAmountTotal.innerText = productNumber * price;

    // calculate Total
    calculateTotal();
}

// get input value from product
function getProductInput(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

// calculate total
function calculateTotal() {
    const phoneTotalAmount = getProductInput('phone') * 1219;
    const caseTotalAmount = getProductInput('case') * 59;
    const subTotal = phoneTotalAmount + caseTotalAmount;
    const taxTotal = subTotal / 10;
    const totalPrice = subTotal + taxTotal;
    // calculate subtotal
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = taxTotal;
    document.getElementById('total-price').innerText = totalPrice;

}

// for phone
document.getElementById('phone-plusbtn').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})

document.getElementById('phone-minusbtn').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})


// for case 
document.getElementById('case-plusbtn').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})

document.getElementById('case-minusbtn').addEventListener('click', function () {
    updateProductNumber('case', 59, false);

})