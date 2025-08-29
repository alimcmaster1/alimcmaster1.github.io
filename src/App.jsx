import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReadingList from './pages/ReadingList';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appRoot}>
      <Header />
      <main className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reading-list" element={<ReadingList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
