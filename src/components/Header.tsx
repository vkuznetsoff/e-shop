import { FC, useState } from 'react'

import logoImg from '../assets/img/logo.svg'
import cartIcon from '../assets/img/cart.svg'


import cn from 'classnames'
import { ICartItem } from '../types'
import Cart from './Cart'


let cart: ICartItem[] = [
    {
        id: '1qq',
        imagePath: 'https://items.s1.citilink.ru/1420753_v01_b.jpg',
        name: 'Квадрокоптер DJI Mini 2',
        count: 1,
        price: 127990
    }
]


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