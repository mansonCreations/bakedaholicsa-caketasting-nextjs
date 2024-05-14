import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/CakeTesting.module.css';
import { useState } from 'react'; // Importing useState hook for managing form state
import { title, quoteHeader, cake_flavours, cake_tasting_p2, new_cake_tasting, tasting_time, coming_soon, get_quote } from '../styles/language';

const quoterequestcontroller = () => {
  // State variables for form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [chocolateChecked, setChocolateChecked] = useState(false);
  const [chocolateGanChecked, setChocolateGanChecked] = useState(false);
  const [vanillaChecked, setVanillaChecked] = useState(false);
  const [caramelChecked, setCaramelChecked] = useState(false);
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform action with form data (e.g., send to backend)
    console.log('Form submitted:', { fullName, email, phoneNumber, message });
    // Reset form fields after submission
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
  };

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

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Next.js Mobile App Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={styles.logo}>
            <h3 className={styles.text}>{quoteHeader}</h3>
          </Link>
        </div>
      </nav>
      <p className={styles.description}>
          Please tick the following boxes to get a quote
      </p>

        <div className={styles.grid}>
        <h3 className={styles.text}>{cake_flavours}</h3>
            <label>
              <br></br>
              <br></br>
            <input
              type="checkbox"
              checked={chocolateChecked}
              onChange={handleChocolateChange}
            />
            Chocolate
          </label>
          <br></br>
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={vanillaChecked}
              onChange={handleVanillaChange}
            />
            Vanilla
          </label>
        </div>
          
      <div className={styles.grid}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name:</label>
          <br></br>
          <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          <br></br>
          <label htmlFor="email">Email:</label>
          <br></br>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br></br>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <br></br>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <br></br>
          <label htmlFor="message">Message:</label>
          <br></br>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <br></br>
        </form>
      </div>

      <footer className={styles.footer}>
      <button onClick={handleSubmit} className={styles.text}> 
      {quoteHeader}
      </button>
      </footer>
    </div>
  );
};

export default quoterequestcontroller;