# Chapter 8: Applications of Quantum Mechanics

## Core Idea
Quantum mechanics reduces to solving the one-dimensional time-independent Schrödinger equation for piecewise-constant potentials, then matching `ψ` and `dψ/dx` across every boundary — and the four canonical cases (free particle, potential step, potential barrier, infinite well) demonstrate every defining quantum effect: non-quantized continuous spectra, partial reflection above classical thresholds, tunneling through classically forbidden regions, and quantization of energy/wavelength/momentum inside confinement.

## Frameworks Introduced

- **Time-independent Schrödinger equation** `d²ψ/dx² + (2m/ħ²)(E − V)ψ = 0`
  - When to use: any 1D bound or scattering problem with definite energy E; replace `(E − V)` with `(V − E)` and `k₀ → i k₁` in classically forbidden zones.
  - How: identify regions of constant V, solve the ODE in each, apply the four boundary conditions (finite ∫ψ*ψ, ψ continuous, dψ/dx continuous, ψ→0 at ±∞), then enforce particle-flux continuity.

- **Free-particle plane-wave superposition** `ψ(x,t) = A e^{i(k₀x − ωt)} + B e^{−i(k₀x + ωt)}` with `k₀ = √(2mE)/ħ`
  - When to use: V = 0 region; energy is continuous (not quantized), `p = ħk₀` (de Broglie).
  - How: first term = right-going wave, second = left-going; intensity from |coefficient|².

- **Potential-step reflection/transmission (Case A: E > V₀)**
  - Reflection coefficient `R = (k − k₀)²/(k + k₀)² = (√(E−V₀) − √E)²/(√(E−V₀) + √E)²`.
  - Transmission coefficient `T = 4E(E−V₀)/(√(E−V₀) + √E)²`.
  - Use when particle has enough energy to classically clear the step.
  - Key surprise: R ≠ 0 even classically — quantum particles partially reflect even when E > V₀.

- **Potential-step below-threshold (Case B: 0 < E < V₀)**
  - Region II becomes evanescent: `ψ₂ = D e^{−k₁x}` with `k₁ = √(2m(V₀−E))/ħ`.
  - R = 1 (all particles reflected), but ψ penetrates a finite distance into the forbidden region with `T = (4k₀²/(k₀²+k₁²)) e^{−2k₁x}`.
  - Use when computing penetration depth or as the building block for tunneling.

- **Potential-barrier tunneling (E < V₀, finite width a)**
  - Exact `T = 1/[1 + (1/4)(k₁/k₀ + k₀/k₁)² sinh²(k₁a)]`.
  - Wide-barrier approximation: `T ≈ e^{−2k₁a}` with `k₁ = √(2m(V₀−E))/ħ`.
  - Use when a particle must traverse a classically forbidden region — gives the alpha-decay rates, STM imaging, tunnel diodes.
  - Key surprise: tunneling probability depends exponentially on barrier width and on `√(m(V₀−E))`.

- **Infinite square well quantization** `E_n = n²π²ħ²/(2ma²)`, `λ_n = 2a/n`, `v_n = nπħ/(ma)`, `ψ_n(x) = √(2/a) sin(nπx/a)`
  - When to use: particle confined between impenetrable walls at x=0 and x=a (V=∞ outside).
  - How: apply boundary conditions ψ(0)=ψ(a)=0 → half-integer half-wavelengths fit → only n=1,2,3,... allowed; ground state has non-zero "zero-point energy" `E₁ = π²ħ²/(2ma²)`.

## Key Concepts

- **Wave function ψ(x,t)**: complex function whose squared modulus |ψ|² gives probability density; must satisfy four conditions (normalizable, continuous, smooth, vanishes at infinity).
- **Boundary conditions**: ψ continuous and `dψ/dx` continuous everywhere (including potential discontinuities); `dψ/dx` may be discontinuous only at points where V = ∞.
- **Steady-state (time-independent) equation**: applies when total energy E is fixed; separates out the factor `e^{−iωt}` with `ω = E/ħ`.
- **Free particle**: V = 0 throughout; spectrum is continuous (not quantized); wave function oscillatory.
- **Probability flux / current density**: `j = ψ*ψ × v = (number of particles crossing unit area per unit time)`.
- **Reflection coefficient R = j_R / j_I, transmission coefficient T = j_T / j_I**: flux ratios; always R + T = 1 for flux conservation.
- **Evanescent wave**: decaying solution `ψ ∝ e^{−k₁x}` in classically forbidden region where E < V; carries no net flux but finite probability density.
- **Tunneling / tunnel effect**: non-zero probability that a particle traverses a classically forbidden barrier of finite width.
- **Quantization in a well**: the wavelength must fit `2a = nλ` (standing-wave condition); this forces discrete E_n ∝ n².
- **Zero-point energy**: minimum possible energy `E₁ ≠ 0` for a confined quantum particle; classical prediction gives zero.
- **Refractive index analogy for potential step**: `µ = v₁/v₀ = √(E−V₀)/√E = √(1 − V₀/E)`; lets you rewrite R and T in optical form.

