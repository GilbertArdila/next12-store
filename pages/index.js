import Head from 'next/head'

import Card from '../components/card'


import Layout from '../components/layout'
import { getLatestItems } from '../services/ItemService'


export default function Home({data}) {
  return (
    <Layout><h2 className='text-2xl font-bold text-center m-6'>The most recent products</h2> 
       <section className='flex flex-col md:flex-row justify-between items-center  p-6 max-w-6xl m-auto gap-4'>
        
       { data && data.map((item) => (
          <Card key={item.id} data={item} showAs={'home'} />
        ))}
        </section>
     </Layout> 
  )
}

export async function getStaticProps() {
  const data = await getLatestItems()
  return {
    props: {
      data
    }
  }
}

