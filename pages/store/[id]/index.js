import React from 'react'


import Layout from '../../../components/layout'
import Card from '../../../components/card'
import { getPathsFromIds } from '../../../lib/utils'
import { getItem } from '../../../services/ItemService'

const Item = ({item}) => {

  return (
    <Layout title={`Item ${item.name}`}>
    <section className='w-full h-full flex m-auto p-6'>
    <Card data={item.data} />
    </section>
    </Layout>
  )
}

export async function getStaticPaths() {
    const paths = await getPathsFromIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
  const id = params.id
  const item = await getItem(id)
  return {
    props: {
      item
    }
  }
}




export default Item 