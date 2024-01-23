function calculateAndDisplay() {
    // get the input values from html form
    let bill = parseFloat(document.getElementById("totalBill").value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    // Calculate tip, total bill, and amount per person using helper functions
    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPerson = calculateAmtPerPers(totalBill, numOfPpl)

    // Display the results in the HTML document
  document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
  document.getElementById('totalBillResult').innerText =
    'Total Bill: $' + totalBill.toFixed(2) //ends number at second decimal
  document.getElementById('amtPerPersonResult').innerText =
    'Amount per person: $' + amtPerPerson.toFixed(2)


}


    //helper function to calculate tip based on the bill and service quality
    function calculateTip(bill, quality) {
        if(quality === 'Great') {
            return bill * .2
        } else if(quality === 'Good') {
            return bill * .15
        } else if(quality === 'Poor') {
            return bill * .10
        } else {
            return 0
        }

    }


    //helper function to calculate total bill by adding the original bill and tip
    function calculateTotalBill(bill, tip) {
        return bill + tip
    }


    //helper function to 
    function calculateAmtPerPers(totalBill, numOfPpl) {
        return totalBill / numOfPpl
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