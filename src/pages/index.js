import About from '../components/about/About'
import React from 'react'
import Layout from '../components/styles/layout/Layout'
import SEO from '../components/seo'

const AboutPage = props => (
  <Layout noBackButton={true} contact>
    <SEO title="About" description='Brief bio about Eric Auvaart, with links to other social media' />
    <About />
  </Layout>
)

export default AboutPage
