import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Contact = () => {
  return (
    <>
    <Navbar />
      <div className=" min-h-screen">
        <Form />
      </div>
      <Footer />
    </>
  )
}

export default Contact