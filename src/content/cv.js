import chipHippo from '../assets/cv/logos/chip_hippo.png';
import chipPandas from '../assets/cv/logos/chip_pandas.png';
import chipGs from '../assets/cv/logos/chip_gs.png';
import headshot from '../assets/cv/headshot.png';

export const cv = {
  name: 'Alistair McMaster',
  kicker: 'CTO & Co-Founder · Software Engineer / Quant',
  tagline:
    'Building the platform for proactive healthcare in NHS General Practice. Ex-Goldman Sachs quant, pandas core maintainer, Cambridge Natural Sciences.',
  photo: headshot,
  links: [
    { label: 'alimcmaster.com', href: 'https://alimcmaster.com' },
    { label: 'github.com/alimcmaster1', href: 'https://github.com/alimcmaster1' },
    {
      label: 'linkedin.com/in/alistair-mcmaster',
      href: 'https://www.linkedin.com/in/alistair-mcmaster',
    },
  ],
  metrics: [
    { num: ['0 ', '→', ' 1.2M'], label: 'Patients on platform, UK-wide' },
    { num: ['2 ', '→', ' 14'], label: 'Team grown as co-founder' },
    { num: ['100', '+', ''], label: 'Commits to pandas master' },
    { num: ['70M', '/mo', ''], label: 'Downloads of pandas library' },
  ],
  experience: [
    {
      org: 'Hippo Labs',
      dates: 'Sep 2021 — Present',
      subtitle: 'Co-Founder & CTO — proactive healthcare for NHS General Practice',
      logo: chipHippo,
      minor: false,
      bullets: [
        { html: 'Scaled the platform from <b>0 to 1.2 million patients</b> across the UK.' },
        {
          html:
            'Grew the team from <b>2 to 14</b> — clinical leads, sales and customer success — while building a high-impact engineering team of six.',
        },
        {
          html:
            'Architected a big-data platform for <b>patient cohorting at scale</b> using SQLMesh / PySpark on AWS.',
        },
        {
          html:
            'Selected for the <b>Digital Health London Accelerator</b> (2023 cohort); open-sourced parts of our work on GitHub.',
        },
      ],
    },
    {
      org: 'pandas — Core Maintainer',
      dates: 'Sep 2018 — Present',
      subtitle: 'Open-source Python data analysis library · NumFOCUS-funded',
      logo: chipPandas,
      minor: false,
      bullets: [
        {
          html:
            '<b>100+ contributions</b> to master; review contributor PRs and triage bugs and feature requests.',
        },
        {
          html:
            'Ran development sprints mentoring new contributors — PyData Global, Man AHL Hackathon.',
        },
      ],
    },
    {
      org: 'AMQA Ltd',
      dates: 'Sep 2021 — Present',
      subtitle: 'Founder — UK software consultancy',
      logo: null,
      minor: true,
      paragraph:
        'Clients across UK fintech and financial services, plus open-source development for the <b>Chan Zuckerberg Initiative</b>, aided by my core developer role in pandas.',
    },
    {
      org: 'Goldman Sachs',
      dates: 'Jun 2016 — Jun 2021',
      subtitle: null,
      logo: chipGs,
      minor: true,
      subroles: [
        {
          title: 'Associate — IBS Strategist / Quant',
          dates: 'Jan 2019 — Jun 2021',
          text:
            'Quantitative analytics and data visualisation for client coverage and targeting. Built innovative analytics on board diversity and corporate governance data for ESG content; supported client engagements in Software and MedTech for early-stage fundraising and private placements. Led quant campus recruitment from Cambridge.',
        },
        {
          title: 'Analyst — FX Engineering',
          dates: 'Jun 2016 — Jan 2019',
          text:
            'Full-stack engineer in Java / Slang, building applications for FX Options and cryptocurrency trading. Previously Engineering Summer Intern (2015).',
        },
      ],
    },
  ],
  education: {
    school: 'University of Cambridge',
    line: 'Natural Sciences Tripos — Part II Astrophysics',
    meta: '2013 — 2016 · 2:1 (65%) · Computational Projects (MATLAB): First (73%)',
    note:
      'General Relativity, Statistical Physics, Quantum Mechanics, Cosmology, Astrophysical Fluid Dynamics, Stellar Dynamics.',
  },
  publication: {
    title: 'Python Data Analysis',
    meta: 'Packt Publishing · Sep 2020',
    note:
      'Lead Technical Reviewer — supervised classification, unsupervised learning (PCA, clustering) and parallel computation with Dask.',
    href: 'https://www.packtpub.com/',
  },
  toolbox: [
    {
      label: 'Languages & data',
      chips: ['Python', 'PySpark', 'Java', 'pandas', 'NumPy', 'PyTorch', 'Dask', 'FastAPI'],
    },
    {
      label: 'Infra & platforms',
      chips: [
        'AWS',
        'Terraform',
        'PostgreSQL',
        'MongoDB',
        'Linux',
        'GitLab',
        'GitHub',
        'Tableau',
        'Metabase',
      ],
    },
  ],
  beyond: [
    {
      title: 'Running',
      text: 'London City Athletics Club — half marathons across the UK; track and parkrun enthusiast.',
    },
    {
      title: 'Mountain Leader',
      text: 'Qualified UK Mountain Leader, helping run DofE expeditions for school students.',
    },
    {
      title: 'Mental Health',
      text: 'Fully qualified Mental Health First Aider (MHFA).',
    },
  ],
  footer: 'Alistair McMaster · CV · 2026',
};
