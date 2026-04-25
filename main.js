// ═══════════════════════════════════════
//  ROUTER
// ═══════════════════════════════════════
const pages = ['home','services','seo','meta-ads','google-ads','cro','analytics','casestudies','about','contact'];
let currentPage = 'home';

// ═══════════════════════════════════════
//  GROWTH SYSTEM SERVICE SWITCHER
// ═══════════════════════════════════════

const serviceContent = {
  organic: {
    title: 'Organic Growth (SEO & Content)',
    outcome: 'A discoverable, authoritative brand presence in search and inbound demand that compounds over time.',
    objective: 'Establish visibility across high-intent and high-relevance search queries, build topical authority within the category, and structure the website to convert demand into qualified leads and revenue.',
    methodologies: ['Technical SEO', 'Keyword Strategy', 'Internal Linking', 'CRO', 'Content Systems', 'Backlinks', 'Digital PR'],
    results: [
      { number: '2–5x', label: 'Growth in Organic Traffic Over 6–12 Months' },
      { number: '30–70%', label: 'Increase in Qualified Inbound Leads from Organic Channels' },
      { number: 'Top 3', label: 'Rankings for a growing set of high-intent keywords' },
      { number: 'Gradual Reduction', label: 'In Dependency on Paid Acquisition' }
    ]
  },
  'paid-social': {
    title: 'Paid Social Growth (Meta Ads)',
    outcome: 'Scalable customer acquisition supported by sustained brand visibility and increased consideration.',
    objective: 'Create a paid social ecosystem that not only generates qualified demand, but also strengthens brand visibility through repeated, relevant audience engagement.',
    methodologies: ['Meta Ads', 'Audience Segmentation', 'Audience Research', 'Creative Strategy' , 'Performance Testing Frameworks' , 'Funnel-Based Campaign Structuring' , 'Retargeting Systems', 'Conversion Tracking (Pixel & CAPI)', 'Creative Iteration Cycles', 'Performance Analytics'],
    results: [
      { number: '20-40%', label: 'Reduction in Cost Per Acquisition Over 8–12 Weeks' },
      { number: '2-3x', label: 'Increase In Qualified lead volume with scaling' },
      { number: 'Improve CTR', label: 'through creative optimisation' },
      { number: 'Stronger', label: 'retargeting performance and repeat engagement' }
    ]
  },
  search: {
    title: 'Search Demand Capture (Google Ads)',
    outcome: 'Capture profitable revenue, 4X ROAS and above for most businesses, from high-intent prospects at the moment of decision.',
    objective: 'Position the business in front of active buyers, align search campaigns with commercial intent, and improve conversion efficiency across every stage of the customer journey.',
    methodologies: ['Google Search Ads', 'Performance Max', 'Shopping campaigns', 'keyword clustering', 'bid strategy refinement', 'feed optimisation','audience layering', 'remarketing systems', 'landing page alignment', 'conversion tracking'],
    results: [
      { number: '3–5x', label: 'ROAS for optimised campaigns' },
      { number: '15–35%', label: 'Improvement in conversion rates from search traffic' },
      { number: 'Higher', label: 'share of impressions on high-intent keywords' },
      { number: 'Consistent', label: 'revenue contribution from bottom-funnel demand' }
    ]
  },
  cro: {
    title: 'Conversion Optimisation',
    outcome: 'Higher revenue efficiency from existing traffic and marketing investment.',
    objective: 'Improve how visitors move through the website so more of the generated demand converts into measurable business outcomes.',
    methodologies: ['User journey analysis', 'Landing page optimisation', 'A/B testing', 'Heatmap analysis', 'Funnel analysis', 'UX refinement', 'CTA optimisation', 'Form optimisation', 'Analytics tracking'],
    results: [
      { number: '15–40%', label: 'increase in conversion rates' },
      { number: '10-20%', label: 'improvement in average order value (AOV) ' },
      { number: 'Reduced', label: 'drop-offs across key funnel stages' },
      { number: 'Better ', label: 'performance from existing traffic without increasing spend' }
    ]
  },
  analytics: {
    title: 'Analytics & Reporting',
    outcome: 'Understand what drives growth and where investment performs best.',
    objective: 'Develop a robust measurement framework that brings clarity to performance and guides strategic decision-making.',
    methodologies: ['GA4', 'Google Tag Manager', 'server-side tracking', 'conversion attribution', 'dashboard reporting', 'event tracking', 'cross-channel attribution models', 'performance reporting systems'],
    results: [
      { number: '10-20%', label: 'improvement in budget efficiency' },
      { number: 'Clear', label: 'visibility into high-performing channels and campaigns' },
      { number: 'Faster', label: 'data-backed decision-making cycles' },
      { number: 'Reduction', label: 'in wasted ad spend and misattribution' }
    ]
  }
};

