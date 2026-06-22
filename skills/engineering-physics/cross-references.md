# Cross-References Index — Engineering Physics

A navigation guide for the 26 chapters of the engineering-physics skill. Use this index to:
- Pick a **reading path** for a specific engineering goal.
- Trace a **concept chain** from foundations to applications.
- See at a glance how every chapter is connected to every other.

---

## Chapter Clusters

The 26 chapters group naturally into **five topical clusters** that mirror how the field is taught and engineered.

### Cluster 1: Wave Mechanics & Optics (Foundations)
- **Description**: The mathematical machinery of waves — superposition, interference, diffraction, polarization — that every later cluster either applies or re-derives from Maxwell's equations.
- **Members**:
  - **Ch 1 (Oscillations and Waves)** — the universal oscillator ODE; wave packets, group/phase velocity, Heisenberg as a wave-packet theorem.
  - **Ch 2 (Interference)** — coherent superposition; Young's double-slit, Fabry-Perot, thin films.
  - **Ch 3 (Diffraction)** — single-slit, grating, Fresnel zones; Rayleigh criterion.
  - **Ch 4 (Polarization)** — Malus's law, birefringence, optical activity, Jones vectors.
- **Internal structure**:
  - **Gateway**: Ch 1 (every later chapter assumes oscillator + wave-packet fluency).
  - **Extensions**: Ch 2 → Ch 3 → Ch 4 are each other's "the next phenomenon you must explain."

### Cluster 2: Wave-Based Engineering Applications
- **Description**: Where the wave-optics foundations from Cluster 1 meet built environments, medicine, and industry.
- **Members**:
  - **Ch 10 (Architectural Acoustics)** — Sabine's formula, reverberation time, noise control.
  - **Ch 11 (Ultrasonics)** — piezoelectric transducers, sonar, medical imaging.
  - **Ch 12 (Non-Destructive Testing)** — ultrasonic, eddy-current, radiographic flaw detection.
  - **Ch 14 (Holography)** — Gabor zone plates, interference recording, diffraction playback.
- **Internal structure**:
  - **Gateway**: Ch 10 (the most accessible, low-frequency analog of the cluster).
  - **Extensions**: Ch 11 → Ch 12 (transducer physics → inspection workflow); Ch 14 (the most demanding coherence requirement — sits at the apex of the cluster).

### Cluster 3: Electromagnetism & Quantum Foundations
- **Description**: The relativistic + quantum underpinning of all matter-light interaction; the bridge from Cluster 1's classical waves to Cluster 5's materials.
- **Members**:
  - **Ch 5 (Electromagnetism)** — Maxwell's equations, vector potential, radiation.
  - **Ch 6 (Electromagnetic Waves)** — wave solutions to Maxwell in vacuum, conductors, dielectrics.
  - **Ch 7 (Elementary Quantum Physics)** — Bohr, de Broglie, Schrödinger, hydrogen atom, band-gap origin.
  - **Ch 8 (Applications of Quantum Mechanics)** — potential step, barrier tunneling, harmonic oscillator applications.
  - **Ch 9 (Special Theory of Relativity)** — Lorentz transform, mass-energy equivalence, relativistic dynamics.
  - **Ch 13 (Nuclear Accelerators)** — electrostatic, cyclotron, synchrotron, linear accelerators.
