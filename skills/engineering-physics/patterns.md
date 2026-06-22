# Patterns — Engineering Physics

Concrete techniques, formulas, and decision rules across all 26 chapters. Format: ## Pattern Name, **When to use**, **How**, **Trade-offs**.

---

## Mechanical–Electrical ODE Isomorphism

**When to use**: any system with a linear restoring force + dissipative drag + possible driver, regardless of physical domain.
**How**: identify `m → L`, `b → R`, `k → 1/C`, `x → q`, `F → V`. Solve once for mass-spring-damper, relabel symbols for LCR circuit.
**Trade-offs**: works perfectly for linear systems; fails for nonlinear regimes (large amplitude, saturation). (Ch 1)

## Three Damping Regimes Switchboard

**When to use**: predicting the response of any second-order linear system to a perturbation.
**How**: compare γ and ω₀: γ < ω₀ → underdamped (oscillates with ω₁ = √(ω₀²−γ²), envelope e^(−γt)); γ = ω₀ → critically damped (fastest non-oscillating return); γ > ω₀ → overdamped (slow exponential).
**Trade-offs**: γ vs ω₀ alone decides everything; no other parameter affects the regime. (Ch 1)

## Quality Factor Trade-Off (Sharpness vs Speed)

**When to use**: deciding Q for resonant systems (filters, oscillators, cavities).
**How**: Q = ω₁/(2γ) = 2π × (energy stored / energy lost per cycle). Doubling Q halves bandwidth AND doubles on-resonance amplitude.
**Trade-offs**: high Q = sharp, slow, selective (laser cavities, quartz); low Q = broad, fast, forgiving (shock absorbers). Cannot pick one without the other. (Ch 1)

## Wave Packet → Group vs Phase Velocity

