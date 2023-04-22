const readline = require('readline-sync');
const fs = require('fs');

// Задаем диапазон чисел для угадывания
const minNumber = 1;
const maxNumber = 100;

// Генерируем случайное число, которое нужно угадать
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

// Переменная для хранения количества попыток
let attempts = 0;

// Функция для записи протокола игры в файл
function writeToFile(data) {
  fs.appendFileSync('game_log.txt', `${data}\n`);
}

// Функция для игры в "угадай число"
async function guessNumber() {
  // Запрашиваем у пользователя число и проверяем его на корректность
  const userNumber = await readline.questionInt(`Угадайте число от ${minNumber} до ${maxNumber}: `);
  if (userNumber < minNumber || userNumber > maxNumber) {
    console.log(`Вы ввели некорректное число. Попробуйте еще раз.`);
    return guessNumber();
  }

  // Увеличиваем счетчик попыток
  attempts++;

  // Записываем текущую попытку в протокол игры
  writeToFile(`Попытка ${attempts}: ${userNumber}`);

  // Сравниваем число пользователя с загаданным числом
  if (userNumber === randomNumber) {
    console.log(`Поздравляем! Вы угадали число с ${attempts} попыток!`);
    writeToFile(`Правильный ответ: ${randomNumber}`);
  } else if (userNumber < randomNumber) {
    console.log(`Загаданное число больше ${userNumber}.`);
    writeToFile(`Загаданное число больше ${userNumber}.`);
    return guessNumber();
  } else if (userNumber > randomNumber) {
    console.log(`Загаданное число меньше ${userNumber}.`);
    writeToFile(`Загаданное число меньше ${userNumber}.`);
    return guessNumber();
  }
}

// Запускаем игру
guessNumber();
