---
name: engineering-physics
description: Comprehensive physics skill covering oscillations, optics, electromagnetism, quantum mechanics, relativity, acoustics, ultrasonics, NDT, accelerators, holography, and condensed-matter physics (crystal structure, defects, X-rays, bonding, magnetism, superconductivity, optical/electronic/semiconductor properties). Use when reasoning about physical systems, designing measurements, classifying materials, or applying named laws (Bragg, Brewster, Malus, Moseley, Sabine, Kronig–Penney, BCS, Bloch, etc.).
---

# Engineering Physics

**Authoritative distillation of a 26-chapter engineering-physics curriculum (Vol 1: oscillations through holography; Vol 2: crystals through semiconductors).** Optimized for engineering reasoning — every named law is preserved with its author's exact name, every formula is given in canonical form, every classification has its decision rule.

---

## How to Use This Skill

1. **Identify the chapter(s)** that cover your problem domain via the Chapter Index below.
2. **Pull named frameworks** from this SKILL.md (Core Frameworks section) for the most-frequent laws.
3. **Drill into supporting files** for breadth:
   - `glossary.md` — every significant term with definition and chapter
   - `patterns.md` — concrete techniques, formulas, decision rules with trade-offs
   - `cheatsheet.md` — judgment-heavy tables, thresholds, tells & smells
4. **Solve**: identify the governing equation, the regime (e.g., Fresnel vs Fraunhofer, Type-I vs Type-II), then apply the formula directly.

---

## Core Frameworks & Mental Models

### 1. Universal Oscillator Equation (Ch 1)

`ẍ + 2γẋ + ω₀²x = F(t)/m` — governs mass-spring-damper AND LCR circuit. Regimes: γ < ω₀ underdamped, = critical, > overdamped. Q = ω₁/(2γ) trades sharpness vs bandwidth. v_g = dω/dk carries signal; v_p = ω/k is mathematical.

### 2. Two-Source Interference Master (Ch 2)

`I = I₁ + I₂ + 2√(I₁I₂) cos δ`; constructive at δ = 2nπ, destructive at (2n+1)π. Coherence non-negotiable — split one source. Wavefront division (Young, λD/2d) vs amplitude division (thin films, Newton's rings `r_n² = nλR`). Add π for reflection at denser medium (Stokes' relation).

### 3. Diffraction = Huygens + Interference (Ch 3)

Fresnel (finite distance, half-period zones, R_n ∝ (1+cos θ_n)) vs Fraunhofer (Fourier, I = I₀(sin α/α)² for slit). Grating `(a+b) sin θ = nλ`, R = nN. Zone plate f = r₁²/λ.

### 4. Polarization Toolkit (Ch 4)

Brewster `tan φ_p = μ`; Malus `I = I₀ cos²θ`. Wave plates δ = (2π/λ)(μ_O − μ_E)t. Optical rotation θ = (πℓ/λ)(μ_R − μ_L); ∝ 1/λ².

### 5. Maxwell + Displacement Current (Ch 5, 6)

∇·D = ρ, ∇·B = 0, ∇×E = −∂B/∂t, ∇×H = J + ∂D/∂t. Displacement current `I_d = ε₀ dΦ_E/dt` makes EM waves exist. Plane wave: E ⊥ H ⊥ k, η = E/H, η₀ ≈ 377 Ω. Poynting vector P = E×H.

### 6. Quantum Foundations (Ch 7)

Planck `E_λ = 8πhc/λ⁵ · 1/(e^(hc/λkT)−1)`; photoelectric `hν = ½m_e v² + w₀`; Compton `Δλ = λ_C(1−cos θ)`, λ_C = 0.02426 Å; de Broglie `λ = h/p`. Bohr `L = nħ`, `E_n = −13.6/n² eV`. Heisenberg `Δx·Δp ≥ ħ/2` is wave-kinematic.

### 7. Schrödinger as Workhorse (Ch 8)

