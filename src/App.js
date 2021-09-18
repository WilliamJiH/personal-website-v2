import React, { useState, Fragment } from 'react';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Navigator from './components/Navigator/Navigator';
import Blog from './components/Blog/Blog';
import Resume from './components/Resume/Resume';
import './App.css';

const App = () => {
  const [page, setPage] = useState('HOME');

  const setPageHandler = (e) => {
    setPage(e.target.getAttribute('name'));
  };

  let currentPage;
  switch (page) {
    case 'HOME':
      currentPage = <Home />;
      break;
    case 'BLOG':
      currentPage = <Blog />;
      break;
    case 'RESUME':
      currentPage = <Resume />;
      break;
    case 'PROJECTS':
      currentPage = <Projects />;
      break;
  }
  return (
    <Fragment>
      <div className='App'>
        <Navigator setPageHandler={setPageHandler} />
        <div>{currentPage}</div>
      </div>
    </Fragment>
  );
};

export default App;
