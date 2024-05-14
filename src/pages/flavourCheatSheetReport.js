// import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/CakeTesting.module.css';
import React, { useState } from 'react';

const flavourCheatSheetReport = () => {

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
            <h3 className={styles.text}>Flavour Cheat Sheet</h3>
            </a>
          </div>
        </nav>

        <main className={styles.main}>

          <div className={styles.grid}>
            <Link href="/reportMain" className={styles.card}>
            <label>
            <p3>
            Chocolate cake
            <br>
            </br>
            - strawberry buttercream and caramel
            <br>
            </br>
            - coffee infused
            </p3>
            <br>
            </br>
            <br>
            </br>
            <p3>
            Red velvet
            <br>
            </br>
            - Vanillabuttercream
            <br>
            </br>
            - cookies en buttercream
            <br>
            </br>
            - strawberry and Buttercream 
            </p3>
            <br>
            </br>
            <br>
            </br>
            <p3>
            Vanilla
            <br>
            </br>
            - caramel & coffee
            <br>
            </br>
            - strawberry and caramel
            </p3>
            <br>
            </br>
            <br>
            </br>
            <p3>
            Pink champagne
            <br>
            </br>
            - apple and vanilla
            <br>
            </br>
            - strawberry and buttercream
            <br>
            </br>
            - caramel 
            </p3>
            <br>
            </br>
            <br>
            </br>
            <p3>
            Vanilla latte
            <br>
            </br>
            - Strawberry and Buttercream 
            <br>
            </br>
            - apple and vanilla 
            <br>
            </br>
            - cookies and cream 
            </p3>
            <br>
            </br>
            <br>
            </br>
            <p3>
            Coffee cake
            <br>
            </br>
            - Strawberry & cream
            <br>
            </br>
            - chocolate
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

export default flavourCheatSheetReport;
