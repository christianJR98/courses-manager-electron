import React from 'react';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Grid from './components/Grid/Grid';

import './index.css'

const App = () => {
  return (
    <>
      <Header title="Courses Manager" />
      <div className='container'>
        <Sidebar />
        <Grid />
      </div>
    </>
  )
}

export default App;