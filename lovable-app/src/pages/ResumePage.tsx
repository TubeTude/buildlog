import Nav from '../components/Nav'

export default function ResumePage() {
  return (
    <>
      <Nav />
      <div className="resume-wrap">
        <h1 className="resume-name">Juan Nogueira</h1>
        <p className="resume-titles">AI Product Builder · Revenue Systems Architect · U.S. Patent Holder</p>
        <p className="resume-attribs">New Orleans–Based | SF Travel Available</p>
        <p className="resume-links">
          <a href="mailto:juannog@gmail.com">juannog@gmail.com</a>
          {' · '}
          <a href="tel:5042207787">504-220-7787</a>
          {' · '}
          <a href="https://www.linkedin.com/in/juannog/" target="_blank" rel="noopener">linkedin.com/in/juannog</a>
          {' · '}
          <a href="https://tudebit.com" target="_blank" rel="noopener">tudebit.com</a>
        </p>

        <section className="resume-section">
          <h2 className="resume-section-title">Profile</h2>
          <p>Revenue operator turned AI product builder with 17+ years closing enterprise deals ($40M+ generated) and 6+ years designing and shipping software systems.</p>
          <p>U.S. Patent holder for structured video sentiment architecture. Builder of revenue-generating CRM automation tools and privacy-first audience intelligence infrastructure (Tude.build).</p>
          <p>I combine customer psychology, structured data design, and rapid AI prototyping to build systems that generate revenue and create defensible data assets.</p>
          <p>Open to product, growth, or founder-level roles within AI-driven companies.</p>
        </section>


        <section className="resume-section">
          <h2 className="resume-section-title">AI & Technical Projects</h2>
          <div className="resume-project">
            <div className="resume-project-head">
              <span className="resume-project-title">AI-Powered Sales Pipeline</span>
              <span className="resume-project-tag">| Self-Developed</span>
              <span className="resume-project-year">2025</span>
            </div>
            <ul>
              <li>Built custom CRM enrichment and prospecting tools to streamline cold outreach, automate research, and structure deal notes — directly contributed to $100K in closed revenue within 90 days.</li>
            </ul>
          </div>
          <div className="resume-project">
            <div className="resume-project-head">
              <span className="resume-project-title">Tude.build — Structured Sentiment & Audience Intelligence Infrastructure</span>
              <span className="resume-project-tag">| Founder</span>
              <span className="resume-project-year">2019–Present</span>
            </div>
            <ul>
              <li>U.S. Patent Holder (2024) for real-time video sentiment architecture capturing second-by-second viewer reactions, structured ranking signals, and cohort-based segmentation.</li>
              <li>Designed and built sentiment infrastructure including: event-level preference scoring and comparative ranking logic; cohort segmentation across audience types; edge AI inference (Jetson Nano) for computer vision and broadcast ad recognition within a fully local-first architecture.</li>
              <li>Secured creator permissions from three stand-up comedians to launch an initial comedy discovery vertical (tudebit.com), validating early supply-side participation.</li>
              <li>Evolving into white-label SaaS infrastructure for creators, media operators, and platforms seeking owned audience intelligence.</li>
            </ul>
          </div>
          <div className="resume-project">
            <div className="resume-project-head">
              <span className="resume-project-title">Lovable × Hangout.FM Buildathon</span>
              <span className="resume-project-tag">| Community Organizer</span>
              <span className="resume-project-year">2025</span>
            </div>
            <ul>
              <li>Produced an AI buildathon between Lovable and Hangout.FM (1M+ users), executed entirely within both ecosystems — generating Hangout's first sponsorship revenue and mobilizing developer participation.</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Professional Experience</h2>
          <div className="resume-project">
            <div className="resume-project-head">
              <span className="resume-project-title">Senior Business Development Media Specialist</span>
              <span className="resume-project-year">May 2008 – Present</span>
            </div>
            <p className="resume-item-meta" style={{ marginBottom: '0.5rem' }}>WDSU (NBC) — Hearst Television | New Orleans, LA</p>
            <ul>
              <li>Generated $40M+ in advertising revenue ($2.5M+ annually), consistently exceeding performance targets across local and national accounts.</li>
              <li>Owned local revenue strategy for marquee national broadcasts (Olympics, Sunday Night Football, NBA), consistently outperforming national sales through premium local sponsorship execution.</li>
              <li>Delivered recurring market intelligence, forecasting, and competitive positioning strategies to increase market share in a highly competitive media environment.</li>
              <li>3× Hearst Television Eagle Award recipient for performance and leadership.</li>
              <li>Contributed to PROMAX award-winning digital initiatives and collaborated with research partners (Magid, SmithGeiger) to develop custom advertiser insights.</li>
            </ul>
          </div>
          <div className="resume-project">
            <div className="resume-project-head">
              <span className="resume-project-title">Distribution Manager</span>
              <span className="resume-project-year">Feb 2007 – Feb 2008</span>
            </div>
            <p className="resume-item-meta" style={{ marginBottom: '0.5rem' }}>Stop Smiling Magazine | Chicago, IL</p>
            <ul>
              <li>Cold-called and secured placement in 85 independent bookstores, record shops, and specialty retailers, increasing direct consignment sales by 42%.</li>
              <li>Built and managed multi-city distribution relationships across Chicago, New York, Memphis, and Los Angeles, overseeing collections and performance reporting.</li>
            </ul>
          </div>
          <div className="resume-project">
            <div className="resume-project-head">
              <span className="resume-project-title">Production Assistant</span>
              <span className="resume-project-year">Feb – May 2008</span>
            </div>
            <p className="resume-item-meta" style={{ marginBottom: '0.5rem' }}>New Orleans Jazz & Heritage Festival | 2008</p>
            <ul>
              <li>Supported vendor operations for 60 Louisiana restaurants at a major international festival.</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Creative & Technical Background</h2>
          <ul className="resume-credentials">
            <li>ASCAP Member (since 2006): Musician and songwriter; created and sold original branded jingle work to a regional advertiser.</li>
            <li>Civic Tech: Built neighborhood websites and SMS engagement tools for community organizing initiatives.</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Technical Stack</h2>
          <p className="resume-competencies">Python · Flask · Node.js · Supabase · Computer Vision · Jetson (Edge AI) · CRM Automation · API Integrations · Revenue Systems Architecture</p>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          <div className="resume-project">
            <div className="resume-project-head">
              <span className="resume-project-title">B.S. in Marketing</span>
              <span className="resume-project-year">2006</span>
            </div>
            <p className="resume-item-meta" style={{ marginBottom: '0.5rem' }}>Louisiana State University | Baton Rouge, LA</p>
            <ul>
              <li>Study Abroad: Fudan University (Shanghai, China) — Mandarin and Chinese business culture (LSU Initiative Scholarship).</li>
              <li>Early Experience: Web Development Intern, New Emit Digital Media (2005).</li>
            </ul>
          </div>
        </section>

        <div className="resume-download-wrap">
          <button type="button" className="resume-download resume-download--pdf" onClick={() => window.print()} aria-label="Save as PDF">
            Save as PDF
          </button>
          <a href="/assets/downloads/Juan_Nogueira_Resume.docx" className="resume-download" download>
            Download Word
          </a>
        </div>
      </div>
    </>
  )
}
