import React from 'react'
import Header from './Home/Header'
import Home from '../Pages/Home'
import Footer from '../Pages/Footer'
import Navbar from './Home/Navbar'
import '../assets/css/main.css'
const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <Navbar/>
      {children}
      <Footer/>
    </>
   
  )
}

export default Layout