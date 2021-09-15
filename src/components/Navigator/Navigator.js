import React from 'react';
import './Navigator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Typed from 'react-typed';
import HHJ from '../../image/HHJ.png';

const Navigator = () => {
  return (
    <section className='Navigator'>
      <div className='profile'>
        <img src={HHJ} alt='HHJ' />
        <div className='profile-header'>Haohua Ji</div>
        <p>
          <Typed
            showCursor={false}
            strings={[
              'Front-end Developer',
              'Back-end Developer',
              'Programmer',
              'Clarinetist',
              'Home Chef',
            ]}
            typeSpeed={60}
            backSpeed={60}
            loop
          />
        </p>
      </div>
      <div className='Nav Nav-list'>
        <ul>
          <li>HOME</li>
          <li>BLOG</li>
          <li>RESUME</li>
          <li>PROJECTS</li>
        </ul>
      </div>
      <div>
        <div className='Nav Copyright'>Copyright © 2021 Haohua Ji</div>
        <div className='Nav Nav-footer'>
          <ul>
            <li
              onClick={() =>
                window
                  .open('https://www.linkedin.com/in/williamji/', '_blank')
                  .focus()
              }
            >
              <FontAwesomeIcon icon={faLinkedin} fixedWidth />
            </li>
            <li
              onClick={() =>
                window.open('https://github.com/WilliamJiH', '_blank').focus()
              }
            >
              <FontAwesomeIcon icon={faGithub} fixedWidth />
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} fixedWidth />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navigator;
