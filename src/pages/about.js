import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="About Me">
            <p>Hi there! I'm Mark, a computer science student at the <a href="https://cs.nott.ac.uk">University of Nottingham</a>.</p>
            </Layout>
        </main>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage