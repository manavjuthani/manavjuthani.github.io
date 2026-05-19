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
    year: "'26",
    period: 'April 2026',
    title: 'SignShield — Real-Time Traffic Sign Recognition',
    description: 'Built a multi-class traffic sign classifier using a ResNet-18 CNN and a CNN-LSTM that extends it with a recurrent layer for temporal reasoning across 8-frame sequences. Trained on 10K GTSRB images plus adversarially attacked sequences (noise with color inversion, lower-frame shadow with Gaussian blur); the CNN-LSTM reached 99.8% clean accuracy and 98.4% on fully attacked sequences — a 31% gain over the CNN baseline. Includes an evaluation suite with attention heatmaps, calibration diagrams, and per-class confusion matrices.',
    link: 'https://github.com/manavjuthani/signshield',
    techIcons: ['python', 'ai'],
  },
  {
    year: "'25",
    period: 'December 2025',
    title: 'ETL Pipeline — Maia Farms',
    description: 'Engineered a serverless, event-driven ETL pipeline using AWS Glue and Python to ingest 2 million rows of raw bioreactor data from Amazon S3 into PostgreSQL, with custom transformation logic for sensor metric validation. S3 event triggers enable immediate processing, and a CloudWatch + SNS monitoring layer surfaces pipeline health and alerts stakeholders on failures.',
    techIcons: ['python', 'aws'],
  },
  {
    year: "'25",
    period: '2025',
    title: 'Gemini ESP32 AI Assistant',
    description: 'Built a standalone voice assistant using an ESP32 microcontroller with I2S microphone for high-fidelity audio. Features a hybrid processing pipeline with OpenAI Whisper for speech-to-text and Google Gemini API for natural conversational responses.',
    link: 'https://github.com/manavjuthani/geminiAssistant',
    techIcons: ['cpp', 'python', 'ai'],
  },
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
  cpp: {
    color: '#00599C',
    svg: <svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/></svg>
  },
  ai: {
    color: '#8E75B2',
    svg: <svg viewBox="0 0 24 24"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2zm-4 9a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm8 0a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z"/></svg>
  },
  aws: {
    color: '#FF9900',
    svg: <svg viewBox="0 0 24 24"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/></svg>
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
