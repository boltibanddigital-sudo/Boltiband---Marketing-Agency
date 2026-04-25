# Animation Classes - Quick Reference Card

A one-page cheat sheet for all available animation classes.

---

## CSS Animation Classes

| Class | Effect | Duration | Best For | Example |
|-------|--------|----------|----------|---------|
| `.scroll-reveal` | Fade + Slide Up | 0.6s | Text, sections, general content | Headings, paragraphs |
| `.scroll-reveal-scale` | Fade + Scale (small→normal) | 0.6s | Images, cards, visuals | Hero images, team photos |
| `.scroll-reveal-left` | Fade + Slide from Left | 0.6s | Alternating layouts | Left column content |
| `.scroll-reveal-right` | Fade + Slide from Right | 0.6s | Alternating layouts | Right column content |
| `.scroll-reveal-stagger` | Staggered children reveal | 0.6s each | Card grids, lists | Service cards, case studies |

---

## Stagger Animation Timing

When using `.scroll-reveal-stagger` on a parent, children animate with delays:

```
Child 1: 0.0s delay  → appears immediately
Child 2: 0.1s delay  → appears 100ms later
Child 3: 0.2s delay  → appears 200ms later
Child 4: 0.3s delay  → appears 300ms later
Child 5: 0.4s delay  → appears 400ms later
```

Result: Wave-like cascading animation effect

---

## Button Classes (Auto-Enhanced)

These buttons automatically have smooth hover animations:

| Class | Button Style | Hover Effect |
|-------|--------------|--------------|
| `.btn-green` / `.btn-primary` | Purple background | Lift + Shadow |
| `.btn-ghost` | Outline style | Lift + Shadow + Border color change |
| `.btn-outline` | Outline style | Lift + Shadow + Border color change |
| `.btn-dark` | Dark background | Lift + Shadow |

**Hover effects:** Transform Y -2px, box-shadow grows

---

## Usage Patterns

### Pattern 1: Single Element
```html
<div class="scroll-reveal">Content here</div>
```

### Pattern 2: Grid of Cards
```html
<div class="svc-grid scroll-reveal-stagger">
  <div class="svc-card">Card 1</div>
  <div class="svc-card">Card 2</div>
  <div class="svc-card">Card 3</div>
</div>
```

### Pattern 3: Alternating Layout
```html
<div class="scroll-reveal">
  <div class="scroll-reveal-left">Left content</div>
  <div class="scroll-reveal-right">Right content</div>
</div>
```

### Pattern 4: Image with Caption
```html
<figure class="scroll-reveal-scale">
  <img src="image.jpg" alt="Caption">
  <figcaption>Image caption</figcaption>
</figure>
```

---

## Timing & Easing

All animations use professional easing:

- **Duration:** 0.6s (600 milliseconds)
- **Easing:** `cubic-bezier(0.25, 0.46, 0.45, 0.94)` 
  - Smooth acceleration/deceleration
  - Natural, organic feel
  - Not too bouncy, not too stiff

**Button Hover:**
- Duration: 0.3s (fast response)
- Easing: `ease` (standard easing)
- Transform: 0.2s (immediate lift)

---

## Performance Notes

✅ **GPU Accelerated:**
- Uses `transform` and `opacity`
- No reflow/repaint overhead
- Smooth 60fps on modern devices

✅ **Optimized:**
- Intersection Observer (native browser API)
- Unobserves elements after animation
- Minimal JavaScript execution

✅ **Mobile Friendly:**
- No parallax effects
- No heavy animations
- Smooth on low-end devices

---

## When to Use Each Class

### Use `.scroll-reveal` for:
- Section headings
- Paragraphs and text blocks
- Individual cards
- Button groups
- Form sections
- CTA boxes

### Use `.scroll-reveal-scale` for:
- Hero images
- Product/service images
- Screenshots
- Logos
- Cards with images
- Thumbnails

### Use `.scroll-reveal-left` for:
- Left column in alternating layout
- Left-aligned content
- Mobile: same as scroll-reveal

### Use `.scroll-reveal-right` for:
- Right column in alternating layout
- Right-aligned content
- Mobile: same as scroll-reveal

### Use `.scroll-reveal-stagger` for:
- Card grids (3+ items)
- Team member lists
- Statistics sections
- Process steps
- Testimonials
- Features list
- Service cards

