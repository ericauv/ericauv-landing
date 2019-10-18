import Video from '../components/video/Video'
import React from 'react'
import Layout from '../components/styles/layout/Layout'
import SEO from '../components/seo'

const VideoPage = props => (
  <Layout>
    <SEO title="Video" description="Showcase of Eric Auvaart's video, motion design, and motion graphics work" />
    <Video />
  </Layout>
)

export default VideoPage
