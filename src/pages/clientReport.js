// import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/CakeTesting.module.css';
import React, { useState } from 'react';
import { title, client, report} from '../styles/language';
const clientReport = () => {

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
            <h3 className={styles.text}>{client}</h3>
            </a>
          </div>
        </nav>

        <main className={styles.main}>

          <div className={styles.grid}>
            <Link href="/reportMain" className={styles.card}>
            <label>
            {report}
            </label>
            </Link>
           
            {/* Add more cards for additional pages */}
          </div>
          <div className={styles.grid}>
            <Link href="/brideReportMain" className={styles.card}>
            <label>
            Bride
            </label>
            </Link>
           
            {/* Add more cards for additional pages */}
          </div>
          <div className={styles.grid}>
            <Link href="/clientReport" className={styles.card}>
            <label>
            Groom
            </label>
            </Link>
           
            {/* Add more cards for additional pages */}
          </div>
          <div className={styles.grid}>
            <Link href="/clientReport" className={styles.card}>
            <label>
            Party1
            </label>
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

export default clientReport;
