import Image from 'next/image';
import Link from 'next/link';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';
import classes from './main-header.module.css';
import { handleLogin } from '@/lib/cars';
import logoImg from '@/assets/logo.png';

export default async function MainHeader({ params }) {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href='/'>
          <Image src={logoImg} alt='A plate with food on it' priority />
          NextLevel Cars
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/cars'>Browse Cars</NavLink>
            </li>
            <li>
              <NavLink href='/signin'>Signin</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Join Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
