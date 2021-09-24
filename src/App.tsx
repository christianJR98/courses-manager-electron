import React from 'react';
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import { courses } from './data/courses';

const App = () => {
  return (
    <Header title="Courses Manager" />
    // <Card {...courses[0]} />
  )
}

export default App;