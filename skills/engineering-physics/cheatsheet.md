# Cheatsheet — Engineering Physics

Author's judgment distilled: decision rules, comparison tables, trade-off matrices, thresholds, tells & smells.

---

## Decision Rules

| Question | Decision Rule | Ch |
|---|---|---|
| Is this material conducting? | Band filling + E_g decide: Cu-like (partial) → conductor; Mg-like (overlap) → conductor; full VB + E_g ≳ 5 eV → insulator; full VB + E_g ~ 1 eV → semiconductor | 25, 26 |
| Coherent or incoherent? | One source split by reflection/refraction/diffraction = coherent. Two independent sources = always incoherent. | 2 |
| Wavefront or amplitude division? | Division of wavefront = point source + slits. Division of amplitude = extended source + thin films. | 2 |
| Fresnel or Fraunhofer? | Source/screen at finite distance = Fresnel (half-period zones). Source/screen at infinity (or focal plane of lenses) = Fraunhofer (Fourier). | 3 |
| Type-I or Type-II superconductor? | Need B_C2 ~ 30 T → must be Type-II. Type-I limited to B_C ≤ 0.1 T. | 20 |
| Three-level or four-level laser? | Want CW with low threshold → four-level. Need >50% inversion → three-level (ruby). | 22 |
| Can this material make an LED? | Direct gap (GaAs, InP, GaN family) → yes. Indirect gap (Si) → no, momentum mismatch forces non-radiative recombination. | 22 |
| Two-level system → laser? | Need a metastable state (τ ~ 10⁻³ s vs 10⁻⁸ s normal). No metastable → no inversion possible. | 22 |
| NDT method? | Material × flaw-depth × access matrix. UT and RT are the only methods that see internal flaws. | 12 |
| Polarizing angle? | tan φ_p = μ; reflected ray 100% polarized perpendicular to plane of incidence. | 4 |
| What is the proper quantity? | Proper length = rest frame (maximum). Proper time = rest frame (minimum). Moving frame divides/multiplies by γ. | 9 |
| Add velocities relativistically? | u_x = (u_x′ + v)/(1 + u_x′v/c²); Galilean form over-estimates. | 9 |
| Predict plasma propagation? | ω > ω_p → propagation. ω = ω_p → cutoff. ω < ω_p → evanescent (total reflection). | 6 |
| Predict damping regime? | γ < ω₀ → underdamped. γ = ω₀ → critically damped. γ > ω₀ → overdamped. | 1 |
| Predict optical regime for material? | ω vs ω_p (metals) or ω vs ω₀ (dielectrics) — divide line between normal and anomalous dispersion. | 21 |
| Predict wave transport speed? | Group velocity v_g = dω/dk carries signal/energy. Phase velocity v_p can exceed c without violating relativity. | 1, 7 |
| Compute deflection in EM problem? | Symmetry first — pick Gaussian surface or Amperian loop where field is constant. | 5 |
| Recognize ferroelectric vs piezoelectric vs pyroelectric? | 32 classes → 11 centrosymmetric (no piezo) → 21 piezo → 10 with polar axis (pyro) → subset is ferroelectric. | 23 |
| Predict reactor shielding/filtering? | Lower-Z materials preferentially absorb K_β over K_α → monochromatization by filtration. | 17 |

---

## Material Classification

### Solid-State Conductors (Ch 25, 26)

| Class | Band filling | E_g | Examples |
|---|---|---|---|
| Metal (Cu-like) | Fermi level inside partially filled band | 0 | Cu, Ag, Au |
| Metal (Mg-like) | Filled VB overlaps empty CB | 0 | Mg, Be, Zn |
| Insulator | Full VB, empty CB | ≳ 5 eV | Diamond (~7 eV), quartz |
| Semiconductor | Full VB, empty CB | 0.2–2.5 eV | Si (1.1), Ge (0.67), GaAs (1.43) |

### Magnetic Materials (Ch 19)

| Class | χ_m sign | Behavior | Examples |
|---|---|---|---|
| Diamagnetic | Negative, small | Universal, T-independent | Au, Ag, Cu, Bi |
| Paramagnetic | Small positive | χ = C/T | Al, Pt, O₂ (gas) |
| Ferromagnetic | Large positive | Spontaneous below T_C | Fe (1043 K), Co (1394 K), Ni (631 K) |
| Antiferromagnetic | Small positive | χ peaks at T_N | MnO, NiO |
| Ferrimagnetic | Large positive | Anti-aligned unequal moments | Ferrites |

