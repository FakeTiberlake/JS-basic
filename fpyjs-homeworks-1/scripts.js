let input = document.querySelector(".number-field__input");
let button = document.querySelector(".number-field__button");
let check = document.querySelector(".result__check__out");
let help = document.querySelector(".result__help__out");
let count = document.querySelector(".result__count__out");

let item = 0;
let randNum = Math.floor(Math.random() * 1000);
console.log("Я загадал: ", randNum);

button.onclick = function (evt) {
  evt.presentDefault;

  userNum = input.value;
  
  if (isNaN(userNum) || (parseInt(userNum) < 0 && parseInt(userNum) > 999)) {
    help.textContent = "Вы ввели число не из диапазона от 0 или 999";
    item++;
    count.textContent = item;
  } else if (userNum > randNum) {
    check.textContent = "Вы не угадали";
    help.textContent = "Много";
    item++;
    count.textContent = item;
  } else if (userNum < randNum) {
    check.textContent = "Вы не угадали";
    help.textContent = "Мало";
    item++;
    count.textContent = item;
  } else {
    check.textContent = "Поздравляю! Вы угадали!";
    help.textContent = "В самый раз";
    item++;
    count.textContent = item;
  }
};