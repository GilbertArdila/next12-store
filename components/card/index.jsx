import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {PlusIcon} from '@heroicons/react/24/solid'


import { cartContext } from '../../context'

import { getPathsFromNames } from '../../lib/utils'

const Card = ({ data, showAs }) => {
  const context = useContext(cartContext)

  function handleOnClick(data) {
    context.setCount(context.count + 1)
    // check if item is already in cart
    const item = context.cart.find((item) => item.id === data.id)
    if (item) {
      // if item is in cart, update quantity
      item.quantity = item.quantity + 1
      context.setCart([...context.cart])
    } else {
      // if item is not in cart, add name, url, price, quantity
      context.setCart([...context.cart, { id: data.id, name: data.name, url: data.url, price: data.price, quantity: 1 }])
      
    }
  }

  if (showAs === 'store') {
    return (
      <>
        <Link href={`/store/${getPathsFromNames(data.name)}`}>
          <div
            className="flex flex-col w-80 h-96 p-2 relative  items-center border rounded-lg shadow-lg cursor-pointer "
          >
            <Image src={data.url} width={200} height={200} alt={data.name} className="rounded-lg m-4 h-52" />
            <p className="text-lg font-bold">{data.name}</p>
            <p className="text-md font-light">$ {data.price}</p>
            <p className="text-md font-mono">{data.category.name}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded hover:animate-pulse absolute bottom-0"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleOnClick(data)
              }}
            >
              <PlusIcon className="h-6 w-20 text-white  " />
            </button>
          </div>

        </Link>

      </>
    )
  } if (showAs === 'home') {

    return (
      <Link href={`/store/${getPathsFromNames(data.name)}`}>
        <div className="flex flex-col w-80 h-80 p-4 justify-center items-center border rounded-lg shadow-lg cursor-pointer ">

          <Image src={data.url} alt={data.name} width={200} height={200} className="rounded-lg m-4" />
          <p className="text-lg font-bold">{data.name}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold  m-4 py-2 px-4 rounded hover:animate-pulse"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleOnClick(data)
            }}>
            <PlusIcon className="h-6 w-10 text-white  " />
          </button>
        </div>
      </Link>
    )
  }
  else {
    return (
      <div className="animate-fade-in  flex flex-col w-2/3 h-2/3 m-auto border shadow-lg p-4">
        <Image src={data.url} alt={data.name} width={250} height={300} className="rounded-lg m-4 scale " />
        <p className="text-lg font-bold">{data.name}</p>
        <p className="text-md font-light">$ {data.price}</p>
        <p className="text-md font-mono">{data.category.name}</p>
        <p className="text-md font-mono">{data.description}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-1/2  m-auto mt-4 py-2 px-4 rounded hover:animate-pulse "
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleOnClick(data)
          }}>
          <PlusIcon className="h-6 w-20 text-white " />
        </button>
      </div>
    )
  }
}

export default Card 