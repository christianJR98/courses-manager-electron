import React from 'react';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Grid from './components/Grid/Grid';
import Card from './components/Card/Card'
import { courses } from './data/courses';

import './index.css'

const App = () => {
  return (
    <>
      <Header title="Courses Manager" />
      <div className='container'>
        <Sidebar />
        <Grid />
      </div>
      {/* <Card {...courses[0]} /> */}
    </>
  )
}

export default App;