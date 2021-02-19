import React from 'react'
import CurrencyFormat from 'react-currency-format';
import '../css/Product.css'
import { useStateValue } from '../StateProvider'



function Product({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();

    function addToCart() {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        }
        )
    }
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <CurrencyFormat
                    value={price}
                    displayType={'text'}
                    decimalScale={2}
                    thousandSeparator={true}
                    renderText={value => (
                        <>
                            <div className='product_price'>
                                <small>Rs.</small>
                                <strong>{value}</strong>
                            </div>
                        </>
                    )} />

                <div className='product_rating'>
                    {Array(rating).fill().map((current, index) =>
                        <span class="fa fa-star checked"></span>
                    )}
                </div>
            </div>
            <img
                className='product_image'
                src={image}>
            </img>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