**When to use**: any problem involving wave propagation through a dispersive medium.
**How**: v_p = ω/k (single sinusoid's crest); v_g = dω/dk (envelope/signal/energy). For two-component packet, v_g = Δω/Δk directly.
**Trade-offs**: equal only in non-dispersive media; in plasma, v_p can exceed c but v_g cannot. Never use v_p for energy transport. (Ch 1, Ch 7)

## Coherence-Checked Superposition

**When to use**: any wave-interaction problem.
**How**: amplitudes add only when sources are coherent (fixed phase relation). For incoherent sources, intensities add. Master equation: I = I₁ + I₂ + 2√(I₁I₂) cos δ; constructive at δ = 2nπ, destructive at δ = (2n+1)π.
**Trade-offs**: incoherent source → always I = I₁ + I₂ (no fringes); energy flows to maxima. (Ch 1, Ch 2)

## Two Coherent-Source Classes (Decision Tree)

**When to use**: selecting the experimental geometry for an interference experiment.
**How**: (1) Division of wavefront (Young, Fresnel biprism, Lloyd's mirror, Billet split lens) — needs point-like source; (2) Division of amplitude (thin films, Newton's rings, interferometers) — needs extended source.
**Trade-offs**: wavefront division → linear fringes with β = λD/2d; amplitude division → concentric fringes from extended source. (Ch 2)

## Optical-Path Phase Counting

**When to use**: predicting fringe position in any interference setup.
**How**: count phase via optical path = μ × geometric path, not geometric path alone. Phase δ = (2π/λ) × path difference. Add π for reflection at denser medium (Stokes' relation).
**Trade-offs**: one π-rule explains why Newton's central spot is dark in reflection but bright in transmission. (Ch 2)

## Newton's-Ring Wavelength Measurement

**When to use**: lab measurement of λ or refractive index μ of an intervening liquid.
**How**: r_n² − r_m² = (n−m)λR; dark rings in reflected light give r_n² = nλR. For liquid: r_n² = nλR/μ.
**Trade-offs**: requires knowing R precisely; robust to uncertainty in contact point because you take differences. (Ch 2)

## Half-Period Zone Construction

**When to use**: any Fresnel diffraction or zone-plate problem.
**How**: concentric annular zones with consecutive edges differing by λ/2. n-th zone amplitude R_n ∝ (1 + cos θ_n). Net unblocked contribution ≈ R₁/2. Zone-plate focal length f = r₁²/λ.
**Trade-offs**: zones work where refractive lenses fail (X-ray, EUV); chromatic — multiple foci at f, f/3, f/5, ... (Ch 3)

## Aperture-to-Pattern Fourier Dictionary

**When to use**: any Fraunhofer diffraction problem.
**How**: pattern = Fourier transform of aperture. Slit → sinc² (single-slit I = I₀(sin α/α)²). Circle → Airy pattern. Central maximum width 2λ/e for slit; first zero at e sin θ = λ.
**Trade-offs**: narrow slit → wide pattern. Resolution ∝ λ/aperture is universal optical limit. (Ch 3)

## Brewster-Angle Polarization by Reflection

**When to use**: design of polarizing beam-splitters, finding polarization angle.
**How**: at φ_p, reflected and refracted rays are perpendicular → tan φ_p = μ. Parallel component cannot reflect (would require longitudinal wave); reflected ray is 100% perpendicular-polarized.
**Trade-offs**: works for one polarization only; glass-air ~57°. (Ch 4)

## Malus's Law at Polarizer Interfaces

**When to use**: any two-stage polarizer system (crossed polars, optical isolators).
**How**: I = I₀ cos²θ for polarized input; I₀/2 for unpolarized input through single polarizer. For unpolarized light, exactly half is transmitted.
**Trade-offs**: crossed polars transmit nothing; analyzer rotated by θ rotates plane polarization by 2θ (half-wave plate). (Ch 4)

## Birefringent Wave Plates

**When to use**: converting linear ↔ circular polarization, or rotating plane of polarization.
**How**: cut crystal parallel to optic axis; O-ray and E-ray accumulate δ = (2π/λ)(μ_O − μ_E)t. Quarter-wave at 45° → circular; half-wave → rotate by 2θ. Minimum thickness t = λ/[4(μ_O − μ_E)] for quarter-wave.
**Trade-offs**: negative crystal (calcite, μ_O > μ_E) vs positive (quartz, μ_E > μ_O) — check type before computing thickness. (Ch 4)

## Fresnel's Two-Circular-Waves Model

**When to use**: explaining optical rotation in quartz, sugar solution.
**How**: linear polarization = RHC + LHC in phase. If μ_R ≠ μ_L, emerge out of phase; recombine as rotated linear polarization. θ = (πℓ/λ)(μ_R − μ_L). θ ∝ ℓ, θ ∝ C, θ ∝ 1/λ².
**Trade-offs**: optical rotation scales as 1/λ² — use monochromatic light; white light smears. (Ch 4)

## Maxwell's Equations Differential ↔ Integral Bridge

**When to use**: any time you need to flip between point-form and surface/loop form.
**How**: Gauss-divergence ∫_V (∇·F) dV = ∮_S F·n̂ ds; Stokes ∮_C F·dℓ = ∫_S (∇×F)·n̂ ds. Apply to convert each Maxwell equation.
**Trade-offs**: integral forms require choosing the right Gaussian surface or Amperian loop; differential forms require coordinate system. (Ch 5)

## Gauss's Law Symmetry Selection

**When to use**: closed-form E for charge distributions.
**How**: pick Gaussian surface where E is constant and parallel to n̂: spherical (point/sphere charge), cylindrical (infinite line), planar (infinite sheet). Evaluate ∮E·ds = q_enc/ε₀.
**Trade-offs**: requires high symmetry; for low-symmetry problems you must resort to numerical integration. (Ch 5)

## Ampère's Law Symmetry Selection

**When to use**: closed-form B for current geometries.
**How**: pick Amperian loop where B is constant and parallel to dℓ: circle around infinite wire, rectangle through solenoid/toroid. Evaluate ∮B·dℓ = μ₀ I_enc.
**Trade-offs**: invalid across a capacitor gap without displacement-current term. (Ch 5)

## Faraday–Lenz with Sign Discipline

**When to use**: emf from time-varying flux (moving coil, changing field).
**How**: emf = −dΦ/dt; sign set by Lenz (opposes cause). Identify Φ as function of t, differentiate.
**Trade-offs**: induced E is non-conservative (∇×E ≠ 0); no scalar potential exists. (Ch 5)

## Displacement-Current Completion

**When to use**: anywhere conduction current is interrupted (capacitor gap).
**How**: I_d = ε₀ dΦ_E/dt; generalized Ampère ∮B·dℓ = μ₀(I_C + I_M + I_d). Without this term, EM waves would not exist.
**Trade-offs**: drop it and you lose light. (Ch 5, Ch 6)

## Poynting Vector Energy Tracking

**When to use**: any closed volume containing time-varying fields, charges, currents.
**How**: P = E×H is instantaneous power density (W/m²). Poynting's theorem: −∂_t[½B·H + ½D·E] = J·E + ∇·P.
**Trade-offs**: gives exact field-theory energy balance. (Ch 6)

## Plane-Wave In-Phase E and H

**When to use**: analyzing EM wave propagation in lossless linear isotropic media.
**How**: E(z,t) = E₀ e^(i(ωt − kz)); H same phase. Intrinsic impedance η = E/H = √(μ/ε); η₀ ≈ 377 Ω in vacuum. k×E = μωH.
**Trade-offs**: phase difference α ≠ 0 is forbidden by Maxwell. (Ch 6)

## Plasma High-Pass Filter

**When to use**: predicting propagation vs reflection in ionized media (ionosphere, metals at UV).
**How**: ω_p = √(Ne²/(ε₀m)). ω > ω_p: propagation, n = √(1 − ω_p²/ω²). ω = ω_p: cutoff. ω < ω_p: evanescent (total reflection). ω ≫ ω_p: n → 1, transparent.
**Trade-offs**: explains why HF signals bounce off ionosphere, satellite TV passes through. (Ch 6)

## Planck's Law as Master Blackbody Formula

**When to use**: any thermal-radiation spectrum or power problem.
**How**: E_λ dλ = (8πhc/λ⁵) · 1/(e^(hc/λkT) − 1) dλ. Wien (low T), Rayleigh–Jeans (high T), Wien displacement (λ_m T = const), Stefan (P ∝ T⁴) all derive from it.
**Trade-offs**: memorize Planck, derive the rest. (Ch 7)

## Einstein Photoelectric Equation

**When to use**: photoelectron kinetic energy, threshold frequency, work function.
**How**: hν = ½m_e v² + w₀; stopping potential V₀ = (hν − w₀)/e. Read w₀ from negative y-intercept × e; h from slope × e; ν₀ = w₀/h.
**Trade-offs**: requires monochromatic light; works for bound electrons. (Ch 7)

## Compton Shift Formula

**When to use**: wavelength of scattered X-ray photon.
**How**: Δλ = λ_C(1 − cos θ), λ_C = h/(m₀c) = 0.02426 Å. Max shift at θ = 180° (Δλ = 2λ_C); zero at 0°.
**Trade-offs**: treats photon-electron as relativistic two-body elastic collision. (Ch 7)

## de Broglie Wavelength for Matter

**When to use**: matter-wave wavelength of electrons, neutrons; Davisson–Germer analysis.
**How**: λ = h/p = h/(mv) non-relativistic; λ = hc/√(K(K+2m₀c²)) relativistic. Group velocity v_g = v; phase velocity v_p ≠ v.
**Trade-offs**: vacuum is dispersive for matter waves (unlike photons). (Ch 7)

## Bohr Hydrogen Spectrum

**When to use**: hydrogen spectral lines, ionization energy.
**How**: r_n = (h²n²)/(4π²mke²); E_n = −13.6/n² eV; L = nħ. Transition frequency ν = R_H c (1/n₁² − 1/n₂²), R_H = 1.097×10⁷ m⁻¹.
**Trade-offs**: fails for fine structure and multi-electron atoms (need Schrödinger). (Ch 7)

## Schrödinger as Workhorse ODE

**When to use**: any 1D bound or scattering problem with definite energy.
**How**: solve d²ψ/dx² + (2m/ħ²)(E − V)ψ = 0 in piecewise-constant V regions; apply four BCs (finite ∫ψ*ψ, continuous ψ and dψ/dx, ψ→0 at ±∞). Replace k₀ → ik₁ in forbidden zones.
**Trade-offs**: postulate, not derivable. (Ch 7, Ch 8)

## Potential-Step and Barrier Library

**When to use**: tunneling (alpha decay, STM), reflection/transmission (tunnel diode).
**How**: E > V₀: R = (k−k₀)²/(k+k₀)², T = 4E(E−V₀)/(√(E−V₀)+√E)². E < V₀: evanescent, R = 1. Finite barrier: T ≈ e^(−2k₁a) wide-barrier; T = 1/[1 + (1/4)(k₁/k₀ + k₀/k₁)² sinh²(k₁a)] exact.
**Trade-offs**: tunneling probability exponential in barrier width — small changes in a dominate over changes in V₀ or E. (Ch 8)

## Infinite Square Well Quantization

**When to use**: simplest bound-state problem.
**How**: E_n = n²π²ħ²/(2ma²); ψ_n(x) = √(2/a) sin(nπx/a). Half-integer half-wavelengths fit; ground-state zero-point energy E₁ = π²ħ²/(2ma²) ≠ 0.
**Trade-offs**: classical prediction of E=0 is wrong; geometry alone forces quantization. (Ch 8)

## Lorentz Transformation (γ as Single Switch)

**When to use**: any claim about what different inertial observers measure.
**How**: γ = 1/√(1−v²/c²). Length contracts by γ, time dilates by γ, momentum and energy grow by γ. Compute γ first; everything follows.
**Trade-offs**: inverse transformation swaps primed/unprimed and replaces v with −v. (Ch 9)

## Proper-Quantity Bookkeeping

**When to use**: every relativity problem.
**How**: proper length ℓ₀ measured in rod's rest frame (the maximum); proper time Δt₀ measured in clock's rest frame (the minimum). Moving observer divides by γ (length) or multiplies by γ (time).
**Trade-offs**: reverse the formula and you get a wrong answer. (Ch 9)

## Relativistic Velocity Addition (c as Hard Cap)

**When to use**: composing speeds measured by different observers along the line of motion.
**How**: u_x = (u_x′ + v)/(1 + u_x′v/c²). Perpendicular components carry extra γ: u_y = u_y′/[γ(1 + u_x′v/c²)].
**Trade-offs**: Galilean u+v over-estimates; the 1 + uv/c² denominator pulls result below c. (Ch 9)

## Sabine Reverberation Formula

**When to use**: any enclosed space where you need to predict/set how long sound lingers.
**How**: T = 0.165V/∑α_i s_i (V in m³). Tabulate every surface and its α_i (open window = 1.0 Sabin); compute total absorption A = ∑α_i s_i; plug in.
**Trade-offs**: open-window = 1 Sabin is universal yardstick. T = 0.5–1 s for speech, 1–2 s for music. (Ch 10)

## Three Ultrasonic Generation Methods

**When to use**: choosing source for kHz–MHz ultrasonics.
**How**: (1) Galton's whistle — air column, λ = 4(ℓ+x). (2) Magnetostriction — ferromagnetic rod driven at 2× AC frequency. (3) Piezoelectric quartz — Hartley oscillator at crystal natural frequency ν = v/(2t).
**Trade-offs**: piezoelectric is workhorse (stable, MHz-range). All require drive frequency matching natural frequency. (Ch 11)

## Cavitation Threshold (Stable vs Transient)

**When to use**: designing any ultrasonic liquid process — cleaning, emulsification, sonochemistry.
**How**: 1–3 W/cm²: stable bubbles (gentle mixing). >10 W/cm²: transient cavitation (bubble collapse → microreactor at ~5000 K, ~2000 atm, 280 m/s jets).
**Trade-offs**: six parameters control cavitation: frequency, intensity, solvent, temperature, external pressure, dissolved gas. (Ch 11)

## Acoustic Grating for λ Measurement

**When to use**: measuring wavelength of ultrasound in a liquid.
**How**: stationary ultrasonic waves create alternating density planes spaced by λ_uw/2. Light diffracts: d sin θ_n = nλ_L → λ_uw = 2nλ_L/sin θ_n. Combined with known frequency, gives v.
**Trade-offs**: textbook method; needs monochromatic light. (Ch 11)

## Six-Method NDT Decision Tree

**When to use**: picking NDT method for a given flaw.
**How**: classify material (ferrous/non-ferrous/non-conductor), then flaw depth (surface/near-surface/internal), then access (single-sided/both sides). Visual → Dye penetrant → Magnetic particle → Eddy current → Radiography → Ultrasonic. UT and RT are the only methods that see internal flaws.
**Trade-offs**: skill ceiling varies dramatically — UT and RT need high operator skill. (Ch 12)

## Pulse–Echo Ultrasonic Ranging

**When to use**: single-sided thickness or flaw-depth measurement.
**How**: ℓ = (1/2) v Δt. Launch short pulse, time round trip Δt to interface or flaw, divide by 2. Calibrate time base against reference block of same material.
**Trade-offs**: requires couplant (liquid between probe and part). (Ch 12)

## Eddy-Current Impedance Sensing

**When to use**: surface/near-surface flaws in electrical conductors only.
**How**: AC-driven coil induces eddy currents; flaw changes coil impedance. No physical contact needed.
**Trade-offs**: conductors only; sensitive to alloy, hardness, conductivity. (Ch 12)

## Dye-Penetrant Bleed-Out

**When to use**: surface-breaking flaws in non-ferromagnetic, non-conductive parts.
**How**: clean → apply penetrant (15 min) → remove excess → apply developer → developer draws penetrant from crack → read visually or under UV.
**Trade-offs**: cheap fallback; not for ferrous/electrically-conductive parts. (Ch 12)

## Two Acceleration Principles (E vs B)

**When to use**: choosing accelerator architecture.
**How**: E-field one-shot (E_k = qV, energy limited by insulation); B-field repeated (E_k = B²R²q²/(2m), energy limited by magnet + radius).
**Trade-offs**: E for single large push; B for many small steps around closed orbit. (Ch 13)

## DC vs RF Accelerator Classification

**When to use**: selecting accelerator type.
**How**: DC builds single high voltage, charge crosses once (Cockcroft–Walton, Van de Graaff, Tandem). RF applies moderate AC across gaps repeatedly (linac, cyclotron, synchrotron, betatron).
**Trade-offs**: DC for steady monoenergetic beams up to ~10 MeV; RF for higher energies and pulsed beams. (Ch 13)

## Cyclotron Resonance Condition

**When to use**: any cyclic accelerator where particle crosses gap repeatedly.
**How**: ν = qB/(2πm). Lock r.f. frequency to match orbital frequency so ion always meets right-polarity dee.
**Trade-offs**: requires constant m (non-relativistic regime). (Ch 13)

## Betatron Condition (Constant-Radius Induction)

**When to use**: induction accelerator confining electrons to constant-radius orbit while accelerating.
**How**: B_G = ½⟨B⟩; shape pole pieces so guiding field on orbit equals half average flux density over orbit area. Then d(mv)/dt = re·dB_G/dt matches e/(2πr)·dφ_B/dt.
**Trade-offs**: circular electron accelerators are radiation-limited (U ∝ E⁴/r). (Ch 13)

## Tandem Doubling (Charge-Stripping Trick)

**When to use**: heavy-ion acceleration with terminal voltage bottleneck.
**How**: inject negative ion → accelerate to +V terminal → strip 2 e⁻ → positive ion accelerated again. Effective energy gain = (q₁ + q₂)V from single V.
**Trade-offs**: example: oxygen at V = 5 MV yields 5 + 40 = 45 MeV. (Ch 13)

## Coherence-Length Holography Constraint

**When to use**: judging whether a light source can record a hologram of extended 3D object.
**How**: path difference between reference and scattered object rays must remain less than source's longitudinal coherence length throughout exposure. Ordinary light ~μm (only right-against-plate). Laser ~km.
**Trade-offs**: holography sat dormant 1948–1960 (Gabor → laser). (Ch 14)

## Off-Axis Holography (Leith-Upatnieks)

**When to use**: any practical hologram today; overcomes in-line conjugate-image overlap.
**How**: reference beam at non-zero angle β to object beam; separates diffracted orders spatially. Fringe pitch p = λ/sin β; for He-Ne (λ = 632.8 nm) and β = 20°, p ≈ 1.85 μm → ~540 lines/mm needed.
**Trade-offs**: requires high-resolution emulsion. (Ch 14)

## Double-Exposure Holographic Interferometry

**When to use**: sub-wavelength deformation/vibration/stress measurement without contact.
**How**: expose plate once in state A, re-expose same plate in state B with same reference wave. Reconstruction produces two superimposed wavefronts → fringe patterns map displacement field.
**Trade-offs**: works for stress, magnetic/electric fields, heat. (Ch 14)

## Lattice + Basis Construction

**When to use**: describing any crystal.
**How**: smallest repeated unit (primitive cell) + basis of atoms. Three primitive translation vectors a₁, a₂, a₃; volume V = a₁·(a₂×a₃).
**Trade-offs**: diamond is two interpenetrating FCCs offset by a/4 along body diagonal — basis is two atoms. (Ch 15)

## Miller-Indices Recipe

**When to use**: identifying any crystal plane intersecting three crystallographic axes.
**How**: (1) shift origin if plane passes through it; (2) find intercepts (p, q, r); (3) fractional intercepts (p/a₁, q/a₂, r/a₃); (4) reciprocate; (5) reduce to smallest integers.
**Trade-offs**: plane parallel to axis → intercept is ∞ → index is 0. (Ch 15)

## Bragg's Law with Interplanar Spacing

**When to use**: relating X-ray wavelength, glancing angle, and interplanar spacing.
**How**: 2d_{hkl} sin θ = nλ; for cubic d_{hkl} = a/√(h²+k²+ℓ²). Constraint λ < 2d for diffraction to occur. Use 1:2 (θ:2θ) geometry in spectrometer.
**Trade-offs**: one equation in three unknowns (d, θ, n) — combine with d-formula and wavelength to fully determine. (Ch 15, Ch 17)

## Reciprocal Lattice Central Theorem

**When to use**: when many sets of planes exist and you want a single unified picture.
**How**: define b_i = 2π(a_j × a_k)/V (cyclic). Δk = G (scattering normal equals reciprocal lattice vector). |G| = 2π/d_{hkl}.
**Trade-offs**: use 2π-physics convention consistently; crystallographers often drop 2π. (Ch 15, Ch 17)

## Defect Classification by Dimensionality

**When to use**: deciding which imperfection governs a property (mechanical, electrical, optical).
**How**: 0D point → 1D line (dislocation) → 2D surface (grain boundary) → 3D volume. Match defect to property: colour → colour centres; ionic conductivity → Schottky/Frenkel; plasticity → dislocations; low-T strength → grain boundaries.
**Trade-offs**: higher-dimensional defects usually arise by clustering of lower-dimensional. (Ch 16)

## Schottky vs Frenkel Pairing (Ionic Crystals)

**When to use**: any ionic solid where charge neutrality must be preserved.
**How**: Schottky = paired cation + anion vacancies (both ions leave for surface). Frenkel = one ion vacates and sits on interstitial nearby (almost always cation since anions are too large).
**Trade-offs**: never see a lone vacancy in NaCl; always paired. (Ch 16)

## Burgers Vector Dislocation Identity

**When to use**: characterizing any line defect; predicting slip direction and elastic energy.
**How**: walk closed loop (Burgers circuit) around defect in perfect crystal — closure fails by vector b. Edge: b ⊥ t̂. Screw: b ∥ t̂. Mixed: neither. Energy scales as Gb².
**Trade-offs**: smallest Burgers vector preferred — explains why dislocations split into partials. (Ch 16)

## Hall–Petch Grain-Boundary Strengthening

**When to use**: predicting mechanical strength of polycrystal at ambient temperature.
**How**: smaller grains → more boundary area per volume → boundaries block dislocation motion → higher yield strength. σ_y = σ₀ + k/√d.
**Trade-offs**: reverses at high T (corrosion weakens boundaries). (Ch 16)

## Duane–Hunt Short-Wavelength Limit

**When to use**: any "shortest wavelength" X-ray problem.
**How**: λ_min = hc/(qV) = 12400/V (Å). Independent of target Z; sets highest-frequency cutoff.
**Trade-offs**: memorize 12400/V; remember independent of Z. (Ch 17)

## Moseley's Law Element Identification

**When to use**: identifying unknown elements from K_α wavelength or verifying periodic-table ordering.
**How**: ν = Rc(1/n₁² − 1/n₂²)(Z − σ)². For K-series use σ = 1. For K_α-line: λ = 4/[3R(Z−1)²]. Plot √ν vs Z → straight line.
**Trade-offs**: diagnostic tool; single relationship that justified modern periodic table. (Ch 17)

## Powder (Debye–Scherrer) Method

**When to use**: sample is polycrystalline / only available as powder / nanoparticles < 10 μm.
**How**: random orientations guarantee some crystallites satisfy Bragg for every d-spacing → cone of half-angle 2θ → arcs/rings on cylindrical film. Compute θ_i = 90°·l_i/(πD) from arc spacing l_i on film of drum diameter D.
**Trade-offs**: works without single crystal; loses orientation information. (Ch 17)

## Two-Force Bond Model (Attraction + Pauli Repulsion)

**When to use**: any analysis of why atoms stick at a specific separation.
**How**: F_A = +A/r^i (attractive), F_R = −B/r^j (repulsive, j ≈ 9–12). Equilibrium r₀ where F_A + F_R = 0. Lennard-Jones U(r) = −C/r^m + D/r^n.
**Trade-offs**: repulsion origin is Pauli exclusion — NOT Heisenberg, NOT Coulomb of like charges. (Ch 18)

## 8−N Covalent Bonding Rule

**When to use**: predicting molecular geometry and stoichiometry of covalent solids.
**How**: maximum covalent partners = 8 − N (valence electrons). Examples: Cl (N=7) → 1 bond (Cl₂); C (N=4) → 4 bonds (diamond, CH₄); H (N=1) → 1 bond.
**Trade-offs**: predicts both molecular geometry and crystal structure. (Ch 18)

## Three Van der Waals Sub-Forces (All 1/r⁶)

**When to use**: ranking relative contribution to total VdW energy.
**How**: Keesom (permanent ↔ permanent, T-dependent), Debye (permanent ↔ induced, T-independent), London (instantaneous ↔ induced, omnipresent, dominates in noble gases).
**Trade-offs**: London always present; Keesom only when both molecules polar. (Ch 18)

## Directionality Controls Packing Density

**When to use**: predicting whether a solid will be loose- or close-packed.
**How**: directional bonds (covalent, hydrogen) → loose-packed, lower density. Non-directional (ionic, metallic, VdW) → close-packed. If solid is unexpectedly light, suspect directional bonding.
**Trade-offs**: secondary bonds weak but property-dominant — H-bonds raise water BP by ~200 °C. (Ch 18)

## Magnetic Parameter Master Relation

**When to use**: classifying any material's response to H; converting between B, H, M, χ_m, μ_r.
**How**: B = μ₀H + μ₀M, μ_r = 1 + χ_m. Read off χ_m from one quantity, derive the rest.
**Trade-offs**: sign and magnitude of χ_m is the only diagnostic needed. (Ch 19)

## Curie–Weiss Master Formula

**When to use**: paramagnetic regime of any magnetic material.
**How**: χ_m = C/(T − T_C) (ferromagnet above T_C) or T_N (antiferromagnet). Linearize Langevin/Brillouin at a ≪ 1; only difference is the offset.
**Trade-offs**: applies uniformly in paramagnetic phase. (Ch 19)

## Hysteresis Loop Material Selection

**When to use**: selecting ferromagnetic materials for permanent magnets vs transformer cores.
**How**: loop area = energy lost/cycle; M_r (remnant) and B_C (coercive) classify hard vs soft. Bloch-wall motion drives the loop.
**Trade-offs**: hard magnets (large area) for permanent magnets; soft magnets (small area) for transformer cores. (Ch 19)

## Three Critical Limits Framework (T_C, B_C, J_C)

**When to use**: any engineering decision about superconducting device operation.
**How**: superconductor only persists when all three stay below critical values. Cross any one threshold → instant collapse to normal state. Operating point must lie inside critical surface in (T, B, J) space.
**Trade-offs**: engineering superconductivity = finding operating point inside the surface. (Ch 20)

## Type-I vs Type-II Selection

**When to use**: selecting materials for magnets, high-field applications.
**How**: Type-I expels field completely up to B_C then collapses abruptly (B_C < 0.1 T, "soft"). Type-II allows flux penetration as vortices between B_C1 and B_C2 (B_C2 ~30 T observed, "hard"). Only type-II is useful for high-field engineering.
**Trade-offs**: type-I limited to demonstrations; type-II is engineering choice. (Ch 20)

## BCS + London Macroscopic Pairing

**When to use**: understanding T_C, isotope effect, energy gap, penetration depth.
**How**: BCS: phonon-mediated attractive interaction → Cooper pair of coherence length ξ → all pairs condense into single quantum ground state. London equations give B(x) = B₀ e^(−x/λ) decay.
**Trade-offs**: λ → ∞ as T → T_C, mirroring vanishing of N_s. (Ch 20)

## Complex Refractive Index Master Handle

**When to use**: any optical property of a material.
**How**: n_c = n − ib. Once you know n(ω) and b(ω), reflectivity, refraction, transmission, and absorption coefficients all derive. R = ((n₂−n₁)/(n₂+n₁))² for dielectrics; generalized for complex index.
**Trade-offs**: dielectric form vs metal form differ in restoring force term. (Ch 21)

## Quantum Absorption Cutoff

**When to use**: predicting which photon energies a non-metal can absorb.
**How**: hν ≥ E_g; rewrite as λ_max = hc/E_g. Beyond this, material is transparent.
**Trade-offs**: explains UV transparency of alkali metals when ω > ω_p. (Ch 21)

## Two-Surface Transmission Factor

**When to use**: design of windows, filters, fiber segments.
**How**: I_T = I₀ (1−R)² e^(−γℓ). Factor (1−R)² for two surface losses, exponential absorption through thickness.
**Trade-offs**: never omit second-surface reflection. (Ch 21)

## Population Inversion + Optical Resonator (Two Conditions for Lasing)

**When to use**: any laser design problem.
**How**: (1) Population inversion N₂ > N₁ achieved by pumping into metastable state (τ ~ 10⁻³ s vs 10⁻⁸ s normal). (2) Optical resonator: two parallel mirrors (mλ/2 = L), one fully reflecting. Mode spacing Δν = c/(2Lμ).
**Trade-offs**: without inversion no lasing; without resonator only amplified spontaneous emission. (Ch 22)

## Three-Level vs Four-Level Laser Schemes

**When to use**: choosing laser architecture.
**How**: Three-level (ruby): pump E₀ → E₂ (fast decay) → atoms accumulate in metastable E₁ → laser E₁ → E₀; needs >50% inversion, high threshold. Four-level (He-Ne, Nd:YAG): add lower level E′ above ground → laser ends above ground → only N_E1 > N_E′, easy to maintain.
**Trade-offs**: four-level enables CW operation with low threshold. (Ch 22)

## Direct vs Indirect Band-Gap Recombination

**When to use**: deciding whether a material can make an efficient LED.
**How**: Direct gap (GaAs, InP): CB minimum and VB maximum at same k → emits photon efficiently. Indirect gap (Si): different k → must involve phonon → usually non-radiative.
**Trade-offs**: silicon cannot make efficient LEDs because of momentum mismatch. (Ch 22)

## Fiber Light-Gathering (NA)

**When to use**: fiber coupling design.
**How**: NA = n₁ sin θ_a = √(n₁² − n₂²) = n₁√(2Δ), Δ = (n₁² − n₂²)/(2n₁²). Only rays with θ < θ_a (typically ~11° for silica) propagate. Acceptance angle = 2θ_a.
**Trade-offs**: bigger NA = easier coupling, more modal dispersion. Graded-index or single-mode for long-distance high-bit-rate. (Ch 22)

## Clausius–Mossotti for Condensed Matter

**When to use**: bridging atomic α and macroscopic ε_r in liquids and solids.
**How**: (ε_r − 1)/(ε_r + 2) = Nα/(3ε₀). For gases: ε_r = 1 + Nα/ε₀ (skip local field correction).
**Trade-offs**: requires cubic symmetry; for gases the gas formula suffices. (Ch 23)

## Three-Polarization Decomposition

**When to use**: every dielectric characterization.
**How**: α = αₑ + αᵢ + α₀. αₑ = 4πε₀R³ (∝ atomic radius cubed, UV). αᵢ = (e²/ω₀²)(1/m₊ + 1/m₻) (IR). α₀ = μ_p²/(3kT) (only polar, falls as 1/T).
**Trade-offs**: at optical frequencies only αₑ survives → ε_r_e = n² (Lorentz–Lorenz). (Ch 23)

## Loss Tangent Frequency Selection

**When to use**: any AC regime where field frequency competes with natural response time.
**How**: tan δ = ε″/ε′; electronic/ionic follow driven-damped-oscillator (peak α″ at ω = ω₀); orientation follows Debye relaxation (peak ε″ at ωτ = 1).
**Trade-offs**: low loss for capacitors; high loss for microwave ovens. (Ch 23)

## Piezoelectric/Pyroelectric/Ferroelectric Hierarchy

**When to use**: classifying non-centrosymmetric crystals.
**How**: 32 crystal classes → 11 centrosymmetric (no piezo) → 21 non-centrosymmetric (all piezo) → 10 with unique polar axis (also pyroelectric) → subset is ferroelectric.
**Trade-offs**: ferroelectric = bistable polarization + hysteresis; subset of both with reversibility. (Ch 23)

## Master 3D-Box + Pauli Pipeline

**When to use**: every transport coefficient in the Sommerfeld model.
**How**: Schrödinger → standing waves → quantum numbers (n_x, n_y, n_z) ≥ 1 → count states in k-space → fill to ε_F.
**Trade-offs**: only Fermi-surface electrons matter for transport. (Ch 24)

## Fermi-Dirac Master Distribution

**When to use**: probability that energy level ε is occupied at T.
**How**: F(ε) = 1/(e^((ε−ε_F)/kT) + 1). At T = 0: F = 1 below ε_F, F = 0 above. At any T: F(ε_F) = 1/2.
**Trade-offs**: the +1 (Pauli) distinguishes FD from Bose (−1) and MB (absent). (Ch 24)

## Hall Effect for Carrier Identification

**When to use**: identifying carrier type (electron vs hole), measuring concentration.
**How**: current I along +X, B along +Z; charge accumulates until eE_H = evB. R_H sign: negative for n-type, positive for p-type.
**Trade-offs**: Hall magnitude measures concentration; sign identifies type. (Ch 24)

## Bloch Wavefunction Template

**When to use**: any QM problem set inside a crystal lattice.
**How**: write ψ_k(x) = u_k(x) e^(ikx); u_k(x) is periodic with lattice period a. Enforce continuity of ψ and ψ′ across unit-cell boundaries.
**Trade-offs**: plane-wave assumption is wrong inside a crystal. (Ch 25)

## Kronig–Penney Master Equation

**When to use**: mathematical condition separating allowed from forbidden energies.
**How**: (P sin k₀a)/(k₀a) + cos k₀a = cos ka, P = mV₀ab/ħ². Plot LHS vs k₀a; allowed ranges where it stays within [−1, +1].
**Trade-offs**: P → ∞ → infinite well; P → 0 → free parabola. Real solids live in between. (Ch 25)

## Material Classification by Filling + Gap

**When to use**: predicting electrical behavior from band diagram alone.
**How**: (a) Cu-like metal — Fermi level inside partially filled band; (b) Mg-like — filled VB overlaps empty CB; (c) insulator — full VB, E_g ≳ 5 eV; (d) semiconductor — full VB, E_g ~ 1 eV, Fermi level mid-gap.
**Trade-offs**: chemistry is irrelevant; only filling + gap matter. (Ch 25)

## Effective Density of States at Band Edges

**When to use**: any "how many carriers per cm³ at T?" calculation.
**How**: N_C = 2(2πm_e*kT/h²)^(3/2); N_V = 2(2πm_h*kT/h²)^(3/2). Then n = N_C exp[−(ε_F − E_C)/kT], p = N_V exp[−(E_V − ε_F)/kT].
**Trade-offs**: requires effective mass and Fermi level position. (Ch 26)

## Hydrogenic Donor/Acceptor Model

**When to use**: estimating E_d or E_a and Bohr radius r_d/r_a of bound carrier.
**How**: replace vacuum ε₀ by ε_r ε₀ and m by m*; gives E_d ≈ 0.02 eV in Si, r_d ≈ 31 Å.
**Trade-offs**: simple template; works for shallow impurities. (Ch 26)

## Majority-Carrier Concentration (Extrinsic Regime)

**When to use**: any doped material in extrinsic regime (essentially all donors/acceptors ionized).
**How**: n ≈ N_d for n-type, p ≈ N_a for p-type. More precisely n = (2N_d)^(1/2)(2πm_e*kT/h²)^(3/4) exp(−ΔE/2kT).
**Trade-offs**: n ∝ √N_d, T^(3/4), exp(−ΔE/2kT). (Ch 26)

## Fermi-Level Migration Tracking

**When to use**: drawing n-type or p-type band diagram; crossing into intrinsic regime destroys doping design.
**How**: at T = 0: ε_F = ½(E_C + E_d) for n-type, ½(E_a + E_V) for p-type. Offset: ε_F_e − ε_F_i = kT ln(N_d⁺/n_i). With rising T, migrates from donor level toward mid-gap.
**Trade-offs**: ε_F is a position sensor, not a fixed object. (Ch 26)
