const sql = require('better-sqlite3');
const db = sql('cars.db');

const dummyCars = [
  {
    title: 'Sleek Black Sports Car',
    slug: 'sleek-black-sports-car',
    image: '/images/1.jpg',
    summary:
      'A sleek black sports car with a sophisticated design and high-performance features, perfect for speed enthusiasts.',
    manufacturer: 'Manufacturer A',
    model: 'Model 1',
    year: 2020,
    price: '$90,000',
  },
  {
    title: 'Blue Racing Coupe',
    slug: 'blue-racing-coupe',
    image: '/images/2.jpg',
    summary:
      'A vibrant blue racing coupe with track-ready capabilities and an aerodynamic body, boasting an impressive racing heritage.',
    manufacturer: 'Manufacturer B',
    model: 'Model 2',
    year: 2021,
    price: '$150,000',
  },
  {
    title: 'Vintage Red and White Classic',
    slug: 'vintage-red-white-classic',
    image: '/images/3.jpg',
    summary:
      'A beautifully restored vintage car in red and white, featuring classic lines and an iconic design from a bygone era.',
    manufacturer: 'Manufacturer C',
    model: 'Model 3',
    year: 1960,
    price: '$45,000',
  },
  {
    title: 'Modern Luxury Sedan',
    slug: 'modern-luxury-sedan',
    image: '/images/4.jpg',
    summary:
      'A modern luxury sedan with state-of-the-art technology and comfort, designed for the discerning driver who values sophistication.',
    manufacturer: 'Manufacturer D',
    model: 'Model 4',
    year: 2023,
    price: '$70,000',
  },
  {
    title: 'Elegant Sports Sedan',
    slug: 'elegant-sports-sedan',
    image: '/images/5.jpg',
    summary:
      'An elegant sports sedan combining performance with luxury, featuring a sleek design and a dynamic driving experience.',
    manufacturer: 'Manufacturer D',
    model: 'Model 5',
    year: 2023,
    price: '$85,000',
  },
  {
    title: 'Stylish Blue Convertible',
    slug: 'stylish-blue-convertible',
    image: '/images/6.jpg',
    summary:
      'A stylish blue convertible with a sleek design and high-quality interior, perfect for enjoying the open road.',
    manufacturer: 'Manufacturer E',
    model: 'Model 6',
    year: 2019,
    price: '$55,000',
  },
  {
    title: 'Classic Beach Roadster',
    slug: 'classic-beach-roadster',
    image: '/images/7.jpg',
    summary:
      'A classic roadster with a timeless design and open-top driving pleasure, ideal for scenic drives along the coast.',
    manufacturer: 'Manufacturer F',
    model: 'Model 7',
    year: 1965,
    price: '$120,000',
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS cars (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       manufacturer TEXT NOT NULL,
       model TEXT NOT NULL,
       year INTEGER NOT NULL,
       price TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO cars VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @manufacturer,
         @model,
         @year,
         @price
      )
   `);

  for (const car of dummyCars) {
    stmt.run(car);
  }
}

initData();