function switchService(card, serviceId) {
  // Update active card
  document.querySelectorAll('.gs-pillar-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');

  // Get content
  const content = serviceContent[serviceId];
  
  // Update panel left
  document.querySelector('.gs-service-title').textContent = content.title;
  document.querySelector('.gs-outcome-text').textContent = content.outcome;

  // Update panel right
  document.querySelector('.gs-objective').innerHTML = `<p>${content.objective}</p>`;
  
  // Update methodologies
  const methodsContainer = document.querySelector('.gs-methodologies');
  methodsContainer.innerHTML = content.methodologies
    .map(method => `<span class="gs-method-tag">${method}</span>`)
    .join('');

  // Update results
  const resultsContainer = document.querySelector('.gs-results');
  resultsContainer.innerHTML = content.results
    .map(result => `
      <div class="gs-result-card">
        <div class="gs-result-number">${result.number}</div>
        <div class="gs-result-label">${result.label}</div>
      </div>
    `)
    .join('');
}

// ═══════════════════════════════════════
//  SCROLL ANIMATIONS
// ═══════════════════════════════════════

/**
 * Initialize scroll reveal animations using Intersection Observer
 * This provides smooth fade-in and slide animations for elements as they enter the viewport
 */
function initScrollAnimations() {
  // Check if IntersectionObserver is supported
  if (!('IntersectionObserver' in window)) {
    console.warn('IntersectionObserver not supported. Scroll animations disabled.');
    return;
  }

  // Configuration for Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px', // Trigger when element is 80px from bottom of viewport
    threshold: 0 // Trigger as soon as any pixel enters viewport
  };

  // Create observer callback
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add revealed class to trigger animation
        entry.target.classList.add('revealed');
        // Optional: unobserve after animation to improve performance
        observer.unobserve(entry.target);
      }
    });
  };

  // Create observer instance
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe all scroll-reveal elements
  document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-stagger').forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Add smooth scroll behavior to navigation links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#' + currentPage) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

/**
 * Initialize button click animations
 */
