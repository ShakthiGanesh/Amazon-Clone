import { CardTravel } from '@material-ui/icons'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import '../css/Subtotal.css'
import { useStateValue } from '../StateProvider'

function Subtotal() {
    const [{ cart }, dispatch] = useStateValue()
    var price = 0;
    cart.map(item =>
        price = price + item.price
    )
    return (
        <div className='subtotal'>
            <CurrencyFormat
                value={price}
                displayType={'text'}
                decimalScale={2}
                prefix={'Rs.'}
                thousandSeparator={true}
                renderText={value => (
                    <>
                        <div>
                            Subtotal ({cart?.length} items):
                            <strong> {value}</strong>
                        </div>
                        <small className='subtotal_gift'>
                            <input type='checkbox' />
                            <p>This order contains a gift</p>
                        </small>
                    </>
                )} />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
