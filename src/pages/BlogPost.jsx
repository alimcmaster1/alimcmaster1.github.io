import { Link, useParams } from 'react-router-dom';
import { getPost } from '../content/posts';
import styles from './BlogPost.module.css';

function formatDate(value) {
  return new Date(value).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <div className={styles.missing}>
        <h1>Post not found</h1>
        <p>
          <Link to="/blog">Back to the blog</Link>
        </p>
      </div>
    );
  }

  return (
    <article className={styles.page}>
      <Link to="/blog" className={styles.back}>
        ← All posts
      </Link>
      <header className={styles.header}>
        <p className={styles.meta}>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {' · '}
          {post.tags.join(' / ')}
        </p>
        <h1>{post.title}</h1>
        <p className={styles.excerpt}>{post.excerpt}</p>
      </header>
      <div className={styles.body}>
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
