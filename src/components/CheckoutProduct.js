import React from 'react'
import { useStateValue } from '../StateProvider'
import CurrencyFormat from 'react-currency-format'
import '../css/CheckoutProduct.css'

function CheckoutProduct({ id, title, price, image, rating, key }) {
    const [{ cart }, dispatch] = useStateValue();

    function removeFromCart() {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt='Product Image' />
            <div className='checkoutProduct_info'>
                <div className='checkoutProduct_title'>
                    {title}
                </div>
                <CurrencyFormat
                    value={price}
                    displayType={'text'}
                    decimalScale={2}
                    thousandSeparator={true}
                    renderText={value => (
                        <>
                            <div className='checkoutProduct_price'>
                                <small>Rs.</small>
                                <strong>{value}</strong>
                            </div>
                        </>
                    )} />

                <div className='checkoutProduct_rating'>
                    {Array(rating).fill()
                        .map(item =>
                            <p className='fa fa-star checked'></p>
                        )
                    }
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
