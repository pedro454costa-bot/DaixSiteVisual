# DAIX Website Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from modern tech/AI platforms like Linear, Vercel, and OpenAI's websites - clean, sophisticated, with dynamic visual elements that convey cutting-edge technology.

## Core Design Principles
1. **Tech-Forward Sophistication**: Modern, minimal aesthetic with strategic use of gradients and animations
2. **Blue Dominance**: Primary blue palette with minimal purple accents only in gradients
3. **Dynamic Energy**: Subtle animations that suggest AI intelligence and automation
4. **Professional Trust**: Clean layouts balanced with innovative visual treatments

## Typography
- **Headings**: Inter or Poppins (700-800 weight) for impact
- **Body**: Inter or System UI (400-500 weight) for clarity
- **Accent/Numbers**: Poppins (600-700 weight) for metrics
- **Hierarchy**: 
  - Hero H1: text-5xl md:text-6xl lg:text-7xl
  - Section H2: text-3xl md:text-4xl lg:text-5xl
  - Card H3: text-xl md:text-2xl
  - Body: text-base md:text-lg

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24 lg:py-32
- Card spacing: p-6 md:p-8
- Element gaps: gap-4, gap-6, gap-8

## Color Strategy
**Primary Blues**:
- Royal Blue: #0066FF (primary actions, logo X)
- Deep Blue: #0047AB (backgrounds, depth)
- Cyan Accent: #00D4FF (highlights, hover states)
- Dark Navy: #0A1628 (text, backgrounds)

**Supporting**:
- White/Off-white: text and cards
- Subtle purple: Only in gradient overlays (10-15% opacity max)
- Gray scale: neutral-100 to neutral-900

## Logo Treatment
**DAIX Logo**:
- "DAI" in standard weight
- "X" with distinctive blue gradient (#0066FF to #00D4FF)
- Subtle glow effect on X (box-shadow with blue)
- Micro-animation: gentle pulse on hover (scale 1.05)

## Component Library

### Hero Section (Full viewport height)
- Animated gradient background (blue to dark navy)
- Floating geometric shapes or grid pattern overlay
- Large centered headline: "A.I não tira pausa pro café"
- Subheadline explaining value proposition
- Two CTAs: "Agendar Demonstração" (primary) + "Saiba Mais" (secondary)
- Blurred button backgrounds over gradient
- Scroll indicator with animation

### Solutions Cards (3-column grid)
- Glass morphism effect (backdrop-blur with subtle border)
- Icon at top (use Heroicons)
- Title + description
- Hover: slight lift (translateY -4px) + glow effect
- Icons: Chatbots (ChatBubbleLeftIcon), Analytics (ChartBarIcon), Automation (CogIcon)

### Metrics Section (4-column grid)
- Large animated numbers (counting up effect)
- Labels below: "98% Precisão", "24/7 Disponível", "-80% Custos", "3x Mais Rápido"
- Animated on scroll intersection
- Centered layout with gradient text on numbers

### Process Timeline (Horizontal 4-step)
- Connected with gradient line
- Circular step indicators with numbers
- Step title + brief description
- Fade-in animation sequentially on scroll
- Steps: Análise → Planejamento → Implementação → Resultados

### CTA Section
- Centered layout with gradient background
- Bold headline
- Two buttons side-by-side
- Supporting text with trust signals

### Footer
- 4-column layout (Sobre, Soluções, Suporte, Contato)
- Social links with icons
- Copyright and DAIX branding
- Dark background (navy)

## Visual Effects

### Animations (Subtle, Performance-First)
1. **Scroll-triggered fade-ins**: opacity 0→1, translateY 20px→0
2. **Card hover effects**: Transform scale, glow shadows
3. **Gradient animations**: Background position shift (slow, 10s loop)
4. **Number counters**: Animate from 0 to target on viewport entry
5. **Logo X pulse**: Subtle scale animation on page load

### Background Treatments
- Hero: Animated radial gradient with noise texture
- Sections: Alternating subtle grid patterns or geometric shapes
- Particle effect optional: Floating dots in hero background

## Images
**Hero Background**: Abstract tech visualization - neural network nodes, data streams, or geometric AI-inspired pattern in blue tones (suggested: full-width background image with gradient overlay)

**No additional images needed** - rely on icons, gradients, and effects for visual interest

## Responsive Strategy
- Mobile: Single column, stacked cards, reduced spacing
- Tablet: 2-column grids where appropriate
- Desktop: Full multi-column layouts, enhanced animations

## Performance Notes
- Use CSS transforms for animations (not layout properties)
- Lazy load scroll-triggered animations
- Limit simultaneous animations to 3-4 elements
- Prefer gradient backgrounds over images when possible

**Aesthetic Summary**: Sophisticated AI-tech platform with blue-dominant color scheme, strategic animations, and modern glass-morphism elements that convey innovation while maintaining professional credibility.