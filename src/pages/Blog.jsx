import { posts, substack } from '../content/posts';
import styles from './Blog.module.css';

function formatDate(value) {
  return new Date(value).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function Blog() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.kicker}>Blog · Substack</p>
        <h1>{substack.title}</h1>
        <p>{substack.description}</p>
        <div className={styles.actions}>
          <a
            className={styles.primary}
            href={substack.url}
            target="_blank"
            rel="noreferrer"
          >
            Open on Substack
          </a>
          <a className={styles.secondary} href="#subscribe">
            Subscribe
          </a>
        </div>
      </header>

      <div className={styles.list}>
        {posts.map((post) => (
          <a
            key={post.slug}
            href={post.href}
            className={styles.item}
            target="_blank"
            rel="noreferrer"
          >
            {post.cover ? (
              <div className={styles.thumb}>
                <img src={post.cover} alt="" loading="lazy" />
              </div>
            ) : null}
            <div className={styles.body}>
              <div className={styles.meta}>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>Read on Substack ↗</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </div>
          </a>
        ))}
      </div>

      <section id="subscribe" className={styles.subscribe}>
        <div className={styles.subscribeCopy}>
          <p className={styles.kicker}>Subscribe</p>
          <h2>Get new posts by email</h2>
          <p>
            New climbing and kitchen notes land on{' '}
            <a href={substack.url} target="_blank" rel="noreferrer">
              {substack.title}
            </a>
            . Subscribe below, or browse the full archive on Substack.
          </p>
        </div>
        <div className={styles.embedWrap}>
          <iframe
            title="Subscribe to Strudel and occasional summits"
            src={substack.embedUrl}
            className={styles.embed}
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </section>
    </div>
  );
}
