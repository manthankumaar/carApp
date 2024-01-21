'use client';

import GoogleLoginButton from '../ui/LoginButton';
import Image from 'next/image';
import Link from 'next/link';
import MainHeaderBackground from './main-header-background';
import { Modal } from '../ui/Model';
import NavLink from './nav-link';
import classes from './main-header.module.css';
import logoImg from '@/assets/logo.png';
import { useState } from 'react';

export default function MainHeader({ params }) {
  const [loginModal, setLoginModal] = useState(false);
  const handleLoginSuccess = (token) => {
    // Handle successful login, e.g., save the token in the state
    console.log('Token:', token);
  };

  const handleLoginFailure = (error) => {
    // Handle login failure, e.g., show an error message
    console.error('Login failure:', error);
  };
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
              <NavLink href='/community'>Join Community</NavLink>
            </li>
            <li>
              {/* <button
                href=''
                onClick={() => {
                  setLoginModal(true);
                }}
              >
                Login
              </button> */}
            </li>
          </ul>
        </nav>
        <Modal
          isVisible={loginModal}
          title='Share your car!'
          onClose={() => {
            setLoginModal(false);
          }}
        >
          <GoogleLoginButton
            onLoginSuccess={handleLoginSuccess}
            onLoginFailure={handleLoginFailure}
          />
        </Modal>
      </header>
    </>
  );
}
