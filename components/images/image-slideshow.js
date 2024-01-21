'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import car1 from '@/public/images/1.jpg';
import car2 from '@/public/images/2.jpg';
import car3 from '@/public/images/3.jpg';
import car4 from '@/public/images/4.jpg';
import car5 from '@/public/images/5.jpg';
import car6 from '@/public/images/6.jpg';
import classes from './image-slideshow.module.css';

export default function ImageSlideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: car1, alt: 'Burger' },
    { src: car2, alt: 'Curry' },
    { src: car3, alt: 'Dumpling' },
    { src: car4, alt: 'Mac and Cheese' },
    { src: car5, alt: 'Pizza' },
    { src: car6, alt: 'Schnitzel' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        return prev < images.length - 1 ? prev + 1 : 0;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          className={index === currentImage ? classes.active : ''}
        />
      ))}
    </div>
  );
}
