'use client';

import { handleSignUp } from '@/lib/actions';
import styles from './SignIn.module.css';
import { useFormState } from 'react-dom';

const signUp = () => {
  const [state, formAction] = useFormState(handleSignUp, { message: null });
  return (
    <div>
      <main className={styles.mainContainer}>
        <section className={styles.sectionContainer}>
          <h3 className={styles.title}>Welcome to Startup</h3>
          <p className={styles.description}>Sign in to your account.</p>
        </section>

        <section className={styles.formContainer}>
          <form className={styles.form} action={formAction}>
            <div className={styles.inputContainer}>
              <label className={styles.label} htmlFor='name'>
                Name
              </label>
              <input
                className={styles.input}
                type='text'
                id='name'
                name='name'
              />
              <hr />
              <label className={styles.label} htmlFor='email'>
                Email
              </label>
              <input
                className={styles.input}
                type='text'
                id='email'
                name='email'
              />
            </div>

            <div className={styles.inputContainer}>
              <label className={styles.label} htmlFor='password'>
                Password
              </label>
              <input
                className={styles.input}
                type='password'
                id='password'
                name='password'
              />
            </div>

            <div className={styles.forgotPasswordLink}>
              <a className={styles.a} href='#'>
                Forgot your password?
              </a>
            </div>

            <button className={styles.signInButton} type='submit'>
              Sign In
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default signUp;
