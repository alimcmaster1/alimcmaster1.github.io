import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>&copy; {new Date().getFullYear()} Alistair McMaster &mdash; Built with React & Vite.</span>
    </footer>
  );
}

export default Footer;
