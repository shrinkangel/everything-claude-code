# Chapter 3: Diffraction

## Core Idea
**Diffraction is interference among the unobstructed wavelets of a single wavefront.** When part of a wavefront is blocked by an obstacle, the secondary wavelets from the *remaining* part combine — and produce fringes wherever geometric optics says there should be none.

## Frameworks Introduced

- **Fresnel's recipe**: `Diffraction = Huygens' secondary wavelets + Interference principle`
  - When to use: any time a wavefront meets an aperture or obstacle.
  - The unblocked portion becomes a *new* extended source; the pattern is the interference of all its points.

- **Two diffraction regimes** (decided by source-obstacle-screen geometry)
  - **Fresnel diffraction** — source and/or screen at *finite* distance → spherical/cylindrical wavefronts → curved fringes, intensity computed by half-period zones.
  - **Fraunhofer diffraction** — source and screen at *infinity* (or at focal points of lenses) → plane wavefronts → far-field pattern given by the Fourier transform of the aperture.

- **Fresnel's half-period zones** (Fresnel zone construction)
  - Concentric annular zones around the foot of the perpendicular from observation point P to the wavefront, such that consecutive zone edges differ in path by λ/2.
  - n-th zone area `A_n ≈ πλb` (almost independent of n).
  - n-th zone amplitude at P: `R_n ∝ (1 + cos θ_n)` — falls slowly with obliquity.
  - Net amplitude at P from *unobstructed* wavefront ≈ `R₁/2` — half the first zone's contribution.

- **Single-slit Fraunhofer pattern** `I = I₀ (sin α / α)²` where `α = (π e sin θ)/λ`
  - Central maximum width: `2λ/e` (in angle); zeros at `e sin θ = mλ`.
  - Width inversely proportional to slit width — narrow slit, wide pattern.

- **N-slit grating master equation** `(a + b) sin θ = nλ`
  - `(a + b)` — grating period (slit + opaque), `n` — order.
  - Principal maxima sharpen as 1/N² with N slits; resolving power `R = nN`.

- **Zone plate** — alternate Fresnel zones blocked → constructive contribution → acts as a lens
  - Focal length `f = r₁²/λ` where `r₁` is the radius of the first zone.
  - Wavelength-dependent: a zone plate has multiple foci at `f, f/3, f/5, ...` — chromatic but cheap, used in X-ray and EUV optics where refractive lenses fail.

## Key Concepts

- **Obliquity factor** `(1 + cos θ)/2`: encodes the directional weighting of secondary wavelets. Forward emission strongest, backward suppressed (resolves Huygens' "no backward wave" paradox).
- **Half-period zone radius** `ρ_n = √(nλb)` for source-to-obstacle distance `b`.
- **Rectilinear propagation** in geometrical optics is the *limit* of diffraction when apertures are >> λ.
- **Resolution limit** (Rayleigh criterion): two point sources resolvable when their principal maxima are separated by the first zero of each other's pattern.
- **Diffraction grating dispersion** `dθ/dλ = n / [(a+b) cos θ]` — angular spread per wavelength change.
- **Missing orders** in a grating: when slit width `a` is a sub-multiple of period `(a+b)`, certain orders vanish.

## Mental Models

- **Aperture → Fourier source**: in the Fraunhofer regime, the pattern *is* the modulus-squared Fourier transform of the aperture's amplitude transmission. Slit ↔ sinc; circular aperture ↔ Airy; grating ↔ comb. Recognize this shortcut and you predict patterns by inspection.
- **Resolution = wavelength / aperture**: telescopes, microscopes, antennas all obey this single ratio. To resolve smaller features, use shorter wavelengths (electron microscopy) or larger apertures (radio interferometry).
- **The first half-period zone is the "effective aperture"**: when calculating diffraction from a small obstacle, ask "how many half-period zones does it cover?" — if just one or two, the obstacle matters; if hundreds, the wave doesn't notice it (geometric optics regime).
- **A grating is just a comb of N slits**: it gives the same maxima as a double slit, but *sharper* and brighter. The single-slit envelope still modulates it.

## Anti-patterns

- **Computing Fresnel diffraction with the Fraunhofer formula** — wrong regime; spherical wavefronts demand the zone construction, not Fourier.
- **Ignoring the single-slit envelope when computing grating patterns** — grating order `n` may be missing if it falls on a sinc zero.
- **Treating "diffraction" as bending around an edge only** — it is interference of the *entire* unobstructed wavefront, not a edge phenomenon.
- **Forgetting that resolving power scales with N (number of slits), not period** — a coarser grating with more lines outresolves a finer one with fewer lines.
- **Calling something a "shadow" when it has fringes** — the fuzzy boundary, intensity decreasing into the geometric shadow, *is* diffraction at work. Real shadows don't exist for monochromatic point sources.

## Code Examples
*(no code — but here is the algorithmic recipe)*

```
SINGLE SLIT:    I(θ) = I₀ · (sin α / α)² ,   α = (π e sin θ)/λ
N-SLIT GRATING: I(θ) = I₀ · (sin α / α)² · (sin Nβ / sin β)² , β = (π (a+b) sin θ)/λ
CIRCULAR APERTURE: I(θ) = I₀ · [2 J₁(x)/x]² , x = (π D sin θ)/λ , first zero at sin θ = 1.22 λ/D
```

## Reference Tables

### Fresnel vs Fraunhofer
| Aspect | Fresnel | Fraunhofer |
|---|---|---|
| Source/screen | Finite distance | Infinity (or lens focal plane) |
| Wavefront on obstacle | Spherical / cylindrical | Plane |
| Analysis tool | Half-period zones | Fourier transform |
| Slit-width prerequisite | Any | `e ≫ λ` (else pattern fills 2π) |
| Pattern moves with screen position? | Yes | No (only intensity changes) |

### Aperture ↔ Far-field pattern (Fraunhofer)
| Aperture | Pattern | First zero |
|---|---|---|
| Single slit, width `e` | `(sin α / α)²` | `sin θ = λ/e` |
| Two slits, sep `d` | cosine × single slit | — |
| N-slit grating, period `(a+b)` | `(sin Nβ / sin β)² × single slit` | between principal maxima |
| Circular aperture, diameter `D` | Airy `[2 J₁(x)/x]²` | `sin θ = 1.22 λ/D` |
| Rectangular `e × f` | `sinc²(α) · sinc²(β)` | independent in each axis |

### Grating performance
| Quantity | Formula | Notes |
|---|---|---|
| Order condition | `(a+b) sin θ = nλ` | n = 0, ±1, ±2, … |
| Dispersion | `dθ/dλ = n / [(a+b) cos θ]` | higher orders disperse more |
| Resolving power | `R = λ/Δλ = nN` | use high n and many lines |
| Free spectral range | `Δλ_FSR = λ/n` | beyond this, orders overlap |

## Worked Example: Resolving the sodium D-doublet

The sodium D-lines are at 589.0 nm and 589.6 nm — separation `Δλ = 0.6 nm`. What grating order × line count `nN` is needed to just resolve them?

1. Rayleigh resolution: `R = λ/Δλ = 589.3 / 0.6 ≈ 982`.
2. Need `nN ≥ 982`.
3. A grating with 600 lines/mm × 2 mm illuminated × 1st order: `N = 1200`, `nN = 1200` ✓.
4. Cheaper option: 300 lines/mm × 2 mm × 2nd order: `nN = 1200` ✓ (but 2nd order dispersion is doubled, easier to see).

The general recipe: pick `n` and `N` so `nN ≥ λ/Δλ`. Trade more N (bigger grating) against higher n (less light per order).

## Key Takeaways

1. **Diffraction = interference of all the unobstructed wavelets** — same physics as Ch 2, applied to a continuum of sources.
2. **First question on any problem: Fresnel or Fraunhofer?** Wrong regime → wrong formula → wrong answer.
3. **Aperture-to-pattern is a Fourier transform in the Fraunhofer regime** — memorize the dictionary (slit→sinc, circle→Airy).
4. **Resolution ∝ wavelength / aperture** — the universal optical limit.
5. **Grating resolving power `R = nN`**: combine many lines with high orders to spectrally resolve.
6. **Zone plates work where lenses fail**: X-ray and EUV imaging.
7. **Geometric optics is the long-wavelength-limit-of-aperture-size**: when apertures ≫ λ, diffraction is invisible; when apertures ~ λ, geometric optics is wrong.

## Connects To

- **Ch 2 (Interference)**: diffraction *uses* the interference master equation; the only new piece is integrating over a continuum.
- **Ch 4 (Polarization)**: aperture diffraction is polarization-blind in the simplest treatment; real birefringent or anisotropic apertures invoke both.
- **Ch 6 (EM Waves)**: justifies treating light as a wave that can be split into infinitesimal point sources.
- **Ch 7-8 (Quantum Physics)**: electron and neutron diffraction → matter waves; X-ray diffraction (Ch 17) measures crystal structure.
- **Ch 17 (Vol 2 Ch 3, X-rays)** & **Ch 15 (Vol 2 Ch 1, Crystal Structure)**: Bragg's law is the periodic-lattice version of grating equation.
- **External: holography (Ch 14)** records and reconstructs *both* amplitude and phase by encoding a diffraction pattern.
