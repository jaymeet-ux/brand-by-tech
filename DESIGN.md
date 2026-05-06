# Design Brief

## Direction

Brand By Tech — Modern, premium tech services website with sky blue gradient aesthetic, glassmorphism effects, and smooth entrance animations creating a professional yet approachable digital presence.

## Tone

Confident, modern, and visually rich with curated glassmorphic elements and sky blue gradients that feel premium without being overengineered.

## Differentiation

Combination of sky blue gradient text overlays, glassmorphic service cards with hover-triggered depth effects, and coordinated fade-in/slide-up animations for memorable scroll interactions.

## Color Palette

| Token      | OKLCH         | Role                                      |
| ---------- | ------------- | ----------------------------------------- |
| background | 0.98 0.008 230 | Cool off-white light base                 |
| foreground | 0.18 0.015 230 | Deep cool blue-grey text                  |
| card       | 1.0 0.004 230 | Pure white for glass containers           |
| primary    | 0.55 0.18 230 | Vibrant sky blue for CTAs and highlights  |
| accent     | 0.65 0.2 200  | Cyan/turquoise for secondary actions      |
| muted      | 0.92 0.01 230 | Light grey-blue for disabled/inactive     |

## Typography

- Display: Space Grotesk — modern geometric sans for headlines, bold and tech-forward
- Body: General Sans — clean professional sans for content, highly legible
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-4xl font-bold`, labels `text-sm font-semibold uppercase tracking-widest`, body `text-base md:text-lg`

## Elevation & Depth

Glassmorphic layering with semi-transparent white/blue backgrounds, backdrop blur at 10px, subtle box shadows creating depth hierarchy through layered glass containers over gradient bases.

## Structural Zones

| Zone    | Background                           | Border                              | Notes                                    |
| ------- | ------------------------------------ | ----------------------------------- | ---------------------------------------- |
| Header  | `bg-background/95 backdrop-blur-md`  | `border-b border-border/30`         | Sticky navigation with glass effect      |
| Hero    | `gradient-sky` linear 135°           | —                                   | Sky blue gradient with text overlay      |
| Sections| Alternating `bg-background` + `bg-muted/20` | —                              | Even sections: muted, odd: background   |
| Cards   | `glass-base` (light) / `glass-dark` (dark)  | Semi-transparent white border | 10px blur, 0.7 opacity bg               |
| Footer  | `bg-muted/50`                       | `border-t border-border/30`         | Light muted background with subtle border |

## Spacing & Rhythm

Sections separated by `py-20` / `py-24` with content padding `px-6 md:px-12 lg:px-20`; cards use consistent `p-6 md:p-8` gutters; micro-spacing via `gap-4` / `gap-6` for component grouping.

## Component Patterns

- Buttons: Rounded-lg, `bg-primary hover:bg-primary/90` with scale-up animation, smooth color transition
- Cards: `rounded-xl`, `glass-base` with `hover:shadow-glass hover:scale-105`, entrance via `animate-slide-up`
- Badges: Rounded-full, `bg-accent/20 text-accent font-semibold`, minimal styling

## Motion

- Entrance: Fade-in (0.6s) + slide-up (0.7s, 20px translateY) staggered on page load
- Hover: Scale-up 4px translateY, glow shadow 30px rgba(86,156,214,0.4) on card hover
- Decorative: Gradient text shimmer on hero, smooth color transitions (0.3s cubic-bezier)

## Constraints

- No rainbow palettes; sky blue hue (230°) anchors all colors
- Glassmorphism reserved for cards and overlays; no full-page blur
- Animations capped at 0.7s max duration to maintain responsiveness
- Shadows always OKLCH-based to preserve color harmony

## Signature Detail

Sky blue gradient-text hero headlines combined with glassmorphic service cards that lift on hover — a distinctive visual signature that reinforces tech modernism and premium positioning.
