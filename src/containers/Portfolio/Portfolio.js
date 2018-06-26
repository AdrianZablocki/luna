import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, Dot, ButtonBack, ButtonNext } from 'pure-react-carousel';

import Button from '../../components/UI/Button/Button';
import classes from './Portfolio.css';
import img from '../../assets/images/portfolio_img.png';


class Portfolio extends Component {
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
    ]
  }

  render() {
    let tabs, slides;

    slides = this.state.slides.map((slide, index) => {
      return  <Slide index={index} key={index} innerClassName={classes.SlideWrapper}>
                <div className={classes.SlideContent}>
                  <h3 className={classes.Header}>
                    <span className={classes.HeaderBlue}>{slide.title}</span><span>{slide.subtitle}</span>
                  </h3>
                  <p className={classes.Text}>{slide.content}</p>
                  <Button btnType="button" text={slide.btnText}></Button>                
                </div>
                <figure className={classes.SlideImage}>
                  <img className={classes.Image} src={slide.image} alt={slide.imgageTitle}/>
                </figure>                  
              </Slide>
    });
    tabs = this.state.slides.map((tab, index) => {
      return  <Dot slide={index} key={index} className={classes.SliderButton}>
                <div className={classes.SliderButtonTxt}>
                  <span className={classes.SliderButtonDeco}>{tab.tab.tabTxt}</span>
                  <span>{tab.tab.tabBla}</span>               
                </div>
                <h4 className={classes.SliderButtonHeader}>{tab.tab.tabHeader}</h4>   
              </Dot>
    });

    return (
      <section className={classes.PortfolioWrapper}>
        <div className={classes.PortfolioContainer}>

          <CarouselProvider totalSlides={this.state.slides.length} className={classes.CarouselContainer}>
            <Slider 
              classNameTrayWrap={classes.CarouselWrapper} 
              classNameTray={classes.Carousel} 
              classNameAnimation={classes.Transition}
            >
              {slides}
            </Slider>
            <div className={classes.SliderButtonWrapper}>
              {tabs}
            </div>
            <ButtonBack className={classes.PrevBtn}/>
            <ButtonNext className={classes.NextBtn}/>
          </CarouselProvider>
        </div>
      </section>
    );
  }
}

export default Portfolio;