function initButtonAnimations() {
  const buttons = document.querySelectorAll('button, .btn-green, .btn-dark, .btn-ghost');
  buttons.forEach((button) => {
    button.addEventListener('mousedown', function() {
      this.style.transform = 'scale(0.98)';
    });
    button.addEventListener('mouseup', function() {
      this.style.transform = '';
    });
    button.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
}

/**
 * Initialize all animations on page load
 */
function initAllAnimations() {
  initScrollAnimations();
  initSmoothScroll();
  initButtonAnimations();
}

// Call initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllAnimations);
} else {
  initAllAnimations();
}

const pageMeta = {
  home: {
    title: 'BOLTiBAND - Performance Marketing Agency | Google Ads, Meta Ads & SEO',
    description: 'BOLTiBAND is a performance marketing agency helping businesses grow with Google Ads, Meta Ads, and SEO & Content. Real results, transparent reporting, no fluff.'
  },
  services: {
    title: 'Our Services - SEO, Meta Ads & Google Ads | BOLTiBAND',
    description: 'Explore BOLTiBAND\'s three core services - SEO & Content Writing, Meta Ads, and Google Ads. Data-driven strategies built to lower your CPL and grow your ROAS.'
  },
  casestudies: {
    title: 'Case Studies - Real Results from Real Campaigns | BOLTiBAND',
    description: 'See how BOLTiBAND helped brands cut cost per lead, triple ROAS, and rank #1 on Google. Real numbers from real campaigns across 10+ industries.'
  },
  about: {
    title: 'About BOLTiBAND - Who We Are & How We Work',
    description: 'BOLTiBAND is a performance marketing agency built on transparency, data, and long-term growth. Meet the team behind the campaigns and learn how we work.'
  },
  contact: {
    title: 'Book a Free Strategy Call | BOLTiBAND',
    description: 'Book a free 30-minute strategy call with BOLTiBAND. We\'ll review your current ads or SEO, spot what\'s not working, and give you a clear growth plan - no commitment needed.'
  },
  seo: {
    title: 'SEO & Content Writing — Rank Higher & Stay There | BOLTiBAND',
    description: 'BOLTiBAND SEO service helps you rank on page one and convert organic visitors into customers. Technical SEO, content writing, keyword strategy, and local SEO.'
  },
  'meta-ads': {
    title: 'Meta Ads — Facebook & Instagram Advertising | BOLTiBAND',
    description: 'BOLTiBAND runs full-funnel Meta Ads with CAPI setup, audience strategy, and creative briefs. We reduced CPL by 65%+ for clients across education, healthcare, and D2C.'
  },
  'google-ads': {
    title: 'Google Ads Management — Lower CPL & Higher ROI | BOLTiBAND',
    description: 'BOLTiBAND manages Google Search, Display, PMax, and Shopping campaigns. We cut CPL by 60%+ and delivered 22x ROI for a Delhi NCR local services brand.'
  },
  cro: {
    title: 'Conversion Rate Optimisation — More Revenue, Same Traffic | BOLTiBAND',
    description: 'BOLTiBAND CRO service helps you convert more of your existing traffic with A/B testing, heatmap analysis, funnel optimisation, and UX refinement. Avg. 15–40% conversion lift.'
  },
  analytics: {
    title: 'Analytics & Reporting — Clean Data, Clear Decisions | BOLTiBAND',
    description: 'BOLTiBAND builds GA4, Google Tag Manager, and Looker Studio setups that give you accurate cross-channel data and monthly reports that drive real decisions.'
  }
};

function goto(page, updateHash = true) {
  pages.forEach(p => {
    const el = document.getElementById('page-' + p);
    if (el) el.style.display = 'none';
  });
  const target = document.getElementById('page-' + page);
  if (target) {
    target.style.display = 'block';
    target.classList.remove('page-enter');
    void target.offsetWidth;
    target.classList.add('page-enter');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  currentPage = page;
  // Update nav active states
  const navPage = ['seo','google-ads','meta-ads','cro','analytics'].includes(page) ? 'services' : page;
  document.querySelectorAll('.nav-lnk').forEach(el => {
    el.classList.toggle('active', el.dataset.page === navPage);
  });
  document.querySelectorAll('.mob-lnk').forEach(el => {
    el.classList.toggle('active', el.dataset.mob === page);
  });
  // Update meta title and description
  if (pageMeta[page]) {
    document.title = pageMeta[page].title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageMeta[page].description);
    }
  }
  // Reset CS view when navigating to case studies
  if (page === 'casestudies') closeCS();

  if (updateHash) {
    if (window.location.hash !== '#' + page) {
      history.pushState(null, '', '#' + page);
    }
  }
}

function initPageFromHash() {
  const hashPage = window.location.hash.replace('#', '');
  if (hashPage && pages.includes(hashPage)) {
    goto(hashPage, false);
  } else {
    goto('home', false);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initPageFromHash();
  window.addEventListener('popstate', (e) => {
    const page = (e.state && e.state.page) ? e.state.page : window.location.hash.replace('#', '');
    if (page && pages.includes(page)) goto(page, false);
    else goto('home', false);
  });
});

function toggleMenu() {
  const ham = document.getElementById('ham');
  const menu = document.getElementById('mob-menu');
  ham.classList.toggle('open');
  menu.classList.toggle('open');
}

function toggleFaq(el) {
  const isOpen = el.classList.contains('sp-faq-open');
  document.querySelectorAll('.sp-faq-item').forEach(function(f) {
    f.classList.remove('sp-faq-open');
    f.querySelector('.sp-faq-icon').textContent = '+';
  });
  if (!isOpen) {
    el.classList.add('sp-faq-open');
    el.querySelector('.sp-faq-icon').textContent = '−';
  }
}

