import CarsGrid from '@/components/cars/cars-grid';
import Link from 'next/link';
import { Suspense } from 'react';
import classes from './page.module.css';
import { getCars } from '@/lib/cars';

async function Cars() {
  const cars = await getCars();
  return <CarsGrid cars={cars} />;
}

export default async function CarsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Exquisite cars crafted
          <span className={classes.highlight}> by you.</span>
        </h1>
        <p>
          Choose your favorite cars and experience the thrill of driving. It's
          so exhilarating!!!
        </p>
        <p className={classes.cta}>
          <Link href='/cars/share'>Share your car here</Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<p className={classes.loading}>Loading cars...</p>}>
          <Cars />
        </Suspense>
      </main>
    </>
  );
}
