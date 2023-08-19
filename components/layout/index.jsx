import React from 'react'
import Head from 'next/head'

import Menu from '../menu'

const Layout = ({ children, title }) => {
    return (
        <div>

            <Head>
                <title>{title ? `My Store | ${title}` : 'My Store | Home'}</title>
                <meta name='My store' content='This is an app made with Next.js and Tailwindcss' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />
            <main className='w-full min-w-[100vw] h-full min-h-[calc(100vh-112px)]'>
                {children}
            </main>

            <footer className='w-full h-16 bg-slate-400 flex flex-col justify-center items-center'>
                <p className='text-white text-2xl font-bold'>This is an app made with Next.js and Tailwindcss</p>
                <p className='text-white text-2xl font-bold'>made with 💚 by Gilbert Ardila </p>
            </footer>

        </div>
    )
}

export default Layout