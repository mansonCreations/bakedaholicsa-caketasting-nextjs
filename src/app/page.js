// pages/index.js

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { title, nav_text_page, nav_cake_tasting_header, nav_cake_wedding_header, nav_request_quote_header, coming_soon} from '../styles/language';
export default function Home() {

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
            <h3 className={styles.text}>{nav_text_page}</h3>
          </a>
        </div>
        <div className={styles.navRight}>
          <button className={styles.burgerMenu}>
            <span className={styles.burgerBar}></span>
            <span className={styles.burgerBar}></span>
            <span className={styles.burgerBar}></span>
          </button>
        </div>
      </nav>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> Mobile App
        </h1> */}

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          <Link href="/caketesting" className={styles.card}>
            <h3 className={styles.text}>{nav_cake_tasting_header}</h3>
         
          </Link>

          <a href="#" className={styles.card}>
            <h3 className={styles.text}>{nav_cake_wedding_header}</h3>
           
          </a>
          <a href="/quoterequestcontroller" className={styles.card}>
            <h3 className={styles.text}>{nav_request_quote_header}</h3>
           
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
}
