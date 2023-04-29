import * as React from "react"
import { Helmet } from 'react-helmet'

const Head = ({pageTitle = 'Page', siteTitle = 'Kelsey Breseman', pageScript}) =>
  <Helmet>
    <html lang="en" class={pageScript} />
    <title>{pageTitle} | {siteTitle}</title>
    <meta property="og:description" content="Kelsey Breseman" />
    <script src={pageScript}></script>
  </Helmet>

export default Head
