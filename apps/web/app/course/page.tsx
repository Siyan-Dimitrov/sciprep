import Link from "next/link";

const stages = [
  {
    number: "00",
    title: "Science Toolkit",
    description:
      "Build the mathematical and visual language used throughout chemistry and physics.",
    status: "Pilot focus",
    tone: "active",
    modules: [
      "Measurement, quantities & units",
      "Scientific notation",
      "Ratios, proportions & rates",
      "Tables, graphs & change",
    ],
  },
  {
    number: "01",
    title: "Chemistry foundations",
    description:
      "Move from a particle model of matter to atoms, amount, bonding, solutions, and reactions.",
    status: "Next",
    tone: "next",
    modules: [
      "Particles & matter",
      "Atoms, elements & ions",
      "The mole",
      "Bonding & structure",
    ],
  },
  {
    number: "02",
    title: "Physics foundations",
    description:
      "Learn to describe change, build physical models, and connect diagrams to equations.",
    status: "Next",
    tone: "next",
    modules: [
      "Describing motion",
      "Motion graphs",
      "Forces & free-body diagrams",
      "Work, energy & power",
    ],
  },
  {
    number: "03",
    title: "Reactions & physical systems",
    description:
      "Develop the ideas of energy, rate, equilibrium, fluids, waves, and electricity.",
    status: "Planned",
    tone: "planned",
    modules: [
      "Energy & reaction change",
      "Rate & equilibrium",
      "Fluids, heat & waves",
      "Electricity & circuits",
    ],
  },
  {
    number: "04",
    title: "Integration studios",
    description:
      "Combine earlier models through experiments, data, and unfamiliar scientific contexts.",
    status: "Later",
    tone: "planned",
    modules: [
      "Measurement studio",
      "Pressure & biological systems",
      "Acids, buffers & physiology",
      "Scientific reasoning passages",
    ],
  },
];

export default function CoursePage() {
  return (
    <main className="course-page">
      <nav className="shell nav" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="SciPrep home">
          <span aria-hidden="true">SP</span>
          SciPrep
        </Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <span className="pilot-pill">Course preview</span>
        </div>
      </nav>

      <header className="course-hero shell">
        <div>
          <p className="kicker">Your learning path</p>
          <h1>A foundation that builds in the right order.</h1>
        </div>
        <p>
          Begin with the shared language of science, then develop chemistry and
          physics as connected ways of describing matter, change, and systems.
          Each stage unlocks new representations and applications.
        </p>
      </header>

      <section className="course-summary shell" aria-label="Private pilot summary">
        <div>
          <span>Private pilot</span>
          <strong>9 learning experiences</strong>
          <p>Eight lessons and one integration studio</p>
        </div>
        <div>
          <span>Typical lesson</span>
          <strong>20–35 minutes</strong>
          <p>Resumable, with optional prerequisite support</p>
        </div>
        <div>
          <span>Starting level</span>
          <strong>No recent science</strong>
          <p>Mathematics is introduced when it becomes useful</p>
        </div>
      </section>

      <section className="course-path shell" aria-labelledby="course-path-heading">
        <div className="course-path-heading">
          <p>Course sequence</p>
          <h2 id="course-path-heading">From foundations to integration</h2>
        </div>
        <ol>
          {stages.map((stage) => (
            <li className="course-stage" key={stage.number}>
              <div className="stage-number" aria-hidden="true">
                {stage.number}
              </div>
              <div className="stage-copy">
                <div className="stage-title-row">
                  <h3>{stage.title}</h3>
                  <span className={`status ${stage.tone}`}>{stage.status}</span>
                </div>
                <p>{stage.description}</p>
              </div>
              <ul aria-label={`${stage.title} modules`}>
                {stage.modules.map((module) => (
                  <li key={module}>{module}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="course-note shell">
        <div>
          <p className="kicker">How progression works</p>
          <h2>Move forward with support, not gatekeeping.</h2>
        </div>
        <p>
          The course recommends prerequisite repair when it matters, but a weak
          result never locks you out indefinitely. Progress combines lesson
          exposure, guided work, independent checks, and what remains after a
          delay.
        </p>
      </section>

      <footer className="shell">
        <p>
          Independent preparation. Not affiliated with, endorsed by, or
          authorised by ACER.
        </p>
        <p>Course blueprint · Private pilot</p>
      </footer>
    </main>
  );
}
