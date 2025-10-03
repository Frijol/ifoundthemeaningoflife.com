import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Art Portfolio",
    url: "https://ifoundtheme.my.canva.site/",
    description:
      "A selection of art projects showcasing the artist's range of styles.",
    color: "#BC027F",
  },
  {
    text: "Blog: Thinking in Public",
    url: "https://ifoundtheme.substack.com/",
    badge: false,
    description:
      "Honest, raw personal essays on the nitty-gritty. From rugged adventures, to reflections on modern Indigenous identity, to the joys and perils of motherhood as a foreigner.",
    color: "#1099A8",
  },
]

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Kelsey Breseman
        <br />
        <span style={headingAccentStyles}>Artist, writer, engineer, and adventurer.</span>
      </h1>
      <p style={paragraphStyles}>
        <i>Living well includes breathing deeply, being outside, and going to sleep tired at the end of the day.</i>
      </p>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <StaticImage src="../images/icon.png"alt="Tlingit design of a honeybee by Kelsey Breseman" style={{ width: 320}} />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Kelsey Breseman</title>
