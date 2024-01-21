import FormSubmitButton from '@/components/cars/FormSubmitButton';
import Image from 'next/image';
import Link from 'next/link';
import { Modal } from '@/components/ui/Model';
import { Suspense } from 'react';
import { bookCar } from '@/lib/actions';
import classes from './page.module.css';
import { getcar } from '@/lib/cars';
import { notFound } from 'next/navigation';
// import { useFormState } from 'react-dom';

async function GetCar({ carSlug }) {
  // const [state, formAction] = useFormState(bookCar, { message: null });
  const car = await getcar(carSlug);
  if (!car) {
    notFound();
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={car.image} alt={car.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{car.title}</h1>
          <p className={classes.manufacturer}>
            by{' '}
            <Link href={`https://www.google.com/search?q=${car.manufacturer}`}>
              {car.manufacturer}
            </Link>
          </p>
          <p className={classes.summary}> {car.summary}</p>
        </div>
      </header>
      <main>
        <div className={classes.instructions}>
          <p className={classes.summary}> {car.summary}</p>
          <h3>Book this car</h3>
          <form className={classes.form}>
            <div className={classes.row}>
              <p>
                <label htmlFor='name'>First name</label>
                <input type='text' id='name' name='name' required />
              </p>
              <p>
                <label htmlFor='lastname'>Last name</label>
                <input type='text' id='lastname' name='lastname' required />
              </p>
            </div>
            <div className={classes.row}>
              <p>
                <label htmlFor='start'>Start Date</label>
                <input type='date' id='start' name='start' required />
              </p>
              <p>
                <label htmlFor='end'>End Date</label>
                <input type='date' id='end' name='end' required />
              </p>
            </div>
            <p className={classes.actions}>
              <FormSubmitButton />
            </p>
          </form>
        </div>
      </main>
    </>
  );
}

export default function CarDetailsPage({ params }) {
  const { carSlug } = params;
  return (
    <>
      <Suspense fallback={<p className={classes.loading}>Loading car...</p>}>
        <GetCar carSlug={carSlug} />
      </Suspense>
    </>
  );
}