`d²ψ/dx² + (2m/ħ²)(E − V)ψ = 0`. BCs: finite ∫ψ*ψ, continuous ψ and ψ′. Tunneling T ≈ e^(−2k₁a); infinite well `E_n = n²π²ħ²/(2ma²)`, zero-point energy.

### 8. Special Relativity (Ch 9)

γ = 1/√(1−v²/c²) is the single switch: ℓ = ℓ₀/γ, Δt = γΔt₀, p = γm₀v, E = γm₀c² = K + m₀c². Proper length = max, proper time = min. Velocity addition `u_x = (u_x′ + v)/(1 + u_x′v/c²)` enforces c-cap.

### 9. Sabine Architectural Acoustics (Ch 10)

`T = 0.165V/∑α_i s_i` (V in m³). 1 Sabin = 1 m² open window. T = 0.5–1 s for speech, 1–2 s for music. Quieting: source → path → receiver chain.

### 10. Ultrasonic Generation (Ch 11)

Galton (air column), magnetostriction (ferromagnetic rod at 2× drive), piezoelectric quartz (Hartley, MHz, workhorse). Cavitation: stable 1–3 W/cm², transient >10 W/cm² → ~5000 K / ~2000 atm. Sonar `h = vt/2`.

### 11. NDT Method Selection (Ch 12)

Material × flaw-depth × access matrix. UT and RT only methods that see internal flaws. Pulse–echo `ℓ = (1/2) v Δt`. Magnetic particle needs ≥2 orthogonal magnetizations.

### 12. Accelerator Principles (Ch 13)

E-field one-shot (E_k = qV, insulation-limited); B-field repeated (E_k = B²R²q²/(2m)). Cyclotron ν = qB/(2πm); betatron B_G = ½⟨B⟩; tandem doubles via charge stripping. U ∝ E⁴/r limits circular electrons.

### 13. Holography = Record Intensity AND Phase (Ch 14)

Interference converts phase → intensity. Reference + object on plate → diffracted orders reconstruct virtual image. Off-axis (Leith-Upatnieks) separates conjugate; fringe pitch p = λ/sin β. Coherence length must exceed path difference.

### 14. Crystal Structure (Ch 15)

Lattice + basis. Miller = reciprocals of fractional intercepts. APF: SC 0.52 < BCC 0.68 < FCC = HCP 0.74; diamond outlier 0.34. Bragg `2d_{hkl} sin θ = nλ`; cubic `d = a/√(h²+k²+ℓ²)`. Reciprocal: Δk = G, |G| = 2π/d.

### 15. Defect Classification (Ch 16)

0D → 1D → 2D → 3D. Schottky (paired vacancies) vs Frenkel (vacancy + interstitial). Burgers b: edge (b ⊥ t̂), screw (b ∥ t̂). Hall–Petch: smaller grains → stronger (low T).

### 16. X-Ray Spectroscopy (Ch 17)

Duane–Hunt `λ_min = 12400/V` Å (independent of Z). Moseley `√ν ∝ (Z − σ)`; K-series σ = 1, K_α `λ = 4/[3R(Z−1)²]`. Mass absorption `μ/ρ = kλ³Z³`. Powder (Debye–Scherrer) for polycrystals.

### 17. Bonding (Ch 18)

Primary: ionic, covalent, metallic. Secondary: hydrogen, VdW. Repulsion = Pauli (NOT Coulomb). `U(r) = −C/r^m + D/r^n`. 8−N rule for covalent stoichiometry. All VdW decay as 1/r⁶.

### 18. Magnetic Materials (Ch 19)

B = μ₀H + μ₀M, μ_r = 1 + χ_m. Five classes by χ_m: dia (universal, T-indep, Larmor ω_L = eB/2m), para (Curie χ = C/T), ferro (Curie–Weiss χ = C/(T − T_C), spontaneous below T_C). Hysteresis area = energy lost/cycle.

### 19. Superconductivity (Ch 20)

R = 0 AND Meissner (χ = −1). Three critical limits (T_C, B_C, J_C). Type-I (B_C ≤ 0.1 T) vs Type-II (B_C2 ~ 30 T, engineering choice). BCS phonon-mediated Cooper pairs, gap ~3.53 k_B T_C. London: B(x) = B₀ e^(−x/λ). SQUID = most sensitive magnetometer.

