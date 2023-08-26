import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='h-72 md:h-96 bg-black bg-cover bg-center' style={{backgroundImage:"url('https://lirp.cdn-website.com/4a16da59/dms3rep/multi/opt/cover-2580138b-800w-1920w.png')",boxSizing: 'border-box'}}>
        <div className='h-72 md:h-96 bg-[rgba(0,0,0,0.5)] '>
            <div className="w-full p-12 text-white text-center">
                <h2>Shop only the best</h2>
                <p>Get the best deals on the latest products</p>
            </div>

        </div>
    </div>
  )
}

export default Hero