// ═══════════════════════════════════════
//  CASE STUDY DATA
// ═══════════════════════════════════════
const csData = {
  cs1: {
    metric: '65%', title: 'From High Costs to High Returns: 65% Lower CPL and 22× ROI',
    tags: '<span class="atag">Laundry</span><span class="atag">Google Ads</span><span class="atag">SEO</span>',
    story: `
      <div class="cs-story-section"><h3>The challenge</h3><p>The laundry brand launched in Delhi-NCR with one workshop and needed consistent lead flow across digital channels. After a reliable lead volume was established, the focus shifted to improving lead quality, qualification rate, and reducing CPL.</p></div>
      <div class="cs-story-section"><h3>Our strategy</h3><p>We created a unified 12-month marketing plan aligned with seasonality, demand cycles, and store expansion. Google Ads, blog-led SEO, and local conversion messaging were used together to build a consistent brand presence across all Delhi NCR locations.</p></div>
      <div class="cs-story-section"><h3>Execution</h3><p>Instead of month-to-month campaigns, we deployed a full-year strategy that balanced lead generation with customer retention. Campaigns emphasised hygiene, convenience, and repeat orders, while SEO content supported search visibility for laundry, dry cleaning, and local pickup services.</p></div>
      <div class="cs-story-section"><h3>Campaign screenshots</h3>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:16px">
          <img src="laundry-screenshot-1.png" alt="Laundry campaign performance screenshot 1" style="width:100%;border-radius:14px;box-shadow:0 18px 50px rgba(0,0,0,.12)">
          <img src="laundry-screenshot-2.png" alt="Laundry campaign performance screenshot 2" style="width:100%;border-radius:14px;box-shadow:0 18px 50px rgba(0,0,0,.12)">
          <img src="laundry-screenshot-3.png" alt="Laundry campaign performance screenshot 3" style="width:100%;border-radius:14px;box-shadow:0 18px 50px rgba(0,0,0,.12)">
          <img src="laundry-screenshot-4.png" alt="Laundry campaign performance screenshot 4" style="width:100%;border-radius:14px;box-shadow:0 18px 50px rgba(0,0,0,.12)">
        </div>
      </div>
      <div class="cs-story-section"><h3>Services used</h3><p>Google Ads · Blog and SEO · Pivot table analysis</p></div>
    `,
    results: `
      <div class="mr-row"><span class="mr-lbl">12-month ROI</span><div class="mr-vals"><span class="mr-before">-</span><span class="mr-arrow">→</span><span class="mr-after">22×</span></div></div>
      <div class="mr-row"><span class="mr-lbl">11-month ROI</span><div class="mr-vals"><span class="mr-before">-</span><span class="mr-arrow">→</span><span class="mr-after">17×</span></div></div>
      <div class="mr-row"><span class="mr-lbl">10-month ROI</span><div class="mr-vals"><span class="mr-before">-</span><span class="mr-arrow">→</span><span class="mr-after">14×</span></div></div>
      <div class="mr-row"><span class="mr-lbl">CPL: Dec 2025 vs Dec 2024</span><div class="mr-vals"><span class="mr-before">₹272</span><span class="mr-arrow">→</span><span class="mr-after">₹146</span></div></div>
      <div class="mr-row"><span class="mr-lbl">CPL: Mar 2026 vs Mar 2025</span><div class="mr-vals"><span class="mr-before">₹287</span><span class="mr-arrow">→</span><span class="mr-after">₹99</span></div></div>
      <div class="mr-row"><span class="mr-lbl">Store expansion</span><div class="mr-vals"><span class="mr-before">1</span><span class="mr-arrow">→</span><span class="mr-after">5</span></div></div>
    `,
    testi: `<p class="cs-testi-q">We expanded from one workshop to five stores while lowering lead costs by two-thirds. The year-long strategy gave us consistent growth without relying on discount-driven traffic.</p><div style="font-size:11.5px;color:var(--td)">- Founder · Laundry brand</div>`
  },
  cs2: {
    metric: '₹31', title: 'Qualified leads at ₹31 CPL',
    tags: '<span class="atag">Education</span><span class="atag">Google Ads</span><span class="atag">Facebook Ads</span>',
    story: `
      <div class="cs-story-section"><h3>The challenge</h3><p>A new category for nurses moving to Germany needed its first strong applicant cohort. With limited benchmarks and a long decision cycle, the focus was on lead quality, experimentation, and building a pipeline from scratch.</p></div>
      <div class="cs-story-section"><h3>Our strategy</h3><p>We launched multi-channel demand generation across Google Ads and Facebook Ads, while moving lead tracking from Excel to a CRM. This enabled better audience pruning, retargeting segments, and measurement of high-intent leads.</p></div>
      <div class="cs-story-section"><h3>Execution</h3><p>Multiple video narratives addressed separate pain points and aspirations, while campaign experiments tested location, gender, instant forms, website conversions, and Conversion API integration. The goal was to optimise for qualified conversions over short-term ROI.</p></div>
      <div class="cs-story-section"><h3>Services</h3><p>Google Ads · Facebook Ads · Reporting and analysis</p></div>
    `,
    results: `
      <div class="mr-row"><span class="mr-lbl">Total leads (Month 1)</span><div class="mr-vals"><span class="mr-before">-</span><span class="mr-arrow">→</span><span class="mr-after">335</span></div></div>
      <div class="mr-row"><span class="mr-lbl">Qualified leads (Month 1)</span><div class="mr-vals"><span class="mr-before">-</span><span class="mr-arrow">→</span><span class="mr-after">61</span></div></div>
      <div class="mr-row"><span class="mr-lbl">Qualified lead rate</span><div class="mr-vals"><span class="mr-before">16%</span><span class="mr-arrow">→</span><span class="mr-after">18%</span></div></div>
      <div class="mr-row"><span class="mr-lbl">Cost per lead</span><div class="mr-vals"><span class="mr-before">₹100</span><span class="mr-arrow">→</span><span class="mr-after">₹31</span></div></div>
    `,
    testi: `<p class="cs-testi-q">Moving lead tracking to a CRM and testing multiple video narratives helped us build a high-quality pipeline in a new market with very low CPL.</p><div style="font-size:11.5px;color:var(--td)">- Growth lead · International nurse training brand</div>`
  },
  cs3: {
    metric: '9.5X', title: '9.5X ROAS For an Ed-Tech Brand',
    tags: '<span class="atag">Education</span><span class="atag">Google Ads</span><span class="atag">Facebook Ads</span>',
    story: `
      <div class="cs-story-section"><h3>Overview</h3><p>Shankara IAS Academy offers coaching programmes for UPSC, TNPSC and Banking exams. They are a well-known coaching centre in Tamil Nadu. In Coimbatore, they opened their first franchise. Although Shankara was famous, they wanted to spread the word about their Coimbatore franchise and get more students to enrol.</p></div>
      <div class="cs-story-section"><h3>Objective</h3><p>The objective was to generate ₹5,00,000 in conversions to sustain the new branch. Since the business offers high-ticket, long-term courses, even 2 conversions were enough to reach breakeven, covering both ad spend and agency costs. However, the challenge lay in intense competition and a long decision-making (sales) cycle.</p></div>
      <div class="cs-story-section"><h3>Services And Approach</h3><p>Google My Business Ads | Facebook Ads<br><br>Call, Lead and WhatsApp Campaigns<br>For each course, there were 3 campaigns. For calls, leads and Whatsapp messages. This distribution kept a balance between quality and quantity of leads.<br><br>Google Smart Campaigns<br>After a week, we started noticing a pattern. Once people saw our Facebook ads, they searched for us on Google for more information. To capitalise on this, ranking number 1 on Google became an urgent requirement. But we didn't have a website. So, We started paid ad campaigns on Google My Business. Our well-optimised Google My Business listing started ranking at the top and generating phone call leads.</p></div>
    `,
    results: `
      <div class="mr-row"><span class="mr-lbl">Total Leads Generated</span><div class="mr-vals"><span class="mr-before">-</span><span class="mr-arrow">→</span><span class="mr-after">470</span></div></div>
      <div class="mr-row"><span class="mr-lbl">Cost Per Lead (CPL)</span><div class="mr-vals"><span class="mr-before">-</span><span class="mr-arrow">→</span><span class="mr-after">₹134</span></div></div>
      <div class="mr-row"><span class="mr-lbl">Qualified Leads</span><div class="mr-vals"><span class="mr-before">-</span><span class="mr-arrow">→</span><span class="mr-after">376</span></div></div>
      <div class="mr-row"><span class="mr-lbl">Assuming a conservative 1% conversion rate, approximately 3 leads were converted</span><div class="mr-vals"><span class="mr-before">-</span><span class="mr-arrow">→</span><span class="mr-after">3</span></div></div>
      <div class="mr-row"><span class="mr-lbl">Average Ticket Size</span><div class="mr-vals"><span class="mr-before">-</span><span class="mr-arrow">→</span><span class="mr-after">₹2,00,000</span></div></div>
      <div class="mr-row"><span class="mr-lbl">Total Ad Spend</span><div class="mr-vals"><span class="mr-before">-</span><span class="mr-arrow">→</span><span class="mr-after">₹63,435</span></div></div>
      <div class="mr-row"><span class="mr-lbl">Total Conversion Value</span><div class="mr-vals"><span class="mr-before">-</span><span class="mr-arrow">→</span><span class="mr-after">₹6,00,000</span></div></div>
      <div class="mr-row"><span class="mr-lbl">ROAS</span><div class="mr-vals"><span class="mr-before">-</span><span class="mr-arrow">→</span><span class="mr-after">9.5X</span></div></div>
    `,
    testi: `<p class="cs-testi-q">The targeted campaigns helped us establish our Coimbatore franchise successfully, generating high-quality leads and achieving excellent ROAS despite the competitive market.</p><div style="font-size:11.5px;color:var(--td)">- Founder · Shankara IAS Academy</div>`
  }
};

