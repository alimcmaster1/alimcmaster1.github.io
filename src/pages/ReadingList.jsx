import React from 'react';
import Card from '../components/Card';

function ReadingList() {
  return (
    <Card>
      <h2>Reading List</h2>
      <p><em>This list reflects what is currently on my schedule</em></p>
      <p>( x - marks read)</p>
      <h3>AI/Deep Learning</h3>
      <ul>
        <li><a href="https://course.fast.ai/index.html">fast.ai course</a> - []</li>
        <li><a href="https://gym.openai.com/">Open AI Gym</a> - []</li>
        <li><a href="http://www.deeplearningbook.org/">Deep Learning Book</a> - []</li>
      </ul>
      <h3>Data Science</h3>
      <ul>
        <li>Medium
          <ul>
            <li><a href="https://medium.com/engineer-quant">Quant/Engineer</a> - []</li>
          </ul>
        </li>
      </ul>
      <h3>Linear Algebra</h3>
      <ul>
        <li><a href="https://github.com/fastai/numerical-linear-algebra">Fast AI - Linear Algebra Course</a> - []</li>
      </ul>
      <h3>Statistics</h3>
      <ul></ul>
      <h3>ML Models</h3>
      <ul></ul>
      <h3>Python Development</h3>
      <ul></ul>
      <h3>Computer Science</h3>
      <ul>
        <li><a href="http://www.cs.fsu.edu/~lacher/courses/COT4401/notes/cise_v2_i1/index.html">Top 10 Algorithms</a> - []</li>
      </ul>
      <h3>Quantum Software</h3>
      <ul>
        <li>Open source software in quantum computing - Mark Fingerhuth - []</li>
        <li><a href="https://qiskit.org">Qiskit</a> - []</li>
        <li><a href="https://arxiv.org/pdf/1804.03719.pdf">Algorithms</a> - []</li>
      </ul>
      <h3>Time Series</h3>
      <ul>
        <li><a href="https://facebook.github.io/prophet/docs/quick_start.html">Prophet</a> - []</li>
        <li><a href="https://machinelearningmastery.com/start-here/#timeseries">Machine Learning Mastery</a> - []</li>
      </ul>
    </Card>
  );
}

export default ReadingList;
