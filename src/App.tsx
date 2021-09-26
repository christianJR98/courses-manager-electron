import React, { useState, useEffect, useCallback } from 'react';
const { ipcRenderer } = window.require('electron');
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Grid from './components/Grid/Grid';
import AddForm from './components/AddForm/AddForm';
import SearchForm from './components/SearchForm/SearchForm';
import { ACTIONS } from './constants/actions/actions';

import './index.css'


const OPTIONS = {
  SHOW_COURSES: 'SHOW_COURSES',
  ADD_COURSE: 'ADD_COURSE',
  SEARCH_COURSE: 'UPDATE_COURSE',
}

const App = () => {
  const [currentOption, setCurrentOption] = useState(OPTIONS.SHOW_COURSES);
  const [courses, setCourses] = useState([])

  const showMainContent = (newContent: string) => {
    switch (newContent) {
      case OPTIONS.SHOW_COURSES:
        return <Grid data={courses} />
      case OPTIONS.ADD_COURSE:
        return <AddForm />
      case OPTIONS.SEARCH_COURSE:
        return <SearchForm />
    }
  }

  useEffect(() => {
    const getCourses = async () => {
      const coursesData = await ipcRenderer.invoke(ACTIONS.GET_COURSES);
      setCourses(coursesData)
    }

    getCourses()
  }, [])

  const changeToShowCourses = useCallback(() => {
    setCurrentOption(OPTIONS.SHOW_COURSES);
  }, []);

  const changeToAddCourse = useCallback(() => {
    setCurrentOption(OPTIONS.ADD_COURSE);
  }, []);

  const changeToSearchCourse = useCallback(() => {
    setCurrentOption(OPTIONS.SEARCH_COURSE);
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
              label: 'Search Course',
              action: changeToSearchCourse
            }
          ]}
        />
        {courses && showMainContent(currentOption)}
      </div>
    </>
  )
}

export default App;