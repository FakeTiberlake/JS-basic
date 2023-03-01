while (true) {

  let numberToGuess = Math.floor(Math.random() * 1000);
  console.log("Я загадал: ", numberToGuess);
  const numberFromUser = prompt("Введите число (от 0 до 999)");
  console.log("Вы ввели: ", numberFromUser);

  const N = 1000;
  const sortedArray = Array.from({ length: N }, (_, index) => index);
  

  function binarySearch(sortedArray, numberFromUser) {
    let first = 0;
    let last = sortedArray.length - 1;

    while (first <= last) {
      let middle = Math.floor((first + last) / 2);

      if (numberFromUser === "q") {
        alert("До свидания!");
        break;
      }
      
      if (isNaN(numberFromUser) || (parseInt(numberFromUser) !== 0 && parseInt(numberFromUser) !== 999)) {
        alert("Вы ввели не числа из диапазона от 0 или 999");
      } else 
      if (sortedArray[middle] === numberFromUser) {
        alert("Вы угадали!");        
      } else if (sortedArray[middle] < numberFromUser) {
        first = middle + 1;
        alert("Загаданное число меньше");
      } else if (sortedArray[middle] > numberFromUser) {
        last = middle - 1;
        alert("Загаданное число больше");
      } 
    }
    return "Вы не угадали";
  }
}










