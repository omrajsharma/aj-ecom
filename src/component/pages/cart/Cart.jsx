import React from 'react'
import {useSelector} from 'react-redux'
import './Cart.css'

function Cart() {
    const cartList = useSelector(state => state.cartList)

  return (
    <div className='cart-container'>
        <div className='cart-header'>
            <h1>My Cart</h1>
        </div>

        <div className='cart-list'>
            {
                cartList.map((item) => (
                    <div className='cart-item'>
                        <div className='cart-item-image'>
                            <img src={item.image} />
                        </div>
                        <div className='cart-item-content'>
                            <h3 className='cart-item-name'>{item.name}</h3>
                            <p className='cart-item-desc'>{item.description}</p>
                            <h3 className='cart-item-price'> 
                                ₹ {item.price}
                                {'    '}
                                <span className='cart-item-old-price'>
                                    {item.price * 1.05} 
                                </span>
                            </h3>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cart