'use client';

import React, { useRef, useState } from 'react';

import Image from 'next/image';
import classes from './image-picker.module.css';

export default function ImagePiker({ name, label }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();
  const handlePickImage = () => {
    imageInput.current.click();
  };

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const reader = new FileReader();
    console.log(file);
    reader.onload = () => {
      setPickedImage(reader.result);
    };
    reader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image src={pickedImage} alt='Preview' fill />
          ) : (
            <p>Please pick an image</p>
          )}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          name={name}
          accept='image/*'
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type='button'
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
