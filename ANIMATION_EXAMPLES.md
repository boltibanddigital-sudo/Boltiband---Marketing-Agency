# Animation Implementation Examples

Quick copy-paste examples for adding animations to your Boltiband website.

---

## Example 1: Animate Service Cards Grid

**Current HTML:**
```html
<div class="svc-grid">
  <div class="svc-card">...</div>
  <div class="svc-card">...</div>
  <div class="svc-card">...</div>
</div>
```

**With Animations:**
```html
<div class="svc-grid scroll-reveal-stagger">
  <div class="svc-card">...</div>
  <div class="svc-card">...</div>
  <div class="svc-card">...</div>
</div>
```

**Result:** Cards animate in sequentially with staggered delays as the user scrolls to that section.

---

## Example 2: Animate Section Headings

**Current HTML:**
```html
<div class="sh">
  <div class="stag">What we do</div>
  <h2 class="stitle">Three services. One growth goal.</h2>
  <p class="ssub">Every service is built...</p>
</div>
```

**With Animations:**
```html
<div class="sh scroll-reveal">
  <div class="stag">What we do</div>
  <h2 class="stitle">Three services. One growth goal.</h2>
  <p class="ssub">Every service is built...</p>
</div>
```

**Result:** Entire section header fades in and slides up when it comes into view.

---

## Example 3: Animate Case Study Cards

**Current HTML:**
```html
<div class="cs-grid">
  <div class="cs-card featured">...</div>
  <div class="cs-card">...</div>
  <div class="cs-card featured">...</div>
</div>
```

**With Animations:**
```html
<div class="cs-grid scroll-reveal-stagger">
  <div class="cs-card featured scroll-reveal">...</div>
  <div class="cs-card scroll-reveal">...</div>
  <div class="cs-card featured scroll-reveal">...</div>
</div>
```

**Result:** Each case study card fades in with a slight delay between them.

---

## Example 4: Animate Images with Scale

**Current HTML:**
```html
<section class="sec">
  <div class="svc-detail">
    <div>
      <h2>SEO & Content Writing</h2>
      <p>Our service description...</p>
    </div>
    <div class="svc-detail-right">
      <h3>Typical results</h3>
    </div>
  </div>
</section>
```

**With Animations:**
```html
<section class="sec">
  <div class="svc-detail scroll-reveal">
    <div>
      <h2>SEO & Content Writing</h2>
      <p>Our service description...</p>
    </div>
    <div class="svc-detail-right scroll-reveal-scale">
      <h3>Typical results</h3>
    </div>
  </div>
</section>
```

**Result:** Left content slides in, right side scales up as you scroll to that section.

---

## Example 5: Animate Statistics Section

**Current HTML:**
```html
<div class="stats-bar">
  <div class="stat">...</div>
  <div class="stat">...</div>
  <div class="stat">...</div>
  <div class="stat stat-rating">...</div>
</div>
```

**With Animations:**
```html
<div class="stats-bar scroll-reveal-stagger">
  <div class="stat">...</div>
  <div class="stat">...</div>
  <div class="stat">...</div>
  <div class="stat stat-rating">...</div>
</div>
```

**Result:** Stats animate in sequentially from left to right.

---

## Example 6: Animate Team Cards

**Current HTML:**
```html
<div class="team-grid">
  <div class="team-card">...</div>
  <div class="team-card">...</div>
  <div class="team-card">...</div>
</div>
```

**With Animations:**
```html
<div class="team-grid scroll-reveal-stagger">
  <div class="team-card scroll-reveal">...</div>
  <div class="team-card scroll-reveal">...</div>
  <div class="team-card scroll-reveal">...</div>
</div>
```

**Result:** Team member cards fade in with staggered timing.

---

## Example 7: Animate Process Steps

**Current HTML:**
```html
<div class="sp-process-grid">
  <div class="sp-proc-step">
    <div class="sp-proc-num">01</div>
    <!-- ... -->
  </div>
  <div class="sp-proc-step">
    <div class="sp-proc-num">02</div>
    <!-- ... -->
  </div>
</div>
```

**With Animations:**
```html
<div class="sp-process-grid scroll-reveal-stagger">
  <div class="sp-proc-step">
    <div class="sp-proc-num">01</div>
    <!-- ... -->
  </div>
  <div class="sp-proc-step">
    <div class="sp-proc-num">02</div>
    <!-- ... -->
  </div>
</div>
```

**Result:** Process steps appear sequentially as user scrolls.

---

## Example 8: Alternating Content Layout

