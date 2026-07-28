import Link from "next/link";

const outcomes = [
  {
    label: "Understand",
    title: "Build the model before learning the formula",
    description:
      "Start with particles, motion, forces, and change in plain language, then connect them to diagrams and symbols.",
  },
  {
    label: "Practise",
    title: "Move from guided examples to independence",
    description:
      "See why each step is chosen, complete the next step yourself, and gradually work without scaffolding.",
  },
  {
    label: "Connect",
    title: "Use one idea in many representations",
    description:
      "Carry the same relationship through words, experiments, tables, graphs, equations, and unfamiliar contexts.",
  },
];

const sessionSteps = [
  ["01", "Predict", "Start from what you currently think"],
  ["02", "Understand", "Explore one visual, concrete model"],
  ["03", "Work", "Follow a narrated example step by step"],
  ["04", "Apply", "Move from guided practice to an independent check"],
];

export default function Home() {
  return (
    <main>
      <nav className="shell nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="SciPrep home">
          <span aria-hidden="true">SP</span>
          SciPrep
        </a>
        <div className="nav-links">
          <a href="#method">Method</a>
          <a href="#session">Session</a>
          <Link href="/course">Course</Link>
          <span className="pilot-pill">Private pilot</span>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow">
          <span aria-hidden="true" />
          Chemistry + physics for non-science learners
        </div>
        <h1>
          Build the science foundation you were expected to already have.
          <em>One idea at a time.</em>
        </h1>
        <p className="hero-copy">
          SciPrep is a structured, app-based course that takes you from units,
          graphs, and particles through the chemistry and physics needed to
          reason confidently about unfamiliar science.
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="/course">
            Explore the course
          </Link>
          <a className="button secondary" href="#method">
            Read the approach
          </a>
        </div>
        <div className="exam-facts" aria-label="Course stages">
          <p>
            <strong>01</strong>
            <span>science toolkit</span>
          </p>
          <p>
            <strong>02</strong>
            <span>chemistry</span>
          </p>
          <p>
            <strong>03</strong>
            <span>physics</span>
          </p>
          <p>
            <strong>04</strong>
            <span>integration studios</span>
          </p>
        </div>
      </section>

      <section className="method shell" id="method" aria-labelledby="method-heading">
        <div className="section-heading">
          <p>Built as a course</p>
          <h2 id="method-heading">
            University-level structure without assumed science.
          </h2>
        </div>
        <div className="outcome-grid">
          {outcomes.map((outcome) => (
            <article className="outcome-card" key={outcome.label}>
              <span>{outcome.label}</span>
              <h3>{outcome.title}</h3>
              <p>{outcome.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="session-section" id="session" aria-labelledby="session-heading">
        <div className="shell session-grid">
          <div className="session-intro">
            <p className="kicker">A lesson with a rhythm</p>
            <h2 id="session-heading">
              Every step prepares you for the next conceptual jump.
            </h2>
            <p>
              Lessons begin with an intuition, make the science visible, and
              introduce formal language only when it has something useful to
              describe. Support fades as your understanding grows.
            </p>
          </div>
          <ol className="session-list">
            {sessionSteps.map(([number, title, description]) => (
              <li key={number}>
                <span>{number}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="principle shell">
        <blockquote>
          “You do not need a science degree to think scientifically. You need a
          clear path into the ideas.”
        </blockquote>
        <p>
          The private pilot starts with the Science Toolkit, then opens chemistry
          and physics in a deliberate sequence.
        </p>
      </section>

      <footer className="shell">
        <p>
          Independent preparation. Not affiliated with, endorsed by, or
          authorised by ACER.
        </p>
        <p>Structured foundations · Original content · Evidence over volume</p>
      </footer>
    </main>
  );
}
