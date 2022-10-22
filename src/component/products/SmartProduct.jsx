import React from 'react'
import ProductCard from './ProductCard'
import './SmartProduct.css'
import {useSelector} from 'react-redux'

function SmartProduct() {
  const productList = useSelector(state => state.productList)
  return (
    <div className='smart-product-container'>
      <div className='smart-product-header'>
        SmartProduct
      </div>

      <div className='smart-product-list'>
        {
          productList.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            )
          })
        }
      </div>

    </div>
  )
}

export default SmartProduct