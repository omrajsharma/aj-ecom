import {
    UPDATE_CART_COUNT,
    ADD_TO_CART_LIST
} from './action'

const initialState = {
    productList: [
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
      ],
    cartCount: 0,
    cartList: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_CART_COUNT:
            return {
                ...state,
                cartCount: state.cartCount + 1
            }
        case ADD_TO_CART_LIST:
            return {
                ...state,
                cartList: [...state.cartList, action.payload]
            }
        default:
            return state
    }
}

export default reducer