import React from 'react'
import NavigationBar from './component/header/NavigationBar'
import Carousel from './component/header/Carousel'
import {useSelector, useDispatch} from 'react-redux'

function App() {

  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter)
  const name = useSelector(state => state.name)


  
  return (
    <div>
      <NavigationBar />
      <Carousel />   


      counter : {counter} {name}
      <button
        onClick={() => dispatch({type: 'ADD_ONE_TO_COUNTER'})}
      >inc</button>
      <button
        onClick={() => dispatch({type: 'MINUS_ONE_FROM_COUNTER'})}
      >dec</button>
      <button
        onClick={() => dispatch({type:'CUSTOM_ADD_COUNTER', payload: 5})}
      >
        testing
      </button>
    </div>
  )
}

export default App