- **Internal structure**:
  - **Gateway**: Ch 5 (the Maxwell-equations bedrock).
  - **Extensions**: Ch 6 (wave consequences of Ch 5) → Ch 7 (quantum jump from Ch 1's wave packets) → Ch 8 (engineering use of Ch 7) → Ch 9 (relativistic frame for Ch 5/6) → Ch 13 (engineering use of Ch 5 + Ch 9 for charged particles).

### Cluster 4: Condensed-Matter Structure & Bonding
- **Description**: How atoms arrange into solids and what holds them there — the geometric and chemical pre-requisites for Cluster 5's properties.
- **Members**:
  - **Ch 15 (Crystal Structure)** — Bravais lattices, Miller indices, reciprocal lattice, Brillouin zones.
  - **Ch 16 (Defects in Crystals)** — point, line, planar defects; dislocations; their mechanical/electrical consequences.
  - **Ch 17 (X-rays)** — production, Bragg diffraction, Laue method, X-ray characterization of structure.
  - **Ch 18 (Bonding in Solids)** — ionic, covalent, metallic, van der Waals, hydrogen; cohesive energy.
- **Internal structure**:
  - **Gateway**: Ch 15 (every later chapter assumes you can read a Miller index).
  - **Extensions**: Ch 16 (defects that complicate Ch 15's perfect lattice) → Ch 17 (the experimental tool that proves Ch 15) → Ch 18 (the chemical forces that *make* the lattice possible).

### Cluster 5: Condensed-Matter Properties & Devices
- **Description**: The electrical, magnetic, optical, and electronic behaviour of solids — and the devices engineers build from them.
- **Members**:
  - **Ch 19 (Magnetic Properties of Materials)** — dia/para/ferromagnetism, domains, hysteresis, Hall effect.
  - **Ch 20 (Superconductivity)** — zero resistance, Meissner effect, BCS, type-I/II, Josephson effect.
  - **Ch 21 (Optical Properties of Materials)** — skin depth, reflectance, absorption, color, luminescence.
  - **Ch 22 (Optoelectronic Devices)** — LEDs, laser diodes, photodetectors, solar cells.
  - **Ch 23 (Dielectric Materials)** — polarization mechanisms, dielectric loss, piezoelectricity.
  - **Ch 24 (Electronic Theory of Solids)** — Drude, Sommerfeld free-electron model, Fermi-Dirac statistics.
  - **Ch 25 (Energy Bands in Solids)** — Bloch theorem, Kronig-Penney, band-gap origin, Brillouin zones.
  - **Ch 26 (Semiconductors)** — intrinsic/extrinsic, p-n junction, transistor action, carrier statistics.
- **Internal structure**:
  - **Gateway**: Ch 24 (the simplest band-ignoring model — your "zeroth" picture of a metal).
  - **Extensions**:
    - Ch 25 (lifts Ch 24 with periodic-potential bands) → Ch 26 (applies Ch 25 to doped silicon, the canonical device material).
    - Ch 23 (bound electrons in insulators — sibling of Ch 24's free electrons) → Ch 19 (magnetic analog of Ch 23) → Ch 20 (the dramatic limit of Ch 24's conductivity) → Ch 21 (the optical response of Ch 24's carriers) → Ch 22 (the engineered device built from Ch 25/26).

---

## Reading Paths

Six goal-oriented reading sequences. Each path names the chapters in order and a one-line rationale.

### Path 1: "Understand sound engineering" (architecture → medical → industrial)
**Ch 1 → Ch 10 → Ch 11 → Ch 12**
From the oscillator ODE that underlies all sound, through architectural reverberation, to ultrasonic transducer physics, to non-destructive flaw detection — sound as an engineering medium end-to-end.

### Path 2: "Build a working laser or LED" (polarization → quantum → optical → devices)
**Ch 4 → Ch 7 → Ch 21 → Ch 22**
Polarization sets the optical anisotropy; quantum mechanics supplies the photon picture; the optical properties chapter derives the band-to-band emission rate; Ch 22 turns that rate into a working diode.

### Path 3: "Understand semiconductor physics from first principles" (quantum → crystal → electrons → bands → devices)
**Ch 7 → Ch 15 → Ch 24 → Ch 25 → Ch 26**
Schrödinger applied to a periodic potential — start from hydrogen, learn the crystal geometry, see the free-electron model, lift it with Bloch's theorem, then specialize to doped silicon.

### Path 4: "Design a transformer / inductor / magnetic sensor" (EM → magnetic properties → applications)
**Ch 5 → Ch 19 → Ch 20 (optionally)**
Maxwell's equations give B-field behaviour; Ch 19 quantifies how real materials respond (μᵣ, hysteresis); Ch 20 is the lossless extreme relevant to MRI magnets and SQUID sensors.

### Path 5: "Trace a single photon from source to detector" (X-ray source → crystal → band → device)
**Ch 17 → Ch 15 → Ch 25 → Ch 22**
X-rays are produced in Ch 17; Ch 15 shows how their Bragg diffraction reveals structure; Ch 25 derives why the crystal's band structure rejects or absorbs certain photons; Ch 22 turns the absorption spectrum into a photodiode.

### Path 6: "Understand materials testing without destruction" (waves → acoustics → ultrasonics → NDT)
**Ch 1 → Ch 2 → Ch 3 → Ch 12**
Wave theory, then interference, then diffraction — the three pillars Ch 12's ultrasonic, eddy-current, and radiographic methods exploit. Read Ch 12 last to see all three foundations reappear in one workflow.

### Path 7: "Relativistic engineering — particle accelerators & beyond" (EM → relativity → quantum → accelerators)
**Ch 5 → Ch 9 → Ch 7 → Ch 13**
Maxwell's equations in relativistic form; the Lorentz transformation; matter waves that the accelerator must channel; then Ch 13's cyclotrons, synchrotrons, and linear accelerators as the engineering payoff.

---

## Master Linkage Table

Every meaningful cross-reference between the 26 chapters, with a one-line reason. Notation: "X → Y" means "Ch X references Ch Y as foundation or application." Same-volume links listed first; cross-volume next.

| From | To | Why |
|------|----|-----|
| Ch 1 (Oscillations & Waves) | Ch 2 (Interference) | §1.16 superposition principle; the engine of every interference pattern |
| Ch 1 | Ch 3 (Diffraction) | Wave-packet kinematics + Fourier decomposition → Huygens-Fresnel integral |
| Ch 1 | Ch 4 (Polarization) | Coupled-oscillator vector analysis extends directly to Jones vectors |
| Ch 1 | Ch 5 (Electromagnetism) | The mechanical-electrical analogy maps `m↔L, k↔1/C, b↔R` |
| Ch 1 | Ch 6 (EM Waves) | Same wave equation Ch 1 derives from a string re-derived from Maxwell |
| Ch 1 | Ch 7 (Quantum Physics) | Heisenberg `Δx·Δp ≥ ħ/2` is a wave-packet theorem; de Broglie λ = h/p from §1.15 |
| Ch 1 | Ch 10 (Acoustics) | Sabine's ODE is a first-order RC circuit; reverberation is a time-constant |
| Ch 1 | Ch 11 (Ultrasonics) | Forced damped oscillator at resonance — every transducer is this equation |
| Ch 1 | Ch 13 (Accelerators) | RF cavity acceleration is a driven harmonic oscillator |
| Ch 2 (Interference) | Ch 3 (Diffraction) | Diffraction is interference between an infinity of secondary wavelets |
| Ch 2 | Ch 4 (Polarization) | Coherence of orthogonal polarizations is what makes interference possible |
| Ch 2 | Ch 10 (Acoustics) | Stationary-wave patterns set loud/dead zones in halls |
| Ch 2 | Ch 14 (Holography) | Holography is interference used as a *recording medium* |
| Ch 3 (Diffraction) | Ch 4 (Polarization) | Grating efficiency depends on polarization; blaze angle optimization |
| Ch 3 | Ch 17 (X-rays) | Bragg diffraction is the canonical use of diffraction theory |
| Ch 3 | Ch 11 (Ultrasonics) | Acoustic gratings (Ch 11) reuse single-slit and grating formalisms |
| Ch 4 (Polarization) | Ch 21 (Optical Properties) | Birefringence + dichroism are material optical responses |
| Ch 4 | Ch 22 (Optoelectronic Devices) | Polarization selection rules in laser cavities and LCDs |
| Ch 4 | Ch 23 (Dielectric Materials) | Electronic polarization is the microscopic origin of dielectric response |
| Ch 5 (Electromagnetism) | Ch 6 (EM Waves) | Maxwell's equations in vacuum + material → wave solutions |
| Ch 5 | Ch 9 (Relativity) | EM invariance under Lorentz transform is the historical root of special relativity |
| Ch 5 | Ch 13 (Accelerators) | Lorentz force `F = qv×B` is the cyclotron / synchrotron engine |
| Ch 5 | Ch 19 (Magnetic Properties) | Ch 19 quantifies `B = μ₀(H + M)`; Ch 5 supplies the field equations |
| Ch 6 (EM Waves) | Ch 14 (Holography) | Coherence length and spectral narrowness enable holographic recording |
| Ch 6 | Ch 21 (Optical Properties) | Wave eq. in conducting medium → skin depth and absorption coefficient |
| Ch 7 (Quantum Physics) | Ch 8 (Quantum Applications) | Ch 7 supplies the postulates; Ch 8 applies them to step / barrier / oscillator |
| Ch 7 | Ch 15 (Crystal Structure) | Crystal as a periodic potential well — Bloch's theorem is Ch 7's lesson generalized |
| Ch 7 | Ch 17 (X-rays) | X-ray photon energy `hν` is Ch 7's quantum of EM radiation |
| Ch 7 | Ch 24 (Electronic Theory) | Fermi-Dirac distribution is quantum statistics applied to free electrons |
| Ch 7 | Ch 25 (Energy Bands) | Bloch's theorem is Ch 7's Schrödinger in a periodic potential |
| Ch 7 | Ch 21 (Optical Properties) | Photon energy `hν`, band-gap `E_g` are the prerequisites for quantum absorption |
| Ch 8 (Quantum Applications) | Ch 13 (Accelerators) | Tunneling in field emission + barrier penetration underlies some accelerator ion sources |
| Ch 8 | Ch 17 (X-rays) | X-ray production thresholds use the same `E = hν` and tunneling physics |
| Ch 8 | Ch 15 (Crystal) | Crystal as multi-well potential; Ch 8's piecewise-V technique extends to periodic V |
| Ch 8 | Ch 25 (Energy Bands) | Band gap is the periodic-potential extension of Ch 8's finite-barrier problem |
| Ch 9 (Relativity) | Ch 5 (Electromagnetism) | Maxwell's equations are Lorentz-covariant; Ch 5 derives, Ch 9 frames the invariance |
| Ch 9 | Ch 13 (Accelerators) | Relativistic mass increase → synchrotron design with bending radius ∝ γ |
| Ch 9 | Ch 17 (X-rays) | Bremsstrahlung spectrum is intrinsically relativistic (`E_max = eV`) |
| Ch 9 | Ch 7 (Quantum Physics) | Dirac equation joins Ch 7's quantum and Ch 9's relativity; fine-structure constant origin |
| Ch 10 (Acoustics) | Ch 11 (Ultrasonics) | Same α-vs-frequency absorption trade-off applies to ultrasound imaging |
| Ch 10 | Ch 12 (NDT) | Ultrasonic NDT inherits acoustic impedance concepts from Ch 10 |
| Ch 11 (Ultrasonics) | Ch 12 (NDT) | Ch 11 supplies transducer physics; Ch 12 supplies the inspection workflow |
| Ch 11 | Ch 23 (Dielectric Materials) | Piezoelectric transducers are an engineering application of Ch 23's piezoelectricity |
| Ch 11 | Ch 13 (Accelerators) | RF cavities and acoustic resonators are mathematically identical standing-wave systems |
| Ch 12 (NDT) | Ch 17 (X-rays) | Radiographic NDT is X-ray attenuation imaging — direct use of Ch 17 |
| Ch 12 | Ch 19 (Magnetic Properties) | Eddy-current NDT uses Ch 19's conductivity + permeability |
| Ch 13 (Accelerators) | Ch 17 (X-rays) | Synchrotron light sources are accelerator byproducts; their spectrum is Ch 17 |
| Ch 14 (Holography) | Ch 2 (Interference) | Recording is interference; playback is diffraction — both from Ch 2/3 |
| Ch 14 | Ch 6 (Coherence) | Temporal + spatial coherence requirements are the gating physics for holography |
| Ch 15 (Crystal Structure) | Ch 16 (Defects) | Ch 15's perfect lattice is the reference state Ch 16 perturbs |
| Ch 15 | Ch 17 (X-rays) | X-ray diffraction is the experimental proof of Ch 15's structure |
| Ch 15 | Ch 18 (Bonding) | Lattice type determines which bonding class (ionic/covalent/metallic) dominates |
| Ch 15 | Ch 24 (Electronic Theory) | The lattice that Ch 15 characterizes is the "container" of Ch 24's free electrons |
| Ch 15 | Ch 25 (Energy Bands) | Reciprocal lattice (Ch 15) is the BZ framework for Ch 25's band structure |
| Ch 16 (Defects) | Ch 18 (Bonding) | Vacancies and dislocations are governed by bond-breaking energies from Ch 18 |
| Ch 16 | Ch 19 (Magnetic Properties) | Domain walls (Ch 19) are 2-D defects in the magnetic order |
| Ch 16 | Ch 26 (Semiconductors) | Dopants are point defects; dislocations are carrier recombination centers |
| Ch 17 (X-rays) | Ch 25 (Energy Bands) | X-ray photoemission spectroscopy (XPS) directly measures band structure |
| Ch 18 (Bonding) | Ch 23 (Dielectric) | Ionic vs covalent bonding determines polarizability (Ch 23) |
| Ch 18 | Ch 24 (Electronic Theory) | "Free" electrons in metals exist because metallic bonding delocalizes valence electrons |
| Ch 18 | Ch 26 (Semiconductors) | Covalent bonding (Si, Ge) is the prerequisite for the tetrahedral semiconductor lattice |
| Ch 19 (Magnetic Properties) | Ch 20 (Superconductivity) | Meissner effect is the perfect diamagnetic limit; Ch 20 generalizes Ch 19 |
| Ch 19 | Ch 23 (Dielectric) | Both are linear-response material properties (`M = χH` ↔ `P = χE`) |
| Ch 19 | Ch 24 (Electronic Theory) | Hall effect measures carrier density and sign — direct probe of Ch 24's free carriers |
| Ch 19 | Ch 26 (Semiconductors) | Hall effect is the canonical technique to measure semiconductor carrier type/density |
| Ch 20 (Superconductivity) | Ch 6 (EM Waves) | Surface impedance of superconductor at RF = R + iX; Ch 6 derives the surface term |
| Ch 20 | Ch 23 (Dielectric) | London penetration depth is the magnetic analog of the electric skin depth |
| Ch 20 | Ch 24 (Electronic Theory) | BCS Cooper pairs form from Ch 24's free-electron Fermi sea |
| Ch 20 | Ch 25 (Energy Bands) | BCS phonon-mediated pairing is a band-structure effect in k-space |
| Ch 21 (Optical Properties) | Ch 22 (Optoelectronic) | Absorption coefficient and band-gap energy in Ch 21 set the LED/laser emission rate |
| Ch 21 | Ch 25 (Energy Bands) | Direct vs indirect band gap (Ch 25) determines whether Ch 21's absorption is allowed |
| Ch 21 | Ch 26 (Semiconductors) | Semiconductor optical absorption edge = `E_g` from Ch 26's band diagram |
| Ch 22 (Optoelectronic Devices) | Ch 26 (Semiconductors) | Every LED/laser diode is a doped semiconductor p-n junction (Ch 26) |
| Ch 22 | Ch 25 (Energy Bands) | Device performance (quantum efficiency, gain) depends on the band structure (Ch 25) |
| Ch 23 (Dielectric) | Ch 24 (Electronic Theory) | Free electrons (Ch 24) vs bound electrons (Ch 23) — the two limits of a solid's electronic response |
| Ch 23 | Ch 25 (Energy Bands) | Insulator band gap (Ch 25) is the energy-cost of Ch 23's bound-electron polarization |
| Ch 23 | Ch 26 (Semiconductors) | Insulators (Ch 23) and semiconductors (Ch 26) are distinguished by gap size |
| Ch 24 (Electronic Theory) | Ch 25 (Energy Bands) | Sommerfeld model is the free-electron limit of Ch 25's Bloch bands |
| Ch 24 | Ch 26 (Semiconductors) | Effective mass, mobility, drift velocity all enter Ch 26's transport |
| Ch 25 (Energy Bands) | Ch 26 (Semiconductors) | The band diagram (Ch 25) is the foundation of every Ch 26 device |
| Ch 25 | Ch 15 (Crystal Structure) | Bloch's theorem uses the periodicity `a` introduced in Ch 15 |
| Ch 26 (Semiconductors) | Ch 22 (Optoelectronic) | Compound semiconductors (GaAs, InGaAsP) are the engine of Ch 22's devices |

---

## Concept Chains

End-to-end explanations of phenomena that require multiple chapters.

### Concept Chain 1: "Why is the sky blue?"
**Ch 1 → Ch 2 → Ch 3 → Ch 7**
- Ch 1: Wave packets and intensity ∝ |E|² give the framework.
- Ch 2: Coherent scattering from many molecules adds as amplitudes, but incoherence across random phases adds as intensities.
- Ch 3: Rayleigh's scattering cross-section σ ∝ 1/λ⁴ comes from the dipole-radiation amplitude of a sub-wavelength scatterer — a diffraction-theory result.
- Ch 7: Photon picture confirms energy conservation; each scattered photon is a single `hν` quantum, more numerous at short λ.

### Concept Chain 2: "How does a silicon solar cell work?"
**Ch 7 → Ch 15 → Ch 25 → Ch 26 → Ch 22**
- Ch 7: Photon energy `hν`; absorption requires `hν ≥ E_g`.
- Ch 15: Tetrahedral Si lattice; cubic diamond structure.
- Ch 25: Indirect band gap of Si (~1.1 eV); density of states near band edges.
- Ch 26: p-n junction with band bending; electron-hole pair separation by built-in field.
- Ch 22: Photocurrent extraction; quantum efficiency and the Shockley-Queisser limit.

### Concept Chain 3: "Why does a quartz watch keep time?"
**Ch 1 → Ch 11 → Ch 23**
- Ch 1: Forced damped oscillator at resonance; high Q = low loss = sharp frequency.
- Ch 11: Quartz as a piezoelectric transducer; 32.768 kHz "tuning-fork" oscillator.
- Ch 23: Piezoelectricity is the linear electromechanical coupling in certain crystal classes; quartz is the canonical example.

### Concept Chain 4: "How does MRI image hydrogen in the body?"
**Ch 5 → Ch 9 → Ch 7 → Ch 20 → Ch 19**
- Ch 5: Magnetic field B from a solenoid; gradient coils.
- Ch 9: Larmor precession ω = γB is non-relativistic but conceptually the precursor to spinor dynamics.
- Ch 7: Nuclear spin ½ of ¹H; energy splitting `ΔE = γħB`.
- Ch 20: Superconducting magnet (Ch 20) is the field source for clinical MRI.
- Ch 19: Magnetic susceptibility of tissue (water vs fat) gives the contrast.

### Concept Chain 5: "How does a CD / DVD store and read data?"
**Ch 4 → Ch 3 → Ch 22 → Ch 25**
- Ch 4: Polarization handling in the optical pickup.
- Ch 3: Diffraction-limited spot size; the Rayleigh criterion sets the pit size and track pitch.
- Ch 22: Semiconductor laser diode + photodiode in the read head.
- Ch 25: Band gap of the laser diode's III-V alloy (AlGaAs) determines the emission wavelength (~780 nm CD / 650 nm DVD).

### Concept Chain 6: "Why do metals conduct but ceramics don't?"
**Ch 18 → Ch 24 → Ch 25 → Ch 23**
- Ch 18: Metallic bonding delocalizes valence electrons; ionic/covalent bonding localizes them.
- Ch 24: Free electrons in a metal respond to E-field; Drude conductivity σ = ne²τ/m.
- Ch 25: In a crystal, the free-electron model is replaced by bands; metals have a partially filled band, insulators have a full valence band + empty conduction band separated by `E_g`.
- Ch 23: A perfect insulator has all electrons bound — zero DC conductivity, only polarization response.

### Concept Chain 7: "How does ultrasound imaging see a fetus?"
**Ch 1 → Ch 2 → Ch 11 → Ch 23 → Ch 12**
- Ch 1: Transducer as forced oscillator at MHz resonance.
- Ch 2: Echoes from tissue interfaces interfere (constructive/destructive) to form speckle.
- Ch 11: Pulse-echo time-of-flight `h = vt/2`; piezoelectric transducer.
- Ch 23: PZT (lead zirconate titanate) ceramic — the practical piezoelectric used in medical probes.
- Ch 12: B-mode scanning, phased arrays, image reconstruction as a wave-physics signal-processing problem.

### Concept Chain 8: "How does a laser work?"
**Ch 7 → Ch 8 → Ch 4 → Ch 14**
- Ch 7: Stimulated emission, Einstein A/B coefficients, photon momentum `ħk`.
- Ch 8: Two-level pumping and population inversion; oscillator rate equations.
- Ch 4: Polarization of the cavity (Brewster windows); anisotropic gain media.
- Ch 14: Spatial coherence of the laser beam is what makes holography possible (12 years after the laser, in 1960).

---

## How to Use This Index

1. **Newcomer to the field?** Start with Path 1 or Path 3 — they cover the most ground in the fewest chapters.
2. **Working on a specific device?** Find it in the Master Linkage Table and trace back to the foundation.
3. **Reviewing for an exam?** Walk a Concept Chain and confirm you can derive each link without notes.
4. **Looking for a missing piece?** The "Internal structure" note under each cluster names the gateway chapter; if you don't have that one solid, the rest of the cluster will be harder.
