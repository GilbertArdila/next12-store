import React,{useContext} from 'react'
import Image from 'next/image'

import { cartContext } from '../../context'

const Checkout = () => {
    const context = useContext(cartContext)

    //sumar el total del valor de los productos
    const total = context.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <section className='absolute flex flex-col justify-start items-center gap-3 w-48 h-[calc(100vh-40px-48px)] m-auto bg-white border border-blue-700  top-[48px] right-0 p-2 overflow-y-auto'>
        {context.cart.map((item) => (
            <div className='flex flex-col justify-between items-center w-full h-auto bg-blue-500 shadow-lg rounded-md  '>
                <Image src={item.url} width={50} height={50} alt={item.name} className="rounded-lg m-4 w-20 h-20" />
                <p className='text-md font-bold'>{item.name}</p>
                <p className='text-md font-bold'>{item.quantity} unit(s)</p>
                <p className='text-md font-bold'>Sub-total: ${item.price * item.quantity}</p>
            </div>
        ))}
         <span className='text-sm font-semibold '>Total: ${total}</span>

    </section>
  )
}

export default Checkout