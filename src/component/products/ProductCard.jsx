import React from 'react'
import './ProductCard.css'
import {useDispatch} from 'react-redux'

function ProductCard() {

  const dispatch = useDispatch()

  return (
    <div className='card-container'>
        <div className='card-image'>
            <img src='https://m.media-amazon.com/images/I/71ey-9D8yDL._AC_UY436_FMwebp_QL65_.jpg' />
        </div>
        <div className='card-content'>
            <h3 className='product-name'>Product Name</h3>
            <p className='product-desc'>27.69 cm (10.9-inch) Liquid Retina display1 with True Tone, P3 wide colour and an anti-reflective coating</p>
            <p className='product-price'> $ 51,999.00</p>
        </div>
        <div className='card-button-container'>
            <button 
              onClick={() => dispatch({type: 'UPDATE_CART_COUNT'})}
            className='add-to-cart'
            >Add to Cart</button>
            <button className='buy-now'>Buy Now</button>
        </div>
    </div>
  )
}

export default ProductCard