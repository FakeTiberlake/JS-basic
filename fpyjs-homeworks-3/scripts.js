class Good {
  constructor(id, name, description, sizes, price, available) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.sizes = sizes;
    this.price = price;
    this.available = available;
  }

  setAvailable(available) {
    this.available = available;
  }
}

class GoodsList {
  #goods = [];
  filter = /./;
  sortPrice = false;
  sortDir = true;

  get list() {
    const filteredGoods = this.#goods.filter((good) => {
      return this.filter.test(good.name);
    });

    if (this.sortPrice) {
      filteredGoods.sort((a, b) => {
        if (a.price > b.price) {
          return this.sortDir ? 1 : -1;
        }
        if (a.price < b.price) {
          return this.sortDir ? -1 : 1;
        }
        return 0;
      });
    }

    return filteredGoods.filter((good) => {
      return good.available;
    });
  }

  add(good) {
    this.#goods.push(good);
  }

  remove(id) {
    const index = this.#goods.findIndex((good) => {
      return good.id === id;
    });

    if (index >= 0) {
      this.#goods.splice(index, 1);
    }
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
    return this.goods.reduce((total, basketGood) => {
      return total + basketGood.amount * basketGood.price;
    }, 0);
  }

  get totalSum() {
    return this.goods.reduce((total, basketGood) => {
      return total + basketGood.amount;
    }, 0);
  }

  add(good, amount) {
    const basketGood = this.goods.find((basketGood) => {
      return basketGood.id === good.id;
    });

    if (basketGood) {
      basketGood.amount += amount;
    } else {
      this.goods.push(new BasketGood(good, amount));
    }
  }

  remove(good, amount) {
    const basketGood = this.goods.find((basketGood) => {
      return basketGood.id === good.id;
    });

    if (basketGood) {
      basketGood.amount -= amount;

      if (basketGood.amount <= 0) {
        const index = this.goods.findIndex((basketGood) => {
          return basketGood.id === good.id;
        });
        this.goods.splice(index, 1);
      }
    }
  }

  clear() {
    this.goods = [];
  }

  removeUnavailable() {
    this.goods = this.goods.filter((basketGood) => {
      return basketGood.available;
    });
  }
}

// Создаем экземпляры класса Good
const good1 = new Good(1, "Товар 1", "Описание товара 1", ["S", "M", "L"], 1000, true);
const good2 = new Good(2, "Товар 2", "Описание товара 2", ["S", "M", "L"], 500, false);
const good3 = new Good(3, "Товар 3", "Описание товара 3", ["S", "M", "L"], 2500, true);
const good4 = new Good(4, "Товар 4", "Описание товара 4", ["S", "M", "L"], 750, true);
const good5 = new Good(5, "Товар 5", "Описание товара 5", ["S", "M", "L"], 1200, false);
