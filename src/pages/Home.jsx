import React from 'react';
import Card from '../components/Card';
import meImg from '../assets/me.jpg';

function Home() {
  return (
    <>
      <Card>
        <h2>About Me</h2>
        <img
          height="96"
          width="96"
          style={{ float: 'left', borderRadius: '50%', marginRight: '1.5rem', marginBottom: '1rem', boxShadow: '0 2px 8px rgba(30,41,59,0.10)' }}
          src={meImg}
          alt="Alistair McMaster"
        />
        <p>I'm Alistair, a Data Scientist and Software Engineer working in Finance. Currently, I'm a Strategist at Goldman Sachs within the Investment Banking Division. I studied <a href="https://www.ast.cam.ac.uk/students">Astrophysics</a> at the University of Cambridge from 2013-2016.</p>
        <p>In my spare time, I enjoy running (half-marathons and <a href="https://www.parkrun.org.uk/">parkrun</a>), cycling, and rock climbing.</p>
        <p>I am a contributor to the open source Python data science stack, mainly <a href="https://github.com/pandas-dev/pandas">Pandas</a> and am a member of the <a href="https://pandas.pydata.org/about/team.html">Core Development team</a>.</p>
      </Card>
      <Card>
        <h2>Useful Development Resources</h2>
        <h3>Pandas/Dataframes</h3>
        <ul>
          <li><a href="https://pandas.pydata.org/pandas-docs/stable/user_guide/index.html">Pandas user guide</a></li>
          <li><a href="https://tomaugspurger.github.io/modern-8-scaling.html">Modern Pandas</a></li>
          <li><a href="https://github.com/quantopian/qgrid">Interactive Grid</a></li>
        </ul>
        <h3>ML/Data Science</h3>
        <ul>
          <li><a href="https://docs.featuretools.com">Feature Tools</a></li>
        </ul>
        <h3>AI</h3>
        <ul>
          <li><a href="https://gym.openai.com/">Open AI Gym</a></li>
        </ul>
        <h3>Useful Meetup Presentations</h3>
        <ul>
          <li><a href="#">London Pytorch Meetup</a></li>
        </ul>
      </Card>
    </>
  );
}

export default Home;
