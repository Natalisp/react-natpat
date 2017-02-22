import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import Stats from './stats';

class App extends Component {
  render() {
    return (
      <div>
        <Stats max="6" description="Projects done in the last 6 months"/>
        <Stats max="405" description="GitHub repositories created in the last year"/>
        <Stats max="7" description="Frameworks and libraries used"/>
        <Stats max="5" description="Languages spoken plus Ruby and JavaScript"/>
      </div>
    )
  }
}

export default App;
