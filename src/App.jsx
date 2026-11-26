import { useEffect, useState } from 'react';

const baseUrl = import.meta.env.BASE_URL;
const contactForm =
  'https://docs.google.com/forms/d/e/1FAIpQLSfp_-AwM70qbTLz3TdhEuObMvO9UOGWrgTHtQbnEEktEHirdw/viewform?usp=publish-editor';

const projects = [
  {
    number: '01',
    title: 'AI Smart Civic Complaint Management System',
    description:
      'An e-governance platform for municipal complaints, built with Jakarta Servlets, JSP, JDBC, HikariCP, and a lightweight heuristic AI workflow.',
    stack: ['Java', 'JSP', 'JDBC', 'AI'],
    category: 'Java',
    github: 'https://github.com/ganuborade/AI-SMART-CIVIC-COMPLAINT-MANAGMENT-SYSTEM',
    featured: true,
  },
  {
    number: '02',
    title: 'Online Project Management System',
    description:
      'A straightforward project management application built around a clear Java web architecture.',
    stack: ['Java', 'Servlets', 'JSP'],
    category: 'Java',
    github: 'https://github.com/ganuborade/Online-Product-Managment-System',
  },
  {
    number: '03',
    title: 'Portfolio Website 2.0',
    description:
      'A new portfolio experiment exploring a more polished way to present my work.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    github: 'https://github.com/ganuborade/Reactive-Portfolio-2027',
    live: 'https://ganuborade.github.io/Reactive-Portfolio-2027/',
  },
   {
    number: '04',
    title: 'AutoAttend',
    description:
      'A webcam-based face recognition attendance system designed to make recording student attendance more automatic.',
    stack: ['Python', 'Flask', 'OpenCV'],
    category: 'Full stack',
    github: 'https://github.com/ganuborade/AutoAttend-Face-Recognition',
    live: 'https://autoattend-face-recognition.onrender.com/',
    featured: true,
  },
  {
    number: '05',
    title: 'My Village Portal',
    description:
      'A modern community portal that makes local information and services easier to find.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    github: 'https://github.com/ganuborade/my-village-portal',
    live: 'https://ganuborade.github.io/my-village-portal/',
  },
  {
    number: '06',
    title: 'Portfolio Website 1.0',
    description:
      'An earlier portfolio experiment the ',
    stack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    github: 'https://github.com/ganuborade/portfolio.website2.0',
    live: 'https://ganuborade.github.io/portfolio.website2.0/',
  },
 {
    number: '07',
    title: 'Mathur Giri Maharaj Math Sansthan',
    description:
      'A full-stack community portal for events, announcements, galleries, committee members, and financial records.',
    stack: ['React', 'Node.js', 'MySQL'],
    category: 'Full stack',
    github: 'https://github.com/ganuborade/math-portal',
    live: 'https://math-portal-9zgx.onrender.com/',
    featured: true,
  },
  {
    number: '08',
    title: 'NexLayar Business Website',
    description:
      'A responsive business website concept for presenting web development services.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    github: 'https://github.com/ganuborade/nex_layar',
    live: 'https://ganuborade.github.io/nex_layar/',
  },
  {
    number: '09',
    title: 'Currency Converter',
    description:
      'A compact utility for exploring currency conversion through a simple, approachable interface.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    category: 'JavaScript',
    github: 'https://github.com/ganuborade/CurrencyConverterWebsite',
    live: 'https://ganuborade.github.io/CurrencyConverterWebsite/',
  },
  {
    number: '10',
    title: 'Simple Interest Calculator',
    description:
      'A practical calculator that turns a familiar formula into a small, easy-to-use web tool.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    category: 'JavaScript',
    github: 'https://github.com/ganuborade/Simple-Interest-Calculator',
    live: 'https://ganuborade.github.io/Simple-Interest-Calculator/',
  },
  {
    number: '11',
    title: 'Math Portal — Static Edition',
    description:
      'A lightweight, database-free edition of a community portal, made for static GitHub Pages hosting.',
    stack: ['HTML', 'CSS', 'GitHub Pages'],
    category: 'Frontend',
    github: 'https://github.com/ganuborade/math-portal',
    live: 'https://nexlayer2026.github.io/nexLayer-math-portal/',
  },
];

const skills = [
  { title: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'] },
  { title: 'Backend', items: ['Java', 'Spring Boot', 'SpringDataJPA', 'Microservices', 'Spring MVC', 'Spring Security','Hibernate', 'JPA'] },
  { title: 'Data & Cloud', items: ['MySQL', 'Oracle SQL', 'AWS', 'Docker'] },
  { title: 'Workflow', items: ['Git & GitHub', 'JUnit', 'VS Code', 'Eclipse','Loggers'] },
];

const milestones = [
  '3rd prize — Maharashtra Darbar Coding Competition, Hyderabad',
  'Basic Cloud Computing certification',
  'Introduction to Data Analytics certification',
  'Virtual Web Development training and projects',
  'Hands-on experience with AWS cloud services',
];

function ArrowIcon({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const filters = ['All', 'Full stack', 'Java', 'Frontend', 'JavaScript'];
  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#10101b' : '#f5f3fa',
    );
  }, [theme]);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark');

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Ganesh Borade, home">
          Ganesh <span>Borade.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`navigation${menuOpen ? ' navigation--open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {[
            ['Work', '#work'],
            ['About', '#about'],
            ['Toolkit', '#toolkit'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a
            className="nav-resume"
            href={`${baseUrl}Resume2026.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Résumé <ArrowIcon diagonal />
          </a>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <span className="theme-icon" aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
            <span className="theme-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </nav>
      </header>

      <main>
        <section className="hero page-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> SOFTWARE DEVELOPER · INDIA</p>
            <h1>
              Ganesh
              <br />
              Borade<span className="accent-dot">.</span>
              <br />
              <span className="outline-word hero-title-role">Developer &amp; creator</span>
            </h1>
            <div className="hero-bottom">
              <p>
                I build thoughtful digital experiences, useful software, and things that make
                everyday life a little easier.
              </p>
              <a className="text-link" href="#work">
                Explore my work <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="hero-art" aria-label="Portrait of Ganesh Borade">
            <div className="portrait-glow" />
            <span className="portrait-caption portrait-caption--top">THE PERSON<br />BEHIND THE PIXELS</span>
            <span className="portrait-caption portrait-caption--bottom">BEED, INDIA · 2027</span>
            <div className="orbit orbit--one" />
            <div className="orbit orbit--two" />
            <div className="portrait-frame">
              <img src={`${baseUrl}images/photo.png`} alt="Ganesh Borade" />
            </div>
            <span className="art-spark art-spark--one">✳</span>
            <span className="art-spark art-spark--two">✳</span>
            <span className="portrait-stamp">GB</span>
          </div>
          <div className="hero-index"><span>01</span> / THE INTRODUCTION</div>
        </section>

        <div className="ticker" aria-label="Thoughtful work, built with intention">
          <div className="ticker-track" aria-hidden="true">
            {[0, 1, 2, 3].map((item) => (
              <span key={item}>
                THOUGHTFUL WORK <i>✳</i> BUILT WITH INTENTION <i>✳</i>
              </span>
            ))}
          </div>
        </div>

        <section className="section page-wrap reveal" id="work">
          <div className="section-topline">
            <p className="eyebrow">01 / SELECTED WORK</p>
            <span className="section-note">A few things I’ve brought to life.</span>
          </div>
          <div className="work-heading">
            <h2>Ideas into<br />interfaces<span className="accent-dot">.</span></h2>
            <p>Experiments, useful tools, and full-stack applications — built to solve real problems.</p>
          </div>
          <div className="filter-row" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? 'filter-chip filter-chip--active' : 'filter-chip'}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
            <span className="project-count">{String(visibleProjects.length).padStart(2, '0')} PROJECTS</span>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article
                className={`project-card${project.featured ? ' project-card--featured' : ''}`}
                key={project.number}
              >
                <div className={`project-preview project-preview--${project.number}`} aria-hidden="true">
                  <div className="preview-toolbar">
                    <span><i /><i /><i /></span>
                    <span>{project.category} / PROJECT_{project.number}</span>
                  </div>
                  <div className="preview-canvas">
                    <div className="preview-copy">
                      <span>SELECTED WORK — {project.number}</span>
                      <strong>{project.title}</strong>
                      <i />
                      <i />
                    </div>
                    <div className="preview-art">
                      <span>{project.number}</span>
                    </div>
                  </div>
                </div>
                <div className="project-card-top">
                  <span>{project.number} / 10</span>
                  <span className="project-mark" aria-hidden="true">✳</span>
                </div>
                <div className="project-card-body">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="tag-list" aria-label="Technologies">
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="project-links">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live site <ArrowIcon diagonal />
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub <ArrowIcon diagonal />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="project-footnote">
            Some live demos may take a little while to wake up on free hosting.
          </p>
        </section>

        <section className="about-section reveal" id="about">
          <div className="page-wrap about-grid">
            <div className="about-intro">
              <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
              <h2>Grounded in<br />curiosity.<br /><span>Driven by craft.</span></h2>
            </div>
            <div className="about-copy">
              <p className="about-lede">
                Good software should feel clear, thoughtful, and easy to use. That’s the kind of
                work I want to put into the world.
              </p>
              <p>
                I’m Ganesh Ashok Borade, a Computer Science and Engineering graduate from Beed,
                Maharashtra. I enjoy working across modern web development and Java technologies,
                and I’m always learning how to make the next idea a little better.
              </p>
              <p>
                Outside the code, I bring patience, a practical mindset, and a belief in showing up
                consistently — values inspired by my family and the life I grew up around.
              </p>
              <div className="milestone-box">
                <p className="eyebrow">MILESTONES & LEARNING</p>
                <ul>
                  {milestones.map((milestone) => <li key={milestone}>{milestone}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section page-wrap reveal" id="toolkit">
          <div className="section-topline">
            <p className="eyebrow">03 / MY TOOLKIT</p>
            <span className="section-note">Tools I use to turn ideas into working software.</span>
          </div>
          <div className="toolkit-heading">
            <h2>Curiosity is<br />the real stack<span className="accent-dot">.</span></h2>
          </div>
          <div className="toolkit-grid">
            {skills.map((group, index) => (
              <article className="toolkit-card" key={group.title}>
                <span className="toolkit-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <ul className="tag-list">
                  {group.items.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section reveal" id="contact">
          <div className="page-wrap contact-wrap">
            <p className="eyebrow"><span className="status-dot" /> 04 / YOUR TURN</p>
            <h2>Got a good<br />feeling<span className="contact-question">?</span></h2>
            <div className="contact-bottom">
              <p>Have an opportunity, a project, or just a good idea? I’d love to hear about it.</p>
              <a className="contact-button" href={contactForm} target="_blank" rel="noreferrer">
                Say hello <ArrowIcon diagonal />
              </a>
            </div>
            <div className="contact-details">
              <a href="mailto:ganuborade2004@gmail.com">ganuborade2004@gmail.com</a>
              <a href="tel:+919834988871">+91 98349 88871</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-wrap">
        <a className="wordmark" href="#home" aria-label="Back to top">Ganesh <span>Borade.</span></a>
        <p>MADE WITH INTENTION <span>✳</span> © {new Date().getFullYear()} GANESH BORADE</p>
        <div className="footer-links">
          <a href="https://github.com/ganuborade" target="_blank" rel="noreferrer">GITHUB <ArrowIcon diagonal /></a>
          <a href="https://www.linkedin.com/in/ganesh-borade-4916ba24b" target="_blank" rel="noreferrer">LINKEDIN <ArrowIcon diagonal /></a>
        </div>
      </footer>
    </>
  );
}

export default App;
