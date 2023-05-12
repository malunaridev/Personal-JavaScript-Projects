let calcTitleDiv = document.getElementById("calcTitle");
let totalConsumedDiv = document.getElementById("totalConsumed");
let tipTotaldDiv = document.getElementById("tipTotal");
let currencyDiv = document.getElementById("currency");
let peopleTotalDiv = document.getElementById("peopleTotal");
let totalPerEachDiv = document.getElementById("totalPerEach");
let currencyTotalDiv = document.getElementById("currencyTotal");

const languagePT = () => {
  calcTitleDiv.innerText = "Calculadora de Gorjeta";
  currencyDiv.innerText = "R$";
  totalConsumedDiv.innerText = "Total Consumido";
  tipTotaldDiv.innerText = "Valor da Gorjeta";
  peopleTotalDiv.innerText = "Quantidade de Pessoas";
  totalPerEachDiv.innerText = "Valor por Pessoa";
  currencyTotalDiv.innerText = "R$";
};

const languageEN = () => {
  calcTitleDiv.innerText = "Tip Calculator";
  currencyDiv.innerText = "U$";
  totalConsumedDiv.innerText = "Bill Amount";
  tipTotaldDiv.innerText = "Tip Amount";
  peopleTotalDiv.innerText = "People Total";
  totalPerEachDiv.innerText = "Total per Each";
  currencyTotalDiv.innerText = "U$";
};
