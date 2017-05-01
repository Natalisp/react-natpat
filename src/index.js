import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './components/App';
import './index.css';
import './custom.js';
import Word from './components/word';
import Projects from './components/projects';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import SimpleSlider from './components/slider';


ReactDOM.render(
  <App />,
  document.getElementById('stats')
);

ReactDOM.render(
  <Word />,
  document.getElementById('greet')
);

ReactDOM.render(
  <SimpleSlider />,
  document.getElementById('carousel')
);


$(function() {
  $("#contact-form").submit(function( event ) {
  //   var name = $("#inputName").val();
  // alert('Excuse-moi ' + name + ',\nPlease email me at Nathalipat@gmail.com\nThank you!' );
  event.preventDefault();
    $('#contact-me')[0].click();
   this.reset();
});
});
