# CSS File Structure - Profile Website

## Overview
Your CSS has been organized into **4 specialized files** for better maintainability and scalability.

## File Structure

### 1. **base.css** (160 lines)
Contains foundational styles:
- Reset and global styles
- Accessibility utilities (skip-link, sr-only)
- All keyframe animations (fadeInUp, slideInLeft, bounce, etc.)
- Reduce motion preferences

**Use case:** Core animations and global resets

---

### 2. **layout.css** (250 lines)
Contains structural and navigation components:
- Header navigation (.header-nav, .nav, .nav-list)
- Navigation links and CV button
- Main container padding
- Profile section layout
- Profile picture styling
- Intro text and greeting styles
- Social links

**Use case:** Header and profile hero section

---

### 3. **sections.css** (1150 lines)
Contains all content section styles:
- **About Section:** tabs, education list, skills grid
- **Projects Section:** project cards, scrollable gallery
- **Experience Section:** timeline and experience items
- **Certifications Section:** certification cards and modal
- **Contact Section:** contact info, form, inputs

**Use case:** Content styling for all major sections

---

### 4. **responsive.css** (450 lines)
Contains all media queries organized by breakpoint:
- **Mobile:** 0 - 575px
- **Small Devices:** 576px - 767px
- **Tablets:** 768px - 991px
- **Large Desktops:** 992px - 1199px
- **Extra Large:** 1200px+

**Use case:** Responsive design for all screen sizes

---

### 5. **main.css** (5 lines)
Master file that imports all 4 CSS files using @import.

**Use case:** Single entry point for entire stylesheet

---

## How to Use

### Option 1: Use Main CSS (Recommended)
Update your `index.html`:
```html
<link rel="stylesheet" href="main.css">
```

### Option 2: Import Individual Files
If you prefer direct linking, update your `index.html`:
```html
<link rel="stylesheet" href="base.css">
<link rel="stylesheet" href="layout.css">
<link rel="stylesheet" href="sections.css">
<link rel="stylesheet" href="responsive.css">
```

### Option 3: Keep Original
Continue using `styles.css` (the monolithic file is still available)

---

## File Sizes
- **base.css:** ~6 KB (animations, resets)
- **layout.css:** ~9 KB (header, nav, profile)
- **sections.css:** ~41 KB (all section styles)
- **responsive.css:** ~16 KB (media queries)
- **main.css:** <1 KB (imports only)
- **Total:** ~72 KB (vs. 80 KB in single file)

---

## Benefits

✅ **Modular:** Easy to locate and modify specific styles  
✅ **Maintainable:** Each file has a clear responsibility  
✅ **Scalable:** Add new sections by extending existing files  
✅ **Performance:** Better for larger projects and teams  
✅ **Organization:** Logical grouping by purpose  

---

## Adding New Styles

- **Navigation/Header changes?** → Edit `layout.css`
- **New section?** → Add to `sections.css`
- **Mobile fixes?** → Update relevant breakpoint in `responsive.css`
- **New animations?** → Add to `base.css`

---

## Notes
- All 4 files are production-ready
- No functionality changes, pure organization
- Import order matters (base.css should load first)
- Responsive.css should load last to override other styles
