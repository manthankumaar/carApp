import Image from 'next/image';
import Link from 'next/link';
import classes from './car-item.module.css';

export default function CarItem({ title, slug, image, summary, manufacturer }) {
  return (
    <article className={classes.car}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {manufacturer}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/cars/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
