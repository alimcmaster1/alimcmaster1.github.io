import { cv } from '../content/cv';
import styles from './CV.module.css';

function RichText({ html }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function CV() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.kicker}>{cv.kicker}</p>
          <h1 className={styles.name}>{cv.name}</h1>
          <p className={styles.tagline}>{cv.tagline}</p>
          <div className={styles.links}>
            {cv.links.map((link, index) => (
              <span key={link.href}>
                {index > 0 ? <span className={styles.sep}>/</span> : null}
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </div>
        <img className={styles.photo} src={cv.photo} alt={cv.name} />
      </header>

      <div className={styles.metrics}>
        {cv.metrics.map((metric) => (
          <div key={metric.label} className={styles.metric}>
            <div className={styles.num}>
              {metric.num[0]}
              <span className={styles.accent}>{metric.num[1]}</span>
              {metric.num[2]}
            </div>
            <div className={styles.lbl}>{metric.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.cols}>
        <div className={styles.main}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.idx}>01</span>Experience
          </h2>
          {cv.experience.map((job) => (
            <article
              key={`${job.org}-${job.dates}`}
              className={[
                styles.job,
                job.minor ? styles.minor : '',
                job.logo ? styles.hasLogo : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {job.logo ? (
                <img className={styles.logoChip} src={job.logo} alt="" />
              ) : null}
              <div className={styles.jobHead}>
                <span className={styles.role}>{job.org}</span>
                <span className={styles.dates}>{job.dates}</span>
              </div>
              {job.subtitle ? <div className={styles.jobSub}>{job.subtitle}</div> : null}
              {job.paragraph ? (
                <p>
                  <RichText html={job.paragraph} />
                </p>
              ) : null}
              {job.bullets ? (
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet.html}>
                      <RichText html={bullet.html} />
                    </li>
                  ))}
                </ul>
              ) : null}
              {job.subroles?.map((sub) => (
                <div key={sub.title} className={styles.subrole}>
                  <div className={styles.srHead}>
                    <span className={styles.srTitle}>{sub.title}</span>
                    <span className={styles.dates}>{sub.dates}</span>
                  </div>
                  <p>{sub.text}</p>
                </div>
              ))}
            </article>
          ))}
        </div>

        <aside className={styles.side}>
          <section className={styles.sideSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.idx}>02</span>Education
            </h2>
            <div className={styles.eduName}>{cv.education.school}</div>
            <div className={styles.eduLine}>{cv.education.line}</div>
            <div className={styles.eduMeta}>{cv.education.meta}</div>
            <p className={styles.note}>{cv.education.note}</p>
          </section>

          <section className={styles.sideSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.idx}>03</span>Publication
            </h2>
            <div className={styles.eduName}>{cv.publication.title}</div>
            <div className={styles.eduMeta}>{cv.publication.meta}</div>
            <p className={styles.note}>
              {cv.publication.note}{' '}
              <a href={cv.publication.href} target="_blank" rel="noreferrer">
                Publication here
              </a>
              .
            </p>
          </section>

          <section className={styles.sideSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.idx}>04</span>Toolbox
            </h2>
            {cv.toolbox.map((group) => (
              <div key={group.label} className={styles.chipgroup}>
                <div className={styles.cgLbl}>{group.label}</div>
                <div className={styles.chips}>
                  {group.chips.map((chip) => (
                    <span key={chip} className={styles.chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className={styles.sideSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.idx}>05</span>Beyond work
            </h2>
            {cv.beyond.map((item) => (
              <div key={item.title} className={styles.interest}>
                <div className={styles.iTitle}>{item.title}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </section>
        </aside>
      </div>

      <div className={styles.footer}>
        <span>{cv.footer}</span>
        <button type="button" className={styles.printBtn} onClick={() => window.print()}>
          Print / Save PDF
        </button>
      </div>
    </div>
  );
}
