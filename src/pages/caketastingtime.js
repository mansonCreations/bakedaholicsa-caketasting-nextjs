// import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/CakeTesting.module.css';
import { title, coming_soon, cake_tasting_p5,
  new_cake_tasting} from '../styles/language';
import React, { useState } from 'react';
const caketastingtime = () => {
  const [chocolateChecked, setChocolateChecked] = useState(false);
  const [chocolateGanChecked, setChocolateGanChecked] = useState(false);
  const [vanillaChecked, setVanillaChecked] = useState(false);
  const [caramelChecked, setCaramelChecked] = useState(false);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [numTesters, setNumTesters] = useState('');

  const handleChocolateChange = () => {
    setChocolateChecked(!chocolateChecked);
  };

  const handleVanillaChange = () => {
    setVanillaChecked(!vanillaChecked);
  };

  const handleCaramelChange = () => {
    setCaramelChecked(!caramelChecked);
  };
  const handleChocolateGanChecked = () => {
    setChocolateGanChecked(!chocolateGanChecked);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleNumTestersChange = (event) => {
    setNumTesters(event.target.value);
  };

  const handleConfirmBooking = () => {
    // Here you can implement the logic for confirming the booking with the set details
    // For example, you can send a request to your server or perform any other necessary action
    console.log('Booking confirmed with the following details:');
    console.log('Name:', name);
    console.log('Address:', address);
    console.log('Number of Testers:', numTesters);
    console.log('Chocolate:', chocolateChecked);
    console.log('Vanilla:', vanillaChecked);
    console.log('Caramel:', caramelChecked);
    console.log('Chocolate Ganache:', chocolateGanChecked);
    // Additional logic here...
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
            <h3 className={styles.text}>{new_cake_tasting}</h3>
            </a>
          </div>
        </nav>

        <main className={styles.main}>

          <p className={styles.description}>
          {cake_tasting_p5}
          </p>

          <div className={styles.grid}>
            <Link href="/clientLogin" className={styles.card}>
              <h3 className={styles.text}>Manson</h3>
            <label>
            16 June 2023
          </label>
            </Link>
            <a href="/clientLogin" className={styles.card}>
              <h3 className={styles.text}>de Witt</h3>
              <label>
            30 November 2024
          </label>
            </a>
            <a href="/clientLogin" className={styles.card}>
        <h3 className={styles.text}>de Beer</h3>
        <div>
          <label>
          X.X.X
          </label>
        </div>
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
      {/* <button onClick={handleConfirmBooking} className={styles.text}>  */}
      {coming_soon}
      {/* </button> */}
        </footer>
      </div>
  );
};

export default caketastingtime;
