import React from 'react'
import NavigationBar from './component/header/NavigationBar'
import Carousel from './component/header/Carousel'
import {useSelector, useDispatch} from 'react-redux'
import SmartProduct from './component/products/SmartProduct'

function App() {

  const dispatch = useDispatch()


  
  return (
    <div>
      <NavigationBar />
      <Carousel /> 
      <SmartProduct/>
      


    </div>
  )
}

export default App