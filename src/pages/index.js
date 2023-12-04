import * as React from "react"
import Layout from '../components/Layout'
import '../styles/styles.scss'
import ForestPath from "../images/forest.jpg"

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

    <h4>Freelancer for hire</h4>
    <p>For hire across a variety of skillsets (see links in footer for examples and contact):</p>
    <ul>
      <li>Writing</li>
      <li>Photography</li>
      <li>Art & Illustration</li>
      <li>UX and Web Development</li>
    </ul>
    <img src={ ForestPath } alt="Kelsey's home forest" />
  </Layout>
export default IndexPage
