import React from 'react'

import Layout from '../../components/layout'
import { getItems } from '../../services/ItemService'
import Card from '../../components/card'

const Store = ({data}) => {
  
  return (
    <Layout title={`Store`}>
    <h2 className='text-2xl font-bold text-center m-6'>Store</h2>
    <section className='flex flex-col  justify-between items-center md:grid md:grid-cols-2 gap-2 lg:grid-cols-3  p-6 max-w-6xl m-auto cursor-pointer' >
    { data && data.map((item) => (
      <Card key={item.id} data={item} showAs={"store"} />
    ))}</section>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getItems()
  return {
    props: {
      data
    }
  }
}

export default Store