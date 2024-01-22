function calculateAndDipslay() {
    // get the input values from html form
    let bill = parseFloat(document.getElementById("totalBill").value)
    let numOfPpl = parseInt(document.getElementId('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    // Calculate tip, total bill, and amount per person using helper functions

    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPerson = calculateAmtPerPers(totalBill, numOfPpl)



}


























/* let bill = 120;
let numOfPpl = 5;
let serviceQuality = 'Great';

function calculateTip(quality) {
    if(quality === 'Great') {
        return bill * .2
    } else if(quality === 'Good') {
        return bill * .15
    } else if(quality === 'Poor') {
        return bill * .10
    } else {
        //alert('Please enter a valid quality!')//
    }
}

let tip = calculateTip(serviceQuality)

function calculateTotalBill(bill, tip) {
    return bill + tip
}

let totalBill = calculateTotalBill(bill, tip)

function calcAmtPerPers(totalBill, numOfPpl) {
    return totalBill / numOfPpl
}

let amtPerPerson = calcAmtPerPers(totalBill, numOfPpl)

console.log('Tip: $' + tip)
console.log('Total Bill: $' + totalBill)
console.log('Amount per Person: $' + amtPerPerson) */