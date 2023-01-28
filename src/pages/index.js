import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
      <p>Welcome to the page of Mark!</p>
      <StaticImage
      alt="Mark"
      src="../images/stare.jpg"
      />
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage