import ImageSlideshow from '@/components/images/image-slideshow';
import Link from 'next/link';
import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Cars for NextLevel People</h1>
            <p>Drive & share Cars from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href='/community'>Join the Community</Link>
            <Link href='/cars'>Explore Cars</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Cars is a platform for car enthusiasts to share their
            passion for automobiles. It's a place to discover new models, share
            experiences, and connect with other car lovers.
          </p>
          <p>
            Join us and become part of a global community that appreciates the
            power, beauty, and innovation of vehicles.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Cars?</h2>
          <p>
            NextLevel Cars brings together individuals who share a passion for
            automotive excellence. From vintage classics to the latest sports
            cars, our platform is the ultimate destination for those who live to
            drive.
          </p>
          <p>
            Explore a vast collection of cars, read detailed reviews, and
            interact with other members of the community to deepen your love for
            cars.
          </p>
        </section>
      </main>
    </>
  );
}
