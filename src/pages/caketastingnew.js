// import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/CakeTesting.module.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { title, confirm_booking, cake_tasting_p3, cake_tasting_p4,
       new_cake_tasting, cake_flavours, fillings_flavours,
       personal_details, personal_details_name, personal_details_address,
       personal_details_num_testers, personal_details_email, personal_details_select_weekend} from '../styles/language';
const caketastingnew = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [chocolateChecked, setChocolateChecked] = useState(false);
  const [chocolateGanChecked, setChocolateGanChecked] = useState(false);
  const [vanillaChecked, setVanillaChecked] = useState(false);
  const [caramelChecked, setCaramelChecked] = useState(false);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [numTesters, setNumTesters] = useState('');
  const [clientEmail, setclientEmail] = useState('');

  // Function to filter out weekends
  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday (0) or Saturday (6)
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
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleNumTestersChange = (event) => {
    setNumTesters(event.target.value);
  };

  const handleClientEmailChange = (event) => {
    setclientEmail(event.target.value);
  };

    // Function to handle date selection
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

  const handleConfirmBooking = async () => {
    try {
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
    console.log('Email:', clientEmail)
    console.log('Date:', selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }));
   let message = {
      message: "Booking confirmed with the following details",
      name: name,
      address: address,
      number_Testers: numTesters,
      email: clientEmail,
      date: selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }),
      cake: {
        chocolate: chocolateChecked,
        vanilla: vanillaChecked,
        caramel: caramelChecked
      },
      cake_Fillings: {
        chocolate_Genache: chocolateGanChecked
      }
    }
    const response = await fetch('https://duvfwdo5fk.execute-api.eu-west-1.amazonaws.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to: clientEmail, subject: `Booking for ${name}`, text: JSON.stringify(message) }),
    });

    if (response.ok) {
      alert('Booking request sent successfully');
      // Reset the form
      setSelectedDate('')
      setChocolateChecked(false);
      setChocolateGanChecked(false);
      setVanillaChecked(false);
      setCaramelChecked(false);
      setName('');
      setAddress('');
      setNumTesters('');
      setclientEmail('');
    } else {
      alert('Failed to send booking request');
    }
    } catch (error) {
      console.error('Error sending booking:', error);
      alert('An error occurred while sending the booking');
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
            <a href="/" className={styles.logo}>
            <h3 className={styles.text}>{new_cake_tasting}</h3>
            </a>
          </div>
        </nav>

        <main className={styles.main}>

          <p className={styles.description}>
          {cake_tasting_p3}
          </p>
          <p className={styles.description}>
          {cake_tasting_p4} 
          </p>

          <div className={styles.grid}>
            <Link href="/caketastingnew" className={styles.card}>
              <h3 className={styles.text}>{cake_flavours}</h3>
            <label>
              <br></br>
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
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={caramelChecked}
              onChange={handleCaramelChange}
            />
            Caramel
          </label>
            </Link>

            <a href="#" className={styles.card}>
              <h3 className={styles.text}>{fillings_flavours}</h3>
              <label>
            <input
              type="checkbox"
              checked={chocolateGanChecked}
              onChange={handleChocolateGanChecked}
            />
            Chocolate Ganache
          </label>
            </a>
            <a href="#" className={styles.card}>
        <h3 className={styles.text}>{personal_details}</h3>
        <div>
          <label>
            {personal_details_name}
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </label>
        </div>
        <div>
          <label>
            {personal_details_address}
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
            />
          </label>
        </div>
        <div>
          <label>
            {personal_details_num_testers}
            <input
              type="number"
              value={numTesters}
              onChange={handleNumTestersChange}
            />
          </label>
        </div>
        <div>
          <label>
            {personal_details_email}
            <input
              type="text"
              value={clientEmail}
              onChange={handleClientEmailChange}
            />
          </label>
        </div>
        <h3 className={styles.text}>{personal_details_select_weekend}</h3>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        filterDate={isWeekend} // Only display weekends
        placeholderText="Select a weekend"
        dateFormat="dd/MM/yyyy"
      />
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
      <button onClick={handleConfirmBooking} className={styles.text}> 
      {confirm_booking}
      </button>
        </footer>
      </div>
  );
};

export default caketastingnew;
