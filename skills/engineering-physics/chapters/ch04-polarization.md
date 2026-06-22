# Chapter 4: Polarization

## Core Idea
Polarization is the defining fingerprint of *transverse* waves: by restricting the electric vector of light to one direction, you simultaneously prove light is transverse (not longitudinal) and gain four engineering controls over its state — Malus's `cos²θ` intensity gating, Brewster's `tan φ_p = μ` reflection wipe, birefringent `Δ = (μ_O − μ_E)t` retardation, and Fresnel's circular-superposition decomposition for optical rotation.

## Frameworks Introduced

- **Plane-of-vibration vs Plane-of-polarization**
  - When to use: any discussion of how an EM wave's E-vector is geometrically described relative to propagation.
  - How: plane of vibration = contains `E` and propagation vector `k`; plane of polarization = contains `B` and `k`, perpendicular to plane of vibration. The "plane of polarization" is the older (and confusingly named) convention; the plane of vibration is the modern usage.

- **Brewster's Law (polarization by reflection)**
  - When to use: finding the angle at which reflected light is completely plane polarized, or designing polarizing beam-splitters.
  - How: at the polarizing angle `φ_p`, the reflected and refracted rays are perpendicular (`∠BOC = 90°`), which gives `φ_p + θ_T = 90°`. Combine with Snell's law to get the canonical result:
    $$\tan\phi_p = \mu$$
  - At this angle the *parallel* component (vibrations in the plane of incidence) cannot reflect (would require a longitudinal wave) → reflected ray is 100% perpendicular-polarized.

- **Malus's Law (polarizer–analyzer intensity)**
  - When to use: any two-stage polarizer system (crossed polars, optical isolators, polarimetry).
  - How: decompose the incident amplitude `r` into components `r cosθ` (parallel to analyzer) and `r sinθ` (perpendicular). The parallel component is transmitted; intensity is amplitude squared:
    $$I = I_0 \cos^2\theta$$
  - For unpolarized light falling on a single polarizer, exactly `I_0/2` is transmitted (averaged over all input polarization states).

- **Huygens' Double-Refraction Model**
  - When to use: predicting direction and polarization of O-ray and E-ray inside a uniaxial crystal.
  - How: every point disturbed by the wavefront emits two wavelets — a **spherical** O-wave (constant speed, obeys Snell) and an **ellipsoid-of-revolution** E-wave (axis = optic axis, speed varies with direction). The two wavefronts *touch* on the optic axis (no double refraction along it).
  - Negative crystal (calcite): `v_E ≥ v_O`, ellipsoid encompasses sphere. Positive crystal (quartz): sphere encompasses ellipsoid.

- **Retardation Plates (wave plates)**
  - When to use: converting plane → circular (quarter-wave) or rotating polarization plane (half-wave) polarized light.
  - How: cut plate parallel to optic axis; O-ray and E-ray travel at different speeds, accumulating:
    $$\Delta = (\mu_O - \mu_E)\,t,\qquad \delta = \frac{2\pi}{\lambda}(\mu_O-\mu_E)\,t$$
  - Quarter-wave plate: `δ = π/2` → circular if incident is plane-polarized at 45° to optic axis. Half-wave plate: `δ = π` → rotates plane of polarization by `2θ` where θ is the angle between incident polarization and optic axis.
  - Minimum thickness for quarter-wave: `t = λ/[4(μ_O − μ_E)]`. For half-wave: `t = λ/[2(μ_O − μ_E)]`.

- **Fresnel's Theory of Optical Rotation**
  - When to use: explaining why some substances (quartz, sugar solution) rotate the plane of polarization without birefringence.
  - How: linear polarization along the optic axis decomposes into **two counter-rotating circular polarizations** (RHC and LHC) that travel at *different speeds* through the medium. They recombine on exit with a phase difference → plane polarization rotated by:
    $$\theta = \frac{\pi \ell}{\lambda}(\mu_R - \mu_L)$$
  - Dextro-rotatory (negative θ): right-handed substance has `v_R > v_L`. Levo-rotatory (positive θ): left-handed substance has `v_L > v_R`.

