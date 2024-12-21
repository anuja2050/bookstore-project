import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Course from './Courses.jsx/Course'
import SignUp from './components/SignUp'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cource' element={<Course/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/contact' element={<Contact/>} />

      </Routes>

      </div>
    </>
  )
}

export default App