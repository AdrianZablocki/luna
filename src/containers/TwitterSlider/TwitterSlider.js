import React, { Component } from 'react';

import Tweet from '../../components/Tweet/Tweet';

import avatar from '../../assets/images/avatar.jpg';
import classes from './TwitterSlider.css';

class TwitterSlider extends Component {
  state = {
    tweets: [
      {
        member: '@PaymeApp1 ',
        text1: 'win Apple Design Award! Big thanks to ',
        followers: '@DigitalStudio',
        mark: '!',
        text2: "They are aggressive in trying out new technologies and new design techniques. the best guys I've worked with.",
        img: avatar,
        name: 'Frank Underwood',
        nick: '@PresidentFrank'
      },
      {
        member: '@PaymeApp2 ',
        text1: 'win Apple Design Award! Big thanks to ',
        followers: '@DigitalStudio',
        mark: '!',
        text2: "They are aggressive in trying out new technologies and new design techniques. the best guys I've worked with.",
        img: avatar,
        name: 'Frank Underwood',
        nick: '@PresidentFrank'
      },
      {
        member: '@PaymeApp3 ',
        text1: 'win Apple Design Award! Big thanks to ',
        followers: '@DigitalStudio',
        mark: '!',
        text2: "They are aggressive in trying out new technologies and new design techniques. the best guys I've worked with.",
        img: avatar,
        name: 'Frank Underwood',
        nick: '@PresidentFrank'
      },
      {
        member: '@PaymeApp4 ',
        text1: 'win Apple Design Award! Big thanks to ',
        followers: '@DigitalStudio',
        mark: '!',
        text2: "They are aggressive in trying out new technologies and new design techniques. the best guys I've worked with.",
        img: avatar,
        name: 'Frank Underwood',
        nick: '@PresidentFrank'
      },
      {
        member: '@PaymeApp4 ',
        text1: 'win Apple Design Award! Big thanks to ',
        followers: '@DigitalStudio',
        mark: '!',
        text2: "They are aggressive in trying out new technologies and new design techniques. the best guys I've worked with.",
        img: avatar,
        name: 'Frank Underwood',
        nick: '@PresidentFrank'
      }
      ,
      {
        member: '@PaymeApp4 ',
        text1: 'win Apple Design Award! Big thanks to ',
        followers: '@DigitalStudio',
        mark: '!',
        text2: "They are aggressive in trying out new technologies and new design techniques. the best guys I've worked with.",
        img: avatar,
        name: 'Frank Underwood',
        nick: '@PresidentFrank'
      }
    ],
    activeIndex: 0,
  }
  
  componentDidMount() {
    setInterval(() => this.goToNextSlide(), 5000);
  }

  goToNextSlide = () => {
    let index = this.state.activeIndex;
    let tweetsUpdated = [...this.state.tweets];
    let [first, ...rest] = tweetsUpdated;

    if (index === this.state.tweets.length - 2) {
      index = -1;
    }

    index++;
    tweetsUpdated = [...rest, first];

    this.setState({
      tweets: tweetsUpdated,
      activeIndex: index
    });
  }

  render() {
    let tweets;
    tweets = this.state.tweets.map((el, index) => {
      return  <Tweet 
                key={index} 
                member={el.member}
                text1={el.text1}
                text2={el.text2}
                followers={el.followers}
                mark={el.mark}
                source={el.img}
                name={el.name}
                nick={el.nick}
                index={index - 1}
                activeIndex={this.state.activeIndex}
                width={{
                  width: '60%',
                  transition: 'all 900ms ease'
                }}
              />
    });

    return (
      <section className={classes.TwitterWrapper}>
        <div className={classes.CarouselContainer}>
          <div className={classes.CarouselWrapper}>
            <div className={classes.SlideWrapper} style={{
                width: (60 * this.state.tweets.length) + '%', // width of each item 60%
                transition: 'all 1600ms ease',
                transform: 'translateX(-' + (this.state.activeIndex * (100 / this.state.tweets.length)) + '%)',
              }}
            >
              <ul className={classes.Carousel}>
                {tweets}
              </ul>
            </div>          
          </div>
        </div>
      </section>
    );
  }
}

export default TwitterSlider;