import React from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import './ProductDetails.css'

function ProductDetails() {
  const productList = useSelector(state => state.productList)

  const {id} = useParams()
  let productDetail = {};

  for(let i = 0; i < productList.length; i++) {
    if(productList[i].id == id ) {
      productDetail = productList[i]
    }
  }

  return (
    <div className='product-detail-container'>
      <div className='product-detail-image'>
        <img src={productDetail.image} alt={productDetail.name} />
      </div>
      <div className='product-detail-info'>
        <h3>{productDetail.name}</h3>
        <p>{productDetail.description}</p>
        <p className='product-detail-price'>
          <strong>Price: </strong>
          <span className='product-detail-new-price'>
            {productDetail.price}
          </span>
          <span className='product-detail-old-price'>
            {productDetail.price * 1.05}
          </span>
           
        </p>
      </div>
    </div>
  )
}

export default ProductDetails