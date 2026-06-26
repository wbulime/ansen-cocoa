export const metadata = {
  title: 'About Us | Ansen Cocoa',
  description: "Learn about Ansen Cocoa, our story, vision, mission, core values, and commitment to sustainability in Uganda's cocoa industry.",
};

export default function AboutPage() {
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
              <a href="/about" className="active">Our Story <svg className="nav-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg></a>
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
              <a href="/careers">Careers <svg className="nav-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg></a>
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
          <a href="/about" className="active">Our Story</a>
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
          <a href="/careers">Careers</a>
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
          <h1>Our Story</h1>
          <p>From the heart of Uganda's cocoa-growing regions to markets around the world, this is the story of Ansen Cocoa.</p>
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
            <div className="content-row">
              <div className="content-row-img" data-reveal="left">
                <img src="/assets/images/cocoa-processing.jpg" alt="Cocoa beans being sorted and processed in Uganda" loading="lazy" />
              </div>
              <div className="content-row-text" data-reveal="right">
                <span className="section-label">Who We Are</span>
                <h2>Rooted in Uganda. Driven by Purpose.</h2>
                <p>Ansen Smitten Cocoa is a brand of Kite Industries Limited, a private limited company established in 2018 in Uganda. From the very beginning, our mission has been clear: to add significant value to Uganda's raw cocoa beans by processing them locally into premium cocoa products.</p>
                <p>Our focus on local processing ensures that we meet the unique needs of domestic, regional, and international markets, offering high-quality cocoa products that reflect Uganda's richest agricultural heritage.</p>
                <p>By processing cocoa within Uganda, we not only provide fair prices to cocoa farmers, enabling them to earn a living income, but we also contribute to the growth of the local economy by increasing foreign exchange earnings.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-light" id="vision-mission">
          <div className="container">
            <div className="section-header" data-reveal>
              <span className="section-label">Our Purpose</span>
              <h2 className="section-title">Vision &amp; Mission</h2>
            </div>

            <div className="vision-mission-grid" data-reveal-stagger>
              <div className="vm-card vision">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>To be the most preferred source of premium and affordable cocoa products in Uganda and globally.</p>
              </div>
              <div className="vm-card mission">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>To create shared value for all in the cocoa value chain by directly sourcing cocoa beans from smallholder farmers and processing them into premium and affordable cocoa products that are competitive on the world market.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white" id="core-values">
          <div className="container">
            <div className="section-header" data-reveal>
              <span className="section-label">Core Values</span>
              <h2 className="section-title">What Guides Everything We Do</h2>
            </div>

            <div className="values-grid" data-reveal-stagger>
              <div className="value-card">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3>Integrity</h3>
                <p>Transparency in pricing, honesty in business, and fairness to every farmer and buyer. Integrity is the cornerstone of our operations.</p>
              </div>
              <div className="value-card">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <h3>Fairness</h3>
                <p>We believe in equitable relationships with all stakeholders, ensuring cocoa farmers receive fair compensation and buyers receive fair value.</p>
              </div>
              <div className="value-card">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3>Compliance</h3>
                <p>We adhere to all regulatory standards and industry best practices, ensuring our products meet both local and international quality benchmarks.</p>
              </div>
              <div className="value-card">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3>Excellence</h3>
                <p>We hold ourselves to the highest standards in every batch we process, ensuring consistency and quality that our partners can rely on.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-light">
          <div className="container">
            <div className="section-header" data-reveal>
              <span className="section-label">Our Journey</span>
              <h2 className="section-title">Milestones That Define Us</h2>
              <p className="section-subtitle">Every step we have taken has been guided by a commitment to quality, community, and sustainability.</p>
            </div>

            <div className="timeline" data-reveal>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="year">2018</span>
                <h3>Foundation</h3>
                <p>Kite Industries Limited was established as a private limited company, laying the groundwork for Ansen Smitten Cocoa, a brand built on the promise of adding value to Ugandan cocoa.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="year">2019 to 2020</span>
                <h3>Building the Process</h3>
                <p>We invested in developing our cocoa processing capabilities, refining our methods for producing natural cocoa powder, dark cocoa powder, cocoa nibs, and cocoa butter to meet international quality standards.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="year">2021 to 2023</span>
                <h3>Market Expansion</h3>
                <p>Ansen Cocoa expanded its reach beyond the local market, establishing partnerships with regional and international buyers who demand premium-quality, responsibly sourced cocoa products.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="year">Today</span>
                <h3>A Catalyst for Change</h3>
                <p>Today, we serve as a catalyst for positive change in Uganda's cocoa industry, championing fair pricing, responsible sourcing, and community development while delivering products that meet the world's highest standards.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white" id="sustainability">
          <div className="container">
            <div className="content-row reverse">
              <div className="content-row-img" data-reveal="right">
                <img src="/assets/images/cocoa-marketplace.png" alt="Fresh cocoa pods at a Ugandan marketplace" loading="lazy" />
              </div>
              <div className="content-row-text" data-reveal="left">
                <span className="section-label">Sustainability</span>
                <h2>Growing a Better Future, Together</h2>
                <p>At Ansen Cocoa, sustainability is the foundation of everything we do. By processing cocoa locally in Uganda, we keep value within the country, increase foreign exchange earnings, and strengthen the livelihoods of farming communities.</p>
                <p>Our dedication to responsible business sourcing and community development sets us apart. We work closely with cocoa farmers to ensure they receive fair, transparent pricing that enables them to earn a living income and invest in their families and communities.</p>
                <p>As a trusted partner for investors, government bodies, development partners, and consumers alike, we are committed to transforming Uganda's cocoa industry into a model of sustainability and shared prosperity.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding features-section" id="impact">
          <div className="container">
            <div className="section-header" data-reveal>
              <span className="section-label">Our Impact</span>
              <h2 className="section-title" style={{ whiteSpace: 'nowrap' }}>Making a Difference, Every Day</h2>
            </div>
            <div className="features-grid" data-reveal-stagger>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <h3>Farmer-First Pricing</h3>
                <p>We ensure cocoa farmers earn fair wages that reflect the true value of their work, supporting their livelihoods and enabling long-term prosperity.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" /><path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                </div>
                <h3>Local Value Addition</h3>
                <p>By processing cocoa within Uganda, we retain economic value in-country, generate employment, and increase the nation's foreign exchange earnings.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z" />
                    <path d="M12 6v6" /><path d="M9 9l3 3 3-3" />
                  </svg>
                </div>
                <h3>Environmental Care</h3>
                <p>We adopt responsible sourcing and processing practices that protect Uganda's ecosystems and support the long-term viability of cocoa farming.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section" data-reveal>
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number" data-target="500" data-suffix="+">0</div>
                <div className="stat-label">Cocoa Farmers Supported</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-target="7" data-suffix="+">0</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-target="4" data-suffix="">0</div>
                <div className="stat-label">Premium Products</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-target="100" data-suffix="%">0</div>
                <div className="stat-label">Ugandan Sourced</div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-banner">
          <div className="container" data-reveal>
            <h2>Join Us on Our Journey</h2>
            <p>Whether you are looking to invest in a socially responsible company or simply enjoy the finest cocoa products, Ansen Cocoa is here to exceed your expectations.</p>
            <a href="/contact" className="btn btn-primary">
              Get in Touch
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
