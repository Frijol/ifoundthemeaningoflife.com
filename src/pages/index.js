import * as React from "react"
import Layout from '../components/Layout'
import '../styles/styles.scss'
import ForestPath from "../images/forest.jpg"

const IndexPage = () =>
  <Layout pageTitle="Home" activeHeaderLink="Home">
    <h1>Kelsey Breseman</h1>
    <p>Writing, art, <a href="/adventures">adventures</a>, engineering.</p>

    <iframe src="https://ifoundtheme.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
  
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
