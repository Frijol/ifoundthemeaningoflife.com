# Gatsby Static Template
[Live demo](https://gatsbystatictemplatemain.gtsb.io/)

This is a starter template for static Gatsby sites designed to get you quickly up and running with a simple and easy to maintain site architecture and layout system.

It is intended to be unopinionated and flexible in terms of its out-of-box styling so as not to suggest how any site you build with it ought to look.

![Homepage screenshot](https://github.com/CaptainStack/gatsby-static-template/blob/main/src/images/screenshot.png "Template screenshot")

# Pages
Every page in your website should be put in the /pages directory. We recommend having your file-structure as closely as possible match your website's sitemap.

# Layout Components
These components define the basic layout system of this template.
* Layout
* Header (and HeaderItem)
* Footer
* Sidebar

## Layout
Every page should be wrapped inside of a layout. This template only provides one out of the box, so it's called Layout. As you develop more pages with different purposes you may develop alternative layouts.

The included Layout works by insterting page content into ```<main>``` between Header and Footer components. It also includes an optional sidebar. Information for the header and sidebar must be passed in from the page and are imported from /helpers/constants.js.

Also inserts site metadata by including the ```<Head>``` component.

## Header
Rendered at the top of Layout. Contains site logo and header links defined in /helpers/constants.js. Can display nested links if sublinks are included.

## Footer
Rendered at the bottom of Layout. Contains site logo and social media links. These values are hardcoded in the Footer component.

## Sidebar
Optionally rendered on the left side of Layout. Not displayed on mobile. Link information is stored in /helpers/constants.js and are passed in by the page that is rendering it.

# Site metadata
Site metadata such as the thumbnail image and description are managed by ReactHelmet and inserted into the site from the ```<Head>``` component (which resides in ```<Layout>```).

# Theming
Site theming is done through the `.scss` files in /styles. Sitewide styles like theme colors are best stored in constants.scss while most other styles are in styles.scss. If styles starts.scss getting long or overly complicated then component styles can be refactored into their own .scss file, as seen with header.scss.
