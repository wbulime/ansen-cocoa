export const metadata = {
  title: 'Our Products | Ansen Cocoa',
  description: "Explore Ansen Cocoa's premium product range: Natural Cocoa Powder, Dark Cocoa Powder, Cocoa Nibs, and Cocoa Butter, crafted in Uganda.",
};

export default function ProductsPage() {
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
              <a href="/products" className="active">Products <svg className="nav-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg></a>
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
          <a href="/products" className="active">Products</a>
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
          <h1>Our Products</h1>
          <p>From bean to finished product, we process Uganda's finest cocoa into four premium offerings, each crafted to the highest standards of quality and flavour.</p>
        </div>
        <div className="divider-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      <main id="main">

        <section className="section-padding bg-white" id="natural-cocoa-powder">
          <div className="container">
            <div className="product-detail" data-reveal>
              <div className="product-detail-img">
                <img src="/assets/images/cocoa-powder-natural.jpg" alt="Natural cocoa powder with rich brown colour" loading="lazy" />
              </div>
              <div className="product-detail-text">
                <h2>Natural Cocoa Powder</h2>
                <p>Our Natural Cocoa Powder delivers a rich, pure cocoa flavour with a fresh and pleasant aroma that elevates any recipe. Carefully processed from premium Ugandan cocoa beans, it retains the natural depth and complexity that discerning bakers and chocolatiers demand.</p>
                <p>With its warm, reddish-brown colour and authentic taste, this powder is ideal for those who seek genuine cocoa character in their products without compromise.</p>

                <div className="product-uses">
                  <h4>Uses of Cocoa Powder</h4>
                  <ul>
                    <li>A major ingredient in the confectionery industry</li>
                    <li>Essential for baking, especially pastries, cakes, and cookies</li>
                    <li>Used as a flavour for dairy products such as milk, yoghurt, and ice cream</li>
                    <li>Primary ingredient for making chocolates</li>
                    <li>Enjoyed as a warm or cold beverage</li>
                    <li>Smoothies and health-conscious drinks</li>
                  </ul>
                </div>

                <div className="product-health">
                  <h4>Health Benefits of Cocoa Powder</h4>
                  <p>Helps in controlling body weight. Lowers high blood pressure, hence reducing risks of heart diseases. Lowers high blood sugar levels and cholesterol levels. Rich in antioxidants that support overall wellness.</p>
                </div>

                <a href="/contact" className="btn btn-dark">
                  Request a Quote
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-light" id="dark-cocoa-powder">
          <div className="container">
            <div className="product-detail" data-reveal>
              <div className="product-detail-img">
                <img src="/assets/images/cocoa-powder-dark.jpg" alt="Dark cocoa powder with intense deep colour" loading="lazy" />
              </div>
              <div className="product-detail-text">
                <h2>Dark Cocoa Powder</h2>
                <p>Intense in both colour and flavour, our Dark Cocoa Powder is the premium choice for creating bold, deeply chocolatey products. Rich in natural antioxidants, it offers a sophisticated bitterness that balances beautifully in dark chocolate formulations and luxury desserts.</p>
                <p>Its deep, dark hue makes it visually striking in everything from cakes and pastries to gourmet sauces and dusting powders.</p>

                <div className="product-uses">
                  <h4>Uses of Dark Cocoa Powder</h4>
                  <ul>
                    <li>Dark chocolate and couverture production</li>
                    <li>Decadent cakes, brownies, and pastries</li>
                    <li>Gourmet sauces, glazes, and ganache</li>
                    <li>Premium dusting and finishing for desserts</li>
                    <li>Health-conscious recipes (higher antioxidant content)</li>
                    <li>Specialty beverages and hot chocolate blends</li>
                  </ul>
                </div>

                <div className="product-health">
                  <h4>Health Benefits</h4>
                  <p>Dark cocoa contains higher concentrations of flavonoids and antioxidants compared to natural cocoa. It supports cardiovascular health, reduces inflammation, and may improve cognitive function.</p>
                </div>

                <a href="/contact" className="btn btn-dark">
                  Request a Quote
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white" id="cocoa-nibs">
          <div className="container">
            <div className="product-detail" data-reveal>
              <div className="product-detail-img">
                <img src="/assets/images/cocoa-nibs.jpg" alt="Crunchy cocoa nibs from crushed cocoa beans" loading="lazy" />
              </div>
              <div className="product-detail-text">
                <h2>Cocoa Nibs</h2>
                <p>Our Cocoa Nibs are small, crunchy pieces of carefully crushed cocoa beans that deliver a pure, unadulterated chocolate experience. Minimally processed to preserve their natural nutritional profile, they offer a satisfying crunch and a deep, complex cocoa flavour.</p>
                <p>Packed with fibre, iron, and magnesium, cocoa nibs are the ingredient of choice for health-conscious consumers and innovative chefs alike.</p>

                <div className="product-uses">
                  <h4>Uses of Cocoa Nibs</h4>
                  <ul>
                    <li>Toppings for yoghurt, oatmeal, and granola</li>
                    <li>Trail mixes and energy bars</li>
                    <li>Baking inclusions for cookies, muffins, and breads</li>
                    <li>Smoothie and shake boosters</li>
                    <li>Garnish for desserts, ice cream, and acai bowls</li>
                    <li>Enjoyed as a standalone healthy snack</li>
                  </ul>
                </div>

                <div className="product-health">
                  <h4>Health Benefits</h4>
                  <p>Cocoa nibs are a natural source of antioxidants, fibre, iron, and magnesium. They support heart health, improve mood through natural theobromine, and provide sustained energy without refined sugars.</p>
                </div>

                <a href="/contact" className="btn btn-dark">
                  Request a Quote
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-light" id="cocoa-butter">
          <div className="container">
            <div className="product-detail" data-reveal>
              <div className="product-detail-img">
                <img src="/assets/images/cocoa-butter.jpg" alt="Smooth creamy cocoa butter blocks" loading="lazy" />
              </div>
              <div className="product-detail-text">
                <h2>Cocoa Butter</h2>
                <p>Naturally extracted from our premium cocoa beans, Ansen Cocoa Butter is smooth, creamy, and wonderfully versatile. Its rich composition of healthy fats and natural emollients makes it prized in both the food and cosmetics industries.</p>
                <p>With a subtle cocoa aroma and a velvety texture, our cocoa butter adds luxurious mouthfeel to confectionery and delivers deep moisturisation in skincare formulations.</p>

                <div className="product-uses">
                  <h4>Uses of Cocoa Butter</h4>
                  <ul>
                    <li>Primary ingredient for chocolate: dark chocolate, milk chocolate, and white chocolate</li>
                    <li>Confectionery and premium chocolate-making</li>
                    <li>Artisan baking, pastry, and patisserie</li>
                    <li>Base for cosmetics such as body creams, lotions, ointments, and lip balms</li>
                    <li>Pharmaceutical industries as an ideal base for medicines and suppositories</li>
                    <li>Soap-making and luxury skincare products</li>
                  </ul>
                </div>

                <div className="product-health">
                  <h4>Health &amp; Skin Benefits</h4>
                  <p>Reduces body inflammation and has powerful antioxidant effects. Smoothens the body to remove stretch marks, wrinkles, and skin scars. Alleviates dry skin and improves skin elasticity. Rich in healthy fats that support nutrient absorption.</p>
                </div>

                <a href="/contact" className="btn btn-dark">
                  Request a Quote
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding-sm bg-white">
          <div className="container">
            <div className="market-banner" data-reveal>
              <h3>Where to Find Our Products</h3>
              <p>Get all Ansen Cocoa products from <strong>Naalya Market, Kampala</strong>. For wholesale and bulk orders, contact us directly.</p>
            </div>
          </div>
        </section>

        <section className="cta-banner">
          <div className="container" data-reveal>
            <h2>Need a Custom Order?</h2>
            <p>We work with buyers of all sizes, from artisan chocolatiers to large-scale manufacturers. Tell us what you need, and we will deliver.</p>
            <a href="/contact" className="btn btn-primary">
              Contact Our Team
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

      {/* Lightbox */}
      <div className="lightbox-overlay" aria-label="Image preview">
        <button className="lightbox-close" aria-label="Close">&times;</button>
        <img src="" alt="" />
      </div>

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
