'use server';

import fs from 'node:fs';
import slugify from 'slugify';
import sql from 'better-sqlite3';

const db = sql('cars.db');
const dbUsers = sql('users.db');

export async function getCars() {
  await new Promise((resolve) => setInterval(resolve, 2000));

  return db.prepare('SELECT * FROM cars').all();
}

export async function getcar(slug) {
  await new Promise((resolve) => setInterval(resolve, 2000));

  return db.prepare('SELECT * FROM cars WHERE slug = ?').get(slug);
}

export async function addCar(car) {
  car.slug = slugify(car.title, { lower: true });
  const extention = car.image.name.split('.').pop();
  const fileName = `${car.slug}.${extention}`;
  const stream = fs.createWriteStream(`./public/images/${fileName}`);
  const bufferImage = await car.image.arrayBuffer();
  stream.write(Buffer.from(bufferImage), (error) => {
    if (error) {
      throw new Error('Error saving Image!!');
    }
  });
  car.image = `/images/${fileName}`;
  db.prepare(
    `
  INSERT INTO cars (
    title, slug, image, summary, manufacturer, model, year, price
  )VALUES (
    @title, @slug, @image, @summary, @manufacturer, @model, @year, @price
  )`
  ).run(car);
}

export async function getusers() {
  const users = db.prepare('SELECT * FROM users').all();

  return users;
}

export async function addUser(user) {
  dbUsers
    .prepare(
      `
  INSERT INTO users (
    email, name, password, avatar, created_at, updated_at
  )VALUES (
    @email, @name, @password, @avatar, @created_at, @updated_at
  )`
    )
    .run(user);
}
