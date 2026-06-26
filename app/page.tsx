export const metadata = {
  title: 'Ansen Cocoa | Pure Cocoa. Purposefully Processed.',
  description: "Ansen Cocoa, Uganda's premium cocoa processor. We transform the finest cocoa beans into natural cocoa powder, dark cocoa powder, cocoa butter, and cocoa nibs.",
  keywords: ['cocoa', 'Uganda', 'cocoa powder', 'cocoa butter', 'cocoa nibs'],
  metadataBase: new URL('https://ansencocoa.com'),
  canonical: 'https://ansencocoa.com/',
  robots: 'index, follow, max-image-preview:large',
  authors: [{ name: 'Ansen Cocoa (Kite Industries Limited)' }],
  openGraph: {
    type: 'website',
    siteName: 'Ansen Cocoa',
    title: 'Ansen Cocoa | Pure Cocoa. Purposefully Processed.',
    description: "Uganda's premium cocoa processor. Natural and dark cocoa powder, cocoa butter, and cocoa nibs crafted with integrity in Uganda.",
    url: 'https://ansencocoa.com/',
    images: [
      {
        url: 'https://ansencocoa.com/assets/images/logo.png',
        alt: 'Ansen Smitten Cocoa by Kite Industries Limited',
      },
    ],
    locale: 'en_UG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ansen Cocoa | Pure Cocoa. Purposefully Processed.',
    description: 'Uganda\'s premium cocoa processor. Natural and dark cocoa powder, cocoa butter, and cocoa nibs.',
    images: ['https://ansencocoa.com/assets/images/logo.png'],
  },
};

