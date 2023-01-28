import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home">
      <p>Welcome to the page of Mark!</p>
      <StaticImage
      alt="Mark"
      src="../images/stare.jpg"
      />

      <p>This site is intended to document various bits and bobs that I've been involved
        in - from radio presenting and journalism to programming and development.</p>
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage