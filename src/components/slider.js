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
          	<div><img src={theG} /><div className="slider-caption"><span>The Gorod</span></div></div>
            <div><img src={bookinist} /><div className="slider-caption">Hola</div></div>
            <div><img src={gifter} /><div className="slider-caption">Hola</div></div>
            <div><img src={yumoo2} /><div className="slider-caption">Hola</div></div>
            <div><img src={gitvisuals} /><div className="slider-caption">Hola</div></div>
            <div><img src={gem} /><div className="slider-caption">Hola</div></div>
            <div><img src={Shopify} /><div className="slider-caption">Hola</div></div>
            <div><img src={Shopify2} /><div className="slider-caption">Hola</div></div>

          </Slider>
        </div>
    );
  }
}

export default SimpleSlider;
