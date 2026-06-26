export const metadata = {
  title: 'Blog | Ansen Cocoa | Cocoa Insights & Industry News',
  description: "Cocoa insights from Ansen Cocoa. Expert articles on cocoa processing, health benefits, sustainability, and Uganda's thriving cocoa industry.",
};

export default function BlogPage() {
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
                <a href="/about#vision-mission">Vision & Mission</a>
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
            <a href="/blog" className="active">Blog</a>
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
            <a href="/about#vision-mission">Vision & Mission</a>
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
        <a href="/blog" className="active">Blog</a>
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
          <h1>Cocoa Insights</h1>
          <p>Expert articles on cocoa processing, industry trends, health benefits, and Uganda's thriving cocoa sector.</p>
        </div>
        <div className="divider-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      <main id="main">

        <div className="blog-grid-wrapper">
          <div className="container">
            <div className="blog-grid" data-reveal-stagger="">

              <div className="blog-card" data-reveal="">
                <div className="blog-card-img">
                  <img src="/assets/images/cocoa-processing.jpg" alt="Cocoa beans being processed in Uganda" loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="tag">Processing</span>
                    <span>March 12, 2025</span>
                  </div>
                  <h3>From Bean to Powder: How Cocoa Is Processed in Uganda</h3>
                  <p>Follow the journey cocoa beans take from Ugandan farms to the finished powder used in food and beverages worldwide.</p>
                  <a href="#" className="blog-read-more" data-article="article-1">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>

              <div className="blog-card" data-reveal="">
                <div className="blog-card-img">
                  <img src="/assets/images/cocoa-powder-natural.jpg" alt="Natural cocoa powder rich in antioxidants" loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="tag">Health</span>
                    <span>February 28, 2025</span>
                  </div>
                  <h3>5 Health Benefits of Natural Cocoa Powder</h3>
                  <p>Natural cocoa powder is packed with antioxidants, minerals, and mood-boosting compounds. Here is why it belongs in your diet.</p>
                  <a href="#" className="blog-read-more" data-article="article-2">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>

              <div className="blog-card" data-reveal="">
                <div className="blog-card-img">
                  <img src="/assets/images/cocoa-powder-dark.jpg" alt="Dark cocoa powder with deep rich colour" loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="tag">Guide</span>
                    <span>February 14, 2025</span>
                  </div>
                  <h3>Natural vs. Dark Cocoa Powder: What Sets Them Apart</h3>
                  <p>Not all cocoa powder is the same. Learn the key differences between natural and dark cocoa and when to use each type.</p>
                  <a href="#" className="blog-read-more" data-article="article-3">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>

              <div className="blog-card" data-reveal="">
                <div className="blog-card-img">
                  <img src="/assets/images/cocoa-marketplace.png" alt="Ugandan cocoa at a marketplace" loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="tag">Industry</span>
                    <span>January 30, 2025</span>
                  </div>
                  <h3>Why Ugandan Cocoa Ranks Among the World's Best</h3>
                  <p>Uganda's unique climate, volcanic soils, and dedicated farmers produce cocoa with a distinct, sought-after flavour profile.</p>
                  <a href="#" className="blog-read-more" data-article="article-4">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>

              <div className="blog-card" data-reveal="">
                <div className="blog-card-img">
                  <img src="/assets/images/cocoa-butter.jpg" alt="Cocoa butter blocks for chocolate and cosmetics" loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="tag">Industry</span>
                    <span>January 15, 2025</span>
                  </div>
                  <h3>Cocoa Butter: Far More Than Just Chocolate</h3>
                  <p>From luxury skincare to pharmaceutical coatings, cocoa butter's versatility extends well beyond the confectionery aisle.</p>
                  <a href="#" className="blog-read-more" data-article="article-5">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>

              <div className="blog-card" data-reveal="">
                <div className="blog-card-img">
                  <img src="/assets/images/cocoa-processing.jpg" alt="Cocoa farming community in Uganda" loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="tag">Sustainability</span>
                    <span>December 20, 2024</span>
                  </div>
                  <h3>How Fair Pricing Transforms Cocoa Communities</h3>
                  <p>Fair pricing does more than cover costs. It funds schools, clinics, and a sustainable future for farming families in Uganda.</p>
                  <a href="#" className="blog-read-more" data-article="article-6">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>

              <div className="blog-card" data-reveal="">
                <div className="blog-card-img">
                  <img src="/assets/images/hero-cocoa-beans.jpg" alt="Cocoa beans ready for processing and export" loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="tag">Industry</span>
                    <span>December 5, 2024</span>
                  </div>
                  <h3>The Rising Demand for African Processed Cocoa</h3>
                  <p>Africa grows most of the world's cocoa yet processes very little. That is changing, and companies like Ansen Cocoa are leading the shift.</p>
                  <a href="#" className="blog-read-more" data-article="article-7">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>

              <div className="blog-card" data-reveal="">
                <div className="blog-card-img">
                  <img src="/assets/images/cocoa-nibs.jpg" alt="Cocoa nibs in a bowl" loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="tag">Health</span>
                    <span>November 18, 2024</span>
                  </div>
                  <h3>Cocoa Nibs: The Superfood in Your Pantry</h3>
                  <p>Crunchy, nutrient-dense, and full of chocolate flavour. Cocoa nibs are the minimally processed superfood gaining worldwide popularity.</p>
                  <a href="#" className="blog-read-more" data-article="article-8">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>

              <div className="blog-card" data-reveal="">
                <div className="blog-card-img">
                  <img src="/assets/images/cocoa-marketplace.png" alt="Sustainable cocoa farming landscape" loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="tag">Sustainability</span>
                    <span>November 2, 2024</span>
                  </div>
                  <h3>Sustainability in Cocoa: What It Means for the Future</h3>
                  <p>Sustainability is the foundation of a cocoa industry that can thrive for generations. Here is what it looks like in practice.</p>
                  <a href="#" className="blog-read-more" data-article="article-9">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>

              <div className="blog-card" data-reveal="">
                <div className="blog-card-img">
                  <img src="/assets/images/cocoa-powder-natural.jpg" alt="Cocoa powder samples for business buyers" loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="tag">Guide</span>
                    <span>October 15, 2024</span>
                  </div>
                  <h3>Choosing the Right Cocoa Powder for Your Business</h3>
                  <p>Fat content, colour, pH, and flavour all matter when selecting cocoa powder. This guide helps you make the right choice.</p>
                  <a href="#" className="blog-read-more" data-article="article-10">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>

              <div className="blog-card" data-reveal="">
                <div className="blog-card-img">
                  <img src="/assets/images/cocoa-marketplace.png" alt="Ugandan cocoa from farm to market" loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="tag">Industry</span>
                    <span>October 1, 2024</span>
                  </div>
                  <h3>The Journey of Ugandan Cocoa: From Farm to Market</h3>
                  <p>Trace the path of Ugandan cocoa from smallholder farms through processing and onward to buyers across the region and beyond.</p>
                  <a href="#" className="blog-read-more" data-article="article-11">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>

              <div className="blog-card" data-reveal="">
                <div className="blog-card-img">
                  <img src="/assets/images/cocoa-butter.jpg" alt="Cocoa butter used in skincare products" loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="tag">Skincare</span>
                    <span>September 15, 2024</span>
                  </div>
                  <h3>Cocoa Butter in Skincare: Nature's Best Moisturiser</h3>
                  <p>Rich in natural fatty acids, cocoa butter is one of the most effective plant-based moisturisers for healthy, glowing skin.</p>
                  <a href="#" className="blog-read-more" data-article="article-12">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Article 1 */}
        <div className="blog-article-view" id="article-1">
          <div className="container section-padding">
            <a href="#" className="blog-back-btn">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
              Back to All Articles
            </a>
            <div className="blog-article">
              <div className="blog-article-hero"><img src="/assets/images/cocoa-processing.jpg" alt="Cocoa processing in Uganda" loading="lazy" /></div>
              <h2>From Bean to Powder: How Cocoa Is Processed in Uganda</h2>
              <p>The journey from cocoa bean to powder involves several carefully managed steps. It begins on smallholder farms across Uganda, where farmers harvest ripe cocoa pods by hand and scoop out the wet beans inside.</p>
              <p>After harvest, the beans are fermented in wooden boxes for five to seven days. This step is essential for developing the chocolate flavour that buyers expect. The beans are then sun-dried on raised platforms until their moisture content drops below eight per cent.</p>
              <p>At the factory, dried beans are roasted at controlled temperatures to bring out their full aroma. The roasted beans are cracked and winnowed to remove their shells, leaving behind cocoa nibs. These nibs are ground into a thick paste called cocoa liquor.</p>
              <p>Finally, the liquor is pressed to separate cocoa butter from the solid cake. The cake is then ground into fine cocoa powder. At Ansen Cocoa, we monitor every stage to ensure consistent quality and food safety across all our products.</p>
            </div>
            <hr className="blog-divider" />
            <h3 className="blog-related-title">More Articles</h3>
            <div className="blog-related-grid">
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-natural.jpg" alt="Natural cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>5 Health Benefits of Natural Cocoa Powder</h3>
                  <a href="#" className="blog-read-more" data-article="article-2">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-dark.jpg" alt="Dark cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Natural vs. Dark Cocoa Powder: What Sets Them Apart</h3>
                  <a href="#" className="blog-read-more" data-article="article-3">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-marketplace.png" alt="Ugandan cocoa marketplace" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Why Ugandan Cocoa Ranks Among the World's Best</h3>
                  <a href="#" className="blog-read-more" data-article="article-4">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/hero-cocoa-beans.jpg" alt="Cocoa beans for export" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>The Rising Demand for African Processed Cocoa</h3>
                  <a href="#" className="blog-read-more" data-article="article-7">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-nibs.jpg" alt="Cocoa nibs" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Cocoa Nibs: The Superfood in Your Pantry</h3>
                  <a href="#" className="blog-read-more" data-article="article-8">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-natural.jpg" alt="Cocoa powder for business" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Choosing the Right Cocoa Powder for Your Business</h3>
                  <a href="#" className="blog-read-more" data-article="article-10">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article 2 */}
        <div className="blog-article-view" id="article-2">
          <div className="container section-padding">
            <a href="#" className="blog-back-btn">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
              Back to All Articles
            </a>
            <div className="blog-article">
              <div className="blog-article-hero"><img src="/assets/images/cocoa-powder-natural.jpg" alt="Natural cocoa powder health benefits" loading="lazy" /></div>
              <h2>5 Health Benefits of Natural Cocoa Powder</h2>
              <p>Natural cocoa powder is one of the most nutrient-dense foods available. Because it undergoes minimal processing, it retains a high concentration of beneficial compounds that support overall health.</p>
              <p>Here are five key benefits worth knowing about:</p>
              <ul>
                <li>Rich in antioxidants that help fight oxidative stress</li>
                <li>Supports heart health by improving blood flow and lowering blood pressure</li>
                <li>Contains theobromine, a mild stimulant that boosts focus without caffeine jitters</li>
                <li>Provides essential minerals including iron, magnesium, and zinc</li>
                <li>Acts as a prebiotic, feeding beneficial gut bacteria</li>
              </ul>
              <p>Cocoa's flavonoid content is especially impressive. Per gram, natural cocoa powder contains more antioxidants than blueberries or green tea. Regular consumption has been linked to improved mood thanks to compounds that stimulate serotonin production.</p>
              <p>To get the most benefit, choose minimally processed cocoa powder. Heavily alkalised varieties lose much of their nutritional value during processing. Ansen Cocoa's natural powder is gently processed to preserve these important nutrients.</p>
            </div>
            <hr className="blog-divider" />
            <h3 className="blog-related-title">More Articles</h3>
            <div className="blog-related-grid">
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-processing.jpg" alt="Cocoa processing" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>From Bean to Powder: How Cocoa Is Processed in Uganda</h3>
                  <a href="#" className="blog-read-more" data-article="article-1">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-dark.jpg" alt="Dark cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Natural vs. Dark Cocoa Powder: What Sets Them Apart</h3>
                  <a href="#" className="blog-read-more" data-article="article-3">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-butter.jpg" alt="Cocoa butter" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Cocoa Butter: Far More Than Just Chocolate</h3>
                  <a href="#" className="blog-read-more" data-article="article-5">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-nibs.jpg" alt="Cocoa nibs" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Cocoa Nibs: The Superfood in Your Pantry</h3>
                  <a href="#" className="blog-read-more" data-article="article-8">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-natural.jpg" alt="Cocoa powder for business" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Choosing the Right Cocoa Powder for Your Business</h3>
                  <a href="#" className="blog-read-more" data-article="article-10">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-butter.jpg" alt="Cocoa butter in skincare" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Cocoa Butter in Skincare: Nature's Best Moisturiser</h3>
                  <a href="#" className="blog-read-more" data-article="article-12">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article 3 */}
        <div className="blog-article-view" id="article-3">
          <div className="container section-padding">
            <a href="#" className="blog-back-btn">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
              Back to All Articles
            </a>
            <div className="blog-article">
              <div className="blog-article-hero"><img src="/assets/images/cocoa-powder-dark.jpg" alt="Natural and dark cocoa powder comparison" loading="lazy" /></div>
              <h2>Natural vs. Dark Cocoa Powder: What Sets Them Apart</h2>
              <p>Cocoa powder comes in two main forms, and knowing the difference helps you pick the right one for your needs.</p>
              <p>Natural cocoa powder is made by pressing roasted beans without chemical treatment. It has a light brown colour and a bright, slightly acidic taste. Its pH ranges from 5.0 to 6.0, making it ideal for recipes that use baking soda as a leavener.</p>
              <p>Dark cocoa powder goes through an alkalising process that raises its pH to between 7.0 and 8.0. This creates a deeper colour, a smoother taste, and better solubility in liquids. It works well in beverages, ice cream, and products where a bold chocolate look is important.</p>
              <p>So which should you choose? Natural cocoa suits baked goods and health-focused products. Dark cocoa is best for drinks and confectionery coatings. Ansen Cocoa produces both varieties to high standards, giving buyers the flexibility to match their exact formulation needs.</p>
            </div>
            <hr className="blog-divider" />
            <h3 className="blog-related-title">More Articles</h3>
            <div className="blog-related-grid">
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-processing.jpg" alt="Cocoa processing" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>From Bean to Powder: How Cocoa Is Processed in Uganda</h3>
                  <a href="#" className="blog-read-more" data-article="article-1">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-natural.jpg" alt="Natural cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>5 Health Benefits of Natural Cocoa Powder</h3>
                  <a href="#" className="blog-read-more" data-article="article-2">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-butter.jpg" alt="Cocoa butter" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Cocoa Butter: Far More Than Just Chocolate</h3>
                  <a href="#" className="blog-read-more" data-article="article-5">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/hero-cocoa-beans.jpg" alt="Cocoa beans" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>The Rising Demand for African Processed Cocoa</h3>
                  <a href="#" className="blog-read-more" data-article="article-7">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-natural.jpg" alt="Cocoa powder for business" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Choosing the Right Cocoa Powder for Your Business</h3>
                  <a href="#" className="blog-read-more" data-article="article-10">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-butter.jpg" alt="Cocoa butter skincare" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Cocoa Butter in Skincare: Nature's Best Moisturiser</h3>
                  <a href="#" className="blog-read-more" data-article="article-12">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article 4 */}
        <div className="blog-article-view" id="article-4">
          <div className="container section-padding">
            <a href="#" className="blog-back-btn">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
              Back to All Articles
            </a>
            <div className="blog-article">
              <div className="blog-article-hero"><img src="/assets/images/cocoa-marketplace.png" alt="Ugandan cocoa quality" loading="lazy" /></div>
              <h2>Why Ugandan Cocoa Ranks Among the World's Best</h2>
              <p>Uganda may not be the first country people think of for cocoa, but it produces some of the finest beans in the world. Several factors give Ugandan cocoa its distinctive quality.</p>
              <p>The country sits on the equator, providing the steady warmth and rainfall that cocoa trees require. Volcanic soils around the Rwenzori Mountains and the Lake Victoria basin are rich in minerals that nourish the trees and deepen flavour complexity.</p>
              <p>More than 90 per cent of Uganda's cocoa is grown by smallholder farmers who cultivate their trees under shade canopies alongside bananas and other crops. This agroforestry model promotes biodiversity and produces beans with nuanced flavour profiles.</p>
              <p>Ugandan cocoa is known for its well-balanced taste, with notes of dark fruit, mild nuttiness, and low bitterness. International buyers increasingly seek out these beans for premium products. At Ansen Cocoa, we process them close to their source to preserve their origin character.</p>
            </div>
            <hr className="blog-divider" />
            <h3 className="blog-related-title">More Articles</h3>
            <div className="blog-related-grid">
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-processing.jpg" alt="Cocoa processing" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>From Bean to Powder: How Cocoa Is Processed in Uganda</h3>
                  <a href="#" className="blog-read-more" data-article="article-1">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-dark.jpg" alt="Dark cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Natural vs. Dark Cocoa Powder: What Sets Them Apart</h3>
                  <a href="#" className="blog-read-more" data-article="article-3">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-processing.jpg" alt="Fair pricing in cocoa" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>How Fair Pricing Transforms Cocoa Communities</h3>
                  <a href="#" className="blog-read-more" data-article="article-6">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/hero-cocoa-beans.jpg" alt="African processed cocoa" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>The Rising Demand for African Processed Cocoa</h3>
                  <a href="#" className="blog-read-more" data-article="article-7">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-marketplace.png" alt="Sustainability in cocoa" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Sustainability in Cocoa: What It Means for the Future</h3>
                  <a href="#" className="blog-read-more" data-article="article-9">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-marketplace.png" alt="Ugandan cocoa journey" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>The Journey of Ugandan Cocoa: From Farm to Market</h3>
                  <a href="#" className="blog-read-more" data-article="article-11">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article 5 */}
        <div className="blog-article-view" id="article-5">
          <div className="container section-padding">
            <a href="#" className="blog-back-btn">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
              Back to All Articles
            </a>
            <div className="blog-article">
              <div className="blog-article-hero"><img src="/assets/images/cocoa-butter.jpg" alt="Cocoa butter uses beyond chocolate" loading="lazy" /></div>
              <h2>Cocoa Butter: Far More Than Just Chocolate</h2>
              <p>Most people associate cocoa butter with chocolate, and for good reason. It gives chocolate its smooth texture and satisfying snap. But cocoa butter has many uses beyond the confectionery aisle.</p>
              <p>In skincare, cocoa butter is prized as a natural moisturiser. Its fatty acid profile makes it an excellent emollient that softens skin and helps reduce the appearance of scars. You will find it in lip balms, body lotions, soaps, and hair products across the world.</p>
              <p>The pharmaceutical industry uses cocoa butter as a base for suppositories and tablet coatings. Its low melting point means it liquefies at body temperature, making it useful for controlled drug delivery.</p>
              <p>In food production, cocoa butter appears in baked goods, white chocolate, and confectionery coatings. It is also valued as a cooking fat for its subtle flavour. Ansen Cocoa's cocoa butter is mechanically pressed from Ugandan beans and is suitable for food, cosmetic, and pharmaceutical applications.</p>
            </div>
            <hr className="blog-divider" />
            <h3 className="blog-related-title">More Articles</h3>
            <div className="blog-related-grid">
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-processing.jpg" alt="Cocoa processing" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>From Bean to Powder: How Cocoa Is Processed in Uganda</h3>
                  <a href="#" className="blog-read-more" data-article="article-1">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-natural.jpg" alt="Natural cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>5 Health Benefits of Natural Cocoa Powder</h3>
                  <a href="#" className="blog-read-more" data-article="article-2">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-processing.jpg" alt="Fair pricing cocoa" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>How Fair Pricing Transforms Cocoa Communities</h3>
                  <a href="#" className="blog-read-more" data-article="article-6">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-nibs.jpg" alt="Cocoa nibs" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Cocoa Nibs: The Superfood in Your Pantry</h3>
                  <a href="#" className="blog-read-more" data-article="article-8">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-natural.jpg" alt="Choosing cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Choosing the Right Cocoa Powder for Your Business</h3>
                  <a href="#" className="blog-read-more" data-article="article-10">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-butter.jpg" alt="Cocoa butter skincare" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Cocoa Butter in Skincare: Nature's Best Moisturiser</h3>
                  <a href="#" className="blog-read-more" data-article="article-12">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article 6 */}
        <div className="blog-article-view" id="article-6">
          <div className="container section-padding">
            <a href="#" className="blog-back-btn">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
              Back to All Articles
            </a>
            <div className="blog-article">
              <div className="blog-article-hero"><img src="/assets/images/cocoa-processing.jpg" alt="Fair pricing transforms cocoa communities" loading="lazy" /></div>
              <h2>How Fair Pricing Transforms Cocoa Communities</h2>
              <p>For too long, cocoa farmers across Africa have earned only a small share of the value their beans create. This keeps farming families stuck in difficult cycles. Fair pricing aims to change that reality for the better.</p>
              <p>Fair pricing means more than paying a higher rate per kilogram. It means offering transparent, predictable prices that reflect the true cost of sustainable production. It also means paying promptly so farmers can plan their finances and invest in their land.</p>
              <p>When farmers earn a fair income, the benefits spread through entire communities. Families invest in their children's education. Better nutrition improves overall health. Farmers put money back into their land by planting shade trees and improving their harvest practices.</p>
              <p>At Ansen Cocoa, we source directly from Ugandan farming communities and offer prices that reward quality. By processing locally, we keep more value within the country and create jobs in manufacturing, logistics, and quality control.</p>
            </div>
            <hr className="blog-divider" />
            <h3 className="blog-related-title">More Articles</h3>
            <div className="blog-related-grid">
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-processing.jpg" alt="Cocoa processing" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>From Bean to Powder: How Cocoa Is Processed in Uganda</h3>
                  <a href="#" className="blog-read-more" data-article="article-1">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-marketplace.png" alt="Ugandan cocoa" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Why Ugandan Cocoa Ranks Among the World's Best</h3>
                  <a href="#" className="blog-read-more" data-article="article-4">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-butter.jpg" alt="Cocoa butter" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Cocoa Butter: Far More Than Just Chocolate</h3>
                  <a href="#" className="blog-read-more" data-article="article-5">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/hero-cocoa-beans.jpg" alt="African cocoa processing" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>The Rising Demand for African Processed Cocoa</h3>
                  <a href="#" className="blog-read-more" data-article="article-7">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-marketplace.png" alt="Cocoa sustainability" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Sustainability in Cocoa: What It Means for the Future</h3>
                  <a href="#" className="blog-read-more" data-article="article-9">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-marketplace.png" alt="Ugandan cocoa journey" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>The Journey of Ugandan Cocoa: From Farm to Market</h3>
                  <a href="#" className="blog-read-more" data-article="article-11">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article 7 */}
        <div className="blog-article-view" id="article-7">
          <div className="container section-padding">
            <a href="#" className="blog-back-btn">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
              Back to All Articles
            </a>
            <div className="blog-article">
              <div className="blog-article-hero"><img src="/assets/images/hero-cocoa-beans.jpg" alt="Rising demand for African processed cocoa" loading="lazy" /></div>
              <h2>The Rising Demand for African Processed Cocoa</h2>
              <p>Africa produces over 75 per cent of the world's cocoa beans, yet less than 20 per cent of global processing takes place on the continent. That gap is beginning to close as new processors emerge across the region.</p>
              <p>When cocoa is exported as raw beans and processed elsewhere, most of the value stays outside Africa. Local processing changes this by creating skilled jobs, building technical expertise, and increasing export revenues for producing countries.</p>
              <p>Several trends are driving this shift. Buyers want traceable, origin-specific cocoa with shorter supply chains. Governments in countries like Uganda are offering incentives to attract processing investment. Consumer interest in knowing where products come from continues to grow.</p>
              <p>Ansen Cocoa is part of this transformation. Based in Wobulenzi, Uganda, we process beans into finished cocoa powder, butter, and nibs on Ugandan soil. This approach captures more value locally and reduces supply chain complexity for our buyers across the region and beyond.</p>
            </div>
            <hr className="blog-divider" />
            <h3 className="blog-related-title">More Articles</h3>
            <div className="blog-related-grid">
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-processing.jpg" alt="Cocoa processing" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>From Bean to Powder: How Cocoa Is Processed in Uganda</h3>
                  <a href="#" className="blog-read-more" data-article="article-1">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-marketplace.png" alt="Ugandan cocoa" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Why Ugandan Cocoa Ranks Among the World's Best</h3>
                  <a href="#" className="blog-read-more" data-article="article-4">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-processing.jpg" alt="Fair pricing" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>How Fair Pricing Transforms Cocoa Communities</h3>
                  <a href="#" className="blog-read-more" data-article="article-6">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-marketplace.png" alt="Sustainability" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Sustainability in Cocoa: What It Means for the Future</h3>
                  <a href="#" className="blog-read-more" data-article="article-9">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-natural.jpg" alt="Choosing cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Choosing the Right Cocoa Powder for Your Business</h3>
                  <a href="#" className="blog-read-more" data-article="article-10">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-marketplace.png" alt="Ugandan cocoa journey" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>The Journey of Ugandan Cocoa: From Farm to Market</h3>
                  <a href="#" className="blog-read-more" data-article="article-11">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article 8 */}
        <div className="blog-article-view" id="article-8">
          <div className="container section-padding">
            <a href="#" className="blog-back-btn">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
              Back to All Articles
            </a>
            <div className="blog-article">
              <div className="blog-article-hero"><img src="/assets/images/cocoa-nibs.jpg" alt="Cocoa nibs superfood" loading="lazy" /></div>
              <h2>Cocoa Nibs: The Superfood in Your Pantry</h2>
              <p>Cocoa nibs are small pieces of roasted cocoa beans. They are chocolate in its purest form, with no added sugar, milk, or extra fats. A 30-gram serving packs an impressive nutritional punch, offering more iron than spinach, more magnesium than most nuts, and plenty of dietary fibre.</p>
              <p>They are also loaded with flavonoids that support heart health. These are the same antioxidants credited with many of cocoa's well-known benefits.</p>
              <p>Cocoa nibs are versatile in the kitchen. Here are some popular uses:</p>
              <ul>
                <li>Sprinkled over yoghurt, oatmeal, or smoothie bowls</li>
                <li>Mixed into granola bars and trail mixes</li>
                <li>Folded into cookie or brownie batter</li>
                <li>Used as a garnish on desserts and coffee drinks</li>
              </ul>
              <p>Their crunchy texture and bittersweet taste make them a favourite among health-conscious consumers and chefs alike. Ansen Cocoa's nibs are roasted from premium Ugandan beans and graded for uniform size, making them suitable for both artisanal and commercial use.</p>
            </div>
            <hr className="blog-divider" />
            <h3 className="blog-related-title">More Articles</h3>
            <div className="blog-related-grid">
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-natural.jpg" alt="Natural cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>5 Health Benefits of Natural Cocoa Powder</h3>
                  <a href="#" className="blog-read-more" data-article="article-2">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-dark.jpg" alt="Dark cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Natural vs. Dark Cocoa Powder: What Sets Them Apart</h3>
                  <a href="#" className="blog-read-more" data-article="article-3">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-butter.jpg" alt="Cocoa butter" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Cocoa Butter: Far More Than Just Chocolate</h3>
                  <a href="#" className="blog-read-more" data-article="article-5">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-natural.jpg" alt="Choosing cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Choosing the Right Cocoa Powder for Your Business</h3>
                  <a href="#" className="blog-read-more" data-article="article-10">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-marketplace.png" alt="Ugandan cocoa journey" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>The Journey of Ugandan Cocoa: From Farm to Market</h3>
                  <a href="#" className="blog-read-more" data-article="article-11">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-butter.jpg" alt="Cocoa butter skincare" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Cocoa Butter in Skincare: Nature's Best Moisturiser</h3>
                  <a href="#" className="blog-read-more" data-article="article-12">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article 9 */}
        <div className="blog-article-view" id="article-9">
          <div className="container section-padding">
            <a href="#" className="blog-back-btn">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
              Back to All Articles
            </a>
            <div className="blog-article">
              <div className="blog-article-hero"><img src="/assets/images/cocoa-marketplace.png" alt="Sustainability in the cocoa industry" loading="lazy" /></div>
              <h2>Sustainability in Cocoa: What It Means for the Future</h2>
              <p>Sustainability in cocoa is about making sure that production today does not harm the resources available tomorrow. With rising global demand and growing climate pressures, sustainable practices have become more important than ever before.</p>
              <p>On the environmental side, sustainable cocoa farming preserves forest cover and promotes agroforestry. It means responsible water use, healthy soil management, and reduced reliance on chemical inputs. Cocoa thrives under shade trees, so good farming and good ecology work together naturally.</p>
              <p>Social sustainability focuses on the people behind the beans. This includes fair wages, safe working conditions, and access to education and healthcare for farming families. Empowering women in cocoa communities is also a critical part of the picture.</p>
              <p>Economic sustainability means building supply chains where every participant can thrive over the long term. At Ansen Cocoa, sustainability shapes our daily operations. We source locally, process efficiently, and work to leave Uganda's cocoa landscape in better condition for future generations.</p>
            </div>
            <hr className="blog-divider" />
            <h3 className="blog-related-title">More Articles</h3>
            <div className="blog-related-grid">
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-processing.jpg" alt="Cocoa processing" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>From Bean to Powder: How Cocoa Is Processed in Uganda</h3>
                  <a href="#" className="blog-read-more" data-article="article-1">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-dark.jpg" alt="Cocoa powder types" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Natural vs. Dark Cocoa Powder: What Sets Them Apart</h3>
                  <a href="#" className="blog-read-more" data-article="article-3">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-marketplace.png" alt="Ugandan cocoa" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Why Ugandan Cocoa Ranks Among the World's Best</h3>
                  <a href="#" className="blog-read-more" data-article="article-4">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-processing.jpg" alt="Fair pricing" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>How Fair Pricing Transforms Cocoa Communities</h3>
                  <a href="#" className="blog-read-more" data-article="article-6">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/hero-cocoa-beans.jpg" alt="African cocoa demand" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>The Rising Demand for African Processed Cocoa</h3>
                  <a href="#" className="blog-read-more" data-article="article-7">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-marketplace.png" alt="Ugandan cocoa journey" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>The Journey of Ugandan Cocoa: From Farm to Market</h3>
                  <a href="#" className="blog-read-more" data-article="article-11">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article 10 */}
        <div className="blog-article-view" id="article-10">
          <div className="container section-padding">
            <a href="#" className="blog-back-btn">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
              Back to All Articles
            </a>
            <div className="blog-article">
              <div className="blog-article-hero"><img src="/assets/images/cocoa-powder-natural.jpg" alt="Choosing cocoa powder for business" loading="lazy" /></div>
              <h2>Choosing the Right Cocoa Powder for Your Business</h2>
              <p>Selecting the right cocoa powder is an important decision for food manufacturers, bakeries, and beverage companies. The wrong choice can affect flavour, appearance, and product consistency.</p>
              <p>Here are the key factors to consider:</p>
              <ul>
                <li><strong>Fat content:</strong> Ranges from 10 to 12 per cent (low-fat) to 20 to 24 per cent (high-fat). Higher fat gives a richer taste and mouthfeel.</li>
                <li><strong>pH level:</strong> Natural cocoa (pH 5.0 to 6.0) has an acidic bite. Dark cocoa (pH 7.0 to 8.0) is milder and dissolves more easily.</li>
                <li><strong>Colour:</strong> Natural cocoa is light brown while dark cocoa ranges from reddish brown to near black.</li>
                <li><strong>Fineness:</strong> Finer powders mix more evenly into liquids and batters, which matters for beverages and industrial mixing.</li>
              </ul>
              <p>Your choice depends on your end product. Baked goods often work best with natural cocoa, while beverages and ice cream benefit from dark cocoa. Ansen Cocoa offers both types in various specifications, with samples available on request. <a href="/contact">Contact us</a> to discuss your needs.</p>
            </div>
            <hr className="blog-divider" />
            <h3 className="blog-related-title">More Articles</h3>
            <div className="blog-related-grid">
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-processing.jpg" alt="Cocoa processing" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>From Bean to Powder: How Cocoa Is Processed in Uganda</h3>
                  <a href="#" className="blog-read-more" data-article="article-1">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-natural.jpg" alt="Natural cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>5 Health Benefits of Natural Cocoa Powder</h3>
                  <a href="#" className="blog-read-more" data-article="article-2">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-dark.jpg" alt="Dark cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Natural vs. Dark Cocoa Powder: What Sets Them Apart</h3>
                  <a href="#" className="blog-read-more" data-article="article-3">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-butter.jpg" alt="Cocoa butter" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Cocoa Butter: Far More Than Just Chocolate</h3>
                  <a href="#" className="blog-read-more" data-article="article-5">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-nibs.jpg" alt="Cocoa nibs" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Cocoa Nibs: The Superfood in Your Pantry</h3>
                  <a href="#" className="blog-read-more" data-article="article-8">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-butter.jpg" alt="Cocoa butter skincare" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Cocoa Butter in Skincare: Nature's Best Moisturiser</h3>
                  <a href="#" className="blog-read-more" data-article="article-12">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article 11 */}
        <div className="blog-article-view" id="article-11">
          <div className="container section-padding">
            <a href="#" className="blog-back-btn">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
              Back to All Articles
            </a>
            <div className="blog-article">
              <div className="blog-article-hero"><img src="/assets/images/cocoa-marketplace.png" alt="Ugandan cocoa farm to market journey" loading="lazy" /></div>
              <h2>The Journey of Ugandan Cocoa: From Farm to Market</h2>
              <p>Uganda's cocoa journey starts in farming regions like Bundibugyo, Mukono, and the Rwenzori foothills. Smallholder farmers tend their trees carefully, waiting for pods to ripen before harvesting them by hand.</p>
              <p>Once harvested, the beans go through fermentation and drying. Fermentation takes five to seven days and develops the complex flavours that make Ugandan cocoa special. Sun drying on raised beds follows, reducing moisture to safe levels for storage and transport.</p>
              <p>From the farms, dried beans travel to processing centres. At Ansen Cocoa's facility in Wobulenzi, they are roasted, shelled, and transformed into finished products like cocoa powder, butter, and nibs. Quality checks happen at every stage to ensure consistency.</p>
              <p>The finished products then reach buyers across Uganda and beyond. By processing locally, we shorten the supply chain and offer fresher products at competitive prices. This model also keeps more economic value within the country and supports the communities that grow the cocoa.</p>
            </div>
            <hr className="blog-divider" />
            <h3 className="blog-related-title">More Articles</h3>
            <div className="blog-related-grid">
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-processing.jpg" alt="Cocoa processing" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>From Bean to Powder: How Cocoa Is Processed in Uganda</h3>
                  <a href="#" className="blog-read-more" data-article="article-1">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-marketplace.png" alt="Ugandan cocoa" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Why Ugandan Cocoa Ranks Among the World's Best</h3>
                  <a href="#" className="blog-read-more" data-article="article-4">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-processing.jpg" alt="Fair pricing" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>How Fair Pricing Transforms Cocoa Communities</h3>
                  <a href="#" className="blog-read-more" data-article="article-6">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/hero-cocoa-beans.jpg" alt="African processed cocoa" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>The Rising Demand for African Processed Cocoa</h3>
                  <a href="#" className="blog-read-more" data-article="article-7">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-marketplace.png" alt="Sustainability" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Sustainability in Cocoa: What It Means for the Future</h3>
                  <a href="#" className="blog-read-more" data-article="article-9">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-natural.jpg" alt="Choosing cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Choosing the Right Cocoa Powder for Your Business</h3>
                  <a href="#" className="blog-read-more" data-article="article-10">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article 12 */}
        <div className="blog-article-view" id="article-12">
          <div className="container section-padding">
            <a href="#" className="blog-back-btn">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg>
              Back to All Articles
            </a>
            <div className="blog-article">
              <div className="blog-article-hero"><img src="/assets/images/cocoa-butter.jpg" alt="Cocoa butter in skincare products" loading="lazy" /></div>
              <h2>Cocoa Butter in Skincare: Nature's Best Moisturiser</h2>
              <p>Cocoa butter has been used in skincare for centuries, and its popularity continues to grow. Rich in natural fatty acids, it is one of the most effective plant-based moisturisers available today.</p>
              <p>The butter melts at just below body temperature, which means it absorbs quickly into the skin. It forms a protective layer that locks in moisture and helps keep skin soft and smooth throughout the day.</p>
              <p>Many people use cocoa butter to reduce the appearance of stretch marks and scars. While results vary, the deep moisturising action helps improve skin elasticity over time. It is also gentle enough for sensitive skin types.</p>
              <p>You will find cocoa butter in a wide range of products:</p>
              <ul>
                <li>Body lotions and creams</li>
                <li>Lip balms</li>
                <li>Soaps and bath products</li>
                <li>Hair conditioners</li>
              </ul>
              <p>Ansen Cocoa produces pure, unrefined cocoa butter from Ugandan beans. It is suitable for cosmetic formulations and meets the quality standards expected by skincare manufacturers worldwide.</p>
            </div>
            <hr className="blog-divider" />
            <h3 className="blog-related-title">More Articles</h3>
            <div className="blog-related-grid">
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-processing.jpg" alt="Cocoa processing" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>From Bean to Powder: How Cocoa Is Processed in Uganda</h3>
                  <a href="#" className="blog-read-more" data-article="article-1">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-natural.jpg" alt="Natural cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>5 Health Benefits of Natural Cocoa Powder</h3>
                  <a href="#" className="blog-read-more" data-article="article-2">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-dark.jpg" alt="Dark cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Natural vs. Dark Cocoa Powder: What Sets Them Apart</h3>
                  <a href="#" className="blog-read-more" data-article="article-3">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-butter.jpg" alt="Cocoa butter" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Cocoa Butter: Far More Than Just Chocolate</h3>
                  <a href="#" className="blog-read-more" data-article="article-5">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-nibs.jpg" alt="Cocoa nibs" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Cocoa Nibs: The Superfood in Your Pantry</h3>
                  <a href="#" className="blog-read-more" data-article="article-8">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card-img"><img src="/assets/images/cocoa-powder-natural.jpg" alt="Choosing cocoa powder" loading="lazy" /></div>
                <div className="blog-card-body">
                  <h3>Choosing the Right Cocoa Powder for Your Business</h3>
                  <a href="#" className="blog-read-more" data-article="article-10">Read Article <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10h10M12 7l3 3-3 3" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

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
