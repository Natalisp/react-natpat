import React, {Component} from 'react';
import Slider from 'react-slick';

import theG from '../images/theG.png';
import bookinist from '../images/bookinist.png';
import gifter from '../images/gifter.png';
import yumoo2 from '../images/yumoo2.png';
import gitvisuals from '../images/gitvisuals.png';
import gem from '../images/gem.png';
import Shopify from '../images/euro-porter.png';
import Shopify2 from '../images/euro-porter2.png'

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div className='slider'>
        	<Slider {...settings}>
          	<div><img src={theG} /><div className="slider-caption"><span>The Gorod</span><p>Online magazine giving a fresh look into sumptuously rich and often hidden pearls in New York City.</p><p>Used: WordPress, HTML5, CSS3, Photoshop, Google analytics, Heap analytics, MailPoet.</p></div></div>
            <div><img src={gifter} /><div className="slider-caption"><span>Gifter</span><p>Making gifts has never been more fun. Create wishlists, find friends, secretly discuss details and get excited.</p><p>Used: Ruby on Rails, ActiveRecord, MVC, Facebook OAuth, HTML5, CSS3, jQuery, Photoshop.</p></div></div>
            <div><img src={Shopify} /><div className="slider-caption"><span>Euro Porter Store</span><p>E-commerce website representing independent conceptual designers from Eastern Europe.</p><p>Used: Shopify, Heap analytics, Photoshop, CSS, HTML. </p></div></div>
            <div><img src={Shopify2} /><div className="slider-caption"><span>Euro Porter Store</span><p>E-commerce website representing independent conceptual designers from Eastern Europe.</p><p>Used: Shopify, Heap analytics, Photoshop, CSS, HTML. </p></div></div>
            <div><img src={bookinist} /><div className="slider-caption"><span>Bookinist</span><p>Sinatra application built to help avid readers to keep track of books they want to read.</p><p>Used: Sinatra framework with MVC structure, ActiveRecord, CSS, Bootstrap. </p></div></div>
            <div><img src={yumoo2} /><div className="slider-caption"><span>Yumoo</span><p>Ruby on Rails application built to always satisfy your cravings. Intelligently suggests meals according to your mood and time of the day.</p><p>Used: Ruby on Rails, Factory Girl, Yelp API, Semantic UI, HTML5, CSS3.</p></div></div>
            <div><img src={gitvisuals} /><div className="slider-caption"><span>GitVisuals</span><p>A data visualization application designed to display a Github user detailed information. </p><p>Used: Ruby on Rails, GitHub API, AJAX, Charts.js, CSS, HTML. </p></div></div>
            <div><img src={gem} /><div className="slider-caption"><span>Bookinist Ruby Gem</span><p>CLI Ruby gem for an easy books recommendations search on Goodreads website from your terminal.</p><p>Used: Ruby, Nokogiri. </p></div></div>

          </Slider>
        </div>
    );
  }
}

export default SimpleSlider;
