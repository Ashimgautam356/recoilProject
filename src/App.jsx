import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<MainLayout></MainLayout>}>
          
          
          </Route>

        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App