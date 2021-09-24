import React, { useState, useCallback } from 'react';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Grid from './components/Grid/Grid';
import AddForm from './components/AddForm/AddForm';

import './index.css'


const OPTIONS = {
  SHOW_COURSES: 'SHOW_COURSES',
  ADD_COURSE: 'ADD_COURSE',
  UPDATE_COURSE: 'UPDATE_COURSE',
  DELETE_COURSE: 'DELETE_COURSE',
}

const App = () => {
  const [currentOption, setCurrentOption] = useState(OPTIONS.SHOW_COURSES);

  const showMainContent = (newContent: string) => {
    switch (newContent) {
      case OPTIONS.SHOW_COURSES:
        return <Grid />
      case OPTIONS.ADD_COURSE:
        return <AddForm />
      case OPTIONS.UPDATE_COURSE:
        return <div>Update Course</div>
      case OPTIONS.DELETE_COURSE:
        return <div>Delete Course</div>
    }
  }

  const changeToShowCourses = useCallback(() => {
    setCurrentOption(OPTIONS.SHOW_COURSES);
  }, []);

  const changeToAddCourse = useCallback(() => {
    setCurrentOption(OPTIONS.ADD_COURSE);
  }, []);

  const changeToUpdateCourse = useCallback(() => {
    setCurrentOption(OPTIONS.UPDATE_COURSE);
  }, []);

  const changeToDeleteCourse = useCallback(() => {
    setCurrentOption(OPTIONS.DELETE_COURSE);
  }, []);

  return (
    <>
      <Header title="Courses Manager" />
      <div className='container'>
        <Sidebar
          options={[
            {
              label: 'Show Courses',
              action: changeToShowCourses
            },
            {
              label: 'Add Course',
              action: changeToAddCourse
            },
            {
              label: 'Update Course',
              action: changeToUpdateCourse
            },
            {
              label: 'Delete Course',
              action: changeToDeleteCourse
            }
          ]}
        />
        {showMainContent(currentOption)}
      </div>
    </>
  )
}

export default App;