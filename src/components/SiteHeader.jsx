import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { site } from '../content/site';
import styles from './SiteHeader.module.css';

const links = [
  { to: '/blog', label: 'Blog' },
  { to: '/photos', label: 'Photos' },
  { to: '/cv', label: 'CV' },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const headerClass = [
    styles.header,
    scrolled || !isHome ? styles.headerScrolled : '',
    !isHome ? styles.headerSolid : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <header className={headerClass}>
        <Link to="/" className={styles.brand}>
          {site.name}
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className={`${styles.menuBtn} ${open ? styles.menuBtnOpen : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </header>
      {open ? (
        <nav className={styles.mobile} aria-label="Mobile">
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </>
  );
}
