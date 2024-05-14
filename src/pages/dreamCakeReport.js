// import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/CakeTesting.module.css';
import React, { useState } from 'react';

const dreamCakeReport = () => {

  return (

  <div className={styles.container}>
        <Head>
          <title>BakedaHolicSA</title>
          <meta name="description" content="Next.js Mobile App Template" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <nav className={styles.nav}>
          <div className={styles.navLeft}>
            <a href="/brideReportMain" className={styles.logo}>
            <h3 className={styles.text}>Dream Cake</h3>
            </a>
          </div>
        </nav>

        <main className={styles.main}>

          <div className={styles.grid}>
            <Link href="/reportMain" className={styles.card}>
            <label>
            <p3>
            The top 5 cakes according to your taste buds
            <br>
            </br>
            <br>
            </br>
            1. Chocolate cake with Strawberry & buttercream filling
            <br>
            </br>
            ﻿2. Vanilla
            </p3>
            <br>
            </br>
            <p3>
            ﻿3. Coffee
            </p3>
            <br></br>
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

export default dreamCakeReport;
