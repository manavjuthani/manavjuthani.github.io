'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'connect', label: 'Connect', href: '#connect' },
]

const technicalSkills = [
  'Python & Data Analysis',
  'Machine Learning & Statistics',
  'C, C++',
  'Git & Version Control',
  'React & Next.js',
]

const professionalSkills = [
  'Problem Solving',
  'Data Visualization',
  'Project Management',
  'Team Collaboration',
]

const projectItems = [
  {
    year: "'24",
    period: '2024',
    title: 'Pomotimer',
    description: 'Built a Pomodoro timer web app to enhance productivity using HTML, CSS, and JavaScript.',
    link: 'https://github.com/manavjuthani/Pomodoro-Timer-Web-App',
    techIcons: ['html', 'css', 'js'],
  },
  {
    year: "'23",
    period: '2023',
    title: 'Budget Tracker',
    description: 'Developed a Python-based personal budget tracking script for financial management.',
    link: 'https://github.com/manavjuthani/Python-Budget-Tracking-Script',
    techIcons: ['python'],
  }
]

const techIconsSvg = {
  html: {
    color: '#E34F26',
    svg: <svg viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
  },
  css: {
    color: '#1572B6',
    svg: <svg viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>
  },
  js: {
    color: '#F7DF1E',
    svg: <svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>
  },
  python: {
    color: '#3776AB',
    svg: <svg viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>
  },
}

export default function Home() {
  const [navVisible, setNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setNavVisible(false)
      } else {
        // Scrolling up or at top
        setNavVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <main className="site-container">
      {/* Navigation */}
      <nav className={`nav ${navVisible ? '' : 'nav-hidden'}`}>
        {navItems.map((item) => (
          <a key={item.id} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-image-container"></div>
          <p className="hero-greeting">Heya, I'm</p>
          <h1 className="hero-name">Manav Juthani</h1>
          <p className="hero-tagline">
            Coding ideas into reality. I'm a Data Science student at Simon Fraser University, 
            passionate about building things and turning data into insights.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <h2 className="section-title">Technical Skills & Frameworks</h2>
        <p className="section-subtitle">Tools and technologies that power my work.</p>
        
        <div className="skills-grid">
          <div className="skills-column">
            <h3 className="skills-category">Technical</h3>
            <ul className="skills-list">
              {technicalSkills.map((skill) => (
                <li key={skill} className="skill-item">
                  <span className="skill-check">✓</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="skills-column">
            <h3 className="skills-category">Professional</h3>
            <ul className="skills-list">
              {professionalSkills.map((skill) => (
                <li key={skill} className="skill-item">
                  <span className="skill-check">✓</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="projects" className="section projects-section">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Have a look at some of the things I've built!</p>
        
        <div className="timeline">
          {projectItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-title">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="timeline-link">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                  {item.techIcons && (
                    <span className="tech-icons">
                      {item.techIcons.map((tech) => (
                        <span 
                          key={tech} 
                          className="tech-icon" 
                          style={{ '--icon-color': techIconsSvg[tech].color }}
                          title={tech.toUpperCase()}
                        >
                          {techIconsSvg[tech].svg}
                        </span>
                      ))}
                    </span>
                  )}
                </h3>
                <span className="timeline-org">{item.organization}</span>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="section connect-section">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Have a question or just want to say hi?</p>
        
        <div className="connect-content">
          <p className="connect-email-label">Reach out at:</p>
          <a href="mailto:manavjuthani@gmail.com" className="connect-email">
            manavjuthani@gmail.com
          </a>
          
          <p className="connect-social-label">More of me:</p>
          <div className="social-links">
            <a href="https://github.com/manavjuthani" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" className="social-icon">
                <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.385 7.866 10.911.575.105.786-.25.786-.557 0-.274-.01-1.002-.016-1.968-3.202.696-3.877-1.543-3.877-1.543-.523-1.329-1.277-1.684-1.277-1.684-1.043-.713.079-.699.079-.699 1.152.081 1.758 1.184 1.758 1.184 1.026 1.758 2.69 1.25 3.346.955.104-.744.401-1.25.728-1.537-2.555-.291-5.243-1.277-5.243-5.686 0-1.256.449-2.284 1.185-3.088-.119-.29-.513-1.461.113-3.047 0 0 .966-.309 3.165 1.18.918-.255 1.903-.383 2.884-.388.98.005 1.966.133 2.885.388 2.197-1.489 3.162-1.18 3.162-1.18.627 1.586.233 2.757.114 3.047.738.804 1.184 1.832 1.184 3.088 0 4.42-2.693 5.392-5.258 5.676.413.356.782 1.061.782 2.138 0 1.543-.014 2.786-.014 3.168 0 .309.208.668.793.554C20.212 21.38 23.5 17.083 23.5 12 23.5 5.648 18.352.5 12 .5Z"/>
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/manav-juthani-818621205/" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" className="social-icon">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.039-1.852-3.039-1.853 0-2.136 1.447-2.136 2.941v5.667H9.35V9h3.414v1.561h.048c.476-.9 1.637-1.852 3.368-1.852 3.601 0 4.266 2.37 4.266 5.455v6.288ZM5.337 7.433c-1.144 0-2.071-.928-2.071-2.073 0-1.144.927-2.071 2.071-2.071 1.145 0 2.072.927 2.072 2.071 0 1.145-.927 2.073-2.072 2.073Zm1.777 13.019H3.559V9h3.555v11.452ZM21.5 0h-19A2.5 2.5 0 0 0 0 2.5v19A2.5 2.5 0 0 0 2.5 24h19a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 21.5 0Z"/>
              </svg>
              LinkedIn
            </a>
            <a href="/Resume-MJ.pdf" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" className="social-icon">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm4 18H6V4h7v5h5v11ZM8 12h8v2H8v-2Zm0 4h8v2H8v-2Zm0-8h3v2H8V8Z"/>
              </svg>
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        Crafted with ❤ by Manav Juthani
      </footer>
    </main>
  )
}
