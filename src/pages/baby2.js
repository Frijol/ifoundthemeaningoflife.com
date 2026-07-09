import * as React from "react"

const pageStyles = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "clamp(24px, 6vw, 48px)",
  background: "radial-gradient(circle at top, #fff4c2 0%, #FE938C 32%, #4BC6B9 100%)",
  color: "#fff",
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
}

const cardStyles = {
  position: "relative",
  overflow: "hidden",
  maxWidth: 640,
  width: "100%",
  padding: "clamp(28px, 5vw, 48px)",
  borderRadius: 28,
  background: "rgba(255, 255, 255, 0.16)",
  border: "1px solid rgba(255, 255, 255, 0.28)",
  boxShadow: "0 24px 80px rgba(17, 24, 39, 0.28)",
  backdropFilter: "blur(14px)",
  textAlign: "center",
}

const fireworks = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${8 + (index % 6) * 14}%`,
  top: `${12 + Math.floor(index / 6) * 22}%`,
  delay: `${index * 0.06}s`,
  size: `${8 + (index % 3) * 4}px`,
  color: ["#FFF4C2", "#4BC6B9", "#7D84B2", "#FE938C", "#EE6352"][index % 5],
}))

const Baby2Page = () => (
  <main style={pageStyles}>
    <style>{`
      @keyframes burst {
        0% {
          opacity: 0;
          transform: scale(0.2) translateY(0);
        }
        30% {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        100% {
          opacity: 0;
          transform: scale(1.2) translateY(-24px);
        }
      }
    `}</style>

    <section style={cardStyles}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {fireworks.map(firework => (
          <span
            key={firework.id}
            style={{
              position: "absolute",
              left: firework.left,
              top: firework.top,
              width: firework.size,
              height: firework.size,
              borderRadius: "50%",
              background: firework.color,
              boxShadow: `0 0 18px ${firework.color}`,
              animation: `burst 1.4s ease-out forwards`,
              animationDelay: firework.delay,
              opacity: 0,
            }}
          />
        ))}
      </div>
      <h1 style={{ margin: "14px 0 10px", fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.1 }}>
        baby is born!
      </h1>
    </section>
  </main>
)

export default Baby2Page
