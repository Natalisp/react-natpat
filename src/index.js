import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import './custom.js';
import Word from './components/word';
import Projects from './components/projects';

ReactDOM.render(
  <App />,
  document.getElementById('stats')
);

ReactDOM.render(
  <Word />,
  document.getElementById('greet')
);

ReactDOM.render(
  <Projects />,
  document.getElementById('projects')
);
