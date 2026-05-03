import * as React from "react"
import headshot from "../images/headshot.jpg"
import choppingWoodImage from "../images/gallery/shop/chopping wood.webp"
import backscratchBearImage from "../images/gallery/art/backscratch bear.png"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 480,
}
const headingAccentStyles = {
  color: "#042f2e",
}
const headshotStyles = {
  width: 180,
  height: 180,
  objectFit: "cover",
  borderRadius: "50%",
  border: "4px solid #042f2e",
  marginBottom: 32,
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginTop: 28,
}

const linkStyle = {
  color: "#042f2e",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 4,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#042f2e",
  border: "1px solid #042f2e",
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

const galleryItems = [
  {
    type: "blog",
    title: "A Tlingit Woman Comes Home",
    quote:
      "When you swim here, kelp ribbons slide soft around your ankles. Barnacles are rough against bare feet, then sea-round stones smooth against your back...",
    url: "https://ifoundtheme.substack.com/p/a-tlingit-woman-comes-home",
  },
  {
    type: "shop",
    title: "Chopping Wood",
    image: choppingWoodImage,
    url: "https://www.etsy.com/listing/4496534643/chopping-wood-classic-matte-paper-poster?ref=shop_home_active_5&logging_key=74510ef5578beb4b399f5b5b38d35e374ca36036%3A4496534643",
  },
  {
    type: "art",
    title: "Backscratch Bear",
    image: backscratchBearImage,
    url: "https://ifoundtheme.my.canva.site/",
  },
]

const links = [
  {
    text: "Art Portfolio",
    url: "https://ifoundtheme.my.canva.site/",
    description:
      "A selection of art projects showcasing the artist's range of styles.",
    color: "#BC027F",
  },
  {
    text: "Blog",
    url: "https://ifoundtheme.substack.com/",
    badge: false,
    description:
      "Honest, raw personal essays ranging from rugged adventures, to reflections on modern Indigenous identity, to the joys and perils of motherhood.",
    color: "#1099A8",
  },
  {
    text: "Textured Living",
    url: "https://textured-living.com/",
    badge: true,
    description:
      "A husband-wife project-sharing collaboration exploring projects with natural materials and active family life.",
    color: "#1099A8",
  },
]

const IndexPage = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const slideCount = galleryItems.length

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide(previous => (previous + 1) % slideCount)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [slideCount])

  const goToSlide = index => {
    setCurrentSlide((index + slideCount) % slideCount)
  }

  const activeItem = galleryItems[currentSlide]

  return (
    <main style={pageStyles}>
      <style>{`
        .page-gallery {
          margin-bottom: 48px;
        }

        .gallery-slider {
          position: relative;
        }

        .gallery-card {
          border: 1px solid #e7e7e7;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.08);
          background: #ffffff;
          transition: transform 180ms ease, box-shadow 180ms ease;
          margin-bottom: 24px;
          max-width: 860px;
        }

        .gallery-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 26px 70px rgba(0, 0, 0, 0.11);
        }

        .gallery-link {
          display: block;
          color: inherit;
          text-decoration: none;
        }

        .gallery-hero {
          min-height: 220px;
          display: grid;
          place-items: center;
          padding: 32px;
          text-align: left;
        }

        .gallery-quote {
          border-left: 5px solid #042f2e;
          color: #042f2e;
          font-size: 1.05rem;
          font-style: italic;
          line-height: 1.35;
          margin: 0;
          padding-left: 18px;
        }

        .gallery-image {
          width: 100%;
          height: 260px;
          object-fit: cover;
          display: block;
        }

        .gallery-body {
          padding: 24px;
        }

        .gallery-title {
          margin: 0 0 10px;
          font-size: 1.2rem;
          font-weight: 600;
          color: #042f2e;
        }

        .gallery-meta {
          margin: 0;
          color: #5e5e5e;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .gallery-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-top: 10px;
          flex-wrap: wrap;
        }

        .gallery-dots {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .gallery-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid #042f2e;
          background: transparent;
          opacity: 0.45;
          cursor: pointer;
          transition: opacity 120ms ease, transform 120ms ease;
        }

        .gallery-dot.active {
          opacity: 1;
          transform: scale(1.15);
          background: #042f2e;
        }

        .gallery-arrow {
          background: transparent;
          border: none;
          color: #042f2e;
          cursor: pointer;
          padding: 8px;
          font-size: 20px;
          opacity: 0.65;
          transition: opacity 120ms ease;
        }

        .gallery-arrow:hover {
          opacity: 1;
        }

        @media (max-width: 560px) {
          main {
            padding: 48px 24px;
          }
        }
      `}</style>
      <div>
        <aside className="page-gallery">
          <div className="gallery-slider">
            <article className="gallery-card">
              <a className="gallery-link" href={activeItem.url}>
                {activeItem.type === "blog" ? (
                  <div className="gallery-hero">
                    <p className="gallery-quote">“{activeItem.quote}”</p>
                  </div>
                ) : activeItem.image ? (
                  <img
                    className="gallery-image"
                    src={activeItem.image}
                    alt={activeItem.title}
                  />
                ) : (
                  <div className="gallery-hero">
                    <p className="gallery-quote">Add image to gallery</p>
                  </div>
                )}
                <div className="gallery-body">
                  <h3 className="gallery-title">{activeItem.title}</h3>
                </div>
              </a>
            </article>
            <div className="gallery-controls">
              <button
                className="gallery-arrow"
                aria-label="Previous slide"
                onClick={() => goToSlide(currentSlide - 1)}
              >
                ‹
              </button>
              <div className="gallery-dots">
                {galleryItems.map((item, index) => (
                  <button
                    key={item.url}
                    className={`gallery-dot ${index === currentSlide ? "active" : ""}`}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
              <button
                className="gallery-arrow"
                aria-label="Next slide"
                onClick={() => goToSlide(currentSlide + 1)}
              >
                ›
              </button>
            </div>
          </div>
        </aside>

        <div>
          <h1 style={headingStyles}>
            Kelsey Breseman<br />
            <i>(Tlingít/Alaska Indigenous)</i>
            <br />
            <span style={headingAccentStyles}>
              <br />is an artist, writer, and engineer who spends as much time as possible outside.
            </span>
          </h1>
        </div>

        <img src={headshot} alt="Kelsey Breseman headshot" style={headshotStyles} />

        <ul className="page-links" style={listStyles}>
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
                  <span style={badgeStyle} aria-label="Coming soon badge">
                    COMING SOON!
                  </span>
                )}
                <p style={descriptionStyle}>{link.description}</p>
              </span>
            </li>
          ))}
        </ul>

        <div className="page-embed">
          <iframe
            src="https://ifoundtheme.substack.com/embed"
            title="Substack Embed"
            width="100%"
            height="320"
            style={{ border: "1px solid #EEE", background: "white" }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Kelsey Breseman</title>
