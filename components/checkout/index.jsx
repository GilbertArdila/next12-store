import React, { useContext } from 'react'
import Image from 'next/image'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { MinusCircleIcon } from '@heroicons/react/24/solid'

import { cartContext } from '../../context'

const Checkout = () => {
  const context = useContext(cartContext)

  //sumar el total del valor de los productos
  const total = context.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  //close checkout
  const handleOnClick = () => {
    //close checkout
    context.setOpenCheckout(false)
  }

  //remove item from cart
  function handleRemoveItem(data) {
    // check if item is already in cart
    const item = context.cart.find((item) => item.id === data.id)
    if (item) {
      //if quantity is 1, remove item from cart
      if (item.quantity === 1) {
        context.setCart(context.cart.filter((item) => item.id !== data.id))
      }
      // if quantity is more than 1, update quantity
      else {
        item.quantity = item.quantity - 1
        context.setCart([...context.cart])
      }
      // update count
      context.setCount(context.count - 1)
    }
  }

  return (
    <section className='absolute flex flex-col justify-start items-center gap-3 w-48 h-[calc(100vh-40px-48px)] m-auto bg-white  border-2 border-teal-500  top-[48px] right-0 p-2 overflow-y-auto'>
      <span className='absolute  right-2  cursor-pointer'
        onClick={handleOnClick}
      ><XCircleIcon className="h-6 w-6 text-black  " /></span>
      <h3 className='text-2xl font-mono text-center mt-6'>Your order</h3>
      {context.cart.map((item) => (
        <div className='flex flex-col justify-between items-center w-full h-auto mt-7 border-2 border-blue-500 shadow-lg rounded-md  '>
          <Image src={item.url} width={50} height={50} alt={item.name} className="rounded-lg m-4 w-20 h-20" />
          <p className='text-md font-bold'>{item.name}</p>
          <div className='flex w-full justify-around items-center'>
            <p className='text-md font-bold'>{item.quantity} unit(s)</p>
            {item.quantity > 1 ? <span className='cursor-pointer hover:scale-110'
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleRemoveItem(item)
              }
              }
            ><MinusCircleIcon className='h-6 w-6 text-black' /></span> :
              <span className='cursor-pointer hover:scale-110'
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleRemoveItem(item)
                }
                }><XCircleIcon className='h-6 w-6 text-red-600' /></span>}

          </div>

          <p className='text-md font-bold'>Sub-total: ${item.price * item.quantity}</p>
        </div>
      ))}
      {total > 0 ? <span className='text-xl font-bold mt-4 '>Total: ${parseFloat(total).toFixed(2)}</span>:
      <span className='text-xl font-mono m-auto text-center '>Your cart is empty</span>}


    </section>
  )
}

export default Checkout