### Superconductors (Ch 20)

| Class | B_C | Behavior | Use |
|---|---|---|---|
| Type-I | ≤ 0.1 T | Complete flux expulsion until abrupt collapse | Demonstrations |
| Type-II (hard) | B_C2 ~ 30 T | Flux penetrates as vortices between B_C1 and B_C2 | Magnets, coils, motors |

### Bond Types (Ch 18)

| Type | Sub-type | Origin | Directional | Strength |
|---|---|---|---|---|
| Primary | Ionic | Electron transfer | No | Strong |
| Primary | Covalent | Shared electrons | Yes | Strong |
| Primary | Metallic | Electron sea | No | Strong |
| Secondary | Hydrogen | Polarization + H bridge | Yes | Weak |
| Secondary | Van der Waals | Polarization | No | Weakest |

### Optical Fiber Types (Ch 22)

| Type | NA range | Modal dispersion | Use |
|---|---|---|---|
| Step-index multimode | High (~11°) | Dominant bandwidth limit | Short links |
| Graded-index multimode | High | Minimized via parabolic n(r) | Medium links |
| Single-mode | Low | None | Long-distance high-bit-rate |

---

## Thresholds & Constants

### Universal Thresholds

| Quantity | Value | Ch |
|---|---|---|
| Speed of light c | 3 × 10⁸ m/s = 1/√(μ₀ε₀) | 6 |
| Rydberg constant R_H | 1.097 × 10⁷ m⁻¹ | 7 |
| Bohr magneton μ_B | 9.27 × 10⁻²⁴ A·m² | 19 |
| Compton wavelength (electron) | 0.02426 Å | 7 |
| Hydrogen ground state E₁ | −13.6 eV | 7 |
| Si donor/acceptor levels | ~0.02 eV from band edge | 26 |
| Si Bohr radius (donor) | ~31 Å | 26 |
| Plasma frequency (alkali UV) | ω_p ~ 10¹⁵ Hz | 21 |
| Damping frequency (metal) | ω_d ~ 10¹² Hz | 21 |
| Sound speed (air, 20 °C) | 340 m/s | 10 |
| Intrinsic impedance vacuum η₀ | ≈ 377 Ω | 6 |
| Lorentz number L | 2.45 × 10⁻⁸ WΩK⁻² | 24 |

### Useful Mnemonics

| Formula | Shortcut | Ch |
|---|---|---|
| Duane–Hunt limit | λ_min (Å) = 12400/V | 17 |
| Photon-energy conversion | λ (Å) = 12400/E (eV) | 22 |
| Sabine reverberation | T = 0.165V/∑α_i s_i | 10 |
| Cavitation transient threshold | >10 W/cm² | 11 |
| Lorentz factor | γ = 1/√(1 − v²/c²) | 9 |
| Holography pitch | p = λ/sin β | 14 |
| BCS energy gap | 3.53 k_B T_C at T = 0 | 20 |
| 8−N rule (covalent) | Max partners = 8 − N | 18 |
| VdW decay | All 1/r⁶; macroscopic 1/d or 1/d² | 18 |

---

## Comparison Tables

### Damping Regimes (Ch 1)

| Condition | Name | Solution | Behavior |
|---|---|---|---|
| γ = 0 | Undamped | A cos(ω₀t + φ) | Eternal oscillation |
| 0 < γ < ω₀ | Underdamped | A e^(−γt) cos(ω₁t + φ) | Decaying oscillation |
| γ = ω₀ | Critically damped | (A + Bt) e^(−γt) | Fastest non-oscillating return |
| γ > ω₀ | Overdamped | A₁ e^(p₁t) + A₂ e^(p₂t) | Slow exponential return |

### Mechanical ↔ Electrical Analogy (Ch 1)

| Mechanical | Electrical |
|---|---|
| Mass m | Inductance L |
| Damping b | Resistance R |
| Spring k | 1/C |
| Displacement x | Charge q |
| Velocity dx/dt | Current i = dq/dt |
| Force F | EMF V |
| ω₀ = √(k/m) | 1/√(LC) |

### Progressive vs Stationary Waves (Ch 1)

| Property | Progressive | Stationary |
|---|---|---|
| Source | Single oscillation | Two counter-propagating identical |
| Net energy flux | Yes | No |
| Nodes | None | Permanent (zero amplitude) |
| Phase across medium | Continuous change | Same within segment, π flip across nodes |
| All at mean position simultaneously | No | Yes (different velocities) |

