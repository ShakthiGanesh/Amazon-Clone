import React from 'react'
import '../css/Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V4/Phase4_Unrec_PC_Hero_1X_ENGLISH._CB416347023_.jpg'
                    alt='Amazon Offer'>
                </img>
                <div className='home_row'>
                    <Product
                        id='100001'
                        title='The Evening and the Morning: The Prequel to The Pillars of the Earth (A Kingsbridge Novel) '
                        price={299.33}
                        image='https://images-na.ssl-images-amazon.com/images/I/51FiyYyntIL._SX309_BO1,204,203,200_.jpg'
                        rating={4}
                    />
                    <Product
                        id='100006'
                        title="OnePlus Y Series 80 cm (32 inches) HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model) "
                        price={13990}
                        image='https://images-na.ssl-images-amazon.com/images/I/817gj7pfUzL._SX522_.jpg'
                        rating={3}
                    />
                </div>
                <div className='home_row'>
                    <Product
                        id='100002'
                        title='Mintcase PSP Power Charger AC Power Adapter for all PSP 5V 2Amps PSP 1000 2000 3000 E1004'
                        price={399.23}
                        image='https://images-na.ssl-images-amazon.com/images/I/41vyQ2UHfjL.jpg'
                        rating={3}
                    />
                    <Product
                        id='100006'
                        title='TP-Link TL-WN722N 150Mbps Wireless USB Adapter for Windows and Mac Laptops Only (Black/White)'
                        price={649}
                        image='https://m.media-amazon.com/images/I/51LUt58C0SL._AC_UY327_QL65_.jpg'
                        rating={5}
                    />
                    <Product
                        id='100005'
                        title="Decals Design 'Live Laugh and Love Family' Wall Sticker (PVC Vinyl, 45 cm x 30 cm, Black) "
                        price={94.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51NgXv-2y2L.jpg'
                        rating={4}
                    />
                </div>
                <div className='home_row'>

                    <Product
                        id='100003'
                        title='UpBright New Global AC/DC dapter for VOX Tonelab ST Tone lab Multi-Effects Guitar Effect Pedal Modeling Effects Processor Power Supply Cord Cable Charger Mains PSU '
                        price={3, 249.11}
                        image='https://m.media-amazon.com/images/I/61KkXelaEZL._AC_UY327_QL65_.jpg'
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
