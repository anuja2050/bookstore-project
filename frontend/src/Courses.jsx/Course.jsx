import React from 'react'
import Barnav from '../components/Barnav'
import Cource from '../components/Cource'
import Footer from '../components/Footer'


function Course() {
 
  
  return (
    <>
    <Barnav/>
    <div className='min-h-screen'>
    <Cource/>
    </div>
   
    <Footer/>
    </>
  )
}

export default Course