import React,{ Suspense } from 'react'
import NavBar from '../components/mainComponents/NavBar'
import Footer from '../components/mainComponents/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
   <div>
      <NavBar></NavBar>
      <Suspense fallback="----loading-----">
        <Outlet></Outlet>
      </Suspense>

      <Footer></Footer>
   </div>
  )
}

export default MainLayout