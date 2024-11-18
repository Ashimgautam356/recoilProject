import React from 'react'
import NavBar from '../components/mainComponents/NavBar'
import Footer from '../components/mainComponents/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
   <div>
      <NavBar></NavBar>
      
      <Outlet></Outlet>

      <Footer></Footer>
   </div>
  )
}

export default MainLayout