// ═══════════════════════════════════════
//  CASE STUDY FILTER & OPEN/CLOSE
// ═══════════════════════════════════════
function filterCS(tag, el) {
  document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.cs-card').forEach(card => {
    if (tag === 'all') card.style.display = '';
    else {
      const tags = card.dataset.tags || '';
      card.style.display = tags.includes(tag) ? '' : 'none';
    }
  });
}

function openCS(id) {
  const d = csData[id];
  if (!d) return;
  document.getElementById('cs-detail-tags').innerHTML = d.tags;
  document.getElementById('cs-detail-metric').innerHTML = d.metric;
  document.getElementById('cs-detail-title').textContent = d.title;
  document.getElementById('cs-detail-story').innerHTML = d.story;
  document.getElementById('cs-detail-results').innerHTML = d.results;
  document.getElementById('cs-detail-testi').innerHTML = `<p style="font-size:13px;color:var(--tm);line-height:1.7;font-style:italic;margin-bottom:10px">${d.testi}</p>`;
  document.getElementById('cs-grid').closest('section').style.display = 'none';
  document.getElementById('cs-list-view').style.display = 'none';
  document.getElementById('cs-detail').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeCS() {
  const sec = document.getElementById('cs-grid');
  if (sec) sec.closest('section').style.display = '';
  document.getElementById('cs-list-view').style.display = '';
  document.getElementById('cs-detail').style.display = 'none';
}

// ═══════════════════════════════════════
//  FORM SUBMIT
// ═══════════════════════════════════════
const SPREADSHEET_URL = 'https://script.google.com/macros/s/AKfycbwxUTK_ZHcs6_csSjcMExECxi46I7ecH0_w2pTRWtjwJZdoeVa-8efeQH7EstCFVOYsOw/exec';

function submitForm() {
  const btn = document.querySelector('.form-submit');
  const countrySelect = document.getElementById('country-code');
  const phoneInput = document.getElementById('phone-number');
  const phoneValue = phoneInput.value.trim();
  const expectedLen = parseInt(countrySelect.selectedOptions[0].getAttribute('data-length'), 10);

  if (!/^[0-9]+$/.test(phoneValue) || phoneValue.length !== expectedLen) {
    alert('Please enter a valid phone number with ' + expectedLen + ' digits for ' + countrySelect.selectedOptions[0].text + '.');
    phoneInput.focus();
    return;
  }

  if (!SPREADSHEET_URL || SPREADSHEET_URL === 'https://script.google.com/macros/library/d/14f6D8ug4AxL6ScDDNp2HXh2yTWhowqBslT9Fr4jJ-705j6xCJ_u-mmx9/8') {
    alert('Please configure the Google Apps Script URL in main.js before submitting the form.');
    btn.textContent = 'Error: URL not configured';
    btn.style.opacity = '1';
    return;
  }

  const form = document.forms['contact-form'];
  const formDataObj = new FormData(form);
  formDataObj.set('phone', countrySelect.value + ' ' + phoneValue);
  const urlEncodedData = new URLSearchParams(formDataObj);

  btn.textContent = 'Sending...';
  btn.style.opacity = '0.7';

  fetch(SPREADSHEET_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: urlEncodedData.toString()
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    if (data.success || data.result === 'success') {
      btn.textContent = '✓ Request Sent! We\'ll be in touch within 2 hours.';
      btn.style.background = '#22c55e';
      btn.style.opacity = '1';

      // Reset all fields after successful send
      document.forms['contact-form'].reset();
      countrySelect.selectedIndex = 0;
      countrySelect.dispatchEvent(new Event('change'));
    } else {
      throw new Error('Submission failed: ' + JSON.stringify(data));
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error sending request: ' + error.message + '. Please try again or check the console for details.');
    btn.textContent = 'Error sending request. Please try again.';
    btn.style.opacity = '1';
  });
}

// ═══════════════════════════════════════
//  PHONE NUMBER VALIDATION
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
  const countrySelect = document.getElementById('country-code');
  const phoneInput = document.getElementById('phone-number');

  function updatePhonePlaceholder() {
    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    const code = selectedOption.value;
    const length = selectedOption.getAttribute('data-length');
    phoneInput.placeholder = code + " " + "9876543210".substring(0, length);
    phoneInput.maxLength = length;
  }

  countrySelect.addEventListener('change', updatePhonePlaceholder);

  phoneInput.addEventListener('input', function(e) {
    // Remove any non-digit characters
    let value = e.target.value.replace(/\D/g, '');
    // Limit to max length
    const maxLength = parseInt(phoneInput.maxLength);
    if (value.length > maxLength) {
      value = value.substring(0, maxLength);
    }
    e.target.value = value;
  });

  // Initialize on load
  updatePhonePlaceholder();

  // Form submit handler
  const contactForm = document.forms['contact-form'];
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    submitForm();
  });
});

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function updateStarFills(stars, currentValue) {
  const maxRating = 5;
  const activeValue = Math.min(currentValue, maxRating);
  stars.forEach((star, index) => {
    const fill = Math.max(0, Math.min(activeValue - index, 1)) * 100;
    const fillElement = star.querySelector('.star-fill');
    if (fillElement) {
      fillElement.style.width = `${fill}%`;
    }
    if (fill > 0) {
      star.classList.add('filled');
    }
  });
}

