import React from 'react'
import './ProductCard.css'
import {useDispatch} from 'react-redux'

function ProductCard(
  {
    id,
    name,
    description,
    price,
    image
  }
) {

  const dispatch = useDispatch()

  return (
    <div className='card-container'>
        <div className='card-image'>
            <img src={image} />
        </div>
        <div className='card-content'>
            <h3 className='product-name'>{name}</h3>
            <p className='product-desc'>{description}</p>
            <p className='product-price'> $ {price}</p>
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