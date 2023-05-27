const calcTitleDiv = document.getElementById("calcTitle");
const totalConsumedDiv = document.getElementById("totalConsumed");
const tipTotaldDiv = document.getElementById("tipTotal");
const currencyDiv = document.getElementById("currency");
const peopleTotalDiv = document.getElementById("peopleTotal");
const totalPerEachDiv = document.getElementById("totalPerEach");
const currencyTotalDiv = document.getElementById("currencyTotal");

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
