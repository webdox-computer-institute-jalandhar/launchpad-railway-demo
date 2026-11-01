import { useState } from 'react'
import {
  ArrowUpRight, ArrowRight, Check, ChevronDown, CircleHelp, Command,
  Github, Globe2, Layers3, Menu, Play, Rocket, ShieldCheck, Sparkles,
  Terminal, Zap, X, ChartNoAxesCombined, Clock3, Users
} from 'lucide-react'

const features = [
  { icon: Zap, title: 'Move at startup speed', text: 'Turn ideas into shipped work without getting buried in setup and busywork.' },
  { icon: Layers3, title: 'Everything in one place', text: 'Keep projects, teammates, milestones, and progress connected.' },
  { icon: ShieldCheck, title: 'Built for momentum', text: 'Clear ownership and simple workflows help your team stay focused.' },
]

const projects = [
  { name: 'Website redesign', tag: 'Design', progress: 82, color: 'violet', initials: 'WR', due: 'Today' },
  { name: 'Mobile experience', tag: 'Product', progress: 64, color: 'blue', initials: 'MX', due: 'Nov 08' },
  { name: 'Launch campaign', tag: 'Marketing', progress: 45, color: 'orange', initials: 'LC', due: 'Nov 12' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Overview')
  const [showToast, setShowToast] = useState(false)

  const notify = () => {
    setShowToast(true)
    window.setTimeout(() => setShowToast(false), 2600)
  }

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="LaunchPad home">
          <span className="brand-mark"><Rocket size={18} /></span>
          <span>launch<span className="brand-light">pad</span></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#workspace" onClick={() => setMenuOpen(false)}>Workspace</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>
        <div className="nav-actions">
          <a className="login-link" href="#workspace">Log in</a>
          <button className="button button-small button-primary" onClick={notify}>Get started <ArrowUpRight size={15} /></button>
        </div>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="home">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE</div>
            <h1>Big ideas deserve<br /><span className="gradient-text">a bold launch.</span></h1>
            <p className="hero-description">The calm, clear workspace that helps ambitious teams turn their best ideas into their next big thing.</p>
            <div className="hero-buttons">
              <a className="button button-primary" href="#workspace">Explore the workspace <ArrowRight size={17} /></a>
              <a className="button button-ghost" href="#features"><span className="play-icon"><Play size={12} fill="currentColor" /></span> See how it works</a>
            </div>
            <div className="social-proof">
              <div className="avatar-stack"><span>AK</span><span>JM</span><span>SL</span><span>RD</span></div>
              <div><div className="stars">★★★★★</div><p>Loved by teams building what's next</p></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="floating-chip chip-top"><span className="chip-icon purple"><Sparkles size={15} /></span> Ideas into action</div>
            <div className="dashboard-card">
              <div className="dash-top"><div className="dash-brand"><span className="mini-mark"><Command size={13} /></span> Launchpad</div><div className="dash-dots">•••</div></div>
              <div className="dash-heading"><div><span className="muted-label">MONDAY, NOVEMBER 02</span><h3>Good morning, Alex <span>✦</span></h3></div><div className="profile">A</div></div>
              <div className="metric-row">
                <div className="metric"><span>Active projects</span><strong>12</strong><small className="positive">↗ 2 this week</small></div>
                <div className="metric"><span>Tasks completed</span><strong>84%</strong><small className="positive">↗ 12% this month</small></div>
              </div>
              <div className="dash-section-title"><strong>Project overview</strong><span>View all <ArrowUpRight size={11} /></span></div>
              <div className="mini-projects">
                {projects.map((p) => <div className="mini-project" key={p.name}><div className={`project-icon ${p.color}`}>{p.initials}</div><div className="project-info"><strong>{p.name}</strong><span>{p.tag}</span><div className="progress-track"><i style={{ width: `${p.progress}%` }} /></div></div><b>{p.progress}%</b></div>)}
              </div>
              <div className="dash-footer"><span><span className="status-dot" /> All systems looking good</span><span>Updated just now</span></div>
            </div>
            <div className="floating-chip chip-bottom"><span className="chip-icon green"><Check size={15} /></span> Milestone completed <b>+1</b></div>
          </div>
        </section>

        <section className="trust-strip section-wrap">
          <p>MADE FOR PEOPLE WHO MAKE THINGS HAPPEN</p>
          <div className="trust-logos"><span><Layers3 size={17} /> northstar</span><span><Globe2 size={17} /> orbit</span><span className="logo-serif">vertex.</span><span><ChartNoAxesCombined size={18} /> momentum</span><span><Command size={17} /> COMMON</span></div>
        </section>

        <section className="features-section section-wrap" id="features">
          <div className="section-heading"><div className="eyebrow">LESS CHAOS. MORE CREATE.</div><h2>Make room for <span className="gradient-text">great work.</span></h2><p>Everything you need to make progress feel effortless — and every win feel a little bigger.</p></div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }, i) => <article className="feature-card" key={title}><div className={`feature-icon feature-${i}`}><Icon size={21} /></div><h3>{title}</h3><p>{text}</p><a href="#workspace">Explore feature <ArrowUpRight size={14} /></a></article>)}
          </div>
        </section>

        <section className="workspace-section section-wrap" id="workspace">
          <div className="workspace-copy"><div className="eyebrow">YOUR WORK, IN FOCUS</div><h2>A clearer view of<br />what's <span className="gradient-text">moving forward.</span></h2><p>Get the signal without the noise. Your team's priorities, progress, and next steps — all in one beautifully simple view.</p><ul><li><Check size={16} /> Know what needs your attention</li><li><Check size={16} /> Celebrate progress as it happens</li><li><Check size={16} /> Keep everyone moving together</li></ul><button className="button button-primary" onClick={notify}>Take a look around <ArrowRight size={16} /></button></div>
          <div className="workspace-preview">
            <div className="preview-top"><div><span className="muted-label">YOUR WORKSPACE</span><h3>Project activity</h3></div><button className="filter-button" onClick={() => setActiveTab(activeTab === 'Overview' ? 'Activity' : 'Overview')}>{activeTab} <ChevronDown size={13} /></button></div>
            <div className="tab-row"><button className={activeTab === 'Overview' ? 'active' : ''} onClick={() => setActiveTab('Overview')}>Overview</button><button className={activeTab === 'Activity' ? 'active' : ''} onClick={() => setActiveTab('Activity')}>Activity</button><button className={activeTab === 'Team' ? 'active' : ''} onClick={() => setActiveTab('Team')}>Team</button></div>
            {activeTab === 'Overview' && <div className="activity-list"><div className="activity-item"><span className="activity-avatar purple-bg">JM</span><div><strong>Jordan moved Website redesign forward</strong><p>Updated the homepage concepts</p></div><time>2m ago</time></div><div className="activity-item"><span className="activity-avatar green-bg">AK</span><div><strong>Alex completed a milestone</strong><p>Product strategy · Phase 1</p></div><time>1h ago</time></div><div className="activity-item"><span className="activity-avatar orange-bg">SL</span><div><strong>Sam added a new project update</strong><p>Mobile experience · Sprint 4</p></div><time>3h ago</time></div></div>}
            {activeTab === 'Activity' && <div className="empty-tab"><Clock3 size={25} /><strong>You're all caught up.</strong><span>New updates will appear here as your team makes progress.</span></div>}
            {activeTab === 'Team' && <div className="team-list"><div><span className="team-avatar purple-bg">JM</span><b>Jordan Miller</b><small>Product designer</small><span className="online" /></div><div><span className="team-avatar green-bg">AK</span><b>Alex Kim</b><small>Project lead</small><span className="online" /></div><div><span className="team-avatar orange-bg">SL</span><b>Sam Lee</b><small>Marketing</small><span className="online" /></div></div>}
            <div className="preview-bottom"><span><Users size={14} /> 8 teammates</span><span>Workspace updated moments ago</span></div>
          </div>
        </section>

        <section className="cta-section section-wrap" id="about">
          <div className="cta-card"><div className="cta-glow" /><div className="eyebrow"><Sparkles size={13} /> THE FUTURE IS YOURS</div><h2>Ready when<br />you are.</h2><p>Your next big thing isn't going to build itself. Let's get moving.</p><button className="button button-white" onClick={notify}>Start building <ArrowUpRight size={16} /></button><span className="cta-note">Free to explore · No credit card required</span><div className="cta-decoration"><Rocket size={104} strokeWidth={0.8} /></div></div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark"><Rocket size={17} /></span><span>launch<span className="brand-light">pad</span></span></a><span>© 2026 LaunchPad. Made for what's next.</span><a href="#home">Back to top ↑</a></footer>
      {showToast && <div className="toast"><Check size={17} /> Nice! This demo interaction is working.</div>}
      <a className="help-bubble" href="#about" aria-label="Help"><CircleHelp size={20} /></a>
    </div>
  )
}

export default App