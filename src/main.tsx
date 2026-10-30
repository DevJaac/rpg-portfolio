import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/press-start-2p';
import './styles.css';
import { profile, sections } from './data';
import { Panel, SectionHeading, PixelLink, PixelButton, SkillBadge, ProjectCard, TimelineEntry, Placeholder, PixelScene } from './components';

function App() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    let ticking = false;
    const update = () => {
      let current = 'home';
      for (const { id } of sections) if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= 150) current = id;
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'contact';
      setActive(current); ticking = false;
    };
    const onScroll = () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } };
    const onResize = () => { if (window.innerWidth >= 1100) setOpen(false); update(); };
    window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onResize); update();
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); };
  }, []);
  return <><a className="skip-link" href="#main">Skip to content</a><header className="site-header"><div className="nav-shell" onKeyDown={e => { if(e.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); } }}>
    <a className="brand pixel" href="#home" aria-label="Player One home"><span aria-hidden="true" className="brand-icon">✦</span> PLAYER ONE<span className="brand-dot">.</span></a>
    <button ref={menuButton} className="menu-toggle pixel" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? 'CLOSE ×' : 'MENU ＋'}</button>
    <nav id="primary-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">{sections.map(s => <a key={s.id} href={`#${s.id}`} aria-current={active === s.id ? 'location' : undefined} onClick={() => { setOpen(false); document.getElementById(s.id)?.focus({preventScroll:true}); }}><span className="nav-pointer" aria-hidden="true">▸</span>{s.label}</a>)}</nav>
  </div></header><main id="main">
    <section id="home" tabIndex={-1} className="hero section-shell"><div className="hero-copy"><p className="eyebrow mint"><span className="status-square"/> A NEW ADVENTURE BEGINS</p><h1>Every great quest<br/>starts with<br/><span className="pixel">a curious mind.</span></h1><p className="hero-intro">Hello, I’m <strong>{profile.name}</strong>.<br/>{profile.role}</p><p className="muted intro-placeholder">{profile.intro}</p><div className="hero-actions"><PixelLink href="#projects">EXPLORE QUESTS <span aria-hidden="true">↗</span></PixelLink><PixelLink href="#contact" className="secondary">LET’S CONNECT</PixelLink></div><p className="hero-note"><span aria-hidden="true">↓</span> Scroll to explore the player menu</p></div>
    <Panel className="player-card"><div className="panel-title pixel"><span>PLAYER SELECT</span><span className="gold">01</span></div><PixelScene/><div className="player-details"><p className="eyebrow mint">CHARACTER FILE</p><h2>{profile.name}</h2><p className="muted">{profile.role}</p><div className="player-meta"><span>LOCATION</span><span>{profile.location}</span></div><div className="player-meta"><span>PROFILE</span><Placeholder/></div></div><div className="card-footer pixel">✦ &nbsp; YOUR STORY STARTS HERE</div></Panel>
    </section><div className="chapter-strip section-shell"><span className="pixel">THE ADVENTURE LOG</span><span>Meet the person behind the player.</span><span aria-hidden="true">＋ ＋ ＋</span></div>
    <div className="section-shell content-sections">
    <section id="about" tabIndex={-1}><SectionHeading number="01" title="Player profile" subtitle="ABOUT / THE PERSON BEHIND THE PIXELS"/><Panel className="p-7 md:p-10"><Placeholder/><h3>A little backstory.</h3><p className="max-w-3xl">{profile.bio}</p><div className="profile-bottom"><span>INTERESTS</span><SkillBadge>Gaming</SkillBadge><SkillBadge>Technology</SkillBadge></div></Panel></section>
    <section id="skills" tabIndex={-1}><SectionHeading number="02" title="Abilities" subtitle="SKILLS / YOUR TOOLKIT"/><Panel className="p-7 md:p-10"><Placeholder/><h3>Equip your skills.</h3><p>Add your real tools, technologies, and strengths here.</p><div className="flex flex-wrap gap-3 mt-6">{profile.skills.map(s=><SkillBadge key={s}>{s}</SkillBadge>)}</div></Panel></section>
    <section id="projects" tabIndex={-1}><SectionHeading number="03" title="Quest log" subtitle="PROJECTS / THINGS YOU’VE BUILT"/><div className="project-grid"><ProjectCard {...profile.project}/><div className="empty-slot"><span className="pixel gold">NEXT QUEST</span><p>Room for your next idea.</p><span className="muted text-sm">Real projects will be added in a later stage.</span></div></div></section>
    <section id="experience" tabIndex={-1}><SectionHeading number="04" title="Journey" subtitle="EXPERIENCE / YOUR PATH SO FAR"/><Panel className="p-7 md:p-10"><TimelineEntry {...profile.experience}/></Panel></section>
    <section id="education" tabIndex={-1}><SectionHeading number="05" title="Training" subtitle="EDUCATION / WHERE YOU’VE LEARNED"/><Panel className="p-7 md:p-10"><TimelineEntry {...profile.education}/></Panel></section>
    <section id="certifications" tabIndex={-1}><SectionHeading number="06" title="Achievements" subtitle="CERTIFICATIONS / VERIFIED LEARNING"/><Panel className="achievement p-7 md:p-10"><span className="medal" aria-hidden="true">✦</span><div><Placeholder/><h3>{profile.certification.title}</h3><p>{profile.certification.issuer}</p></div></Panel></section>
    <section id="contact" tabIndex={-1}><SectionHeading number="07" title="Connect" subtitle="CONTACT / START A CONVERSATION"/><Panel className="contact-panel p-7 md:p-10"><div><p className="eyebrow mint">READY FOR THE NEXT CHAPTER?</p><h3>Let’s build something together.</h3><p>{profile.email}</p></div><div><PixelButton disabled>CONTACT COMING SOON</PixelButton><p className="text-sm muted mt-4">Add your contact details in the next stage.</p></div></Panel></section>
    </div></main><footer className="section-shell"><span className="pixel">PLAYER ONE<span className="mint">.</span></span><span>Portfolio foundation · Stage 01</span><a href="#home">Back to start ↑</a></footer></>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