- **Biot's Laws of Optical Rotation**
  - When to use: predicting or measuring how `θ` scales with experimental parameters.
  - How: `θ ∝ ℓ` (length), `θ ∝ C` (concentration for solutions), `θ ∝ 1/λ²` (approximately — violet rotates more than red). Combined with sign convention (negative = dextro) gives specific rotation:
    $$\omega = \frac{10\theta}{\ell \cdot C}$$

## Key Concepts

- **Polarization**: restriction of transverse-wave vibrations to one direction or plane — proves light is transverse.
- **Light vector**: the transverse electric vector `E` of the EM wave; dominates optical phenomena (magnetic vector's role is mostly geometric).
- **Unpolarized light**: random superposition of all polarization states; appears symmetric about propagation because millions of vectors change direction within a meter.
- **Plane-polarized (linearly polarized) light**: `E` confined to a single plane (plane of vibration); `B` in perpendicular plane (plane of polarization).
- **Brewster angle (polarizing angle) φ_p**: angle of incidence at which reflected light is completely plane polarized — `tan φ_p = μ`.
- **Birefringence (double refraction)**: anisotropic crystals split an incident ray into O-ray (obeys Snell, spherical wavefront) and E-ray (does not, ellipsoidal wavefront).
- **Optic axis**: direction in a uniaxial crystal along which O- and E-rays travel at the same speed; no double refraction along it.
- **Positive vs negative crystal**: positive (e.g. quartz) — `v_O > v_E`; negative (e.g. calcite) — `v_E > v_O`.
- **Optical activity (optical rotation)**: ability of certain substances to rotate the plane of polarization of light passing along the optic axis.
- **Specific rotation ω**: rotation produced by 10 cm of solution containing 1 g of active substance per cm³; units deg·cm²/g.

## Mental Models

- **Use the polarizer–analyzer pair whenever you need a "polarization gate"**: polarizer sets a known state, analyzer detects/modifies it. Maximum transmission at θ=0, zero at θ=90°. `I = I_0 cos²θ` is the single formula connecting them.
- **Think of polarization states as the tip of the E-vector traced over time**: linear = back-and-forth line, circular = constant-radius circle, elliptical = ellipse. All three are produced by superposing two orthogonal linear vibrations with the right phase and amplitude relationship.
- **Use Huygens' ellipsoid-and-sphere to visualize double refraction**: spherical wavefront = "uniform medium" intuition (O-ray); ellipsoid = "direction-dependent medium" (E-ray). The two touch on the optic axis, so no splitting along that direction — that's the geometric reason the optic axis is special.
- **Use Fresnel's "two opposite circular waves at different speeds" for optical rotation**: a linear polarization is just two counter-rotating circular polarizations in phase; if their speeds differ inside the medium, they fall out of phase and the resultant linear polarization tilts.
- **Use the quarter-wave plate as the universal "linear-to-circular" converter**: align the input polarization at 45° to the optic axis, and the plate's π/2 retardation produces equal-amplitude, 90°-phase-shifted components → circular.

## Anti-patterns

- **Calling "plane of polarization" the plane containing E**: it is actually the plane containing **B** (and k), perpendicular to the plane of vibration (containing E). Historical naming is reversed from modern intuition.
- **Thinking Brewster's angle gives 100% polarized *transmitted* light**: the reflected ray is fully polarized (perpendicular component only); the refracted ray is only *partially* polarized. To fully polarize by refraction, use a *pile of plates* (~35 plates at φ_p) — each plate removes ~15% of the perpendicular component.
- **Confusing Malus's law application for unpolarized vs polarized input**: Malus `I = I_0 cos²θ` assumes *polarized* input of intensity `I_0`. For unpolarized input through a single polarizer, the answer is `I_0/2` regardless of θ; Malus only applies to the second (analyzer) stage.
- **Assuming O-ray and E-ray travel at the same speed**: only along the optic axis do they coincide. Off-axis, `v_E` varies with direction; this is what creates the ellipsoidal wavefront and the birefringent separation.
- **Calling a half-wave plate "wrong" when it doesn't produce circular polarization**: a half-wave plate rotates the plane of polarization by 2θ — it does *not* convert linear to circular. You need a **quarter-wave** plate at 45° incidence for that.
- **Forgetting the wavelength dependence of optical rotation**: `θ ∝ 1/λ²` approximately, so violet rotates much more than red. Don't use white light through sugar solution and expect a clean rotation angle.
- **Mixing the sign conventions for rotation direction**: dextro-rotary is **clockwise** rotation viewed *facing the source*; assigned a **negative** angle by the author's convention. Levo-rotary is **anti-clockwise**, assigned positive.

## Reference Tables

### O-ray vs E-ray
| Property | Ordinary ray (O-ray) | Extraordinary ray (E-ray) |
|---|---|---|
| Snell's law | Obeys | Does **not** obey |
| Wavefront | Spherical | Ellipsoidal (revolution about optic axis) |
| Speed | Same in all directions | Different in different directions |
| Speed in **negative** crystal (calcite) | `v_O < v_E` | `v_E > v_O` |
| Speed in **positive** crystal (quartz) | `v_O > v_E` | `v_E < v_O` |
| Refractive index `μ_O` vs `μ_E` | Defined by speed of O-ray | Uses *max* speed (negative) or *min* speed (positive) |
| Polarization | Vibrations ⊥ principal section | Vibrations ∥ principal section |
| Image on crystal rotation | Stationary | Rotates about the O-image |

### Retardation-plate thicknesses
| Plate | Phase difference `δ` | Path difference `Δ` | Min thickness `t_min` | Effect on plane input |
|---|---|---|---|---|
| Quarter-wave | `(2n+1)π/2` | `(2n+1)λ/4` | `λ/[4(μ_O−μ_E)]` | Linear → circular (if at 45° to optic axis) |
| Half-wave | `(2n+1)π` | `(2n+1)λ/2` | `λ/[2(μ_O−μ_E)]` | Linear → linear, rotated by `2θ` |
| Full-wave | `2nπ` | `nλ` | `nλ/(μ_O−μ_E)` | Identity (no change) |

### Malus / polarizer-analyzer quick reference
| Configuration | Input | Output |
|---|---|---|
| Single polarizer | Unpolarized `I_0` | `I_0/2` (any θ) |
| Parallel Nicols (θ=0°) | Polarized `I_0` | `I_0` |
| Crossed Nicols (θ=90°) | Polarized `I_0` | 0 |
| Intermediate angle θ | Polarized `I_0` | `I_0 cos²θ` |
| Two crossed Nicols rotated to 60° | Unpolarized `I_0` | `(I_0/2)·cos²60° = I_0/8` |

## Key Equations

**Brewster's law** (polarization by reflection):
$$\tan\phi_p = \mu,\qquad \phi_p + \theta_T = 90°$$

**Malus's law** (intensity through analyzer):
$$I = I_0\cos^2\theta$$

**Degree of polarization by pile of plates**:
$$P = \frac{I_\parallel - I_\perp}{I_\parallel + I_\perp}$$

**Refractive indices from wavelengths** (inside birefringent crystal):
$$\lambda_O = \frac{\lambda}{\mu_O},\qquad \lambda_E = \frac{\lambda}{\mu_E}$$

**Retardation phase and path difference**:
$$\Delta = (\mu_O - \mu_E)\,t,\qquad \delta = \frac{2\pi}{\lambda}(\mu_O - \mu_E)\,t$$

**Circular polarization** — superposition of `x = (a/2)cos(ωt)`, `y = (a/2)sin(ωt)`:
$$x^2 + y^2 = \frac{a^2}{2}$$

**Elliptical polarization** — `x = a\cos\theta\sin(ωt + π/2)`, `y = a\sin\theta\sin(ωt)`:
$$\frac{x^2}{a^2\cos^2\theta} + \frac{y^2}{a^2\sin^2\theta} = 1$$

**Optical rotation angle (Fresnel)**:
$$\theta = \frac{\pi\ell}{\lambda}(\mu_R - \mu_L)$$

**Specific rotation (Biot)**:
$$\omega = \frac{10\theta}{\ell \cdot C}\quad[\text{deg·cm}^2/\text{g}]$$

## Worked Example: Quarter-wave plate thickness for sodium light

Find the minimum thickness of a calcite quarter-wave plate for sodium light (`λ = 5890 Å`), given `μ_O = 1.658` and `μ_E = 1.486`.

**Step 1 — Identify the regime.** Calcite is a *negative* uniaxial crystal (`μ_O > μ_E`), so the minimum thickness of the quarter-wave plate is:
$$t_{\min} = \frac{\lambda}{4(\mu_O - \mu_E)}$$

**Step 2 — Substitute.**
$$t_{\min} = \frac{5890 \times 10^{-8}\,\text{cm}}{4 \times (1.658 - 1.486)} = \frac{5.89 \times 10^{-5}}{0.688}\,\text{cm} \approx 8.56 \times 10^{-5}\,\text{cm}$$

**Step 3 — Sanity-check the order of magnitude.** `μ_O − μ_E ≈ 0.17` and `λ/4 ≈ 1.5 × 10⁻⁵ cm`, so we expect `t ≈ 10⁻⁵ cm` — yes, `8.56 × 10⁻⁵ cm` is consistent.

This is the standard "wave plate thickness" pattern: identify positive vs negative crystal, plug `(μ_O − μ_E)` into the right formula with the correct `λ`-fraction in the numerator. Half-wave plate is exactly **2×** this thickness; full-wave plate is 4×.

## Key Takeaways

1. **Only transverse waves polarize** — polarization is the *definitive* test for transversality (longitudinal waves are immune to polarizer-analyzer systems).
2. **Brewster's angle wipes one polarization component on reflection** — `tan φ_p = μ`, so for glass-air it's ~57°; the reflected ray is 100% polarized perpendicular to the plane of incidence.
3. **Use Malus's law at every polarizer-analyzer interface** — `I = I_0 cos²θ` for polarized input, `I_0/2` for unpolarized input through a single polarizer.
4. **Birefringence is the source of wave plates** — a single birefringent crystal cut parallel to its optic axis gives precisely controllable phase retardation; quarter-wave at 45° converts linear to circular, half-wave rotates the polarization plane.
5. **Negative vs positive crystal matters for sign of (μ_O − μ_E)** — calcite: `μ_O > μ_E`; quartz: `μ_E > μ_O`. Always check which type before computing wave-plate thickness.
6. **Fresnel's two-circular-waves model explains optical rotation** — linear polarization = RHC + LHC in phase; if `μ_R ≠ μ_L` in the medium, they emerge out of phase and recombine as rotated linear polarization.
7. **Optical rotation scales as `1/λ²`** — use monochromatic light for measurements; white light smears the rotation angle.

## Connects To

- **Ch 1 (Oscillations and Waves)**: polarization states (linear/circular/elliptical) are direct superpositions of two orthogonal SHMs with controlled phase — the same math as Lissajous figures.
- **Ch 2 (Interference) / Diffraction chapters**: Malus's law and birefringence are prerequisites for many interferometric setups (e.g., Babinet–Soleil compensator, Lyot filter).
- **Ch 6 (EM Waves)**: the "light vector" terminology, plane of vibration vs polarization, all derive directly from Maxwell's equations — `E`, `B`, `k` are mutually perpendicular and the `E`-vector dominates optical phenomena.
- **Ch 13 (Lasers & Optics)**: Brewster windows in laser cavities exploit Brewster's angle to give ~0% reflection loss for the desired polarization — a key loss-reduction technique.
- **External — polarimetry / sugar industry**: Biot's laws + specific rotation underpin the saccharimeter (Laurent's half-shade polarimeter), which measures sugar concentration by optical rotation to within a fraction of a degree.
- **External — crystallography**: positive/negative crystal classification, uniaxial vs biaxial behavior, optic axis orientation are foundational for identifying minerals and designing nonlinear optical crystals.