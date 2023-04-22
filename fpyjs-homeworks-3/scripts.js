class Good {
  constructor(id, name, description, sizes, price, available) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.sizes = sizes;
    this.price = price;
    this.available = available;
  }
  setAvailable(availability) {
    this.available = availability;
  }
}

class GoodsList {
  #goods = [];

  constructor(filter, sortPrice = false, sortDir = true) {
    this.filter = filter;
    this.sortPrice = sortPrice;
    this.sortDir = sortDir;
  }

  get list() {
    const filteredGoods = this.#goods.filter((good) => {
      return this.filter.test(good.name);
    });

    if (this.sortPrice) {
      filteredGoods.sort((a, b) => {
        if (this.sortDir) {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }

    return filteredGoods.filter((good) => good.available);
  }

  add(good) {
    this.#goods.push(good);
  }

  remove(id) {
    this.#goods = this.#goods.filter((good) => good.id !== id);
  }
}

class BasketGood extends Good {
  constructor(good, amount) {
    super(good.id, good.name, good.description, good.sizes, good.price, good.available);
    this.amount = amount;
  }
}

class Basket {
  goods = [];

  get totalAmount() {
    return this.goods.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
  }

  get totalSum() {
    return this.goods.reduce((acc, curr) => {
      return acc + curr.amount * curr.price;
    }, 0);
  }

  add(good, amount = 1) {
    const existingGood = this.goods.find((item) => item.id === good.id);
    if (existingGood) {
      existingGood.amount += amount;
    } else {
      this.goods.push(new BasketGood(good, amount));
    }
  }

  remove(good, amount = 1) {
    const existingGood = this.goods.find((item) => item.id === good.id);
    if (existingGood) {
      existingGood.amount -= amount;
      if (existingGood.amount <= 0) {
        this.goods = this.goods.filter((item) => item.id !== good.id);
      }
    }
  }

  clear() {
    this.goods = [];
  }

  removeUnavailable() {
    this.goods = this.goods.filter((good) => good.available);
  }
}

// Создаем экземпляры класса Good
const good1 = new Good(1, "Товар 1", "Описание товара 1", ["S", "M", "L"], 1000, true);
const good2 = new Good(2, "Товар 2", "Описание товара 2", ["S", "M", "L"], 500, false);
const good3 = new Good(3, "Товар 3", "Описание товара 3", ["S", "M", "L"], 2500, true);
const good4 = new Good(4, "Товар 4", "Описание товара 4", ["S", "M", "L"], 750, true);
const good5 = new Good(5, "Товар 5", "Описание товара 5", ["S", "M", "L"], 1200, false);