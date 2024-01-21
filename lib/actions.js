'use server';

import { addCar } from './cars';
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
