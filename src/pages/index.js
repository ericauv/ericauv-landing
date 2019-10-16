import React from 'react'

import SEO from '../components/seo'
import Home from '../components/Home'
import Layout from '../components/styles/layout/Layout'

const IndexPage = () => (
  <Layout home contact filled={true}>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
