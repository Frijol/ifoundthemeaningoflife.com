import * as React from "react"
import headshot from "../images/headshot.jpg"
import choppingWoodImage from "../images/gallery/shop/chopping wood.png"
import backscratchBearImage from "../images/gallery/art/backscratch bear.png"
import kelpForestImage from "../images/gallery/art/kelp forest.jpeg"

const pageStyles = {
  color: "#232129",
  backgroundColor: "#FAFAF8",
  padding: "clamp(24px, 6vw, 96px)",
  fontFamily: '"Inter", -apple-system, Roboto, sans-serif',
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 480,
  fontFamily: '"Cormorant Garamond", serif',
  lineHeight: 1.2,
  fontWeight: 500,
  fontSize: "clamp(1.5rem, 4vw, 1.8rem)",
}

const headshotStyles = {
  width: 180,
  height: 180,
  objectFit: "cover",
  borderRadius: "50%",
  border: "4px solid #042f2e",
  marginBottom: 32,
}

const bioCardStyles = {
  display: "flex",
  alignItems: "center",
  gap: 32,
  marginBottom: 64,
  maxWidth: 720,
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  listStyle: "none",
  maxWidth: 640,
}

const listItemStyles = {
  marginTop: 32,
  paddingBottom: 24,
  borderBottom: "1px solid rgba(4,47,46,0.12)",
}

const linkStyle = {
  color: "#042F2E",
  fontFamily: '"Cormorant Garamond", serif',
  fontWeight: 500,
  fontSize: "clamp(20px, 4vw, 28px)",
  textDecoration: "none",
  lineHeight: 1.3,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 15,
  marginTop: 8,
  lineHeight: 1.6,
  opacity: 0.8,
  maxWidth: 520,
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
    type: "shop",
    title: "Chopping Wood",
    image: choppingWoodImage,
    url: "https://www.etsy.com/listing/4496534643/chopping-wood-classic-matte-paper-poster?ref=shop_home_active_5&logging_key=74510ef5578beb4b399f5b5b38d35e374ca36036%3A4496534643",
  },
  {
    type: "blog",
    title: "A Tlingit Woman Comes Home",
    quote:
      "A bear tooth, I am discovering, is like an iceberg. The part you see is only the tip. The rest of it bulges out in a pinkish ellipse, a taproot of a tooth...",
    url: "https://ifoundtheme.substack.com/p/a-tlingit-woman-comes-home",
  },
  {
    type: "art",
    title: "Backscratch Bear",
    image: backscratchBearImage,
    url: "https://ifoundtheme.my.canva.site/",
  },
  {
    type: "blog",
    title: "A Better First Trimester",
    quote:
      "[The Mother] is the mythic creature seen through my one-year-old’s eyes, and whatever dissociated miracle in my body knows how to grow a life. [She] is whatever makes the little one’s sleeping body follow mine across the mattress, cuddling unconsciously to my nearest part...",
    url: "https://ifoundtheme.substack.com/p/a-better-first-trimester ",
  },
  {
    type: "art",
    title: "Kelp Forest",
    image: kelpForestImage,
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
    }, 9000)

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
          // background: #ffffff;
          // border-radius: 0;
          overflow: hidden;
          // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          // transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
          margin-bottom: 24px;
          max-width: 860px;
          // border: 1px solid #f0f0f0;
        }

        // .gallery-card:hover {
        //   box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
        // }

        .gallery-card:active {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }

        .gallery-link {
          display: block;
          color: inherit;
          text-decoration: none;
        }

        .gallery-hero {
          height: 350px;
          display: grid;
          place-items: center;
          text-align: left;
          background: #E8E1D9;
          overflow: hidden;
        }

        .gallery-quote {
          background: #E8E1D9;
          color: #232129;
          font-family: "Cormorant Garamond", serif;
          font-style: italic;
          font-size: 1.6rem;
          line-height: 1.7;
          padding: 28px 32px;
          margin: 0;
          font-weight: 400;
        }

        .gallery-quote::before {
          content: "“";
          font-size: 6rem;
          line-height: 0;
          display: block;
          margin-left: -0.5em;
          margin-bottom: 10px;
          opacity: 0.3;
        }

        .gallery-image {
          width: 100%;
          height: 350px;
          object-fit: cover;
          display: block;
        }

        .gallery-body {
          padding: 10px 14px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          min-height: 20px;
        }

        .gallery-title {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 400;
          color: #666666;
          letter-spacing: 0;
          font-style: italic;
          text-align: right;
          flex: 1;
        }

        .gallery-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          padding: 0;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .gallery-dots {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .gallery-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: background 200ms cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0;
        }

        .gallery-dot:hover {
          background: rgba(4, 47, 46, 0.5);
        }

        .gallery-dot.active {
          background: #042f2e;
        }

        .gallery-arrow {
          background: transparent;
          border: none;
          color: #042f2e;
          cursor: pointer;
          padding: 4px;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0;
          transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);
          width: 32px;
          height: 32px;
        }

        .gallery-arrow:hover {
          opacity: 1;
        }

        .gallery-arrow:active {
          opacity: 0.9;
        }

        @media (max-width: 560px) {
          main {
            padding: 48px 24px;
          }

          .gallery-arrow {
            width: 28px;
            height: 28px;
            font-size: 18px;
            padding: 3px;
          }

          .gallery-controls {
            gap: 6px;
          }

          .gallery-dots {
            gap: 6px;
          }

          .gallery-dot {
            width: 6px;
            height: 6px;
          }
          .page-links a {
            border-bottom: 1px solid transparent;
            transition: border-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
          }

          .page-links a:hover {
            border-bottom: 1px solid currentColor;
          }
        }
            
        @media (max-width: 640px) {
          .bio-card {
              flex-direction: column;
              align-items: flex-start;
              gap: 20px;
            }
              
            .bio-card img {
              width: 120px;
              height: 120px;
            }

            .gallery-quote {
              font-size: 1.2rem;
              padding: 20px;
            }

            .gallery-quote::before {
              font-size: 3.5rem;
            }

            .gallery-image {
              height: 100%;
            }

            .gallery-hero {
              height: 280px;
            }

            .page-links {
              max-width: 100%;
            }

            .page-links li {
              margin-top: 24px;
              padding-bottom: 16px;
            }
          }
        }
          
      `}</style>
      <div>
        <aside className="page-gallery">
          <div className="gallery-slider">
            <article className="gallery-card">
              <a className="gallery-link" href={activeItem.url} target="_blank" rel="noopener noreferrer">
                {activeItem.type === "blog" ? (
                  <div className="gallery-hero">
                    <p className="gallery-quote">“{activeItem.quote}”</p>
                  </div>
                ) : activeItem.image ? (
                  <div className="gallery-hero">
                    <img
                      className="gallery-image"
                      src={activeItem.image}
                      alt={activeItem.title}
                    />
                  </div>
                ) : (
                  <div className="gallery-hero">
                    <p className="gallery-quote">Add image to gallery</p>
                  </div>
                )}
              </a>
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
            </article>
          </div>
        </aside>

        <div className="bio-card" style={bioCardStyles}>
          <img
            src={headshot}
            alt="Kelsey Breseman headshot"
            style={headshotStyles}
          />

          <h1 style={headingStyles}>
            <span style={{ color: "#042F2E" }}>
              <b>Kelsey Breseman <i>(Tlingít/Alaska Indigenous)</i></b> is an artist,
              writer, and engineer who spends as much time as possible outside.
            </span>
          </h1>
        </div>

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
