import { FC, useEffect, useState } from 'react'

import logoImg from '../assets/img/logo.svg'
import cartIcon from '../assets/img/cart.svg'

import Cart from './Cart'
import "./Header.css"
import { RootStateType } from '../store/rootReducer'
import { useSelector } from 'react-redux'




const Header: FC = () => {
   
    const [showCart, setShowCart] = useState(false)
    const totalCountInit = useSelector((state: RootStateType):number | undefined => state.cart.totalCount);
     
    return (
        <div className='flex items-center justify-between relative px-40 py-3'
            style={{ background: 'linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%)' }} >

            <img src={logoImg} alt='logo' width={250} />

            <button className='bg-transparent border-none'
                onClick={() => setShowCart(!showCart)}>
                <img src={cartIcon} alt='cart' />
            </button>
            <div className='cart__quantity'>{totalCountInit}</div>

            <Cart showCart={showCart} setShowCart={setShowCart} />

        </div>
    )
}

export default Header