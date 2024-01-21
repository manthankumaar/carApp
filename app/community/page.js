import Image from 'next/image';
import classes from './page.module.css';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import mealIcon from '@/assets/icons/meal.png';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Cars</span>
        </h1>
        <p>Join our community and share your automotive experiences!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt='A stylish car' />
            <p>Share & discover car models</p>
          </li>
          <li>
            <Image
              src={communityIcon}
              alt='A group of people, discussing cars'
            />
            <p>Connect with fellow car enthusiasts</p>
          </li>
          <li>
            <Image src={eventsIcon} alt='People at a car show event' />
            <p>Access to exclusive car meets & shows</p>
          </li>
        </ul>
      </main>
    </>
  );
}