### 20. Optical Properties (Ch 21)

n_c = n − ib. R = ((n₂−n₁)/(n₂+n₁))². Skin depth δ = √(2/μσω). Quantum cutoff hν ≥ E_g. Three transition types: direct inter-band, indirect (phonon), intra-band (metals).

### 21. Lasers (Ch 22)

Two conditions: N₂ > N₁ (metastable, τ ~ 10⁻³ s) + optical resonator (mλ/2 = L). Three-level (ruby, >50% inversion) vs four-level (He-Ne, easy). Direct gap required for LEDs — Si can't. Fiber NA = n₁√(2Δ).

### 22. Dielectrics (Ch 23)

α = αₑ + αᵢ + α₀ (electronic UV, ionic IR, orientation GHz). Clausius–Mossotti `(ε_r−1)/(ε_r+2) = Nα/(3ε₀)`. Loss tangent `tan δ = ε″/ε′` peaks at ωτ = 1 or ω = ω₀. 32 classes → 11 centrosymmetric → 21 piezo → 10 pyro → subset ferroelectric.

### 23. Sommerfeld Free-Electron (Ch 24)

3D box + Pauli: Schrödinger → standing waves → k-space counting → fill to ε_F. Fermi–Dirac `F(ε) = 1/(e^((ε−ε_F)/kT)+1)`. ε_F0 = (h²/8m)(3N₀/π)^(2/3). Hall sign: − for n-type, + for p-type.

### 24. Band Structure (Ch 25)

Bloch ψ_k = u_k e^(ikx). Kronig–Penney `(P sin k₀a)/(k₀a) + cos k₀a = cos ka`. Allowed bands widen, forbidden narrow, both narrow with P. Class by filling + gap: conductor, insulator (E_g ≳ 5 eV), semiconductor (E_g ~ 1 eV).

### 25. Semiconductors (Ch 26)

Intrinsic `n_i ∝ T^(3/2) exp(−E_g/2kT)`. Dopant levels ~0.02 eV (hydrogenic model). Extrinsic: n ≈ N_d, p ≈ N_a. ε_F migrates toward mid-gap as T rises. Always both carriers in σ_i.

---

## Chapter Index

| # | Chapter | Volume | Key Topics |
|---|---|---|---|
| 1 | Oscillations and Waves | 1 | Oscillator ODE, damping regimes, Q factor, wave packets, Heisenberg |
| 2 | Interference | 1 | Coherence, division of wavefront/amplitude, Young, Newton's rings |
| 3 | Diffraction | 1 | Fresnel/Fraunhofer, half-period zones, gratings, zone plates |
| 4 | Polarization | 1 | Brewster, Malus, birefringence, wave plates, optical activity |
| 5 | Electromagnetism | 1 | Maxwell, Gauss, Ampère, Faraday, displacement current |
| 6 | Electromagnetic Waves | 1 | Wave equation, Poynting, EM spectrum, plasma propagation |
| 7 | Elementary Quantum Physics | 1 | Blackbody, photoelectric, Compton, de Broglie, Bohr |
| 8 | Applications of Quantum Mechanics | 1 | Schrödinger, particle in box, tunneling, harmonic oscillator |
| 9 | Special Relativity | 1 | Postulates, Lorentz, time dilation, length contraction, E=mc² |
| 10 | Architectural Acoustics | 1 | Reverberation, Sabine formula, absorption, echelon effect |
| 11 | Ultrasonics | 1 | Piezoelectric, magnetostriction, cavitation, NDT applications |
| 12 | Non-Destructive Testing | 1 | UT, eddy current, radiography, dye penetrant, magnetic particle |
| 13 | Nuclear Accelerators | 1 | Cyclotron, synchrotron, Van de Graaff, linac, betatron |
| 14 | Holography | 1 | Recording, reconstruction, off-axis, reflection/transmission |
| 15 | Crystal Structure | 2 | Lattice, unit cell, Miller indices, Bravais lattices, packing |
| 16 | Defects in Crystals | 2 | Point/line/surface, Schottky, Frenkel, dislocations, grain boundaries |
| 17 | X-rays | 2 | Bragg, Laue/powder, X-ray spectra, Moseley |
| 18 | Bonding in Solids | 2 | Ionic/covalent/metallic, VdW, hydrogen, Madelung constant |
| 19 | Magnetic Properties | 2 | Dia/para/ferromagnetism, Curie, hysteresis, domains |
| 20 | Superconductivity | 2 | Meissner, critical field, Type I/II, BCS, Josephson, SQUID |
| 21 | Optical Properties | 2 | Absorption, emission, luminescence, fluorescence, lasers |
| 22 | Optoelectronic Devices | 2 | Photoconductor, photovoltaic, LED, photodiode, solar cell, fiber |
| 23 | Dielectric Materials | 2 | Polarization, ε_r, ferroelectric, piezoelectric, loss tangent |
| 24 | Electronic Theory of Solids | 2 | Drude, free electron, Fermi energy, density of states |
| 25 | Energy Bands in Solids | 2 | Bloch, Kronig–Penney, band gap, effective mass, direct/indirect |
| 26 | Semiconductors | 2 | Intrinsic/extrinsic, n/p-type, Hall effect, drift, Fermi level |

