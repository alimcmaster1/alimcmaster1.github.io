import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import styles from './Header.module.css';
import meImg from '../assets/me.jpg';

function Header() {
  return (
    <Card className={styles.headerCard}>
      <img src={meImg} alt="Alistair McMaster" className={styles.profileImg} />
      <h1 className={styles.projectName}>Alistair McMaster</h1>
      <h2 className={styles.projectTagline}>Data Scientist & Software Engineer in Finance</h2>
      <nav className={styles.navLinks}>
        <Link to="/" className={styles.btn}>Home</Link>
        <Link to="/reading-list" className={styles.btn}>Reading List</Link>
        <a href="https://github.com/alimcmaster1" className={styles.btn} target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://www.linkedin.com/in/alistair-mcmaster-695b90ab" className={styles.btn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
    </Card>
  );
}

export default Header;
