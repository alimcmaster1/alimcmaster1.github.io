import { Link } from 'react-router-dom';
import { site } from '../content/site';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          {site.name}
        </Link>
        <div className={styles.meta}>
          <span>© {year}</span>
          <a href={site.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <Link to="/cv">CV</Link>
        </div>
      </div>
    </footer>
  );
}
