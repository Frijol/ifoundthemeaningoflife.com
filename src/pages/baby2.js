import * as React from "react"

const pageStyles = {
  color: "#222222",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#ffffff",
  minHeight: "100vh",
  backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Cg fill=%22%23f7f2e8%22%20fill-opacity=%220.6%22%3E%3Ccircle cx=%2240%22 cy=%2240%22 r=%2212%22/%3E%3Ccircle cx=%22160%22 cy=%22160%22 r=%2212%22/%3E%3Ccircle cx=%22120%22 cy=%2240%22 r=%2212%22/%3E%3Ccircle cx=%2240%22 cy=%22140%22 r=%2212%22/%3E%3C/g%3E%3Cg fill=%22%23c8dabf%22%20fill-opacity=%220.45%22%3E%3Cpath d=%22M10 0 L20 0 L15 10 Z%22/%3E%3Cpath d=%22M180 190 L190 190 L185 200 Z%22/%3E%3Cpath d=%22M70 60 L80 60 L75 70 Z%22/%3E%3E%3C/g%3E%3C/svg%3E")',
  backgroundRepeat: 'repeat',
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 600,
  color: "#333333",
  fontSize: "3rem",
  textAlign: "center",
}
const subHeadingStyles = {
  color: "#555555",
  fontSize: "1.5rem",
  textAlign: "center",
  marginBottom: 32,
}
const paragraphStyles = {
  marginBottom: 48,
  fontSize: "1.2rem",
  lineHeight: 1.6,
  textAlign: "center",
}
const mapStyles = {
  border: "2px solid #CCCCCC",
  borderRadius: 8,
  marginBottom: 48,
}
const linkStyles = {
  color: "#8B4513",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.2rem",
  padding: "0.5rem 1rem",
  border: "1px solid #8B4513",
  borderRadius: 6,
  backgroundColor: "#fff7e6",
}

const Baby2Page = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>You're invited...</h1>
      <h2 style={subHeadingStyles}>"Again, Again!" A Re-use Baby Shower</h2>
      <p style={paragraphStyles}>
        Baby number two is due in mid-July! We would love for your family to come and help us celebrate with a morning of games, treats, and community.
      </p>
      <h3 style={{ textAlign: "center", color: "#333333", marginBottom: 16 }}>Date & Time</h3>
      <p style={{ textAlign: "center", fontSize: "1.5rem", marginBottom: 48 }}>May 9, 10 AM - Noon</p>
      <h3 style={{ textAlign: "center", color: "#333333", marginBottom: 16 }}>Location</h3>
      <p style={{ textAlign: "center", fontSize: "1.2rem", marginBottom: 16 }}>Olden Community Garden</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.36167824101716!2d-0.1045797!3d51.552342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b79f1e4dc95%3A0x539cac9e201503b2!2sOlden%20Community%20Garden!5e0!3m2!1sen!2suk!4v1701028830000!5m2!1sen!2suk"
          width="600"
          height="450"
          style={mapStyles}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map to Olden Community Garden"
        ></iframe>
      </div>
      <h3 style={{ textAlign: "center", color: "#333333", marginBottom: 16 }}>Venue</h3>
      <p style={paragraphStyles}>
        Olden Community Garden is a gated garden with seating and a sheltered area in case of rain. Kids are generally safe to explore but please keep them in sight as there are stairs and they shouldn't pick the flowers! There is a bathroom with a baby changing area. We've just replanted the lawn this fall, but expect it to be newly open in May, so a picnic blanket might be nice!
      </p>
      <h3 style={{ textAlign: "center", color: "#333333", marginBottom: 16 }}>Food & Drink</h3>
      <p style={paragraphStyles}>
        We'll provide a selection of snacks, fresh fruit, and tea. Feel free to bring a small plate to share if you'd like; please label any items that include common allergens (e.g. nuts).
      </p>
      <h3 style={{ textAlign: "center", color: "#333333", marginBottom: 16 }}>Gifts</h3>
      <p style={paragraphStyles}>
        Since we've moved a couple of times, we don't have a lot of newborn gear—so we're hoping to source the bits & bobs those of you with little ones are ready to pass on. Don't buy anything! But if you have something from our list you're ready to pass on, we'd love it. Please leave a note so we don't get duplicates. 
      </p>
      <p style={paragraphStyles}>
        No gift? No problem! Alternatively: cut fruit, veggies, cheese, or other favorite snack to be shared by little ones and adults alike would be much appreciated.
      </p>
      <div style={{ textAlign: "center" }}>
        <a href="https://docs.google.com/spreadsheets/d/14uUfNLYmGHgP1fb-9W3OmR43-HLmPRNzu8ZxoevlwGU/edit?gid=0#gid=0" style={linkStyles} target="_blank">View Our Baby Registry</a>
      </div>
    </main>
  )
}

export default Baby2Page

export const Head = () => <title>Baby Shower Invitation</title>