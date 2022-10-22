import React from 'react'
import './ProductCard.css'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

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
        <Link to={`/product/${id}`} style={{ color: 'black', textDecoration: 'none' }} >
          <div className='card-content'>
              <h3 className='product-name'>{name}</h3>
              <p className='product-desc'>{description}</p>
              <p className='product-price'> $ {price}</p>
          </div>
        </Link>
        <div className='card-button-container'>
            <button
              onClick={() => {
                dispatch({type: 'UPDATE_CART_COUNT'})
                dispatch({
                  type: 'ADD_TO_CART_LIST', 
                  payload: { id: id, name: name, description: description, price: price, image: image}
                })
              } 
            }
            className='add-to-cart'
            >Add to Cart</button>
            <button className='buy-now'>Buy Now</button>
        </div>
    </div>
  )
}

export default ProductCard