## Mental Models

- **Think of Schrödinger equation as "wave equation with impedance jumps"**: piecewise-constant V plays the role of refractive-index discontinuities — Fresnel-style R and T, with the difference that classically forbidden regions allow exponential decay instead of total reflection.
- **Use the four boundary conditions as filters**: any candidate ψ that is non-normalizable, discontinuous, or non-smooth gets discarded. This is the only "selection principle" the ODE provides — the constraints are what produce quantization.
- **Use flux (not amplitude) when computing R and T**: `ψ*ψ × v` accounts for the speed change inside the step; using `ψ*ψ` alone gives wrong conservation (R + T ≠ 1).
- **Wide-barrier tunneling is exponential**: a one-nanometer widening of a 1 eV barrier can drop transmission by orders of magnitude. Treat tunneling probability as inherently multiplicative across layered barriers.
- **Infinite-well eigenstates are standing half-wavelengths**: visualize the particle as a de Broglie wave that must have a node at each wall — `λ_n = 2a/n` is the same rule as for a violin string.

## Anti-patterns

- **Assuming a free particle is quantized**: a free particle (V = 0) has continuous energy spectrum; quantization appears only with confinement (V = ∞ on at least one side).
- **Forgetting that R ≠ 0 when E > V₀**: classical intuition says "if energy suffices, particle passes" — quantum mechanics always predicts partial reflection at every potential step.
- **Confusing probability density with flux**: `|ψ|²` alone does not give R and T; you must multiply by local speed v, because a slower particle in region II needs higher density to carry equal current.
- **Setting ψ₂ = 0 inside a classically forbidden region**: this is the classical answer. Quantum mechanics demands `ψ₂ = D e^{−k₁x}` with `D ≠ 0` for finite-width forbidden zones — it is the *root* of tunneling.
- **Believing a particle inside an infinite well can have zero energy**: ground-state energy `E₁ = π²ħ²/(2ma²)` is non-zero ("zero-point energy"); classically E = 0 would be allowed.
- **Applying E_n ∝ n instead of E_n ∝ n²**: the spacing between consecutive levels grows as `(2n+1)E₁`, not as `E₁`; confusions here break all spectroscopy-style sums.

## Reference Tables

### Potential-step regimes

| Case | Energy | Region II solution | R | T |
|---|---|---|---|---|
| A: E ≥ V₀ | Above step | Oscillatory `e^{ikx}` | `(√(E−V₀)−√E)²/(√(E−V₀)+√E)²` | `4E(E−V₀)/(√(E−V₀)+√E)²` |
| B: 0 < E < V₀ | Below step | Evanescent `e^{−k₁x}` | **1** | `(4k₀²/(k₀²+k₁²)) e^{−2k₁x}` (decaying) |
| C: E < 0 | All forbidden | Both imaginary | No valid solution | — |
| D: V₀ → ∞ | Infinite wall | ψ₂ = 0 | 1 | 0; phase shift π/2 between incident and reflected |

### Infinite square well summary

| Quantity | Formula | n dependence |
|---|---|---|
| Wave number | `k₀ = nπ/a` | ∝ n |
| Wavelength | `λ_n = 2a/n` | ∝ 1/n |
| Energy | `E_n = n²π²ħ²/(2ma²) = n²E₁` | ∝ n² |
| Speed | `v_n = nπħ/(ma)` | ∝ n |
| Momentum | `p_n = nπħ/a` | ∝ n |
| Eigenfunction | `ψ_n(x) = √(2/a) sin(nπx/a)` | nodes = n−1 |

### Tunneling: order-of-magnitude rule

| Quantity | Scaling |
|---|---|
| Decay constant `k₁` | `∝ √(m(V₀−E))` |
| Transmission `T` (wide barrier) | `≈ exp(−2 k₁ a)` |
| Most sensitive parameter | Barrier width `a` (linear in exponent) |
| Second-most sensitive | `√(m(V₀−E))` |

## Key Equations

- **Time-dependent Schrödinger (1D)**: `iħ ∂ψ/∂t = −(ħ²/2m) ∂²ψ/∂x² + Vψ`
- **Time-independent Schrödinger (1D)**: `d²ψ/dx² + (2m/ħ²)(E − V)ψ = 0`
- **Free particle dispersion**: `k₀ = √(2mE)/ħ = 2π/λ₀`, energy `E = ħ²k₀²/(2m)`
- **Potential-step reflection (E ≥ V₀)**: `R = (√(E−V₀) − √E)²/(√(E−V₀) + √E)²`
- **Potential-step transmission (E ≥ V₀)**: `T = 4E(E−V₀)/(√(E−V₀) + √E)²`
- **Evanescent decay constant (E < V₀)**: `k₁ = √(2m(V₀ − E))/ħ`
- **Barrier tunneling (exact)**: `T = 1 / [1 + ¼(k₁/k₀ + k₀/k₁)² sinh²(k₁a)]`
- **Barrier tunneling (wide barrier)**: `T ≈ e^{−2 k₁ a}`
- **Infinite well energy eigenvalues**: `E_n = n²π²ħ²/(2ma²)`, n = 1, 2, 3, ...
- **Infinite well eigenfunctions**: `ψ_n(x) = √(2/a) sin(nπx/a)`
- **Refractive-index analogy**: `µ = √(1 − V₀/E) = v₁/v₀`

