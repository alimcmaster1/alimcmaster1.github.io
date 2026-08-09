import { site } from '../content/site';
import { cv } from '../content/cv';
import styles from './CV.module.css';

export default function CV() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.kicker}>Curriculum vitae</p>
        <h1>{cv.name}</h1>
        <p className={styles.headline}>{cv.headline}</p>
        <div className={styles.meta}>
          <span>{cv.location}</span>
          <a href={site.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`}>Email</a>
        </div>
        <p className={styles.summary}>{cv.summary}</p>
      </header>

      <section className={styles.section}>
        <h2>Experience</h2>
        {cv.experience.map((job) => (
          <article key={`${job.org}-${job.role}`} className={styles.job}>
            <div className={styles.jobHeader}>
              <h3>
                {job.role}, {job.org}
              </h3>
              <span className={styles.period}>{job.period}</span>
            </div>
            <p className={styles.detail}>{job.detail}</p>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className={styles.section}>
        <h2>Education</h2>
        {cv.education.map((item) => (
          <article key={item.school} className={styles.edu}>
            <div className={styles.eduHeader}>
              <h3>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.school}
                </a>
              </h3>
              <span className={styles.period}>{item.period}</span>
            </div>
            <p className={styles.detail}>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className={styles.section}>
        <h2>Open source</h2>
        {cv.openSource.map((item) => (
          <article key={item.name} className={styles.os}>
            <div className={styles.osHeader}>
              <h3>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </h3>
            </div>
            <p className={styles.detail}>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className={styles.section}>
        <h2>Skills</h2>
        <div className={styles.skills}>
          {cv.skills.map((skill) => (
            <span key={skill} className={styles.chip}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Interests</h2>
        <div className={styles.interests}>
          {cv.interests.map((interest) => (
            <span key={interest} className={styles.chip}>
              {interest}
            </span>
          ))}
        </div>
      </section>

      <button type="button" className={styles.printBtn} onClick={() => window.print()}>
        Print / Save PDF
      </button>
    </div>
  );
}
