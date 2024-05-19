import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/CakeTesting.module.css';
import { useState } from 'react'; // Importing useState hook for managing form state
import { title, quoteHeader, cake_flavours, quote_note, new_cake_tasting, tasting_time, coming_soon, get_quote } from '../styles/language';

const quoterequestcontroller = () => {
  // State variables for form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [note, setMessage] = useState('');
  const [chocolateChecked, setChocolateChecked] = useState(false);
  const [chocolateGanChecked, setChocolateGanChecked] = useState(false);
  const [vanillaChecked, setVanillaChecked] = useState(false);
  const [caramelChecked, setCaramelChecked] = useState(false);
  const [file, setFile] = useState(null);
  // Function to handle form submission

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform action with form data (e.g., send to backend)
    console.log('Form submitted:', { fullName, email, phoneNumber, note });
    
    let message = {
      message: "Quote Requested with the following details",
      name: fullName,
      note: note,
      email: email,
      phone: phoneNumber,
      //date: selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }),
      // cake: {
      //   chocolate: chocolateChecked,
      //   vanilla: vanillaChecked,
      //   caramel: caramelChecked
      // },
      // cake_Fillings: {
      //   chocolate_Genache: chocolateGanChecked
      // }
    }
    const response = await fetch('https://duvfwdo5fk.execute-api.eu-west-1.amazonaws.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to: email, subject: `Quote Request for ${fullName}`, text: JSON.stringify(message) }),
    });
    
    // if (response.ok) {
      console.log('Email sent successfully');
     // Reset form fields after submission
     setFullName('');
     setEmail('');
     setPhoneNumber('');
     setMessage('');
    // } else {
    //   console.error('Error sending email');
    // }
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

  const handleSubmitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      console.log('File uploaded successfully');
    } else {
      console.error('Error uploading file');
    }
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
      <p className={styles.description}>
          {quote_note}
      </p>

        <div className={styles.grid}>
        <a className={styles.card}>
        <h3 className={styles.text}>{cake_flavours}</h3>
            <label>
            <input
              type="checkbox"
              checked={chocolateChecked}
              onChange={handleChocolateChange}
            />
            Chocolate
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={vanillaChecked}
              onChange={handleVanillaChange}
            />
            Vanilla
          </label>
          </a>
        </div>
          
      <div className={styles.grid}>
      <a className={styles.card}>
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
          <textarea id="message" value={note} onChange={(e) => setMessage(e.target.value)}></textarea>
          <br></br>
          <br></br>
          <label htmlFor="message">Load image of custom desired custom cake, promise we will get it close as possible:</label>
          <br></br>
          <br></br>
          {/* <form onSubmit={handleSubmitImage}> */}
          <input type="file" onChange={handleFileChange} />
          <button type="submit" onClick={handleSubmitImage}>Upload</button>
           {/* </form> */}
          <br></br>
        </form>
        </a>
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
