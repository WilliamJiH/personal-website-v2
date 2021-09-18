import React, { useState } from 'react';
import './Navigator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Typed from 'react-typed';
import HHJ from '../../image/HHJ.png';

const Navigator = ({ setPageHandler }) => {
  let resetPages = {
    home_on: false,
    blog_on: false,
    resume_on: false,
    projects_on: false,
  };
  const [isOn, setIsOn] = useState({ resetPages, home_on: true });
  const { home_on, blog_on, resume_on, projects_on } = isOn;

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
          <li
            className={home_on ? 'current-active' : ''}
            name='HOME'
            onClick={(e) => {
              setPageHandler(e);
              setIsOn({ resetPages, home_on: true });
            }}
          >
            HOME
          </li>
          <li
            className={blog_on ? 'current-active' : ''}
            name='BLOG'
            onClick={(e) => {
              setPageHandler(e);
              setIsOn({ resetPages, blog_on: true });
            }}
          >
            BLOG
          </li>
          <li
            className={resume_on ? 'current-active' : ''}
            name='RESUME'
            onClick={(e) => {
              setPageHandler(e);
              setIsOn({ resetPages, resume_on: true });
            }}
          >
            RESUME
          </li>
          <li
            className={projects_on ? 'current-active' : ''}
            name='PROJECTS'
            onClick={(e) => {
              setPageHandler(e);
              setIsOn({ resetPages, projects_on: true });
            }}
          >
            PROJECTS
          </li>
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
