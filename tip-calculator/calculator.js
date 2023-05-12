const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  const billTotal = Number(billTotalInput.value);
  const tipPercent = Number(tipInput.value) / 100;
  const tipAmount = billTotal * tipPercent;
  const total = tipAmount + billTotal;
  const totalPerPerson = (total / numberOfPeople).toFixed(2);
  perPersonTotalDiv.innerHTML = totalPerPerson;
};

const increasePeople = () => {
  numberOfPeople++;
  numberOfPeopleDiv.innerHTML = numberOfPeople;
  if (numberOfPeople <= 0) {
    numberOfPeopleDiv.innerHTML = "X";
    return;
  }
  calculateBill();
};

const decreasePeople = () => {
  numberOfPeople--;
  numberOfPeopleDiv.innerHTML = numberOfPeople;

  if (numberOfPeople <= 0) {
    numberOfPeopleDiv.innerHTML = "X";
    return;
  }
  calculateBill();
};