## Worked Example: Tunneling probability of a 1 eV electron through 0.50 nm barrier

Given: electron energy `E = 1.0 eV = 1.6 × 10⁻¹⁹ J`, barrier height `V₀ = 8.0 eV`, barrier width `a = 0.50 nm = 0.5 × 10⁻⁹ m`.

1. Compute decay constant:
   `k₁ = √(2m(V₀−E))/ħ = (2π/h) √(2m(V₀−E))`
   `= (2π/6.626×10⁻³⁴) √(2 × 9.11×10⁻³¹ × (12.8 − 1.6)×10⁻¹⁹)`
   `= 1.4 × 10¹⁰ m⁻¹`
2. Wide-barrier approximation (since `k₁ a ≈ 7 ≫ 1`):
   `T ≈ e^{−2 k₁ a} = exp(−2 × 1.4×10¹⁰ × 0.5×10⁻⁹) = exp(−14) ≈ 8.3 × 10⁻⁷`
3. Interpretation: about one electron out of 1.2 million tunnels through — tunneling is a weak but real effect for electron-volt-scale barriers of nanometer width.

Practice pattern: any "find tunneling probability" or "how many particles get through" problem follows this three-step recipe (compute `k₁` → plug into `T = e^{−2k₁a}` → interpret as fraction). For wider barriers, swap `e^{−2k₁a}` for the full `cosh/sinh` form.

## Key Takeaways

1. **The time-independent Schrödinger equation is the workhorse** — every chapter-8 problem reduces to solving this ODE in piecewise-constant V regions and matching ψ and dψ/dx at boundaries.
2. **Boundary conditions are the only selection principle**: finite/normalizable, continuous ψ, continuous dψ/dx, vanishing at ±∞. Drop one and you lose quantization or physical meaning.
3. **R + T = 1 always holds when computed with flux** `j = ψ*ψ v`; computing with ψ*ψ alone breaks conservation when speeds differ across the step.
4. **Even classically allowed regions partially reflect** (Case A with E > V₀) — this is purely quantum and has no classical analogue.
5. **Tunneling is exponential in barrier width**: small changes in `a` dominate over changes in `V₀` or `E`; useful for engineering tunneling devices (STM, tunnel diode) and explaining alpha decay.
6. **Infinite-well quantization: `E_n ∝ n²`, λ_n = 2a/n, v_n = nπħ/(ma)`**: half a de Broglie wavelength must fit into the well; ground-state energy is non-zero.
7. **Energy spectrum continuity vs quantization is a geometry statement**: free particle = continuous spectrum; any spatial confinement (walls or barriers) = discrete spectrum.

## Connects To

- **Ch 7 (Quantum Physics)** — provides the postulates, wave-particle duality, and de Broglie relations used throughout.
- **Ch 9 (Hydrogen Atom and Beyond)** — Ch 8 supplies the methodological template (piecewise V, boundary matching); Ch 9 applies it to Coulomb potential and angular-momentum separation.
- **Ch 10 onwards (Semiconductor / Tunneling Devices)** — the `T ≈ e^{−2k₁a}` result is the entry point to tunnel diodes, scanning tunneling microscopy, and Esaki diodes.
- **External: nuclear physics** — alpha decay via Gamow factor is the textbook application of barrier tunneling; quantitatively `T ≈ e^{−G}` where `G ∝ Z√(m_a)·R`.
- **External: optics** — the Fresnel-like R and T for potential steps mirror optical reflection/transmission at index discontinuities, with the forbidden-region case giving "total internal reflection" plus evanescent penetration.
- **Ch 7 (Quantum Physics) — explicit re-statement**: Ch 7 supplies the postulates (state vectors, operators, measurement), the Schr. equation, and the infinite-well / hydrogen-atom results that this chapter generalizes; the "piecewise V" technique of Ch 8 is the practical tool Ch 7's formalism enables.
- **Ch 15 (Crystal Structure)**: an infinite crystal is a periodic potential well — a chain of Ch 8's finite square wells stitched together; Ch 15's Bravais lattice is the geometric statement that makes the periodic potential V(r + R) = V(r) tractable.
- **Ch 25 (Energy Bands)**: the band gap in Ch 25's energy-band diagram is the periodic-extension of Ch 8's finite-barrier tunneling result; standing-wave frequencies that satisfy the Bragg condition (k·G = |G|²/2) open the gap, with Ch 8's wavefunction-matching technique giving the transmission amplitude across each barrier.