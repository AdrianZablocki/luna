import React, { Component } from 'react';

import img from '../../assets/images/portfolio_img.png';
import CarouselLeftArrow from '../../components/Carousel/CarouselLeftArrow/CarouselLeftArrow';
import CarouselRightArrow from '../../components/Carousel/CarouselRightArrow/CarouselRightArrow';
import CarouselSlide from '../../components/Carousel/CarouselSlide/CarouselSlide';
import CarouselIndicator from '../../components/Carousel/CarouselIndicator/CarouselIndicator';
import Button from '../../components/UI/Button/Button';

import classes from './PortfolioSlider.css';


class PortfolioSlider extends Component {
  state = {
    slides: [
      {
        title: 'Payme ',
        subtitle: 'Mobile App',
        content: 'Payme is a best & simplest way to create your own mobile payment app and fit in with as much information as you want. Perfect base to build an amazing app with easy navigation and intuitive UX.',
        btnText: 'see case study',
        image: img,
        imgageTitle: 'img title',
        tab: {
          tabTxt: 'Mobile apps',
          tabBla: 'UX / UI',
          tabHeader: 'Payme Mobile App'
        }
      },
      {
        title: 'Interactive ',
        subtitle: 'Agency',
        content: 'Payme is a best & simplest way to create your own mobile payment app and fit in with as much information as you want. Perfect base to build an amazing app with easy navigation and intuitive UX.',
        btnText: 'see case study',
        image: img,
        imgageTitle: 'img title',
        tab: {
          tabTxt: 'Website',
          tabBla: 'UX / UI',
          tabHeader: 'Interactive Agency'
        }
      },
      {
        title: 'Nava.com ',
        subtitle: 'Website',
        content: 'Payme is a best & simplest way to create your own mobile payment app and fit in with as much information as you want. Perfect base to build an amazing app with easy navigation and intuitive UX.',
        btnText: 'see case study',
        image: img,
        imgageTitle: 'img title',
        tab: {
          tabTxt: 'Website',
          tabBla: 'UX / UI',
          tabHeader: 'Nava.com Website'
        }
      },
      {
        title: 'Virtus ',
        subtitle: 'Dashboard',
        content: 'Payme is a best & simplest way to create your own mobile payment app and fit in with as much information as you want. Perfect base to build an amazing app with easy navigation and intuitive UX.',
        btnText: 'see case study',
        image: img,
        imgageTitle: 'img title',
        tab: {
          tabTxt: 'Web app',
          tabBla: 'UX / UI',
          tabHeader: 'Virtus Dashboard'
        }
      }
    ],
    activeIndex: 0
  }

  goToSlideHandler = (index) => {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlideHandler = (e) => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let slidesLength = this.state.slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlideHandler = (e) => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let slidesLength = this.state.slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    let slides;
    let indicators;
    slides = this.state.slides.map((slide, index) => {
      return  <CarouselSlide 
                key={index} 
                index={index} 
                activeIndex={this.state.activeIndex} 
                style={{width: (100 / this.state.slides.length) + '%'}}
              >
                <div className={classes.SlideContent}>
                  <h3 className={classes.Header}>
                    <span className={classes.HeaderBlue}>{slide.title}</span><span>{slide.subtitle}</span>
                  </h3>
                  <p className={classes.Text}>{slide.content}</p>
                  <Button btnType="button" text={slide.btnText}></Button>
                </div>

                <figure className={classes.SlideImage}>
                  <img className={classes.Image} src={slide.image} alt={slide.imgageTitle} />
                </figure>
              </CarouselSlide>
    });

    indicators = this.state.slides.map((slide, index) => {
      return  <CarouselIndicator
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                isActive={this.state.activeIndex === index}
                onClick={() => this.goToSlideHandler(index)}
              >
                <div className={classes.SliderButtonTxt}>
                  <span className={classes.SliderButtonDeco}>{slide.tab.tabTxt}</span>
                  <span>{slide.tab.tabBla}</span>
                </div>
                <h4 className={classes.SliderButtonHeader}>{slide.tab.tabHeader}</h4>
              </CarouselIndicator>
    });

    return (
      <section className={classes.PortfolioWrapper}>
        <div className={classes.PortfolioContainer}>
          <div className={classes.CarouselContainer}>
            <div className={classes.CarouselWrapper}>
              <div 
                className={classes.SlideWrapper} 
                style={{
                  width: (100 * this.state.slides.length) + '%',
                  transform: 'translateX(-' + this.state.activeIndex * (100 / this.state.slides.length) + '%)'
                }}
              >
                <ul className={classes.Carousel}>
                  {slides}
                </ul>         
              </div>
            </div>
            <CarouselLeftArrow onClick={(e) => this.goToPrevSlideHandler(e)} />
            <CarouselRightArrow onClick={(e) => this.goToNextSlideHandler(e)} /> 
            <ul className={classes.SliderButtonWrapper}>
              {indicators}
            </ul>        
          </div>
        </div>      
      </section>
    );
  }
}

export default PortfolioSlider;