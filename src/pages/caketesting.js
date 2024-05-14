import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/CakeTesting.module.css';
import { title, cake_tasting, cake_tasting_p1, cake_tasting_p2, new_cake_tasting, tasting_time, coming_soon} from '../styles/language';
const caketesting = () => {
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
          <h3 className={styles.text}>{cake_tasting}</h3>
          </a>
        </div>
      </nav>

      <main className={styles.main}>

        <p className={styles.description}>
        {cake_tasting_p1}
        </p>
        <p className={styles.description}>
        {cake_tasting_p2}
        </p>

        <div className={styles.grid}>
          <Link href="/caketastingnew" className={styles.card}>
            <h3 className={styles.text}>{new_cake_tasting}</h3>
         
          </Link>

          <a href="/caketastingtime" className={styles.card}>
            <h3 className={styles.text}>{tasting_time}</h3>
           
          </a>

          {/* Add more cards for additional pages */}
        </div>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a> */}
        <h3 className={styles.text}>{coming_soon}</h3>
      </footer>
    </div>
  );
};

export default caketesting;