---

## Topic Index (alphabetical)

- **Accelerators** → Ch 13
- **Acoustic grating (Debye–Sears)** → Ch 11
- **Allotropy / Polymorphism** → Ch 18
- **Atomic Packing Factor (APF)** → Ch 15
- **BCS theory** → Ch 20
- **Bloch's theorem** → Ch 25
- **Bohr model** → Ch 7
- **Bragg's law** → Ch 15, Ch 17
- **Bravais lattice** → Ch 15
- **Brewster's law** → Ch 4
- **Cavitation** → Ch 11
- **Coherence** → Ch 2, Ch 14
- **Compton effect** → Ch 7
- **Cooper pair** → Ch 20
- **Critical field B_C** → Ch 20
- **Critical temperature T_C** → Ch 19, Ch 20, Ch 23
- **Crystal defects (Schottky, Frenkel, dislocations)** → Ch 16
- **Curie's law / Curie–Weiss law** → Ch 19, Ch 23
- **de Broglie wavelength** → Ch 7
- **Dielectric constant / polarization** → Ch 23
- **Diffraction (Fresnel/Fraunhofer)** → Ch 3
- **Displacement current** → Ch 5
- **Domain (Bloch wall)** → Ch 19
- **Drude model** → Ch 24
- **Effective mass** → Ch 26
- **Einstein A/B coefficients** → Ch 22
- **Electromagnetic induction (Faraday, Lenz)** → Ch 5
- **Energy bands** → Ch 25
- **Extrinsic semiconductor** → Ch 26
- **Fermi–Dirac distribution** → Ch 24, Ch 26
- **Fermi energy / level** → Ch 24, Ch 25, Ch 26
- **Ferroelectric** → Ch 23
- **Fiber optics (NA, step/graded)** → Ch 22
- **Four-level laser** → Ch 22
- **Franck–Hertz (implied)** → Ch 7
- **Fraunhofer diffraction** → Ch 3
- **Free electron model** → Ch 24
- **Fresnel diffraction / zones** → Ch 3
- **Fresnel's equations (reflection)** → Ch 21
- **Galton's whistle** → Ch 11
- **Gauss's law** → Ch 5
- **Grating (diffraction)** → Ch 3
- **Group / phase velocity** → Ch 1, Ch 7
- **Hall effect** → Ch 24, Ch 26
- **Heisenberg uncertainty** → Ch 1, Ch 7
- **Holography (in-line, off-axis, transmission, reflection)** → Ch 14
- **Huygens' principle** → Ch 2, Ch 3
- **Hydrogen atom (Bohr, Schrödinger)** → Ch 7, Ch 8
- **Insulator vs conductor vs semiconductor** → Ch 25, Ch 26
- **Interference (Young, Newton's rings)** → Ch 2
- **Josephson effect / SQUID** → Ch 20
- **Kronig–Penney model** → Ch 25
- **Laser (three-level, four-level, resonator)** → Ch 22
- **Lattice + basis** → Ch 15
- **LED / photodiode** → Ch 22
- **Length contraction** → Ch 9
- **Lorentz transformation** → Ch 9
- **Magnetic susceptibility** → Ch 19
- **Magnetostriction** → Ch 11
- **Malus's law** → Ch 4
- **Mass–energy E = mc²** → Ch 9
- **Maxwell's equations** → Ch 5, Ch 6
- **Meissner effect** → Ch 20
- **Miller indices** → Ch 15
- **Modulation (implied)** → Ch 22
- **Mössbauer (implied)** → Ch 17
- **Moseley's law** → Ch 17
- **NDT (six core methods)** → Ch 12
- **Newton's rings** → Ch 2
- **Optical activity / rotation** → Ch 4
- **Optical fiber** → Ch 22
- **Optical rotation (Fresnel, Biot)** → Ch 4
- **Oscillator ODE** → Ch 1
- **Paramagnetism / ferromagnetism** → Ch 19
- **Phonon** → Ch 18, Ch 20, Ch 21
- **Photoelectric effect** → Ch 7
- **Piezoelectric effect** → Ch 11, Ch 23
- **Planck's law** → Ch 7
- **Plasma frequency / propagation** → Ch 6
- **Polarization (Malus, Brewster, birefringence)** → Ch 4
- **Population inversion** → Ch 22
- **Poynting vector** → Ch 6
- **Quality factor Q** → Ch 1
- **Quantum numbers / operators** → Ch 7
- **Quasi-momentum (implied)** → Ch 25
- **Reciprocal lattice** → Ch 15
- **Relativistic mass / momentum / energy** → Ch 9
- **Reverberation (Sabine formula)** → Ch 10
- **Schottky / Frenkel defects** → Ch 16
- **Schrödinger equation** → Ch 7, Ch 8
- **Sonar / fathometer** → Ch 11
- **Stokes' relation (π phase shift)** → Ch 2
- **Stopping potential** → Ch 7
- **Superconductivity (Type I, II)** → Ch 20
- **Three-level laser** → Ch 22
- **Time dilation** → Ch 9
- **Tunneling** → Ch 8
- **Twin paradox** → Ch 9
- **Two-source interference** → Ch 2
- **Ultrasonics (generation, NDT)** → Ch 11, Ch 12
- **Van der Waals forces** → Ch 18
- **Wave plate (quarter/half)** → Ch 4
- **X-rays (Bragg, Moseley, Duane–Hunt)** → Ch 17
- **Young's interference / slits** → Ch 2
- **Zone plate** → Ch 3

---

## Supporting Files

- `glossary.md` — Every significant term, alphabetical, with chapter reference.
- `patterns.md` — Concrete techniques, formulas, decision rules with trade-offs.
- `cheatsheet.md` — Author's judgment: decision rules, comparison tables, thresholds, tells & smells.

---

## Scope & Limits

**In scope**: Classical mechanics of oscillators and waves, all of optics (interference, diffraction, polarization), electromagnetism, EM waves, quantum mechanics (foundations + applications), special relativity, acoustics, ultrasonics, NDT, accelerators, holography, condensed-matter physics (crystals → semiconductors), optoelectronics, superconductivity, magnetic and dielectric materials.

**Out of scope**: General relativity, nuclear/particle physics beyond accelerators, statistical mechanics (only via Maxwell–Boltzmann and Fermi–Dirac), fluid dynamics, advanced optics (Fourier methods beyond basics), quantum field theory, materials processing.

**Authoritative naming**: All named laws are preserved in their canonical form (Brewster's Law, Malus's Law, Stokes' relation, Moseley's Law, Kronig–Penney model, BCS theory, Bloch's theorem, etc.). Variants or paraphrases are avoided.

**Mathematical level**: SI units; LaTeX formulas; assumes calculus and differential equations background.
