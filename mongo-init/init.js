conn = new Mongo()
db = conn.getDB('blue-pi-vending')

db.cashes.insertMany([
  {
    type: 'coin',
    value: 1,
    amount: 30,
  },
  {
    type: 'coin',
    value: 5,
    amount: 30,
  },
  {
    type: 'coin',
    value: 10,
    amount: 30,
  },
  {
    type: 'banknote',
    value: 20,
    amount: 30,
  },
  {
    type: 'banknote',
    value: 50,
    amount: 30,
  },
  {
    type: 'banknote',
    value: 100,
    amount: 30,
  },
  {
    type: 'banknote',
    value: 500,
    amount: 30,
  },
  {
    type: 'banknote',
    value: 1000,
    amount: 10,
  },
])

db.products.insertMany([
  {
    name: 'Americano',
    description: 'some desc',
    imageSrc: 'src',
    price: 110,
    stock: 10,
  },
  {
    name: 'Latte',
    description: 'latte desc',
    imageSrc: 'latte src',
    price: 120,
    stock: 8,
  },
])
