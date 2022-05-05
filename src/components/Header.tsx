import { FC, useState } from 'react'

import logoImg from '../assets/img/logo.svg'
import cartIcon from '../assets/img/cart.svg'
import removeIcon from '../assets/img/remove.svg'

import cn from 'classnames'
import { ICartItem } from '../types'


let cartItems: ICartItem[] = [
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

    const total = cartItems.reduce((acc, item) => acc + item.price, 0)

    const removeItem = (id: string) => {
        cartItems = cartItems.filter(i => i.id !== id)
        console.log(id)
    }



    return (
        <div className='flex items-center justify-between relative px-40 py-3'
            style={{ background: 'linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%)' }} >

            <img src={logoImg} alt='logo' width={250} />

            <button className='bg-transparent border-none'
                onClick={() => setShowCart(!showCart)}>
                <img src={cartIcon} alt='cart' />
            </button>

            <div className={cn('absolute right-5 shadow-md p-5', {
                hidden: !showCart
            })}
                style={{ top: 'calc(60px + 1.5rem' }}>
                {cartItems.map(item => (
                    <div key={`card item ${item.name} `} className='flex-col items-center'>

                        <img src={item.imagePath} alt={item.name}
                            width={55} height={55} className='mr-3' />

                        <div className=''>{item.name}</div>

                        <div>{item.count} x {item.price} RUB</div>
                        <div className='text-red-600 cursor-pointer flex'
                            onClick={() => removeItem(item.id)}>
                                <img src={removeIcon} alt='remove'/>Удалить
                            </div>

                        <div className='text-lg border-t-2 mt-5 pt-2'>
                            Total: <b>{total} RUB</b>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Header