import { Routes, Route, Navigate } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Photos from './pages/Photos';
import CV from './pages/CV';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.shell}>
      <SiteHeader />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Navigate to="/blog" replace />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
