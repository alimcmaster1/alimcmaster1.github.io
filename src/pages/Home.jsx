import { Link } from 'react-router-dom';
import { site } from '../content/site';
import { posts } from '../content/posts';
import { photos } from '../content/photos';
import hero from '../assets/photos/hero.jpg';
import portrait from '../assets/photos/portrait.jpg';
import styles from './Home.module.css';

export default function Home() {
  const featured = posts.slice(0, 3);
  const strip = photos.filter((p) => p.id !== 'portrait').slice(0, 4);

  return (
    <>
      <section className={styles.hero} aria-label="Introduction">
        <div
          className={styles.bg}
          style={{ backgroundImage: `url(${hero})` }}
          role="img"
          aria-label="Mountain landscape"
        />
        <div className={styles.veil} />
        <div className={styles.content}>
          <h1 className={styles.brand}>{site.name}</h1>
          <ul className={styles.lines}>
            {site.heroLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <div className={styles.actions}>
            <Link className={styles.btn} to="/photos">
              View photographs
            </Link>
            <Link className={styles.btnGhost} to="/blog">
              Read the blog
            </Link>
          </div>
        </div>
        <div className={styles.scroll}>Scroll</div>
      </section>

      <section className={styles.section}>
        <div className={styles.about}>
          <div className={styles.aboutText}>
            <p className={styles.kicker}>About</p>
            <p>
              I&apos;m Ali — a strategist at Goldman Sachs, a Cambridge
              astrophysics graduate, and a member of the pandas core team.
            </p>
            <p>
              Away from the desk I climb, run parkrun, and ride. This site is a
              place for writing, photographs, and a living CV — closer to a
              personal field journal than a corporate portfolio.
            </p>
            <div className={styles.actions}>
              <Link className={styles.btnDark} to="/cv">
                View CV
              </Link>
            </div>
          </div>
          <div className={styles.portraitWrap}>
            <img src={portrait} alt="Alistair McMaster" />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.kicker}>Writing</p>
            <h2>From the blog</h2>
          </div>
          <Link to="/blog">All posts</Link>
        </div>
        <div className={styles.postList}>
          {featured.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className={styles.postRow}>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
              <div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.kicker}>Photographs</p>
            <h2>Selected frames</h2>
          </div>
          <Link to="/photos">Open gallery</Link>
        </div>
        <div className={styles.photoStrip}>
          {strip.map((photo) => (
            <Link key={photo.id} to="/photos" aria-label={photo.title}>
              <img src={photo.src} alt={photo.title} loading="lazy" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