function animateStat(stat) {
  const valueEl = stat.querySelector('.stat-value');
  const fillBar = stat.querySelector('.stat-fill');
  const stars = stat.querySelectorAll('.star');
  const target = parseFloat(stat.dataset.target) || 0;
  const decimals = parseInt(stat.dataset.decimals || '0', 10);
  const fillPercent = parseFloat(stat.dataset.fill || '100');
  const duration = 2000;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);
    const currentValue = target * eased;

    if (valueEl) {
      const displayValue = decimals > 0 ? currentValue.toFixed(decimals) : Math.round(currentValue);
      valueEl.textContent = displayValue;
    }

    if (fillBar) {
      fillBar.style.width = `${fillPercent * eased}%`;
    }

    if (stars.length) {
      updateStarFills(stars, currentValue);
    }

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

function initStatsSection() {
  const statsSection = document.getElementById('statsSection');
  if (!statsSection) return;
  const stats = Array.from(statsSection.querySelectorAll('.stat'));
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stats.forEach(stat => animateStat(stat));
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25, rootMargin: '0px 0px -120px 0px' });
  observer.observe(statsSection);
}

function initTimelineAnimation() {
  const timelineContainer = document.getElementById('processTimeline');
  if (!timelineContainer) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger timeline animations
        const timelineLine = timelineContainer.querySelector('.timeline-line');
        const stepCards = timelineContainer.querySelectorAll('.step-card');

        // Start line drawing animation
        if (timelineLine) {
          timelineLine.style.animationPlayState = 'running';
        }

        // Start step card animations
        stepCards.forEach((card, index) => {
          setTimeout(() => {
            card.style.animationPlayState = 'running';
          }, index * 200);
        });

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3, rootMargin: '0px 0px -100px 0px' });

  observer.observe(timelineContainer);
}

function initScrollReveal() {
  const revealTargets = Array.from(document.querySelectorAll(
    'section, .svc-card, .step-card, .stat, .cs-card, .tcard, .team-card, .val-card, .mr-row, .cta-box, .book-step, .cs-story-section'
  ));
  if (!revealTargets.length) return;

  revealTargets.forEach((el, index) => {
    el.classList.add('reveal');
    const delay = (index % 6) * 80;
    el.style.transitionDelay = `${delay}ms`;
  });

  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -120px 0px' });

  revealTargets.forEach(el => revealObserver.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initStatsSection();
  initTimelineAnimation();
  initScrollReveal();
});