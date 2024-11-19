import React  from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AllProducts from './components/AllProducts'
import Product from './components/Product'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

            <Route path='/' element={<MainLayout></MainLayout>}>
              <Route index element={<AllProducts></AllProducts>}></Route>
              <Route path='/:id' element={<Product></Product>}></Route>
            
            </Route>

        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App