---

## Common Combinations

### Entire Section (Header + Content)
```html
<section class="sec scroll-reveal">
  <div class="sh">
    <h2>Section Title</h2>
    <p>Description</p>
  </div>
  <div class="grid scroll-reveal-stagger">
    <!-- Items here animate with stagger -->
  </div>
</section>
```

### Service with Image
```html
<div class="scroll-reveal">
  <h2>Service Name</h2>
  <p>Description</p>
  <img src="image.jpg" class="scroll-reveal-scale" alt="Service">
</div>
```

### Side-by-Side Layout
```html
<div class="scroll-reveal">
  <div class="column scroll-reveal-left">
    <h2>Left side</h2>
    <p>Content here</p>
  </div>
  <div class="column scroll-reveal-right">
    <img src="image.jpg" alt="Image">
  </div>
</div>
```

---

## Implementation Checklist

Before deploying:

- [ ] CSS loaded: `styles.css` has scroll animation classes
- [ ] JS initialized: `main.js` calls `initAllAnimations()`
- [ ] No errors in console
- [ ] Animations trigger when scrolling to elements
- [ ] Buttons have hover effects
- [ ] Tested on mobile (Chrome DevTools device toolbar)
- [ ] Performance smooth (60fps, no jank)
- [ ] Page speed not impacted (use PageSpeed Insights)

---

## Customization

### Change Animation Speed

In `styles.css`, find:
```css
.scroll-reveal {
  transition: opacity 0.6s cubic-bezier(...), transform 0.6s cubic-bezier(...);
}
```

Change `0.6s` to desired duration:
- Faster: `0.4s`
- Slower: `0.8s`

### Change Stagger Delay

In `styles.css`, find:
```css
.scroll-reveal-stagger > *:nth-child(2) { 
  transition-delay: 0.1s;  /* Change this value */
}
```

Adjust `0.1s` to preferred delay between items:
- Faster cascade: `0.05s`
- Slower cascade: `0.2s`

### Change Trigger Distance

In `main.js`, find:
```javascript
rootMargin: '0px 0px -80px 0px'  // Triggers 80px before element reaches viewport
```

- Make larger (e.g., `-120px`): Triggers earlier, elements animate further away
- Make smaller (e.g., `-40px`): Triggers later, elements animate closer to viewport

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Elements not animating | Check `initAllAnimations()` is called; verify class names |
| Animations too slow | Reduce duration from 0.6s to 0.4s |
| Stagger effect missing | Ensure parent has `scroll-reveal-stagger`, children have no animation class, or each child has `scroll-reveal` |
| Button hover not working | Verify button class (`.btn-green`, `.btn-ghost`, etc.) |
| Performance issues | Remove unnecessary animations; use stagger for grids instead of individual reveals |
| Mobile janky | Check device performance; reduce simultaneous animations; test on actual device |

---

## Animation Behavior

**How scroll reveals work:**
1. Element loads with `opacity: 0; transform: translateY(30px)`
2. User scrolls near element
3. Intersection Observer detects element is 80px from viewport
4. Class `.revealed` is added
5. CSS transition animates: `opacity: 1; transform: translateY(0)`
6. After animation completes, element is unobserved (saves memory)

**Why this is performant:**
- Uses native Intersection Observer API
- Only observes visible elements
- Unobserves after animation (no continuous checks)
- All animations are CSS (GPU accelerated)
- No JavaScript animation loops

---

## Browser Support

All features supported in:
- ✅ Chrome 51+ (Desktop & Mobile)
- ✅ Firefox 55+
- ✅ Safari 12.1+
- ✅ Edge 15+
- ⚠️ IE 11 - Animations don't trigger, but content visible

For IE 11 support, add a fallback:
```css
@supports (not (--css: variable)) {
  .scroll-reveal { opacity: 1; transform: none; }
}
```

---

## Summary

| Aspect | Details |
|--------|---------|
| **Total Classes** | 5 main + button enhancements |
| **Setup Time** | 5 minutes (already done!) |
| **Performance Impact** | Negligible (60fps) |
| **Mobile Support** | Full support |
| **Customization** | Easy (CSS values) |
| **Learning Curve** | Minimal (just add classes!) |

**Start implementing:** Add classes to your existing HTML elements following the patterns above. That's it! ✨

