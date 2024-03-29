import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql, Link } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Mark's Blog">
      
      <p>This is a page I'm using not as a blog per se, rather as a record of things I get up to/a newsletter. Though of course it isn't really a newsletter.
      I may in future consider posting the standalone written articles I link to on here though - I'll try to get something worked out.</p>
      
      <ul>
        {
            data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2>
                      <Link to={`/blog/${node.frontmatter.slug}`}>
                        {node.frontmatter.title}
                      </Link>
                    </h2>
                    <p>Posted: {node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>
                </article>
            ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
    query {
        allMdx(sort: { frontmatter: { date: DESC }}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    slug
                }
                id
                excerpt
            }
        }
    }
`

export const Head = () => <Seo title="Blog" />

export default BlogPage