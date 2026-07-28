const outcomes = [
  {
    label: "Model",
    title: "See what the question is really testing",
    description:
      "Translate a dense stimulus into the relationship, mechanism, or comparison that matters.",
  },
  {
    label: "Reason",
    title: "Practise the decision, not the surface story",
    description:
      "Meet the same reasoning skill across biology, chemistry, physics, graphs, tables, and equations.",
  },
  {
    label: "Repair",
    title: "Learn why an answer felt plausible",
    description:
      "Turn slow answers, high-confidence errors, and recurring distractors into focused follow-up work.",
  },
];

const sessionSteps = [
  ["01", "Orient", "A two-minute retrieval check"],
  ["02", "Learn", "One concise model and worked example"],
  ["03", "Transfer", "An unfamiliar passage with linked questions"],
  ["04", "Reflect", "Confidence, feedback, and a faster route"],
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
          <span className="pilot-pill">Private pilot</span>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow">
          <span aria-hidden="true" />
          Biological &amp; Physical Sciences
        </div>
        <h1>
          Don&apos;t memorise the passage.
          <em>Find the model inside it.</em>
        </h1>
        <p className="hero-copy">
          SciPrep is a reasoning-first study companion that helps you recognise
          the science, choose the useful information, and repair the exact
          thinking pattern that cost you the mark.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#session">
            Preview a study loop
          </a>
          <a className="button secondary" href="#method">
            Read the approach
          </a>
        </div>
        <div className="exam-facts" aria-label="Current exam configuration">
          <p>
            <strong>75</strong>
            <span>questions</span>
          </p>
          <p>
            <strong>150</strong>
            <span>minutes</span>
          </p>
          <p>
            <strong>40 · 40 · 20</strong>
            <span>chem · bio · physics</span>
          </p>
          <p>
            <strong>0</strong>
            <span>calculator</span>
          </p>
        </div>
      </section>

      <section className="method shell" id="method" aria-labelledby="method-heading">
        <div className="section-heading">
          <p>Built around transfer</p>
          <h2 id="method-heading">Practice the thinking that travels.</h2>
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
            <p className="kicker">A session with a reason</p>
            <h2 id="session-heading">
              Every activity earns its place in the next one.
            </h2>
            <p>
              Your plan is shaped by recent errors, delayed retention,
              confidence, pace, prerequisite importance, and time to the exam.
              The recommendation always tells you why it was made.
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
          “Correct but slow, heavily hinted, or quickly forgotten is useful
          evidence—not failure.”
        </blockquote>
        <p>
          The pilot reports readiness evidence, not an invented official score.
        </p>
      </section>

      <footer className="shell">
        <p>
          Independent preparation. Not affiliated with, endorsed by, or
          authorised by ACER.
        </p>
        <p>Original content only · Evidence over volume</p>
      </footer>
    </main>
  );
}

