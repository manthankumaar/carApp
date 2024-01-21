'use client';

import FormSubmitButton from '@/components/cars/FormSubmitButton';
import ImagePiker from '@/components/ui/ImagePicker';
import classes from './page.module.css';
import { shareCar } from '@/lib/actions';
import { useFormState } from 'react-dom';

export default function ShareCarPage() {
  const [state, formAction] = useFormState(shareCar, { message: null });
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite Car</span>
        </h1>
        <p>Or any other Car you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor='name'>Car name</label>
              <input type='text' id='name' name='name' required />
            </p>
            <p>
              <label htmlFor='manufacturer'>Car Manufacturer</label>
              <input
                type='text'
                id='manufacturer'
                name='manufacturer'
                required
              />
            </p>
          </div>
          <div className={classes.row}>
            <p>
              <label htmlFor='price'>Car price</label>
              <input type='number' id='price' name='price' required />
            </p>
            <p>
              <label htmlFor='year'>Car Year</label>
              <input type='date' id='year' name='year' required />
            </p>
          </div>

          <p>
            <label htmlFor='model'>Model</label>
            <input type='text' id='model' name='model' required />
          </p>
          <p>
            <label htmlFor='summary'>Short Summary</label>
            <input type='text' id='summary' name='summary' required />
          </p>

          <ImagePiker name={'image'} label={'Car Image'} />
          {state.message && (
            <p className={classes.highlight}>{state.message}</p>
          )}
          <p className={classes.actions}>
            <FormSubmitButton />
          </p>
        </form>
      </main>
    </>
  );
}
