import Head from 'next/head'


import Layout from '../components/layout'
import { getLatestItems } from '../services/ItemService'


export default function Home({data}) {
  return (
    <Layout>
       <p>Home</p>
       { data && data.map((item) => (
         <div key={item.id}>
            <h2>{item.name}</h2>
          </div>
        ))}
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

