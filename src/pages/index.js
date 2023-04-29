import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import '../styles/styles.scss'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () =>
  <Layout pageTitle="Home" activeHeaderLink="Home">
    <h1>I'm Kelsey Breseman.</h1>
    <p>I'm working on data ownership models, environmental accountability, and intentional community. I'm also a neural engineer, a lover of the woods, and an <a href="/adventures">adventurer</a>.</p>
    <h4>Some things I care about:</h4>
        <ul>
          <li>Community, transparency, and openness drive innovation.</li>
          <li>It is important to work on things that contribute to a future you want– ideally with a majority of your time.</li>
          <li>Living well includes breathing deeply, being outside, and going to sleep tired at the end of the day.</li>
        </ul>
  </Layout>
export default IndexPage
