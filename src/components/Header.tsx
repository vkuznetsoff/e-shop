import { FC, useState } from 'react'

import logoImg from '../assets/img/logo.svg'
import cartIcon from '../assets/img/cart.svg'

import Cart from './Cart'

import axios from "axios";


const Header: FC = () => {

    const [showCart, setShowCart] = useState(false)

    return (
        <div className='flex items-center justify-between relative px-40 py-3'
            style={{ background: 'linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%)' }} >

            <img src={logoImg} alt='logo' width={250} />

            <button className='bg-transparent border-none'
                onClick={() => setShowCart(!showCart)}>
                <img src={cartIcon} alt='cart' />
            </button>

            <Cart showCart={showCart} />

            
        </div>
    )
}

export default Header