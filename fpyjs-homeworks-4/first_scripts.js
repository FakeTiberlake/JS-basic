function getPasswordChecker(password) {
  return function(passwordToCheck) {
    return password === passwordToCheck;
  };
}

// Тестовые вызовы

const password = "myPassword123";
const checkPassword = getPasswordChecker(password);

console.log(checkPassword("wrongPassword")); // false
console.log(checkPassword("myPassword123")); // true
console.log(checkPassword("MyPassword123")); // false