### Relativistic vs Newtonian (Ch 9)

| Quantity | Newtonian | Relativistic | Ratio |
|---|---|---|---|
| Length ℓ | ℓ₀ | ℓ₀/γ | ÷γ |
| Time Δt | Δt₀ | γΔt₀ | ×γ |
| Momentum p | m₀v | γm₀v | ×γ |
| Mass m | m₀ | γm₀ | ×γ |
| Total energy E | ½m₀v² | γm₀c² | ×γ in E |
| Rest energy | 0 | m₀c² | — |

### Quantum Step Scattering (Ch 8)

| Case | Behavior | R | T |
|---|---|---|---|
| E > V₀ (above barrier) | Partial reflection even classically allowed | (k−k₀)²/(k+k₀)² | 4E(E−V₀)/(√(E−V₀)+√E)² |
| 0 < E < V₀ (single step) | Evanescent in region II | 1 | Evanescent decay |
| E < V₀ (finite barrier a) | Tunneling | — | ≈ e^(−2k₁a) wide barrier |

### X-Ray Spectra (Ch 17)

| Component | Origin | Intensity | Position |
|---|---|---|---|
| Continuous (Bremsstrahlung) | Multi-step electron deceleration | A·Z·V² broad | λ_min = 12400/V |
| Characteristic K_α | L→K transition | Sharp line | Element-specific |
| Characteristic K_β | M→K transition | Sharp line | Element-specific, removed by filter |

### Accelerators (Ch 13)

| Type | Principle | Use |
|---|---|---|
| Van de Graaff / Cockcroft–Walton | DC, single high V | Monoenergetic up to ~10 MeV |
| Tandem | DC + charge stripping | Doubles effective energy |
| Cyclotron | RF + constant B | Non-relativistic ions |
| Synchrocyclotron | RF + decreasing ν, fixed B | Relativistic heavy ions |
| Synchrotron | RF + increasing B, fixed ν | Electrons, very high energies |
| Betatron | Induction, B_G = ½⟨B⟩ | Constant-radius electron orbit |
| Linac (drift tube) | RF + drift tubes | Linear geometry |

### Loss Tangent Behavior (Ch 23)

| Polarization | Frequency regime | Behavior at optical frequency |
|---|---|---|
| Electronic αₑ | UV | Survives |
| Ionic αᵢ | IR | Filtered out |
| Orientation α₀ | GHz | Filtered out |
| Total at optical | ε_r_e = n² | Lorentz–Lorenz equation |

### Packing and Geometry (Ch 15)

| Structure | Coordination | Atoms/cell | APF | r-a relation |
|---|---|---|---|---|
| SC | 6 | 1 | 0.52 | 2r = a |
| BCC | 8 | 2 | 0.68 | 4r = √3 a |
| FCC | 12 | 4 | 0.74 | 4r = √2 a |
| HCP | 12 | 6 | 0.74 (ideal) | c/a = √(8/3) ≈ 1.633 |
| Diamond | 4 | 8 | 0.34 (open) | Tetrahedral |

---

## Tells & Smells

