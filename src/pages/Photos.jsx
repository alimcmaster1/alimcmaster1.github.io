import { useEffect, useState } from 'react';
import { categories, photos } from '../content/photos';
import styles from './Photos.module.css';

export default function Photos() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);

  const visible =
    filter === 'All' ? photos : photos.filter((photo) => photo.category === filter);

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.kicker}>Photos</p>
        <h1>Gallery</h1>
        <p>
          Climbing, running, mountains, and city quiet. Swap the placeholder
          frames for your own shots whenever you are ready.
        </p>
      </header>

      <div className={styles.filters} role="tablist" aria-label="Photo categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={filter === category}
            className={filter === category ? styles.filterActive : styles.filter}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map((photo) => (
          <button
            key={photo.id}
            type="button"
            className={styles.card}
            onClick={() => setActive(photo)}
          >
            <img src={photo.src} alt={photo.title} loading="lazy" />
            <span className={styles.caption}>
              <strong>{photo.title}</strong>
              <span>
                {photo.place} · {photo.category}
              </span>
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className={styles.close}
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            ✕
          </button>
          <img
            src={active.src}
            alt={active.title}
            onClick={(event) => event.stopPropagation()}
          />
          <div className={styles.lightboxMeta}>
            <strong>{active.title}</strong>
            <span>
              {active.place} · {active.category}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
