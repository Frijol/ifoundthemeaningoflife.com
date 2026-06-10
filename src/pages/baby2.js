import * as React from "react"

const pageStyles = {
  color: "#112233",
  padding: "clamp(24px, 5vw, 64px)",
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  background: "linear-gradient(135deg, #fffaf5 0%, #f7fbff 45%, #fffaf5 100%)",
  minHeight: "100vh",
}

const cardStyles = {
  maxWidth: 1140,
  margin: "0 auto",
  background: "rgba(255,255,255,0.86)",
  border: "1px solid rgba(17,34,51,0.08)",
  borderRadius: 24,
  boxShadow: "0 18px 48px rgba(17,34,51,0.08)",
  padding: "clamp(20px, 4vw, 36px)",
  backdropFilter: "blur(10px)",
}

const smallLabelStyles = {
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  fontSize: "0.78rem",
  color: "#5f6b7a",
  fontWeight: 700,
}

const normalPdf = (x, sigma) => {
  const scale = sigma * Math.sqrt(2 * Math.PI)
  return Math.exp(-0.5 * (x / sigma) ** 2) / scale
}

const formatDay = value =>
  value.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })

const Baby2Page = () => {
  const [now, setNow] = React.useState(() => new Date())

  React.useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60000)
    return () => window.clearInterval(timer)
  }, [])

  const dueDate = React.useMemo(() => {
    const due = new Date(now.getFullYear(), 6, 14)
    return due < now ? new Date(now.getFullYear() + 1, 6, 14) : due
  }, [now])

  const bayesData = React.useMemo(() => {
    const start = new Date(now)
    start.setHours(0, 0, 0, 0)

    const due = new Date(dueDate)
    const end = new Date(due)
    end.setDate(end.getDate() + 14)

    const sigma = 8.5
    const horizonDays = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / 86400000) + 1)
    const candidates = []

    for (let i = 0; i < horizonDays; i += 1) {
      const day = new Date(start)
      day.setDate(start.getDate() + i)

      const delta = (day.getTime() - due.getTime()) / 86400000
      const prior = normalPdf(delta, sigma)

      if (prior > 0) {
        candidates.push({
          day,
          delta,
          prior,
        })
      }
    }

    const total = candidates.reduce((sum, item) => sum + item.prior, 0)

    return candidates.map(item => ({
      ...item,
      probability: item.prior / total,
      percent: (item.prior / total) * 100,
    }))
  }, [now])

  const maxProbability = Math.max(...bayesData.map(item => item.percent), 1)
  const mostLikely = bayesData.reduce((best, item) => (item.percent > best.percent ? item : best), bayesData[0])

  const yAxisTickStep = maxProbability <= 1 ? 0.2 : maxProbability <= 5 ? 0.5 : 1
  const yAxisMaxTick = Math.ceil(maxProbability / yAxisTickStep) * yAxisTickStep
  const yAxisTicks = Array.from({ length: Math.floor(yAxisMaxTick / yAxisTickStep) + 1 }, (_, index) => index * yAxisTickStep)

  const barWidth = 900 / Math.max(bayesData.length, 1)
  const dueIndex = bayesData.findIndex(item => item.day.toDateString() === dueDate.toDateString())

  return (
    <main style={pageStyles}>
      <section style={cardStyles}>
        <p style={smallLabelStyles}>Bayesian birth-date estimate</p>
        <h1 style={{ margin: "8px 0 12px", fontSize: "clamp(2rem, 6vw, 3rem)", lineHeight: 1.1, color: "#112233" }}>
          What is the most likely birth date, given the baby has not been born yet?
        </h1>
        <p style={{ margin: "0 0 18px", maxWidth: 820, color: "#334155", fontSize: "1.02rem", lineHeight: 1.6 }}>
          This page uses the same Bayesian idea Allen Downey uses in birth-date predictions: treat the due date as a noisy center and then renormalize the probability over the dates that are still possible from today onward. The baby has not been born yet, so dates in the past are excluded.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
          <article style={{ flex: "1 1 220px", background: "#fff", border: "1px solid #e6edf5", borderRadius: 18, padding: 16 }}>
            <div style={smallLabelStyles}>As of</div>
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#112233" }}>{now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</div>
          </article>
          <article style={{ flex: "1 1 220px", background: "#fff", border: "1px solid #e6edf5", borderRadius: 18, padding: 16 }}>
            <div style={smallLabelStyles}>Due date</div>
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#112233" }}>{dueDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</div>
          </article>
          <article style={{ flex: "1 1 260px", background: "#fff", border: "1px solid #e6edf5", borderRadius: 18, padding: 16 }}>
            <div style={smallLabelStyles}>Most likely day</div>
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#112233" }}>{mostLikely ? formatDay(mostLikely.day) : "—"}</div>
            <div style={{ color: "#58708d", fontSize: "0.95rem" }}>{mostLikely ? `${mostLikely.percent.toFixed(1)}% posterior probability` : ""}</div>
          </article>
        </div>

        <div style={{ background: "linear-gradient(180deg, #fff 0%, #f7fbff 100%)", border: "1px solid #e6edf5", borderRadius: 24, padding: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 8 }}>
            <div>
              <div style={smallLabelStyles}>Posterior probability curve</div>
              <div style={{ fontSize: "0.96rem", color: "#44546b" }}>The bars are the renormalized probabilities for each remaining birth date after conditioning on “not born yet”.</div>
            </div>
            <div style={{ fontSize: "0.92rem", color: "#44546b" }}>Model: normal due-date distribution, σ ≈ 8.5 days</div>
          </div>

          <svg viewBox="0 0 940 340" width="100%" height="auto" aria-label="Bayesian birth-date probability chart" role="img" style={{ display: "block", overflow: "visible" }}>
            <rect x="0" y="0" width="940" height="340" rx="18" fill="#fff" />
            <line x1="58" y1="285" x2="900" y2="285" stroke="#d7dfe9" strokeWidth="1" />
            {bayesData.map((item, index) => {
              const height = (item.percent / maxProbability) * 180
              const x = 70 + index * barWidth
              const y = 285 - height
              return (
                <g key={item.day.toISOString()}>
                  <rect
                    x={x}
                    y={y}
                    width={Math.max(barWidth * 0.72, 3)}
                    height={height}
                    rx="4"
                    fill={index === dueIndex ? "#0f766e" : index % 2 === 0 ? "#3278c6" : "#79a8dd"}
                    opacity={index === dueIndex ? 0.92 : 0.82}
                  />
                  {index % 4 === 0 ? (
                    <text x={x + 4} y="308" fontSize="10" fill="#4b5d73">{formatDay(item.day)}</text>
                  ) : null}
                </g>
              )
            })}
            {dueIndex >= 0 ? (
              <line
                x1={70 + dueIndex * barWidth + barWidth * 0.36}
                y1="40"
                x2={70 + dueIndex * barWidth + barWidth * 0.36}
                y2="285"
                stroke="#e76f51"
                strokeDasharray="5 5"
                strokeWidth="2"
              />
            ) : null}
            {yAxisTicks.map(tick => (
              <text
                key={`tick-${tick}`}
                x="48"
                y={285 - (tick / yAxisMaxTick) * 180 + 4}
                fontSize="11"
                fill="#5f6b7a"
                textAnchor="end"
              >
                {tick >= 1 ? `${tick.toFixed(0)}%` : `${tick.toFixed(1)}%`}
              </text>
            ))}
            <text x="52" y="18" fontSize="11" fill="#5f6b7a" textAnchor="start">Posterior probability (%)</text>
          </svg>

          <div style={{ marginTop: 12, color: "#44546b", fontSize: "0.95rem" }}>
            The most probable range is around the due date, but the posterior still spreads out because the actual birthday is uncertain. The chart is intentionally conditional on “baby has not arrived yet”, which is why only remaining dates are shown.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18, marginTop: 20 }}>
          <article style={{ border: "1px solid #e6edf5", borderRadius: 18, padding: 16, background: "#fff" }}>
            <div style={smallLabelStyles}>How to read this</div>
            <p style={{ color: "#334155", lineHeight: 1.55, marginBottom: 0 }}>
              Each bar is the probability of birth on that day, after updating the due-date estimate with the fact that today has already passed.
            </p>
          </article>
          <article style={{ border: "1px solid #e6edf5", borderRadius: 18, padding: 16, background: "#fff" }}>
            <div style={smallLabelStyles}>Why it is Bayesian</div>
            <p style={{ color: "#334155", lineHeight: 1.55, marginBottom: 0 }}>
              The model starts with a due-date-centered distribution and then renormalizes the probabilities for the dates that are still possible.
            </p>
          </article>
          <article style={{ border: "1px solid #e6edf5", borderRadius: 18, padding: 16, background: "#fff" }}>
            <div style={smallLabelStyles}>Notes</div>
            <p style={{ color: "#334155", lineHeight: 1.55, marginBottom: 0 }}>
              This is an illustrative estimate rather than a medical prediction; it is meant to show the Bayesian update process, not predict a real delivery date.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Baby2Page

export const Head = () => <title>Bayesian Birth-Date Probabilities</title>