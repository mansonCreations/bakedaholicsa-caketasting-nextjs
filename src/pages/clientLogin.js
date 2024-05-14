// import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/CakeTesting.module.css';
import React, { useState } from 'react';
import loginImage from './loginImage.png';
import { title, client_login, cake_tasting_p6,
  cake_tasting_p7, login, token} from '../styles/language';
const clientLogin = () => {
 
  const [password, setPassword] = useState('');
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleLogin = () => {
    <a href="/clientReport" className={styles.logo}>
    </a>
  };
  return (

  <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <meta name="description" content="Next.js Mobile App Template" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <nav className={styles.nav}>
          <div className={styles.navLeft}>
            <a href="/" className={styles.logo}>
            <h3 className={styles.text}>{client_login}</h3>
            </a>
          </div>
        </nav>

        <main className={styles.main}>

          <p className={styles.description}>
          {cake_tasting_p6}
          </p>
          <p className={styles.description}>
          {cake_tasting_p7} 
          </p>

          <div className={styles.grid}>
            <Link href="/clientReport" className={styles.card}>
              <label>
            {token}
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button onClick={handleLogin} className={styles.loginButton}> {login}
          {/* <img src="/loginImage.png" alt="Login"/> */}
        </button>
            </Link>
           
            {/* Add more cards for additional pages */}
          </div>

        </main>

        {/* <footer className={styles.footer}> */}
          {/* <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a> */}
      {/* <button onClick={handleConfirmBooking} className={styles.text}> 
      Confirm Booking
      </button> */}
        {/* </footer> */}
      </div>
  );
};

export default clientLogin;
