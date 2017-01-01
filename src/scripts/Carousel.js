import $ from 'jquery';
import 'slick-carousel';

class Carousel {
  constructor() {
    this.init();
  }

  init() {
    this.initCarousels();
  }

  initCarousels() {
    $('.js-header__carousel').slick({
      dots: true,
      infinity: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '',
      nextArrow: ''
    });

    $('.js-section__trending__carousel').slick({
      dots: true,
      infinity: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '',
      nextArrow: ''
    });

    $('.js-section__blog__carousel').slick({
      dots: false,
      infinity: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '<div class="carousel__left"><div class="carousel__left__part"></div><div class="carousel__left__part"></div></div>',
      nextArrow: '<div class="carousel__right"><div class="carousel__right__part"></div><div class="carousel__right__part"></div></div>',
      responsive: [
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
}

export default Carousel;
