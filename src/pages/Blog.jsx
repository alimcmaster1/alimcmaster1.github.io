import { Link } from 'react-router-dom';
import { posts } from '../content/posts';
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
        <p className={styles.kicker}>Blog</p>
        <h1>Field notes</h1>
        <p>
          Short writing on climbing, running, markets, and the open-source tools
          I help maintain.
        </p>
      </header>
      <div className={styles.list}>
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className={styles.item}>
            <div className={styles.meta}>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div>
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
