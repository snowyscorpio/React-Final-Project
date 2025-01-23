import React from 'react';
import Title from './Title';

import banner from '../assets/images/banner4.jpg';

function About() {
  return (
    <div className="main">

      < Title />
        {/* <img
          src={banner}
          alt="banner"
          className="banner-image"
        /> */}
        <div className="about-container">
          <h2>Who Are We?</h2>
          <div className="about">
            <p>
              Welcome  to  MOON's  Flower  Shop, a  project  created  by  Loren  and  Saleh  with  a  shared  vision  to  bring  the  beauty  of  flowers  into  your  life. At MOON's  Flower  Shop, we  believe  that  every  bouquet  tells  a  story — whether  it’s  a  celebration, a  gesture  of  love, or  a  simple  way  to  brighten  someone’s  day. Our  collection  features  a wide  variety  of  fresh, handpicked  flowers, arranged  with  care  and  creativity  to  suit  every  occasion. From  elegant  roses  to  cheerful  sunflowers, we  strive  to  offer  something  special  for  everyone. Thank  you  for  supporting  our  project, and  we  hope  our  flowers  add  a  touch  of  joy  and  beauty  to  your  day.
            </p>
          </div>

        </div>          <img
            src={banner}
            alt="banner"
            className="banner-image"
          />

      </div>

  );
}
export default About;
