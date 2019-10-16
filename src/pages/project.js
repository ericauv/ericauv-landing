import React from 'react'
import Project from '../components/web/Project'
import Layout from '../components/styles/layout/Layout'
const ProjectPage = props => (
  <Layout>
    <Project title={props.query.title} />
  </Layout>
)
export default ProjectPage
