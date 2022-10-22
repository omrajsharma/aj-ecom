import React from 'react'
import NavigationBar from './component/header/NavigationBar'
import NotFound from './component/pages/error/NotFound'
import Cart from './component/pages/cart/Cart'
import Home from './component/pages/home/Home'
import ProductDetails from './component/pages/product/ProductDetails'

import {Routes, Route} from 'react-router-dom'

function App() {

  
  return (
    <div>
      <NavigationBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App