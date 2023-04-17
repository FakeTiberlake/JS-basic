// каталог товаров
const catalog = [
  {
    id: 1,
    name: 'Футболка',
    description: 'Футболка из хлопка',
    size: ['S', 'M', 'L',],
    price: 1000,
    available: true,
  },
  {
    id: 2,
    name: 'Джинсы',
    description: 'Джинсы прямого кроя',
    size: ['S', 'M', 'L', 'XL',],
    price: 2000,
    available: true, 
  },
  {
    id: 3,
    name: 'Кеды',
    description: 'Кожаные кеды',
    size: ['S', 'M', 'L',],
    price: 2000,
    available: false, 
  },
  {
    id: 4,
    name: 'Шорты',
    description: 'Шорты из лёгкой ткани',
    size: ['S', 'M', 'L',],
    price: 1500,
    available: true, 
  },
  {
    id: 5,
    name: 'Платье',
    description: 'Летнее платье из хлопка',
    size: ['S', 'M', 'L',],
    price: 2500,
    available: true, 
  },
]

// корзина
const cart = [
  { good: catalog[0], amount: 2 },
  { good: catalog[3], amount: 1 },
];

// функция для добавления товара в корзину
function addToCart(good, amount) {
  let existGood = cart.find(item => item.good.id === good.id);

  if (existGood) {
    existGood.amount += amount;
  } else {
    cart.push({ good, amount });
  }
}

// удаление товара из корзины
function removeFromCart(good, amount) {
  let existGood = cart.find(item => item.good.id === good.id);

  if (existGood) {
    if (existGood.amount > amount) {
      existGood.amount -= amount;
    } else {
      let index = cart.indexOf(existGood);
      cart.spliсe(index, 1);
    }
  }
}

// Функция полной очистки корзины
function clearCart() {
  cart.length = 0;
}

// Функция вычисления общего количества и стоимости товаров в корзине
function calculateCart() {
  let totalAmount = 0;
  let totalSumm = 0;

  for (const item of cart) {
    totalAmount += item.amount;
    totalSumm += item.good.price * item.amount;
  }

  return { totalAmount, totalSumm };
}

function calculateCart() {
  let totalAmount = 0;
  let totalSumm = 0;

  cart.forEach(item => {
    totalAmount += item.amount;
    totalSumm += item.good.price * item.amount;
  });

  return { totalAmount, totalSumm };
}

// Добавление товара в корзину
addToCart(catalog[1], 3);

// Удаление товара из корзины
removeFromCart(catalog[0], 1);

// Очистка корзины
clearCart();

const cartInfo = calculateCart();
console.log('Общее количество товаров в корзине:', cartInfo.totalAmount);
console.log('Общая стоимость товаров в корзине, рублей:', cartInfo.totalSumm);