import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Tweet from '../../components/Tweet/Tweet';

import avatar from '../../assets/images/avatar.jpg';
import classes from './TwitterSlider.css';

class TwitterSlider extends Component {
  state = {
    tweets: [
      {
        member: '@PaymeApp ',
        text1: 'win Apple Design Award! Big thanks to ',
        followers: '@DigitalStudio',
        mark: '!',
        text2: "They are aggressive in trying out new technologies and new design techniques. the best guys I've worked with.",
        img: avatar,
        name: 'Frank Underwood',
        nick: '@PresidentFrank'
      },
      {
        member: '@PaymeApp ',
        text1: 'win Apple Design Award! Big thanks to ',
        followers: '@DigitalStudio',
        mark: '!',
        text2: "They are aggressive in trying out new technologies and new design techniques. the best guys I've worked with.",
        img: avatar,
        name: 'Frank Underwood',
        nick: '@PresidentFrank'
      },
      {
        member: '@PaymeApp ',
        text1: 'win Apple Design Award! Big thanks to ',
        followers: '@DigitalStudio',
        mark: '!',
        text2: "They are aggressive in trying out new technologies and new design techniques. the best guys I've worked with.",
        img: avatar,
        name: 'Frank Underwood',
        nick: '@PresidentFrank'
      },
      {
        member: '@PaymeApp ',
        text1: 'win Apple Design Award! Big thanks to ',
        followers: '@DigitalStudio',
        mark: '!',
        text2: "They are aggressive in trying out new technologies and new design techniques. the best guys I've worked with.",
        img: avatar,
        name: 'Frank Underwood',
        nick: '@PresidentFrank'
      }
    ],
    wrapperWidth: null,
    marginLeft: null
  }
  
  componentDidMount() {
    this.setWrapperWidthHandler();
  }
  componentDidUpdate() {
    console.log(this.state.wrapperWidth)
  }

  setWrapperWidthHandler = () => {
    const tweetWidth = ReactDOM.findDOMNode(this.Tweet).getBoundingClientRect().width;
    //60 is a margin left and right of element
    const wrapperWidth = (tweetWidth * this.state.tweets.length) + (60 * this.state.tweets.length);
    const marginLeft = (60 + tweetWidth) / 2;
    this.setState({
      wrapperWidth: wrapperWidth,
      marginLeft: -marginLeft
    })
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
                ref={(section) => { this.Tweet = section; }}
              />
    });

    return (
      <section className={classes.TwitterWrapper}>
        <div className={classes.SliderContainer}>
          <div className={classes.SliderWrapper} style={{
              width: this.state.wrapperWidth,
              marginLeft: this.state.marginLeft
            }}>
            {tweets}
          </div>
        </div>
      </section>
    );
  }
}

export default TwitterSlider;