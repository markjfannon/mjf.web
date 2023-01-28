import * as React from 'react'
import { graphq, graphql, useStaticQuery } from 'gatsby'

const Seo = ({title}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <title>{title} | {data.site.siteMetadata.title}</title>
    )
}

export default Seo