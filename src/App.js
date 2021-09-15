import React, { useState, Fragment } from 'react';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Navigator from './components/Navigator/Navigator';
import './index.css';

const App = () => {
  const [page, setPage] = useState('HOME');

  let currentPage;
  switch (page) {
    case 'HOME':
      currentPage = <Home />;
      break;
    case 'PROJECTS':
      currentPage = <Projects />;
      break;
  }
  return (
    <Fragment>
      <div className='App'>
        <Navigator />
        <div>{currentPage}</div>
      </div>
    </Fragment>
  );
};

export default App;
