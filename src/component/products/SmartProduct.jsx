import React from 'react'
import ProductCard from './ProductCard'
import './SmartProduct.css'

const ProductList = [
  {
    id: 1,
    name: 'Apple Ipad Pro',
    description: '27.69 cm (10.9-inch) Liquid Retina display1 with True Tone, P3 wide colour and an anti-reflective coating',
    price: 51999,
    image: 'https://m.media-amazon.com/images/I/71ey-9D8yDL._AC_UY436_FMwebp_QL65_.jpg'
  },
  {
    id: 2,
    name: 'Apple iPhone 12 (64GB) - Green',
    description: '6.1-inch (15.5 cm diagonal) Super Retina XDR display',
    price: 69900,
    image: 'https://m.media-amazon.com/images/I/71cQWYVtcBL._AC_UY436_FMwebp_QL65_.jpg'
  },
  {
    id: 3,
    name: 'Apple Watch SE',
    description: 'GPS + Cellular, 40mm',
    price: 29900,
    image: 'https://m.media-amazon.com/images/I/71ZyBh4LQuL._AC_UY436_FMwebp_QL65_.jpg'
  },
  {
    id: 4,
    name: 'Apple AirPods Pro',
    description: 'Active Noise Cancellation for immersive sound',
    price: 23900,
    image: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY436_FMwebp_QL65_.jpg'
  }
]

function SmartProduct() {
  return (
    <div className='smart-product-container'>
      <div className='smart-product-header'>
        SmartProduct
      </div>

      <div className='smart-product-list'>
        {
          ProductList.map((product) => {
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