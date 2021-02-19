import React from 'react'
import '../css/Checkout.css'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{ cart, user }, dispatch] = useStateValue()
    return (
        <div className='checkout' >
            <div className='checkout_left'>
                <img className='checkout_ad'
                    src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/CBCC_Jup_w4/ILM/Bank-FD_ILM_640x45._CB416285332_.jpg'
                    alt='Amazon Ad'>
                </img>
                <div>
                    <h3 className=''>Hello, {user ? user.email : ' Guest'}</h3>
                    <h2 className='checkout_title'>Your Shopping Basket</h2>
                    <div className='checkout_list'>
                        {
                            cart.map((item, index) =>
                                <div>
                                    <CheckoutProduct
                                        key={index}
                                        className={index}
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