**Current HTML:**
```html
<div class="svc-detail-inner">
  <div>
    <h2>SEO & Content Writing</h2>
    <p>Description...</p>
  </div>
  <div class="svc-detail-right">
    <h3>Typical results</h3>
  </div>
</div>
```

**With Animations (Alternating):**
```html
<div class="svc-detail-inner scroll-reveal">
  <div class="scroll-reveal-left">
    <h2>SEO & Content Writing</h2>
    <p>Description...</p>
  </div>
  <div class="svc-detail-right scroll-reveal-right">
    <h3>Typical results</h3>
  </div>
</div>
```

**Result:** Left content slides from left, right content slides from right simultaneously.

---

## Example 9: Animate Form Sections

**Current HTML:**
```html
<div class="form-group">
  <label>Your Name</label>
  <input type="text" placeholder="e.g., John Doe">
</div>
```

**With Animations:**
```html
<div class="form-group scroll-reveal">
  <label>Your Name</label>
  <input type="text" placeholder="e.g., John Doe">
</div>
```

**Result:** Form fields fade in as user scrolls to the form.

---

## Example 10: Animate Testimonials

**Current HTML:**
```html
<div class="testi-grid">
  <div class="tcard">...</div>
  <div class="tcard">...</div>
  <div class="tcard">...</div>
</div>
```

**With Animations:**
```html
<div class="testi-grid scroll-reveal-stagger">
  <div class="tcard scroll-reveal">...</div>
  <div class="tcard scroll-reveal">...</div>
  <div class="tcard scroll-reveal">...</div>
</div>
```

**Result:** Testimonial cards animate in with a wave effect.

---

## Implementation Checklist

### Home Page - Priority Elements
- [ ] Hero section heading: `scroll-reveal`
- [ ] Service cards grid: `scroll-reveal-stagger` on grid
- [ ] Case study cards: `scroll-reveal-stagger` on grid
- [ ] Statistics: `scroll-reveal-stagger` on stats-bar
- [ ] CTA section: `scroll-reveal` on cta-box

### Services Page
- [ ] Section headers: `scroll-reveal`
- [ ] Service detail sections: `scroll-reveal`
- [ ] Metrics on right: `scroll-reveal-scale`
- [ ] Industries section: `scroll-reveal-stagger`

### Case Studies Page
- [ ] Header: `scroll-reveal`
- [ ] Filter tabs: `scroll-reveal`
- [ ] Case study cards: `scroll-reveal-stagger` on grid

### About Page
- [ ] Hero section: `scroll-reveal`
- [ ] Team cards: `scroll-reveal-stagger`
- [ ] Company stats: `scroll-reveal-stagger`

### Contact Page
- [ ] Form sections: `scroll-reveal`
- [ ] Contact info: `scroll-reveal-left` / `scroll-reveal-right`

---

## Testing Your Animations

1. **In Browser:**
   - Open DevTools (F12)
   - Slow down scroll: Document > Rendering > Slow 3G (in DevTools)
   - Scroll through page and observe animations

2. **Performance Check:**
   - Open DevTools > Performance tab
   - Record a scroll interaction (5 seconds)
   - Look for smooth 60fps (green bars = good)

3. **Mobile Testing:**
   - Use Chrome DevTools device toolbar
   - Test on iPhone 12, Pixel 4
   - Ensure animations are smooth, not janky

---

## Troubleshooting

**Elements not animating?**
- Ensure JavaScript is loaded: `initAllAnimations()` should be called
- Check browser console for errors
- Verify classes are spelled correctly

**Animations too fast/slow?**
- Modify transition duration in CSS: `0.6s` to desired value
- Stagger delay can be adjusted with `transition-delay`

**Performance issues?**
- Reduce number of simultaneously animating elements
- Use `scroll-reveal-stagger` instead of individual `scroll-reveal` on many items
- Avoid combining multiple animation classes on same element

**Not working on mobile?**
- Check if CSS is loaded
- Test on actual device (not just DevTools)
- Ensure viewport meta tag is present

---

## Quick Copy-Paste Template

For any grid of items:
```html
<div class="your-grid-class scroll-reveal-stagger">
  <div class="your-item-class scroll-reveal">Item 1</div>
  <div class="your-item-class scroll-reveal">Item 2</div>
  <div class="your-item-class scroll-reveal">Item 3</div>
</div>
```

For any single important element:
```html
<div class="scroll-reveal">
  <h2>Your Content</h2>
</div>
```

For images and visuals:
```html
<img src="image.jpg" class="scroll-reveal-scale" alt="Description">
```

---

That's it! Your site now has professional, smooth animations that enhance UX without compromising performance. 🎉
