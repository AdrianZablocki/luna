import React, { Component } from 'react';

import classes from './About.css';
import image1 from '../../assets/images/img_1.jpg';
import image2 from '../../assets/images/img_2.jpg';
import image3 from '../../assets/images/img_3.jpg';
import image4 from '../../assets/images/img_4.jpg';

class About extends Component {

  state = {
    article: {
      title: 'About us',
      text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie dapibus arcu, imperdiet vulputate ante tincidunt vel. Nam sit amet ex eu diam pulvinar tempus nec ut sem. Vivamus ante turpis, mattis eget posuere scelerisque, aliquam porttitor nisi. Vivamus nec justo at erat rutrum imperdiet nec feugiat velit. Vestibulum in libero ut neque ultrices feugiat in ut diam. Sed consectetur, magna quis consectetur pretium, velit mi mattis erat, id viverra ante metus tempus sapien. Sed elementum turpis mi, semper varius nibh feugiat at. Etiam imperdiet finibus lorem, ut finibus turpis ullamcorper tempor. Fusce eu elementum sapien. Aenean placerat laoreet erat id dictum. Suspendisse potenti.',
      text2: 'Aliquam feugiat ex eu augue vulputate cursus. Nam in ultricies augue, eget auctor est. In at eros et leo ornare tincidunt eget ac erat. Donec laoreet euismod nisl nec cursus. Phasellus felis est, commodo ac quam in, scelerisque ultrices ex. Vestibulum sit amet risus pretium, commodo ante a, venenatis sapien.'
    },
    images: [
      { 
        id: 1,
        src: image1,
        title: 'desktop'
      },
      {
        id: 2,
        src: image2,
        title: 'laptop'
      },
      {
        id: 3,
        src: image3,
        title: 'ofice'
      },
      {
        id: 4,
        src: image4,
        title: 'laptop zoom'
      }
    ]
  }

  render() {
    let images;
    images = this.state.images.map(img => {
      return (
        <div key={img.id} className={classes.AboutGalleryImg}>
          <img src={img.src} alt={img.title} title={img.title} />
        </div>
      ); 
    });

    return (
      <section className={classes.AboutWrapper}>
        <article className={classes.AboutContainer}>        
          <h2>{this.state.article.title}</h2>
          <div>
            <p>{this.state.article.text1}</p>
            <p>{this.state.article.text2}</p>
          </div>
        </article>
        <div className={classes.AboutGallery}>
          {images}
        </div>
      </section>
    );
  }
}

export default About;