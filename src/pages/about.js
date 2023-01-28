import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Heading from '../components/general'

const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="About Me">
            <p>Hi there! I'm Mark, a computer science student at the <a href="https://cs.nott.ac.uk">University of Nottingham</a>.
            My interests within Computer Science mainly surround networking and network security, as well as ethics and backend development.</p>

            <p>On the side, I present on <a href="https://urn1350.net">University Radio Nottingham</a>, alongside having technical and audio production duties.
            My presenting ranges from hosting "The Pulse" (a daily news show) to specialist music programming.</p>

            <p>In addition, I am a self taught musician and play the bass guitar, electric guitar, piano, keyboard and drums.</p>

            <Heading>Programming Languages</Heading>
            <p>
                In order of competence, I am familiar with the following languages:
                <ul>
                    <li>Python</li>
                    <li>C</li>
                    <li>Rust</li>
                    <li>JavaScript</li>
                </ul>

                For examples of my work, see <a href="https://github.com/markjfannon">my GitHub profile</a>.
            </p>
            
            </Layout>

        </main>
    )
}


export const Head = () => <Seo title="About Me" />

export default AboutPage