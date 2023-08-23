import React,{useContext} from 'react'
import Link from 'next/link'
import {ShoppingCartIcon} from '@heroicons/react/24/solid'

import { cartContext } from '../../context'

const Menu = () => {
    const context = useContext(cartContext)

    return (
        <nav className='w-full h-10 flex justify-around p-6 bg-teal-500'>
            <div className="flex justify-around items-center w-auto  text-white">
                <Link href='/' legacyBehavior >
                <a className='font-semibold text-xl tracking-tight p-2 hover:bg-teal-700 hover:rounded-lg '>Home</a>
                </Link>
                <Link href='/faq' legacyBehavior>
                <a className='font-semibold text-xl tracking-tight p-2 hover:bg-teal-700 hover:rounded-lg '>FAQ</a>
                </Link>
                <Link href='/store' legacyBehavior>
                <a className='font-semibold text-xl tracking-tight p-2 hover:bg-teal-700 hover:rounded-lg '>Store</a>
                </Link>
            </div >
            <div className='flex justify-around items-center w-[calc(10%)]'>
            <a className=' text-sm  px-4 py-2  border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white  mt-0'>
                   <ShoppingCartIcon className="h-6 w-6 text-blue-500  hover:text-blue-700" /> </a>
                <span>{context.count > 0 ? context.count: null}</span>
            </div>
        </nav >

    )
}

export default Menu