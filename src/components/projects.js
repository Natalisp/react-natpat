import React, {Component} from 'react';
import Project from './project';

import theG from '../images/theG.png';
import bookinist from '../images/bookinist.png';
import gifter from '../images/gifter.png';
import yumoo2 from '../images/yumoo2.png';
import gitvisuals from '../images/gitvisuals.png';
import gem from '../images/gem.png';


class Projects extends Component {

  render() {
    return (
      <div>
      <Project src={theG} title="The Gorod" tools="SEO, UX/UI Design, Wordpress, CSS, Photoshop" />
      <Project src={gitvisuals} title="GitVisuals" tools="Ajax, API, jQuery, Chart.js, D3.js, CSS" />
      <Project src={yumoo2} title="Yumoo" tools="Ruby on Rails, Semantic UI, SQLite, Active Record" />
      <Project src={gifter} title="Gifter" tools="Ruby on Rails, OmniAuth, jQuery, Bootstrap, CSS" />
      <Project src={bookinist} title="Bookinist" tools="Sinatra, ActiveRecord, SQlite, Bootstrap" />
      <Project src={gem} title="Bookinist CLI Gem" tools="Ruby, Nokogiri" />
      </div>
    )
  }
}


export default Projects;
