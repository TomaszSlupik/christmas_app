import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.scss'

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div className="carousel">
            <div className="carousel__box">
            <div className="carousel__box-carousel">
        <Slider {...settings}>
          <div>
            <img src={process.env.PUBLIC_URL + '/img/one.jpg'} alt="swiąteczna ulica" />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/img/two.jpg'} alt="kotek świąteczny" />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/img/three.jpg'} alt="prezenty" />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/img/four.jpg'} alt="zima" />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/img/five.jpg'} alt="święta" />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/img/six.jpg'} alt="choinka" />
          </div>
        </Slider>
      </div>
            </div>
        </div>
     
    );
  }
}
