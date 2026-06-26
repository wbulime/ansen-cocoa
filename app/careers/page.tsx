export const metadata = {
  title: 'Careers | Ansen Cocoa',
  description: "Join the Ansen Cocoa team. Explore career opportunities at Uganda's leading cocoa processing company. Grow your career while making a real impact.",
};

export default function CareersPage() {
  return (
    <>
      <div className="splash-screen">
        <img src="/assets/images/logo.png" alt="Ansen Cocoa" className="splash-logo" />
        <span className="splash-text">Pure Cocoa. Purposefully Processed.</span>
      </div>

      <a href="#main" className="skip-link">Skip to main content</a>

      <nav className="navbar scrolled" role="navigation" aria-label="Main navigation">
        <div className="container">
          <a href="/" className="nav-logo" style={{ color: 'var(--color-primary)' }}>
            <img src="/assets/images/logo.png" alt="Ansen Cocoa" className="nav-logo-img" />
          </a>
          <div className="nav-links">
            <a href="/">Home</a>
            <div className="nav-item has-dropdown">
              <a href="/about">Our Story <svg className="nav-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg></a>
              <div className="nav-dropdown">
                <a href="/about">Who We Are</a>
                <a href="/about#vision-mission">Vision &amp; Mission</a>
                <a href="/about#core-values">Core Values</a>
                <a href="/about#sustainability">Sustainability</a>
                <a href="/about#impact">Our Impact</a>
              </div>
            </div>
            <div className="nav-item has-dropdown">
              <a href="/products">Products <svg className="nav-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg></a>
              <div className="nav-dropdown">
                <a href="/products#natural-cocoa-powder">Natural Cocoa Powder</a>
                <a href="/products#dark-cocoa-powder">Dark Cocoa Powder</a>
                <a href="/products#cocoa-nibs">Cocoa Nibs</a>
                <a href="/products#cocoa-butter">Cocoa Butter</a>
              </div>
            </div>
            <a href="/blog">Blog</a>
            <div className="nav-item has-dropdown">
              <a href="/careers" className="active">Careers <svg className="nav-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg></a>
              <div className="nav-dropdown">
                <a href="/careers">Life at Ansen Cocoa</a>
                <a href="/careers#why-work-with-us">Why Work With Us</a>
                <a href="/careers#openings">Open Positions</a>
              </div>
            </div>
            <a href="/contact">Contact</a>
            <button className="nav-search-btn" aria-label="Search">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="6" /><path d="M14 14l4 4" /></svg>
            </button>
            <button className="dark-toggle" aria-label="Toggle dark mode"></button>
            <a href="/contact" className="nav-cta"><span className="cta-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg></span><span className="cta-text">Order Now</span></a>
          </div>
          <button className="nav-hamburger" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span><span></span></button>
        </div>
      </nav>
      <div className="nav-mobile-overlay" aria-hidden="true"></div>
      <div className="nav-mobile" aria-label="Mobile navigation">
        <a href="/">Home</a>
        <div className="nav-mobile-item">
          <a href="/about">Our Story</a>
          <button className="nav-mobile-toggle" aria-label="Expand Our Story"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg></button>
          <div className="nav-mobile-sub">
            <a href="/about">Who We Are</a>
            <a href="/about#vision-mission">Vision &amp; Mission</a>
            <a href="/about#core-values">Core Values</a>
            <a href="/about#sustainability">Sustainability</a>
            <a href="/about#impact">Our Impact</a>
          </div>
        </div>
        <div className="nav-mobile-item">
          <a href="/products">Products</a>
          <button className="nav-mobile-toggle" aria-label="Expand Products"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg></button>
          <div className="nav-mobile-sub">
            <a href="/products#natural-cocoa-powder">Natural Cocoa Powder</a>
            <a href="/products#dark-cocoa-powder">Dark Cocoa Powder</a>
            <a href="/products#cocoa-nibs">Cocoa Nibs</a>
            <a href="/products#cocoa-butter">Cocoa Butter</a>
          </div>
        </div>
        <a href="/blog">Blog</a>
        <div className="nav-mobile-item">
          <a href="/careers" className="active">Careers</a>
          <button className="nav-mobile-toggle" aria-label="Expand Careers"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg></button>
          <div className="nav-mobile-sub">
            <a href="/careers">Life at Ansen Cocoa</a>
            <a href="/careers#why-work-with-us">Why Work With Us</a>
            <a href="/careers#openings">Open Positions</a>
          </div>
        </div>
        <a href="/contact">Contact</a>
        <button className="nav-search-btn" aria-label="Search">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="6" /><path d="M14 14l4 4" /></svg>
          <span>Search</span>
        </button>
        <a href="/contact" className="nav-cta"><span className="cta-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg></span><span className="cta-text">Order Now</span></a>
      </div>

      {/* Search Modal */}
      <div className="search-modal" role="dialog" aria-label="Site search">
        <button className="search-modal-close" aria-label="Close search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>
        <div className="search-modal-inner">
          <div className="search-input-wrap">
            <svg className="search-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="6" /><path d="M14 14l4 4" /></svg>
            <input type="text" className="search-input" placeholder="Search products, pages, articles..." autoComplete="off" />
          </div>
          <div className="search-results"></div>
        </div>
      </div>

      <section className="page-hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>Be part of a passionate team transforming Uganda's cocoa industry, where your skills, ambition, and purpose come together to create something extraordinary.</p>
        </div>
        <div className="divider-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      <main id="main">

        <section className="section-padding bg-white">
          <div className="container">
            <div className="careers-intro" data-reveal>
              <span className="section-label">Life at Ansen Cocoa</span>
              <h2 className="section-title">Build Your Career Where It Matters</h2>
              <p>At Ansen Cocoa, we believe that great products start with great people. Since 2018, our team in Wobulenzi has been united by a shared mission: to add real value to Uganda's cocoa and to the communities that grow it. We foster an environment of collaboration, continuous learning, and genuine respect where every team member contributes to something bigger than themselves.</p>
              <p style={{ marginTop: 'var(--space-sm)' }}>Whether you are an experienced professional or an ambitious newcomer, you will find meaningful work, supportive leadership, and the opportunity to grow alongside one of Uganda's most exciting agro-processing ventures.</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-light" id="why-work-with-us">
          <div className="container">
            <div className="section-header" data-reveal>
              <span className="section-label">Why Work With Us</span>
              <h2 className="section-title">What Makes Ansen Cocoa Different</h2>
              <p className="section-subtitle">We invest in our people as much as we invest in our products because we know that one cannot thrive without the other.</p>
            </div>

            <div className="careers-benefits-grid" data-reveal-stagger>
              <div className="career-benefit">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <h3>Growth &amp; Development</h3>
                <p>We provide hands-on training, mentorship, and clear advancement pathways so every team member can develop new skills and progress in their career, from the factory floor to management.</p>
              </div>

              <div className="career-benefit">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <h3>Community Impact</h3>
                <p>Your work directly uplifts thousands of Ugandan cocoa farmers and their families. At Ansen Cocoa, you are not just building a career. You are building livelihoods and strengthening local economies.</p>
              </div>

              <div className="career-benefit">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h3>Innovation</h3>
                <p>We embrace modern processing techniques and creative problem-solving. Team members are encouraged to propose ideas, trial new approaches, and help us continuously improve our products and processes.</p>
              </div>

              <div className="career-benefit">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3>Work-Life Balance</h3>
                <p>We respect the importance of life outside work. With reasonable schedules, a supportive team culture, and a location in the peaceful town of Wobulenzi, you can thrive professionally without sacrificing personal well-being.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white" id="openings">
          <div className="container">
            <div className="section-header" data-reveal>
              <span className="section-label">Open Positions</span>
              <h2 className="section-title">Current Openings</h2>
              <p className="section-subtitle">We are looking for driven, detail-oriented individuals who share our passion for quality and community. Explore the roles below and find your fit.</p>
            </div>

            <div data-reveal-stagger>

              <div className="job-listing">
                <div className="job-listing-header">
                  <h3>Cocoa Processing Technician</h3>
                  <div className="job-tags">
                    <span className="job-tag">Full-time</span>
                    <span className="job-tag">Wobulenzi</span>
                  </div>
                </div>
                <p>Operate and monitor cocoa processing equipment to ensure our products meet the highest standards of quality, consistency, and safety. You will work closely with the production and quality assurance teams to optimise output and minimise waste.</p>
                <ul>
                  <li>Operate roasting, grinding, pressing, and packaging machinery in accordance with standard operating procedures</li>
                  <li>Monitor processing parameters (temperature, moisture, particle size) and make real-time adjustments</li>
                  <li>Conduct routine equipment maintenance, cleaning, and calibration</li>
                  <li>Record production data accurately and flag deviations to the shift supervisor</li>
                  <li>Adhere strictly to food safety and hygiene protocols at all times</li>
                </ul>
                <a href="mailto:kiteindustrieslimited@gmail.com?subject=Application%3A%20Cocoa%20Processing%20Technician" className="btn btn-dark">
                  Apply Now
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
                </a>
              </div>

              <div className="job-listing">
                <div className="job-listing-header">
                  <h3>Quality Assurance Officer</h3>
                  <div className="job-tags">
                    <span className="job-tag">Full-time</span>
                    <span className="job-tag">Wobulenzi</span>
                  </div>
                </div>
                <p>Ensure every batch of Ansen Cocoa product leaving our facility meets rigorous quality benchmarks. You will design and implement quality control procedures, conduct lab testing, and work to continuously raise the bar on product excellence.</p>
                <ul>
                  <li>Inspect raw cocoa beans on arrival and assess moisture, defect levels, and grading compliance</li>
                  <li>Perform physical and sensory analysis of finished products (colour, aroma, particle size, fat content)</li>
                  <li>Develop and maintain quality control documentation, SOPs, and traceability records</li>
                  <li>Investigate non-conformances and lead corrective action processes</li>
                  <li>Support the company in achieving and maintaining food safety certifications</li>
                </ul>
                <a href="mailto:kiteindustrieslimited@gmail.com?subject=Application%3A%20Quality%20Assurance%20Officer" className="btn btn-dark">
                  Apply Now
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
                </a>
              </div>

              <div className="job-listing">
                <div className="job-listing-header">
                  <h3>Sales &amp; Marketing Executive</h3>
                  <div className="job-tags">
                    <span className="job-tag">Full-time</span>
                    <span className="job-tag">Kampala</span>
                  </div>
                </div>
                <p>Drive growth by identifying new market opportunities, building strong buyer relationships, and positioning Ansen Cocoa as the premium Ugandan cocoa brand domestically, regionally, and internationally.</p>
                <ul>
                  <li>Identify, contact, and convert prospective clients including bakeries, confectioneries, wholesalers, and export buyers</li>
                  <li>Develop and execute marketing campaigns across digital channels, trade shows, and in-person engagements</li>
                  <li>Manage the sales pipeline, track leads, and prepare accurate sales forecasts and reports</li>
                  <li>Coordinate product sampling and gather client feedback to inform product development</li>
                  <li>Represent the Ansen Cocoa brand at industry events, exhibitions, and business forums</li>
                </ul>
                <a href="mailto:kiteindustrieslimited@gmail.com?subject=Application%3A%20Sales%20%26%20Marketing%20Executive" className="btn btn-dark">
                  Apply Now
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
                </a>
              </div>

              <div className="job-listing">
                <div className="job-listing-header">
                  <h3>Agricultural Field Officer</h3>
                  <div className="job-tags">
                    <span className="job-tag">Full-time</span>
                    <span className="job-tag">Western Uganda</span>
                  </div>
                </div>
                <p>Work directly with cocoa farming communities to improve bean quality at the source. You will provide extension services, promote best agricultural practices, and strengthen the vital link between our farmers and our processing facility.</p>
                <ul>
                  <li>Train and mentor cocoa farmers on improved cultivation, fermentation, and drying techniques</li>
                  <li>Conduct field visits to assess crop health, monitor post-harvest handling, and ensure quality at origin</li>
                  <li>Coordinate cocoa bean procurement from smallholder farmers and cooperatives</li>
                  <li>Collect and report field data on yields, quality trends, and farmer needs</li>
                  <li>Build and maintain trusted relationships with farming communities and local leaders</li>
                </ul>
                <a href="mailto:kiteindustrieslimited@gmail.com?subject=Application%3A%20Agricultural%20Field%20Officer" className="btn btn-dark">
                  Apply Now
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
                </a>
              </div>

              <div className="job-listing">
                <div className="job-listing-header">
                  <h3>Supply Chain Coordinator</h3>
                  <div className="job-tags">
                    <span className="job-tag">Full-time</span>
                    <span className="job-tag">Wobulenzi</span>
                  </div>
                </div>
                <p>Oversee the end-to-end flow of materials and finished goods, from raw bean sourcing through production scheduling to final delivery. You will play a critical role in ensuring we meet customer orders on time and in full while managing costs effectively.</p>
                <ul>
                  <li>Plan and manage raw material procurement, inventory levels, and warehouse operations</li>
                  <li>Coordinate production schedules with the processing team to align output with demand</li>
                  <li>Arrange logistics for domestic and international shipments, ensuring timely delivery</li>
                  <li>Negotiate with suppliers and transport providers to secure competitive rates</li>
                  <li>Track key supply chain metrics and prepare regular performance reports for management</li>
                </ul>
                <a href="mailto:kiteindustrieslimited@gmail.com?subject=Application%3A%20Supply%20Chain%20Coordinator" className="btn btn-dark">
                  Apply Now
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
                </a>
              </div>

            </div>
          </div>
        </section>

        <section className="section-padding bg-light">
          <div className="container">
            <div className="careers-intro" data-reveal>
              <span className="section-label">Application Process</span>
              <h2 className="section-title">How to Apply</h2>
              <p>Applying to Ansen Cocoa is straightforward. Click the "Apply Now" button on any listing above to send us your application via email. Please include your up-to-date CV, a brief cover letter explaining why you are a great fit for the role, and any relevant certificates or references.</p>
              <p style={{ marginTop: 'var(--space-sm)' }}>Our hiring team reviews every application carefully. Shortlisted candidates will be contacted within two weeks for an interview, either in person at our Wobulenzi facility or via video call. We believe in transparent, respectful hiring and will keep you informed at every stage.</p>
            </div>
          </div>
        </section>

        <section className="cta-banner">
          <div className="container" data-reveal>
            <h2>Don't See Your Role?</h2>
            <p>We are always interested in hearing from talented individuals who share our vision. Send your CV and a short introduction to <strong style={{ color: 'var(--color-accent)' }}>kiteindustrieslimited@gmail.com</strong> and we will keep you in mind for future opportunities.</p>
            <a href="mailto:kiteindustrieslimited@gmail.com?subject=General%20Career%20Enquiry" className="btn btn-primary">
              Send Your CV
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
            </a>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="nav-logo" style={{ color: 'var(--color-white)', fontSize: '1.3rem' }}>
                <img src="/assets/images/logo.png" alt="Ansen Cocoa" className="nav-logo-img" />
              </a>
              <p>Transforming Uganda's finest cocoa beans into premium products, crafted with integrity, delivered with purpose.</p>
              <div className="footer-social">
                <a href="https://www.instagram.com/ansencocoa/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg></a>
                <a href="https://www.facebook.com/AnsenCocoa/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg></a>
                <a href="https://x.com/AnsenCocoa" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
                <a href="https://www.tiktok.com/@ansensmitten_cocoa" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.37a8.16 8.16 0 004.77 1.52V7.44a4.85 4.85 0 01-1-.75z" /></svg></a>
              </div>
            </div>
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Products</h4>
              <ul className="footer-links">
                <li><a href="/products#natural-cocoa-powder">Natural Cocoa Powder</a></li>
                <li><a href="/products#dark-cocoa-powder">Dark Cocoa Powder</a></li>
                <li><a href="/products#cocoa-nibs">Cocoa Nibs</a></li>
                <li><a href="/products#cocoa-butter">Cocoa Butter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Stay Updated</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'rgba(245,239,230,0.7)', marginBottom: 'var(--space-sm)', lineHeight: '1.6' }}>Subscribe to receive updates on new products and industry insights.</p>
              <form className="footer-newsletter-form" aria-label="Newsletter subscription">
                <input type="email" placeholder="Your email address" required aria-label="Email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Ansen Cocoa (Kite Industries Limited). All rights reserved. | P.O. Box 313, Wobulenzi, Uganda | kiteindustrieslimited@gmail.com</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/256772696131" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 32 32"><path d="M16.004 0C7.164 0 .002 7.158.002 15.995c0 2.82.737 5.573 2.137 7.997L.014 32l8.21-2.09a16.07 16.07 0 007.776 1.986h.004C24.843 31.896 32 24.738 32 15.995 32 7.158 24.843 0 16.004 0zm0 29.307a13.46 13.46 0 01-6.87-1.88l-.493-.293-5.11 1.34 1.363-4.983-.321-.51A13.39 13.39 0 012.59 15.995C2.59 8.597 8.6 2.59 16.004 2.59c7.4 0 13.41 6.007 13.41 13.405 0 7.403-6.01 13.312-13.41 13.312zm7.355-10.038c-.403-.202-2.384-1.176-2.753-1.31-.37-.135-.639-.202-.908.202-.27.403-1.044 1.31-1.28 1.58-.235.27-.471.304-.874.101-.403-.202-1.7-.626-3.239-1.997-1.198-1.068-2.006-2.386-2.24-2.79-.236-.403-.025-.62.177-.821.181-.18.403-.471.605-.707.202-.236.27-.403.403-.672.135-.27.067-.505-.034-.707-.1-.202-.908-2.187-1.243-2.994-.328-.786-.66-.68-.908-.692-.235-.012-.505-.014-.775-.014s-.707.101-1.078.505c-.37.403-1.412 1.38-1.412 3.365s1.446 3.903 1.648 4.172c.202.27 2.846 4.342 6.894 6.09.963.415 1.714.663 2.3.849.967.307 1.847.264 2.543.16.776-.115 2.384-.975 2.72-1.916.336-.942.336-1.748.236-1.917-.101-.168-.37-.27-.775-.47z" /></svg>
        <span className="whatsapp-tooltip">Chat with us</span>
      </a>

      {/* Back to Top */}
      <button className="back-to-top" aria-label="Back to top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
      </button>

      {/* Cookie Consent */}
      <div className="cookie-banner">
        <p>We use cookies to enhance your browsing experience. By continuing to use this site, you consent to our use of cookies.</p>
        <button className="cookie-accept">Accept</button>
      </div>
    </>
  );
}
