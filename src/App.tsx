import React from 'react';
import Card from './components/Card/Card'
import { courses } from './data/courses';

const App = () => {
  return (
    <Card {...courses[0]} />
  )
}

export default App;