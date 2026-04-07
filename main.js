// ═══════════════════════════════════════
//  ROUTER
// ═══════════════════════════════════════
const pages = ['home','services','casestudies','about','contact'];
let currentPage = 'home';

const pageMeta = {
  home: {
    title: 'BOLTiBAND — Performance Marketing Agency | Google Ads, Meta Ads & SEO',
    description: 'BOLTiBAND is a performance marketing agency helping businesses grow with Google Ads, Meta Ads, and SEO & Content. Real results, transparent reporting, no fluff.'
  },
  services: {
    title: 'Our Services — SEO, Meta Ads & Google Ads | BOLTiBAND',
    description: 'Explore BOLTiBAND\'s three core services — SEO & Content Writing, Meta Ads, and Google Ads. Data-driven strategies built to lower your CPL and grow your ROAS.'
  },
  casestudies: {
    title: 'Case Studies — Real Results from Real Campaigns | BOLTiBAND',
    description: 'See how BOLTiBAND helped brands cut cost per lead, triple ROAS, and rank #1 on Google. Real numbers from real campaigns across 10+ industries.'
  },
  about: {
    title: 'About BOLTiBAND — Who We Are & How We Work',
    description: 'BOLTiBAND is a performance marketing agency built on transparency, data, and long-term growth. Meet the team behind the campaigns and learn how we work.'
  },
  contact: {
    title: 'Book a Free Strategy Call | BOLTiBAND',
    description: 'Book a free 30-minute strategy call with BOLTiBAND. We\'ll review your current ads or SEO, spot what\'s not working, and give you a clear growth plan — no commitment needed.'
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
  document.querySelectorAll('.nav-lnk').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
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
    history.replaceState(null, '', '#' + page);
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
  window.addEventListener('hashchange', () => {
    const nextPage = window.location.hash.replace('#', '');
    if (nextPage && pages.includes(nextPage)) {
      goto(nextPage, false);
    }
  });
});

function toggleMenu() {
  const ham = document.getElementById('ham');
  const menu = document.getElementById('mob-menu');
  ham.classList.toggle('open');
  menu.classList.toggle('open');
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
      <div class="mr-row"><span class="mr-lbl">12-month ROI</span><div class="mr-vals"><span class="mr-before">—</span><span class="mr-arrow">→</span><span class="mr-after">22×</span></div></div>
      <div class="mr-row"><span class="mr-lbl">11-month ROI</span><div class="mr-vals"><span class="mr-before">—</span><span class="mr-arrow">→</span><span class="mr-after">17×</span></div></div>
      <div class="mr-row"><span class="mr-lbl">10-month ROI</span><div class="mr-vals"><span class="mr-before">—</span><span class="mr-arrow">→</span><span class="mr-after">14×</span></div></div>
      <div class="mr-row"><span class="mr-lbl">CPL: Dec 2025 vs Dec 2024</span><div class="mr-vals"><span class="mr-before">₹272</span><span class="mr-arrow">→</span><span class="mr-after">₹146</span></div></div>
      <div class="mr-row"><span class="mr-lbl">CPL: Mar 2026 vs Mar 2025</span><div class="mr-vals"><span class="mr-before">₹287</span><span class="mr-arrow">→</span><span class="mr-after">₹99</span></div></div>
      <div class="mr-row"><span class="mr-lbl">Store expansion</span><div class="mr-vals"><span class="mr-before">1</span><span class="mr-arrow">→</span><span class="mr-after">5</span></div></div>
    `,
    testi: `<p class="cs-testi-q">We expanded from one workshop to five stores while lowering lead costs by two-thirds. The year-long strategy gave us consistent growth without relying on discount-driven traffic.</p><div style="font-size:11.5px;color:var(--td)">— Founder · Laundry brand</div>`
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
      <div class="mr-row"><span class="mr-lbl">Total leads (Month 1)</span><div class="mr-vals"><span class="mr-before">—</span><span class="mr-arrow">→</span><span class="mr-after">335</span></div></div>
      <div class="mr-row"><span class="mr-lbl">Qualified leads (Month 1)</span><div class="mr-vals"><span class="mr-before">—</span><span class="mr-arrow">→</span><span class="mr-after">61</span></div></div>
      <div class="mr-row"><span class="mr-lbl">Qualified lead rate</span><div class="mr-vals"><span class="mr-before">16%</span><span class="mr-arrow">→</span><span class="mr-after">18%</span></div></div>
      <div class="mr-row"><span class="mr-lbl">Cost per lead</span><div class="mr-vals"><span class="mr-before">₹100</span><span class="mr-arrow">→</span><span class="mr-after">₹31</span></div></div>
    `,
    testi: `<p class="cs-testi-q">Moving lead tracking to a CRM and testing multiple video narratives helped us build a high-quality pipeline in a new market with very low CPL.</p><div style="font-size:11.5px;color:var(--td)">— Growth lead · International nurse training brand</div>`
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