export default function Home() {
  return (
    <>
      <div className="splash-screen">
        <img src="/assets/images/logo.png" alt="Ansen Cocoa" className="splash-logo" />
        <span className="splash-text">Pure Cocoa. Purposefully Processed.</span>
      </div>

      <a href="#main" className="skip-link">Skip to main content</a>

      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container">
          <a href="/" className="nav-logo" aria-label="Ansen Cocoa Home">
            <img src="/assets/images/logo.png" alt="Ansen Cocoa" className="nav-logo-img" />
          </a>
          <div className="nav-links">
            <a href="/" className="active">Home</a>
            <div className="nav-item has-dropdown">
              <a href="/about">Our Story <svg className="nav-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3"/></svg></a>
              <div className="nav-dropdown">
                <a href="/about">Who We Are</a>
                <a href="/about#vision-mission">Vision &amp; Mission</a>
                <a href="/about#core-values">Core Values</a>
                <a href="/about#sustainability">Sustainability</a>
                <a href="/about#impact">Our Impact</a>
              </div>
            </div>
            <div className="nav-item has-dropdown">
              <a href="/products">Products <svg className="nav-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3"/></svg></a>
              <div className="nav-dropdown">
                <a href="/products#natural-cocoa-powder">Natural Cocoa Powder</a>
                <a href="/products#dark-cocoa-powder">Dark Cocoa Powder</a>
                <a href="/products#cocoa-nibs">Cocoa Nibs</a>
                <a href="/products#cocoa-butter">Cocoa Butter</a>
              </div>
            </div>
            <a href="/blog">Blog</a>
            <div className="nav-item has-dropdown">
              <a href="/careers">Careers <svg className="nav-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3"/></svg></a>
              <div className="nav-dropdown">
                <a href="/careers">Life at Ansen Cocoa</a>
                <a href="/careers#why-work-with-us">Why Work With Us</a>
                <a href="/careers#openings">Open Positions</a>
              </div>
            </div>
            <a href="/contact">Contact</a>
            <button className="nav-search-btn" aria-label="Search">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="6"/><path d="M14 14l4 4"/></svg>
            </button>
            <button className="dark-toggle" aria-label="Toggle dark mode"></button>
            <a href="/contact" className="nav-cta"><span className="cta-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></span><span className="cta-text">Order Now</span></a>
          </div>
          <button className="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className="nav-mobile-overlay" aria-hidden="true"></div>
      <div className="nav-mobile" aria-label="Mobile navigation">
        <a href="/">Home</a>
        <div className="nav-mobile-item">
          <a href="/about">Our Story</a>
          <button className="nav-mobile-toggle" aria-label="Expand Our Story"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3"/></svg></button>
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
          <button className="nav-mobile-toggle" aria-label="Expand Products"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3"/></svg></button>
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
          <button className="nav-mobile-toggle" aria-label="Expand Careers"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3"/></svg></button>
          <div className="nav-mobile-sub">
            <a href="/careers">Life at Ansen Cocoa</a>
            <a href="/careers#why-work-with-us">Why Work With Us</a>
            <a href="/careers#openings">Open Positions</a>
          </div>
        </div>
        <a href="/contact">Contact</a>
        <button className="nav-search-btn" aria-label="Search">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="6"/><path d="M14 14l4 4"/></svg>
          <span>Search</span>
        </button>
        <a href="/contact" className="nav-cta"><span className="cta-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></span><span className="cta-text">Order Now</span></a>
      </div>

      <div className="search-modal" role="dialog" aria-label="Site search">
        <button className="search-modal-close" aria-label="Close search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <div className="search-modal-inner">
          <div className="search-input-wrap">
            <svg className="search-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="6"/><path d="M14 14l4 4"/></svg>
            <input type="text" className="search-input" placeholder="Search products, pages, articles..." autoComplete="off" />
          </div>
          <div className="search-results"></div>
        </div>
      </div>

      <section className="hero" id="hero">
        <div className="hero-bg" role="img" aria-label="Ugandan cocoa imagery">
          <div className="hero-slide active">
            <img src="/assets/images/hero-cocoa-beans.jpg" alt="Premium dried cocoa beans" loading="eager" />
          </div>
          <div className="hero-slide">
            <img src="/assets/images/hero-cocoa-farm.jpg" alt="Lush cocoa plantation in Uganda" loading="lazy" />
          </div>
          <div className="hero-slide">
            <img src="/assets/images/hero-chocolate-pour.jpg" alt="Smooth melted chocolate" loading="lazy" />
          </div>
          <div className="hero-slide">
            <img src="/assets/images/cocoa-processing.jpg" alt="Cocoa beans being processed" loading="lazy" />
          </div>
          <div className="hero-slide">
            <img src="/assets/images/cocoa-marketplace.png" alt="Cocoa pods at Ugandan marketplace" loading="lazy" />
          </div>
        </div>

        <div className="hero-content">
          <span className="hero-badge">Crafted in Uganda</span>
          <h1>Pure Cocoa.<br/>Purposefully Processed.</h1>
          <p>We transform Uganda's finest cocoa beans into premium cocoa products,<br/><span style={{whiteSpace:'nowrap'}}>crafted with integrity and delivered with purpose.</span></p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">
              Explore Our Products
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3"/></svg>
            </a>
            <a href="#story" className="btn btn-secondary">Our Story</a>
          </div>
        </div>

        <div className="hero-dots">
          <button className="hero-dot active" aria-label="Slide 1"></button>
          <button className="hero-dot" aria-label="Slide 2"></button>
          <button className="hero-dot" aria-label="Slide 3"></button>
          <button className="hero-dot" aria-label="Slide 4"></button>
          <button className="hero-dot" aria-label="Slide 5"></button>
        </div>

        <a href="#products" className="hero-scroll" aria-label="Scroll to products">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </section>

      <main id="main">

        <section className="section-padding bg-white" id="products">
          <div className="container">
            <div className="section-header" data-reveal>
              <span className="section-label">Our Products</span>
              <h2 className="section-title">Premium Cocoa, Crafted for Excellence</h2>
              <p className="section-subtitle">From bean to product, every step of our process is guided by a commitment to quality and the rich heritage of Ugandan cocoa.</p>
            </div>

            <div className="products-grid" data-reveal-stagger>
              <div className="product-card">
                <div className="product-card-img">
                  <img src="/assets/images/cocoa-powder-natural.jpg" alt="Natural cocoa powder in a ceramic bowl" loading="lazy" />
                  <span className="product-tag">Bestseller</span>
                </div>
                <div className="product-card-body">
                  <h3>Natural Cocoa Powder</h3>
                  <p>Rich, pure, and aromatic. Our natural cocoa powder delivers an authentic chocolate flavour for baking and beverages.</p>
                  <a href="/products#natural-cocoa-powder" className="product-card-link">
                    Learn More
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3"/></svg>
                  </a>
                </div>
              </div>

              <div className="product-card">
                <div className="product-card-img">
                  <img src="/assets/images/cocoa-powder-dark.jpg" alt="Dark cocoa powder with deep rich colour" loading="lazy" />
                </div>
                <div className="product-card-body">
                  <h3>Dark Cocoa Powder</h3>
                  <p>Intense in colour and flavour, rich in antioxidants. Ideal for decadent desserts and dark chocolate creations.</p>
                  <a href="/products#dark-cocoa-powder" className="product-card-link">
                    Learn More
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3"/></svg>
                  </a>
                </div>
              </div>

              <div className="product-card">
                <div className="product-card-img">
                  <img src="/assets/images/cocoa-nibs.jpg" alt="Crunchy cocoa nibs from crushed cocoa beans" loading="lazy" />
                </div>
                <div className="product-card-body">
                  <h3>Cocoa Nibs</h3>
                  <p>Crushed from carefully selected beans, delivering a pure, crunchy chocolate experience as a topping or snack.</p>
                  <a href="/products#cocoa-nibs" className="product-card-link">
                    Learn More
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3"/></svg>
                  </a>
                </div>
              </div>

              <div className="product-card">
                <div className="product-card-img">
                  <img src="/assets/images/cocoa-butter.jpg" alt="Smooth creamy cocoa butter blocks" loading="lazy" />
                </div>
                <div className="product-card-body">
                  <h3>Cocoa Butter</h3>
                  <p>Smooth, creamy, and naturally extracted. Versatile for chocolate-making, cosmetics, and artisan baking.</p>
                  <a href="/products#cocoa-butter" className="product-card-link">
                    Learn More
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="wave-divider">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60Z" fill="#F5EFE6"/>
          </svg>
        </div>

        <section className="section-padding bg-light" id="story">
          <div className="container">
            <div className="content-row">
              <div className="content-row-img" data-reveal="left">
                <img src="/assets/images/cocoa-processing.jpg" alt="Cocoa beans being processed and sorted in Uganda" loading="lazy" />
              </div>
              <div className="content-row-text" data-reveal="right">
                <span className="section-label">Our Story</span>
                <h2>Rooted in Uganda. Driven by Purpose.</h2>
                <p>Ansen Smitten Cocoa, a brand of Kite Industries Limited, was established in 2018 as a Ugandan cocoa processing company committed to adding significant value to raw cocoa beans. We locally process cocoa to meet the unique needs of domestic, regional, and international markets.</p>
                <p>Our focus is clear: deliver high-quality cocoa products that reflect Uganda's rich agricultural heritage while ensuring fair prices for cocoa farmers and contributing to the growth of the local economy.</p>
                <a href="/about" className="btn btn-outline">
                  Read Our Full Story
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding features-section" id="why-us">
          <div className="container">
            <div className="section-header" data-reveal>
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title">The Ansen Cocoa Difference</h2>
              <p className="section-subtitle">We pride ourselves as a catalyst for positive change in the cocoa industry.</p>
            </div>

            <div className="features-grid" data-reveal-stagger>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z"/>
                    <path d="M12 6v6"/><path d="M9 9l3 3 3-3"/>
                  </svg>
                </div>
                <h3>Sustainably Sourced</h3>
                <p>Our cocoa is sourced directly from Ugandan farmers, preserving traditional farming practices while ensuring environmental stewardship and community empowerment.</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
                <h3>Premium Quality</h3>
                <p>Every batch undergoes rigorous quality assurance, from bean selection to processing, ensuring our cocoa products consistently meet the highest standards.</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 00-3-3.87"/>
                    <path d="M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                </div>
                <h3>Fair Pricing</h3>
                <p>We provide fair, transparent pricing to our cocoa farmers, enabling them to earn a living income while offering competitively priced products to buyers worldwide.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="wave-divider">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,0 720,60 1080,30 C1260,15 1380,40 1440,30 L1440,60 L0,60Z" fill="#FFFFFF"/>
          </svg>
        </div>

        <section className="section-padding bg-white" id="sustainability">
          <div className="container">
            <div className="content-row reverse">
              <div className="content-row-img" data-reveal="right">
                <img src="/assets/images/cocoa-marketplace.png" alt="Fresh cocoa pods at a Ugandan marketplace" loading="lazy" />
              </div>
              <div className="content-row-text" data-reveal="left">
                <span className="section-label">Sustainability</span>
                <h2>Growing a Better Future, Together</h2>
                <p>At Ansen Cocoa, sustainability is the foundation of everything we do. By processing cocoa locally in Uganda, we keep value within the country, increase foreign exchange, and strengthen the livelihoods of farming communities.</p>
                <p>Our dedication to responsible business sourcing and community development sets us apart, making us a trusted partner for investors, government bodies, development partners, and consumers alike.</p>
                <a href="/about#sustainability" className="btn btn-outline">
                  Learn More
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials-section bg-light">
          <div className="container">
            <div className="section-header" data-reveal>
              <span className="section-label">Testimonials</span>
              <h2 className="section-title">What Our Clients Say</h2>
            </div>
            <div className="testimonials-track" data-reveal>
              <div className="testimonial-card">
                <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="testimonial-text">"The quality of Ansen Cocoa's natural powder is unmatched. It gives our chocolates a depth of flavour that our customers absolutely love. A trusted supplier we rely on every season."</p>
                <div className="testimonial-author">James Mukasa</div>
                <div className="testimonial-role">Head Chocolatier, Kampala Confections</div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="testimonial-text">"We switched to Ansen Cocoa Butter for our skincare line and the difference was immediate. Pure, smooth, and ethically sourced. Our customers can feel the quality."</p>
                <div className="testimonial-author">Grace Nakamya</div>
                <div className="testimonial-role">Founder, Glow Naturals Uganda</div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="testimonial-text">"As a baker, consistency is everything. Ansen Cocoa delivers the same premium quality every single time. Their dark cocoa powder makes my brownies the best in town."</p>
                <div className="testimonial-author">David Ssempijja</div>
                <div className="testimonial-role">Owner, Sweetbite Bakery</div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="testimonial-text">"The cocoa nibs are a game-changer for our granola range. Crunchy, rich, and packed with nutrients. We are proud to use a locally processed Ugandan product."</p>
                <div className="testimonial-author">Sarah Atim</div>
                <div className="testimonial-role">CEO, FreshHarvest Foods</div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="testimonial-text">"Working with Ansen Cocoa has been a wonderful partnership. They are committed to fair pricing and their products meet international standards. Highly recommended."</p>
                <div className="testimonial-author">Peter Ochieng</div>
                <div className="testimonial-role">Procurement Manager, East Africa Foods Ltd</div>
              </div>
            </div>
            <div className="testimonial-controls">
              <button className="testimonial-dot active" aria-label="Testimonial 1"></button>
              <button className="testimonial-dot" aria-label="Testimonial 2"></button>
              <button className="testimonial-dot" aria-label="Testimonial 3"></button>
              <button className="testimonial-dot" aria-label="Testimonial 4"></button>
              <button className="testimonial-dot" aria-label="Testimonial 5"></button>
            </div>
          </div>
        </section>

        <section className="cta-banner">
          <div className="container" data-reveal>
            <h2>Ready to Experience Premium Ugandan Cocoa?</h2>
            <p>Whether you are a chocolatier, a baker, or a wholesale buyer, we are here to deliver the quality your products deserve. Find our products at <strong>Naalya Market</strong>.</p>
            <a href="/contact" className="btn btn-primary">
              Get in Touch
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3"/></svg>
            </a>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="nav-logo" style={{color: 'var(--color-white)', fontSize: '1.3rem'}}>
                <img src="/assets/images/logo.png" alt="Ansen Cocoa" className="nav-logo-img" />
              </a>
              <p>Transforming Uganda's finest cocoa beans into premium products, crafted with integrity, delivered with purpose.</p>
              <div className="footer-social">
                <a href="https://www.instagram.com/ansencocoa/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                </a>
                <a href="https://www.facebook.com/AnsenCocoa/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="https://x.com/AnsenCocoa" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@ansensmitten_cocoa" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.37a8.16 8.16 0 004.77 1.52V7.44a4.85 4.85 0 01-1-.75z"/></svg>
                </a>
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
              <p style={{fontSize:'var(--fs-small)', color:'rgba(245,239,230,0.7)', marginBottom:'var(--space-sm)', lineHeight:'1.6'}}>Subscribe to receive updates on new products, partnerships, and industry insights.</p>
              <form className="footer-newsletter-form" aria-label="Newsletter subscription">
                <input type="email" placeholder="Your email address" required aria-label="Email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Ansen Cocoa (Kite Industries Limited). All rights reserved. | P.O Box 801802 Ntinda, Kampala | kiteindustrieslimited@gmail.com</p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/256772696131" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 32 32"><path d="M16.004 0C7.164 0 .002 7.158.002 15.995c0 2.82.737 5.573 2.137 7.997L.014 32l8.21-2.09a16.07 16.07 0 007.776 1.986h.004C24.843 31.896 32 24.738 32 15.995 32 7.158 24.843 0 16.004 0zm0 29.307a13.46 13.46 0 01-6.87-1.88l-.493-.293-5.11 1.34 1.363-4.983-.321-.51A13.39 13.39 0 012.59 15.995C2.59 8.597 8.6 2.59 16.004 2.59c7.4 0 13.41 6.007 13.41 13.405 0 7.403-6.01 13.312-13.41 13.312zm7.355-10.038c-.403-.202-2.384-1.176-2.753-1.31-.37-.135-.639-.202-.908.202-.27.403-1.044 1.31-1.28 1.58-.235.27-.471.304-.874.101-.403-.202-1.7-.626-3.239-1.997-1.198-1.068-2.006-2.386-2.24-2.79-.236-.403-.025-.62.177-.821.181-.18.403-.471.605-.707.202-.236.27-.403.403-.672.135-.27.067-.505-.034-.707-.1-.202-.908-2.187-1.243-2.994-.328-.786-.66-.68-.908-.692-.235-.012-.505-.014-.775-.014s-.707.101-1.078.505c-.37.403-1.412 1.38-1.412 3.365s1.446 3.903 1.648 4.172c.202.27 2.846 4.342 6.894 6.09.963.415 1.714.663 2.3.849.967.307 1.847.264 2.543.16.776-.115 2.384-.975 2.72-1.916.336-.942.336-1.748.236-1.917-.101-.168-.37-.27-.775-.47z"/></svg>
        <span className="whatsapp-tooltip">Chat with us</span>
      </a>

      <button className="back-to-top" aria-label="Back to top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
      </button>

      <div className="cookie-banner">
        <p>We use cookies to enhance your browsing experience. By continuing to use this site, you consent to our use of cookies.</p>
        <button className="cookie-accept">Accept</button>
      </div>

      <div className="newsletter-popup-overlay">
        <div className="newsletter-popup">
          <button className="newsletter-popup-close" aria-label="Close">&times;</button>
          <h3>Stay in the Loop</h3>
          <p>Get exclusive updates on new products, cocoa recipes, and special offers delivered to your inbox.</p>
          <form>
            <input type="email" placeholder="Your email address" required aria-label="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
}
