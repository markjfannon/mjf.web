import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

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

export const Head = () => <title>Home Page</title>

export default IndexPage