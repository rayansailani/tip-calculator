console.log(123);
let tipAmount = 0.0;
let totalAmount = 0.0;
let noPeople = 0;
let percentage = 0;
let billAmount = 0;
var button = null;
let amountElement = document.getElementById("total-amount");
let tipElement = document.getElementById("tip-amount");
const setTotalAmount = () => {
  tipAmount = ((billAmount * (percentage / 100)) / noPeople).toFixed(2);
  totalAmount = (billAmount / noPeople + parseInt(tipAmount)).toFixed(2);
  amountElement.innerHTML = totalAmount.toString().toLocaleString();
  tipElement.innerHTML = tipAmount.toString().toLocaleString();
};

const setPercentage = (perc) => {
  // first select the button that was clicked
  try {
    button.style.background = "hsl(183, 100%, 15%)";
    button.style.color = "white";
  } catch {}
  //   styling changes
  button = document.getElementById(perc.toString());
  button.style.background = "hsl(172, 67%, 45%)";
  button.style.color = "hsl(183, 100%, 15%)";
  //   changes in the percentage levels
  percentage = parseInt(perc);
  if (billAmount && noPeople) {
    setTotalAmount();
  }
};

const setCustomPercentageInput = (perc) => {
  try {
    button.style.background = "hsl(183, 100%, 15%)";
    button.style.color = "white";
  } catch {}
  percentage = parseInt(perc);
  if (billAmount && noPeople) {
    setTotalAmount();
  }
};

const setNoPeople = (people = 0) => {
  let validator = document.getElementById("validator");
  console.log(people);
  if (people == 0) {
    validator.innerHTML = "Can't be zero";
  } else {
    validator.innerHTML = "";
    noPeople = parseInt(people);
    if (billAmount && percentage) {
      setTotalAmount();
    }
  }
};

const setBillAmount = (value = 0) => {
  billAmount = parseInt(value);
  if (percentage && noPeople) {
    setTotalAmount();
  }
};

const resetButton = () => {
  try {
    let billElemenent = document.getElementById("bill");
    let peopleElement = document.getElementById("no");
    let customElement = document.getElementById("custom");
    button.style.background = "hsl(183, 100%, 15%)";
    button.style.color = "white";
    billElemenent.value = "";
    peopleElement.value = "";
    amountElement.innerHTML = "0.00";
    tipElement.innerHTML = "0.00";
    customElement.value = "";
  } catch {}
};
