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
    name: 'Espresso',
    description: 'An intense, full-flavored espresso.',
    category: 'coffee',
    imageSrc:
      'https://www.starbucks.co.th/stb-media/2020/08/1.Espresso-1080-600x600.png',
    price: 95,
    stock: 10,
  },
  {
    name: 'Americano',
    description: 'Rich espresso and pure water poured over ice.',
    category: 'coffee',
    imageSrc:
      'https://www.starbucks.co.th/stb-media/2020/08/40.Iced-Caffe-Americano1080-600x600.png',
    price: 115,
    stock: 10,
  },
  {
    name: 'Latte',
    description: 'Rich espresso and milk poured over ice.',
    category: 'coffee',
    imageSrc:
      'https://www.starbucks.co.th/stb-media/2020/08/42.ICED-LATTE1080-600x600.png',
    price: 125,
    stock: 8,
  },
  {
    name: 'Mocha',
    description:
      'Espresso, chocolate sauce and milk served on ice, topped with whipped cream.',
    category: 'coffee',
    imageSrc:
      'https://www.starbucks.co.th/stb-media/2020/08/41.Iced-Caffe-Mocha1080-600x600.png',
    price: 140,
    stock: 8,
  },
  {
    name: 'Yuzu Cold Brew',
    description:
      'The perfectly balanced of Blue Vending Cold Brew and the citrus Yuzu adding a good freshness during the day.',
    category: 'coffee',
    imageSrc:
      'https://www.starbucks.co.th/stb-media/2022/01/Yuzu-Cold-Brew-1080x1080-1-600x600.png',
    price: 145,
    stock: 8,
  },
  {
    name: 'Iced White Chocolate Mocha',
    descriptions:
      'Espresso meets white chocolate sauce, milk, and whipped cream.',
    category: 'coffee',
    imageSrc:
      'https://www.starbucks.co.th/stb-media/2020/08/46.Iced-White-Chocolate-Mocha1080-600x600.png',
    price: 140,
    stock: 8,
  },
  {
    name: 'Iced Pure Matcha Latte',
    descriptions:
      'An elevated no-sugar matcha powder, infused with milk, syrup and ice.',
    category: 'tea',
    imageSrc:
      'https://www.starbucks.co.th/stb-media/2023/02/Spring23_Iced-Pure-Matcha-Latte.png',
    price: 150,
    stock: 8,
  },
  {
    name: 'Pure Matcha Frappuccino®',
    descriptions:
      'An elevated no-sugar matcha powder, blended with syrup, milk and ice. Topped with whipped cream.',
    category: 'tea',
    imageSrc:
      'https://www.starbucks.co.th/stb-media/2023/02/Spring23_Pure-Matcha-Frappuccino%C2%AE-Blended-Beverage.png',
    price: 175,
    stock: 8,
  },
  {
    name: 'Earl Grey Tea',
    descriptions: 'Black tea, fragrant bergamot and lavender.',
    category: 'tea',
    imageSrc:
      'https://www.starbucks.co.th/stb-media/2020/08/22.Earl-Grey1080.png',
    price: 95,
    stock: 8,
  },
  {
    name: 'Earl Grey Tea Latte',
    descriptions:
      'Earl Grey Tea with vanilla syrup, hot water, steamed milk and foam.',
    category: 'tea',
    imageSrc:
      'https://www.starbucks.co.th/stb-media/2020/08/27.Earl-Grey-Tea-Latte1080-600x600.png',
    price: 130,
    stock: 8,
  },
  {
    name: 'Chai Tea',
    descriptions:
      'Black tea infused with warm clove, cardamom, cinnamon and ginger notes.',
    category: 'tea',
    imageSrc:
      'https://www.starbucks.co.th/stb-media/2020/08/21.Chai-Brew-Tea1080.png',
    price: 95,
    stock: 8,
  },
  {
    name: 'Chai Tea Latte',
    descriptions: 'Black tea with perfect balance of sweet and spicy.',
    category: 'tea',
    imageSrc:
      'https://www.starbucks.co.th/stb-media/2020/08/25.Chai-Tea-Latte1080.png',
    price: 130,
    stock: 8,
  },
  {
    name: 'Hojicha Tea Latte',
    descriptions: 'A roasted Japanese green tea latte with steamed milk.',
    category: 'tea',
    imageSrc:
      'https://www.starbucks.co.th/stb-media/2020/08/29.Hot_Hojicha-Tea-Latte.png',
    price: 140,
    stock: 8,
  },
  {
    name: 'Classic Chocolate',
    descriptions:
      'Milk and bittersweet chocolate with whipped cream and chocolate sauce.',
    category: 'non-coffee',
    imageSrc:
      'https://www.starbucks.co.th/stb-media/2020/08/32.Classic-Chocolate1080.png',
    price: 115,
    stock: 8,
  },
  {
    name: 'Signature Chocolate',
    descriptions:
      'Cocoas and fresh milk with whipped cream and chocolate powder.',
    category: 'non-coffee',
    imageSrc:
      'https://www.starbucks.co.th/stb-media/2020/08/34.Signature-Chocolate1080-600x600.png',
    price: 135,
    stock: 8,
  },
  {
    name: 'Cold Milk',
    descriptions: 'A simply beverage served chilled or over ice.',
    category: 'non-coffee',
    imageSrc:
      'https://www.starbucks.co.th/stb-media/2020/08/86.Iced_Milk1080.png',
    price: 105,
    stock: 8,
  },
])
