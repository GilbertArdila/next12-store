import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {getPathsFromNames} from '../../lib/utils'

const Card = ({data,showAs}) => {



  if(showAs === 'store'){
    return (
      <Link href={`/store/${getPathsFromNames(data.name)}`}>
      <div 
      className="flex flex-col w-80 h-80 p-4   items-center border rounded-lg shadow-lg cursor-pointer "
      >
        <Image src={data.url} width={200} height={200} className="rounded-lg m-4"/>
        <p className="text-lg font-bold">{data.name}</p>
        <p className="text-md font-light">$ {data.price}</p>
        <p className="text-md font-mono">{data.category.name}</p>
      </div>
      </Link>
    )
  }if(showAs === 'home'){
    
    return (
      <Link href={`/store/${getPathsFromNames(data.name)}`}>
      <div className="flex flex-col w-80 h-80 p-4 justify-center items-center border rounded-lg shadow-lg cursor-pointer ">
       
       <Image src={data.url} width={200} height={200} className="rounded-lg m-4"/>
        <p className="text-lg font-bold">{data.name}</p>
      </div>
      </Link>
    )
}
else{
    return (
        <div className="animate-fade-in flex flex-col w-2/3 h-2/3 m-auto border shadow-lg p-4">
            <Image src={data.url} width={250} height={300} className="rounded-lg m-4 scale"/>
            <p className="text-lg font-bold">{data.name}</p>
            <p className="text-md font-light">$ {data.price}</p>
            <p className="text-md font-mono">{data.category.name}</p>
            <p className="text-md font-mono">{data.description}</p>
        </div>
        )
}
}

export default Card 