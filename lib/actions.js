'use server';

import { addCar, addUser, getusers } from './cars';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const validateText = (text) => {
  return !text || text.trim() === '';
};

export async function shareCar(prevState, formData) {
  const car = {
    title: formData.get('name'),
    manufacturer: formData.get('manufacturer'),
    model: formData.get('model'),
    summary: formData.get('summary'),
    image: formData.get('image'),
    price: formData.get('price'),
    year: formData.get('year'),
  };

  if (
    validateText(car.title) ||
    validateText(car.manufacturer) ||
    validateText(car.model) ||
    validateText(car.summary) ||
    car.price < 0 ||
    car.image.size === 0 ||
    car.year < 1900
  ) {
    return {
      message: 'Please fill in all fields correctly',
    };
  }
  await addCar(car);
  revalidatePath('/cars', 'page');
  redirect('/cars');
}
export async function bookCar(prevState, formData) {
  console.log(formData);
}

export const handleLogin = async (prev, formData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  const users = await getusers();
  console.log(users);

  for (const user of users) {
    console.log(user.email);
    console.log(user.password);
    console.log(email);
    console.log(password);
    if (user.email === email && user.password === password) {
      console.log('passed');
      redirect('/cars');
    }
  }
  redirect('/signup');
};

export const handleSignUp = async (prev, formData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  console.log(name, email, password);
  addUser({ name, email, password });
};
