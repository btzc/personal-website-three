import React from 'react';

import Compass from '../../components/compass/compass.component';

import './home.styles.scss';

const Home = () => (
  <div className='home'>
    <div className='hero'>
      <div className='heading-primary'>
        <div className='heading-primary--pre'>
          Hello<span className='emphasis'>,</span> world<span className='emphasis'>.</span>
        </div>
        <div className='heading-primary--main'>
          My name is Brandon<span className='emphasis'>.</span>
        </div>
        <p className='heading-primary--sub'>
          I'm a software engineer who specializes in designing and developing full-stack applications.
          When I'm not coding you can often find me cooking some food, going on a hike, or looking for my next adventure.
        </p>
      </div>
      <div className='compass--container'>
        <Compass />
      </div>
    </div>
  </div>
);

export default Home;

// for social links in compass
// #2a6177
