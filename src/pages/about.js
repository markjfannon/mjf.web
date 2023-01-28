import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="About Me">
            <p>Hi there! I'm Mark, a computer science student at the <a href="https://cs.nott.ac.uk">University of Nottingham</a>.</p>

            <p>On the side, I present on <a href="https://urn1350.net">University Radio Nottingham</a>, alongside having technical and audio production duties.
            My presenting ranges from hosting "The Pulse" (a daily news show) to specialist music programming.</p>

            <p>In addition, I am a self taught musician and play the bass guitar, electric guitar, piano, keyboard and drums.</p>
            </Layout>
        </main>
    )
}


export const Head = () => <Seo title="About Me" />

export default AboutPage