| Symptom | Likely Cause | Ch |
|---|---|---|
| Visibility of fringes but no shift with mirror | Coherent but monochromatic requirement not met | 14 |
| Information "travels at v_p" claim | Wrong — group velocity carries signal | 1 |
| Displacement resonance claimed at ω₀ | Wrong — only velocity resonance hits ω₀; displacement peaks at √(ω₀² − 2γ²) | 1 |
| Inferred conductivity from static χ | Forgot T-dependence; Curie law only in a ≪ 1 regime | 19 |
| Loss tangent quoted without frequency | Each polarization peaks at different ω; need to specify | 23 |
| Bad "silicon LED" | Indirect band gap — momentum mismatch forces non-radiative | 22 |
| Wrong answer for n-type σ | Missing μ_p; intrinsic conductivity includes both carriers | 26 |
| Round-trip sonar reading used directly | Forgot the divide by 2 — signal goes down and back | 11 |
| Wrong crystal "density" prediction | Wrong structure (SC vs BCC vs FCC); check r-a relation | 15 |
| Plasma frequency miscomputed | Forgot the ½ exponent: ω_p = √(Ne²/ε₀m) | 6 |
| Wrong Maxwell sign | Lenz's law — induced emf always opposes its cause | 5 |
| "Heisenberg from measurement" | Wrong — it's a wave-kinematic theorem (Δk·Δx ≥ 1/2) | 1, 7 |
| "Time dilation favors traveling twin" | Symmetric in inertial segment; non-inertial turn-around breaks symmetry | 9 |
| E = mc² used as conversion | Wrong — every body already carries m₀c²; it's an identity, not a recipe | 9 |
| Mysterious Cu ferrite magnetization | Material is ferrimagnetic, not ferromagnetic | 19 |
| Tunneling T independent of barrier width | Wrong — T is exponential in width; dominates over V₀ or E | 8 |
| Laser threshold energy underestimated | Forgot that three-level needs >50% inversion; use four-level instead | 22 |
| Coherent power loss in fiber | Modal dispersion, not absorption — switch to single-mode | 22 |
| Strange VdW 1/r² or 1/r³ force | Wrong — pair potentials decay as 1/r⁶; macroscopic geometry gives 1/d or 1/d² | 18 |
| DC accelerator above 10 MeV | Voltage insulation breakdown — switch to RF | 13 |
| Inaccurate NDT thickness | Forgot to calibrate against reference block; v varies by mode and material | 12 |
| Wrong photoelectric slope | Photoelectron slope gives h/e; not h directly | 7 |
| Coherence length too short for hologram | Need laser; ordinary light ~μm, He-Ne ~km | 14 |
| "Repulsion is Coulomb" | Wrong — Pauli exclusion principle, not Coulomb of like charges | 18 |
| Missing π phase at reflection | Stokes' relation: denser medium adds π, rarer adds nothing | 2 |
| Solid's density doesn't match APF prediction | Directional bonding (covalent/H) — won't pack close | 18 |

---

## Holography Comparison (Ch 14)

| Aspect | In-line (Gabor) | Off-axis (Leith-Upatnieks) | Reflection | Transmission |
|---|---|---|---|---|
| Reference angle β | 0 | Non-zero | ~180° | Small |
| Image quality | Conjugate overlaps | Separated | Viewable in white light | Requires laser |
| Required plate resolution | Low | High (~540 lines/mm for He-Ne) | Very high (thick emulsion) | Lower |
| Fringe spacing | — | p = λ/sin β | ~λ/2 ≈ 0.3 μm | 1–10 μm |
| Practical use | Historical | Standard today | White-light displays | Lab quality |

---

## Laser Schemes (Ch 22)

| Property | Three-level (Ruby) | Four-level (He-Ne, Nd:YAG) |
|---|---|---|
| Pump level | E₂ (fast decay) | E₂ (fast decay) |
| Upper laser level | E₁ (metastable) | E₁ (metastable) |
| Lower laser level | E₀ (ground) | E′ (above ground) |
| Inversion requirement | N_E1 > ½N_total (>50%) | N_E1 > N_E′ (easy) |
| Threshold | High | Low |
| CW operation | Difficult | Possible |

---

## Trade-off Matrices

### Q Factor Trade-off (Ch 1)

| High Q | Low Q |
|---|---|
| Sharp resonance, narrow bandwidth | Broad resonance, fast decay |
| Slow decay, high selectivity | Forgiving, broadband |
| Laser cavities, quartz crystals | Shock absorbers, door dampers |

### Bandwidth vs Cost (Ch 22)

| Fiber | Cost | Bandwidth | Use |
|---|---|---|---|
| Step-index multimode | Low | Low (modal dispersion) | Short |
| Graded-index | Medium | Medium | LAN |
| Single-mode | High | Very high | Long-distance |

### Accelerator Trade-offs (Ch 13)

| Parameter | DC | Cyclotron | Synchrotron | Betatron |
|---|---|---|---|---|
| Max energy | Low (~10 MeV) | Mid (B²R²) | High | Mid |
| Beam quality | Excellent | Good | Good | Good |
| Pulsed/continuous | Both | Pulsed | Pulsed | Pulsed |
| Particle type | Any | Heavy ions | Electrons preferred | Electrons only |

### NDT Method × Capability (Ch 12)

| Method | Surface | Near-surface | Internal | Ferromagnetic only? |
|---|---|---|---|---|
| Visual/optical | ✓ | – | – | – |
| Dye penetrant | ✓ | – | – | – |
| Magnetic particle | ✓ | ✓ | – | Yes |
| Eddy current | ✓ | ✓ | – | No (conductors only) |
| Radiography | – | ✓ | ✓ | – |
| Ultrasonic | – | ✓ | ✓ | – |
