# Chapter 2: Interference

## Core Idea
**Interference is superposition with constraints.** Two waves only produce a *visible* fringe pattern when they are **coherent** (locked phase) and originate from the same source split into two paths. From this single rule fall Young's double slit, Newton's rings, Fresnel biprism, and all thin-film effects.

## Frameworks Introduced

- **Two-source interference master equation** `I = I₁ + I₂ + 2√(I₁I₂) cos δ`
  - When to use: any two coherent beams meeting at a point with phase difference `δ`.
  - Constructive: `δ = 2nπ` → `I_max = (√I₁ + √I₂)²`.
  - Destructive: `δ = (2n+1)π` → `I_min = (√I₁ − √I₂)²`.

- **Coherence requirement** — the necessary precondition
  - Two beams must originate from the **same source** split by reflection/refraction/diffraction.
  - Two *independent* sources can never give visible fringes (random phase relation averages out).

- **The Two Coherent-Source Classes** (decides experimental geometry)
  - **Division of wavefront**: split the wavefront geometrically (Young's slits, Fresnel biprism, Lloyd's mirror, Billet split lens).
  - **Division of amplitude**: split a single beam by partial reflection at an interface (thin films, Newton's rings, interferometers). Requires an *extended* source — uses different optics.

- **Fringe spacing formula** (Young geometry) `β = λD / 2d`
  - `λ` — wavelength, `D` — slit-to-screen distance, `2d` — slit separation.
  - The whole experiment is a one-line answer.

- **Newton's rings — radius scaling law** `r_n² = nλR` (dark, reflected)
  - `r_n` — radius of n-th dark ring, `R` — radius of curvature of the lens.
  - Use to *measure* wavelength or *measure* refractive index of intervening liquid (`r_n²_dark = nλR/μ`).

## Key Concepts

- **Wavefront**: surface of constant phase. Spherical near point sources, plane far away.
- **Huygens' Principle**: every point on a wavefront is itself a source of secondary spherical wavelets; the next wavefront is the envelope of these wavelets.
- **Optical path** `= μ × geometrical path`. Refractive index `μ` adjusts path length for phase counting.
- **Phase difference δ ↔ path difference Δ**: `δ = (2π/λ) Δ`.
- **Conservation of energy in interference**: at minima, intensity goes *somewhere else* — never destroyed; total flux is conserved.
- **Coherence length / coherence time** — the spatial/temporal window over which the phase of a source stays stable.
- **Stokes' relation** (sets phase changes on reflection): reflection at a denser medium adds a π phase shift; at a rarer medium adds nothing.

## Mental Models

- **Think of Huygens' principle as a recursive constructor**: each wavefront is the *next* source. Use it whenever a wave hits an obstacle or aperture — it predicts what comes through without solving Maxwell's equations.
- **Read "interference setup" → ask: how is the wavefront/amplitude split?**: this is the first question. The answer determines what fringes look like (linear vs circular) and what source you need (point vs extended).
- **Optical path is the only thing waves know**: when light traverses glass `μ > 1`, it "thinks" the path is `μ·d` long. All phase counting must be done in optical path, never geometric.
- **For interferometers, count round trips of optical path** — Michelson, Mach-Zehnder, Fabry-Perot all reduce to "how many half-waves fit in the round trip".

## Anti-patterns

- **Trying to interfere two lasers/lamps directly** — independent sources have uncorrelated phase; fringes wash out. Always split a single source.
- **Forgetting the π phase shift on reflection from denser medium** — gives wrong dark/bright assignment in Newton's rings (central spot is dark for reflected light, bright for transmitted).
- **Computing path difference in air-equivalent units when light passes through glass** — must use `μ·t` for the slab.
- **Assuming fringe width is the same off-axis** — Young's fringes are *hyperbolic* in 3D space, only approximated as linear near the central axis.
- **Treating intensity minima as "energy destruction"** — energy is redistributed to the maxima; total integrated intensity = `I₁ + I₂`.

## Code Examples
*(this is theoretical optics — no code, but here is the algorithmic structure of any interference problem)*

```
1. Identify the two coherent paths and their geometry.
2. Compute path difference Δ (include any μ·d for glass, any 2t cosθ for thin films).
3. Add π (i.e. λ/2) if either reflection is from a denser medium.
4. Convert Δ to δ = (2π/λ)·Δ.
5. Apply I = I₁ + I₂ + 2√(I₁I₂) cos δ.
6. Set δ = 2nπ for bright, (2n+1)π for dark — solve for the geometric parameter you want (angle, radius, thickness).
```

## Reference Tables

### Division of wavefront vs amplitude
| | Wavefront division | Amplitude division |
|---|---|---|
| Examples | Young's slits, Fresnel biprism, Lloyd's mirror | Newton's rings, thin films, Michelson |
| Source needed | Point source | Extended source allowed |
| Path-difference origin | Geometric (different routes through space) | Reflection at interfaces |

### Conditions for sustained interference
| Requirement | Why |
|---|---|
| Coherent sources | Phases must be locked or fringes wash out |
| Comparable amplitudes | Otherwise minima never reach zero — contrast drops |
| Same plane of polarization | Cross-polarized waves don't interfere |
| Small source size | Large sources blur the fringes (spatial coherence) |
| Narrow wavelength band | Wide spectrum gives overlapping fringe systems (temporal coherence) |

### Newton's rings formulas (air gap)
| Quantity | Reflected light | Transmitted light |
|---|---|---|
| Dark ring radius² | `r_n² = nλR` | `r_n² = (2n+1)λR/2` |
| Bright ring radius² | `r_n² = (2n−1)λR/2` | `r_n² = nλR` |
| Center | Dark (π shift at glass) | Bright (no shift) |
| In liquid of index μ | Divide RHS by μ | Divide RHS by μ |

## Worked Example: Wavelength from Newton's rings

A plano-convex lens with `R = 100 cm` is placed on a flat glass plate. The n-th dark ring (reflected, sodium light) has radius `r_n = 4 mm` at `n = 16`. Find `λ`.

1. Use `r_n² = nλR` (dark, reflected).
2. Solve: `λ = r_n²/(nR) = (4×10⁻³)² / (16 × 1) = 16×10⁻⁶ / 16 = 1×10⁻⁶ m = 1000 nm`.
3. Sanity-check: sodium D-line is ~589 nm; answer must be off by ~×1.7. The student would re-examine `n` (off by one in counting) — the rings are tightly packed; mis-counting `n = 16` vs `n = 27` flips the answer into the visible range.

The general pattern: **measure two distant rings, take the difference of squares** — eliminates the unknown contact-point thickness and any systematic offset.

`(r_{n+p})² − r_n² = pλR` is the robust experimental form.

## Key Takeaways

1. **Coherence is non-negotiable** — without it, no fringes. Always split one source; never combine two.
2. **Ask "wavefront or amplitude division?"** to pick the right geometry and source.
3. **Count phase in optical path** (`μ·d`), not geometric path.
4. **Add π phase for reflection at a denser medium** — this single rule explains why Newton's central spot is dark in reflection.
5. **Fringe-spacing formula `β = λD/2d` is universal for Young-class setups** — pattern: linear fringes whose spacing scales with λ.
6. **Use `r_n² − r_m² = (n−m)λR`** for robust Newton's-ring wavelength measurement.
7. **Intensity minima conserve energy** — flux moves to maxima; total flux is the incoherent sum.

## Connects To

- **Ch 1 (Superposition)**: §1.16 is the kinematic basis — coherence is the *quality* of superposition needed for visible fringes.
- **Ch 3 (Diffraction)**: Fresnel built diffraction theory by *combining Huygens' principle (Ch 2.2) with interference* (Ch 2.7). Diffraction = interference of infinitely many secondary wavelets.
- **Ch 4 (Polarization)**: cross-polarized beams cannot interfere — this links the two chapters.
- **Ch 6 (EM Waves)**: explains *why* light is a wave (and a transverse one); Huygens' ether picture is the historical predecessor.
- **External: thin-film coatings, anti-reflective optics, holography (Ch 14)** all use these same path-difference equations.
