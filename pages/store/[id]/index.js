import React from 'react'
import { useRouter } from 'next/router'

import Layout from '../../../components/layout'

const Item = () => {
    const router = useRouter()
    const { id } = router.query

  return (
    <Layout title={`Item ${id}`}>
    <div>Item {id}</div>
    </Layout>
  )
}

export default Item 