const readline = require('readline');
const fs = require('fs');

const minNumber = 1;
const maxNumber = 100;
let attempts = 0;

// Генерация случайного числа
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

// Создание интерфейса для чтения ввода пользователя
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Функция для записи протокола игры в файл
function writeLog(data) {
  fs.appendFile('game.log', data + '\n', err => {
    if (err) throw err;
  });
}

// Функция для проверки введенного пользователем числа
function checkNumber(userNumber) {
  attempts++;
  if (userNumber < randomNumber) {
    console.log('Загаданное число больше');
    writeLog(`Попытка №${attempts}: ${userNumber} - загаданное число больше`);
  } else if (userNumber > randomNumber) {
    console.log('Загаданное число меньше');
    writeLog(`Попытка №${attempts}: ${userNumber} - загаданное число меньше`);
  } else {
    console.log(`Поздравляем, вы угадали число ${randomNumber} за ${attempts} попыток!`);
    writeLog(`Угадано число ${randomNumber} за ${attempts} попыток`);
    rl.close();
  }
}

console.log('Добро пожаловать в игру "Угадай число"!');
console.log(`Введите число от ${minNumber} до ${maxNumber}`);

// Начало игры
rl.on('line', input => {
  const userNumber = parseInt(input);
  if (isNaN(userNumber) || userNumber < minNumber || userNumber > maxNumber) {
    console.log(`Введите число от ${minNumber} до ${maxNumber}`);
  } else {
    checkNumber(userNumber);
  }
});
