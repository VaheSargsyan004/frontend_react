export default function HomePage() {
  return (
    <main className="page home">
      <header className="brand-row simple">
        <div className="brand">AI <span>HireAI Armenia</span></div>
        <div className="mini-links"><span>Features</span><span>How It Works</span><span>Results</span><span>About</span></div>
        <div className="inline-actions"><button className="btn-link">Sign In</button><button className="btn-dark">Get Started</button></div>
      </header>

      <section className="hero">
        <div>
          <p className="tag">AM Made for Armenia</p>
          <h1>AI-Driven Fair Hiring for Armenia&apos;s Future</h1>
          <p className="muted big">Transform your recruitment process with intelligent candidate matching.</p>
          <div className="inline-actions"><button className="btn-dark">Start Free Trial</button><button className="btn-light">Watch Demo</button></div>
        </div>
        <div className="photo-panel">Team Collaboration</div>
      </section>

      <section className="section-block">
        <h2>Why Choose HireAI Armenia?</h2>
        <p className="muted">Our platform combines cutting-edge AI technology with local expertise.</p>
        <div className="grid-3">
          {['AI-Powered Matching', 'Bias-Free Hiring', 'Diversity Promotion', 'Smart Analytics', 'Faster Recruitment', 'Local Expertise'].map((item) => (
            <article className="card" key={item}><h4>{item}</h4><p className="muted">Professional, clear and efficient workflow designed for the Armenian market.</p></article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>How It Works</h2>
        <div className="grid-4">
          {['Upload Job Requirements', 'AI Candidate Matching', 'Review Diverse Shortlist', 'Make Fair Decisions'].map((s, i) => (
            <article className="card" key={s}><h4>{String(i + 1).padStart(2, '0')} {s}</h4><p className="muted">Fast setup and transparent outcomes.</p></article>
          ))}
        </div>
      </section>

      <section className="section-block dark-cta">
        <h2>Ready to Transform Your Hiring?</h2>
        <p>Join leading Armenian companies using AI to build diverse teams.</p>
        <button className="btn-light">Start Free Trial</button>
      </section>
    </main>
  );
}
