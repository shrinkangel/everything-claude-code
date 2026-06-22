# Chapter 16: Defects in Crystals

## Core Idea
Real crystals are never perfectly periodic — every engineering material is defined by its **defects**, classified by dimensionality (0D point → 1D line → 2D interface → 3D volume). Mastering defects is mastering why a material is hard, soft, conductive, colored, or strong: vacancies, dislocations, and grain boundaries are the levers behind nearly all structure-sensitive properties.

## Frameworks Introduced

- **Defect Classification by Dimensionality**
  - When to use: any time you must decide which type of imperfection governs a property (mechanical, electrical, optical).
  - How: 0D point → 1D line (dislocation) → 2D surface (grain boundary) → 3D volume. Higher-dimensional defects usually arise by *clustering* of lower-dimensional ones.

- **Equilibrium Vacancy Concentration** `N_v = N · exp(−Q_v / kT)`
  - When to use: estimating how many vacant lattice sites exist at temperature `T`.
  - How: `N` = total lattice sites, `Q_v` = energy to move one atom from bulk to surface (eV/atom), `k` = Boltzmann. Halving `T` from melting drops `N_v` by orders of magnitude.

- **Schottky vs Frenkel defect pairing (ionic crystals)**
  - When to use: any ionic solid where charge neutrality must be preserved.
  - How: **Schottky** = paired cation + anion vacancies (both ions leave for surface). **Frenkel** = one ion vacates its site and sits on an interstitial nearby; anions are too large, so Frenkel almost always involves the cation.

- **Burgers vector formalism for dislocations**
  - When to use: characterizing any line defect; predicting slip direction and elastic energy.
  - How: walk a closed loop (Burgers circuit) around the defect in a perfect crystal — closure fails by a vector `b`; that closure-failure vector *is* the Burgers vector. Edge: `b ⊥ t̂`; Screw: `b ∥ t̂`; Mixed: neither.

- **Edge dislocation = termination of an atomic plane**
  - When to use: explaining slip, plastic deformation, work hardening.
  - How: an extra half-plane of atoms inserts into the lattice; the line at its edge is the dislocation. Above the line → compressive stress; below → tensile stress. Slip is perpendicular to `t̂` (glide) or by diffusion (climb, non-conservative).

- **Screw dislocation = helical ramp of sheared atomic planes**
  - When to use: explaining crystal growth (vapour-phase whiskers grow at screw steps) and ductile shear.
  - How: shear the top half of a block one lattice spacing relative to the bottom; the boundary between moved and unmoved regions is the screw line, parallel to `b`.

- **Grain-boundary strengthening (Hall–Petch regime)**
  - When to use: predicting mechanical strength of a polycrystal at ambient temperature.
  - How: smaller grains → more boundary area per volume → boundaries block dislocation motion → higher yield strength. Reverses at high `T` (corrosion weakens boundaries).

## Key Concepts

- **Vacancy**: missing atom at a regular lattice site; equilibrium concentration grows exponentially with `T`.
- **Interstitial / interstitialcy**: extra atom (self or foreign) squeezed into a non-lattice position; small atoms (C, N, H, O) are common interstitial impurities.
- **Schottky defect**: paired cation + anion vacancies preserving charge neutrality.
- **Frenkel defect**: vacancy + interstitial of the same ion (almost always the cation), no net stoichiometry change.
- **Colour centre**: defect producing optical absorption bands in transparent crystals (alkali halides, oxides).
- **Polaron**: charge carrier + its self-induced local lattice polarization, moving as a unit; effective mass > free electron.
- **Exciton**: bound electron–hole pair, electrically neutral, transports energy without net charge.
- **Antisite defect**: in an ordered compound, atom A sits on a B site.
- **Topological defect**: a region where ring connectivity (e.g. 5- or 7-membered rings in graphene) breaks the local bonding topology.
- **Dislocation**: 1D line defect, characterized by Burgers vector `b`.
- **Grain boundary**: interface between crystallites of differing orientation; width ~few atomic diameters.
- **Stacking fault**: local break in the ABC (FCC) or AB (HCP) close-packed stacking sequence.

## Mental Models

- **Use "defect dimensionality" as a hierarchy**: 3D volume defects are clusters of 2D interfaces, which are clusters of 1D dislocations, which are clusters of 0D point defects. Diagnose at the lowest level first.
- **Think of edge dislocation as a half-page slipped into a book stack**: the only "damage" is the edge of the inserted page; away from the edge, pages are aligned. Slip = slide the page further in; climb = add or remove paper atoms via diffusion.
- **Think of screw dislocation as a spiral parking ramp**: drive up the helix to change floors; shear stress rotates the ramp one floor at a time.
- **Think of vacancies as thermally activated population**: Boltzmann statistics — every crystal at finite `T` carries an equilibrium number of vacancies, just like every gas carries an equilibrium vapour pressure. They are *not* damage, they are thermodynamics.

## Anti-patterns

- **Treating defects as flaws to eliminate**: structure-sensitive properties (semiconductor doping, metal hardness, colour, ionic conductivity) require defects. Without Schottky/Frenkel pairs, ionic conduction and transparent coloured crystals would not exist.
- **Confusing vacancy energy `Q_v` with self-interstitial energy**: forming a self-interstitial costs far more energy than forming a vacancy, so equilibrium interstitial concentration is always negligible.
- **Saying Burgers vector defines the dislocation line**: the opposite — the Burgers vector is *measured by* going around the line. The line direction `t̂` and `b` together classify the dislocation.
- **Calling every line defect an "edge dislocation"**: most real dislocations are mixed; only at the two limiting orientations (b ⊥ t̂ or b ∥ t̂) are they pure edge or pure screw.
- **Equating "polycrystalline" with "weak"**: at ambient temperature polycrystals are *stronger* than single crystals of the same material because grain boundaries block slip.
- **Assuming a finer grain is always better**: Hall–Petch strengthening holds at low/moderate `T`; at high `T`, grain-boundary diffusion and corrosion reverse the trend.

## Reference Tables

### Defect classification by dimensionality

| Dimensionality | Name | Examples | Property impact |
|---|---|---|---|
| 0 | Point | Vacancy, interstitial, Schottky, Frenkel, colour centre, polaron, exciton, antisite, topological | Diffusion, ionic conductivity, colour, doping |
| 1 | Line | Edge dislocation, screw dislocation, mixed | Plastic deformation, slip, climb |
| 2 | Surface / interfacial | External surface, grain boundary, twin boundary, stacking fault | Strength, ductility, transparency |
| 3 | Volume | Pores, cracks, foreign inclusions, second-phase particles | Load-bearing area, stress concentration, dispersion hardening |

### Burgers vector orientation vs dislocation type

| Dislocation type | `b` vs `t̂` | Slip plane | Sign convention |
|---|---|---|---|
| Edge | `b ⊥ t̂` | Defined by `b` and `t̂` | `+` = compression above line (⊥); `−` = compression below (T) |
| Screw | `b ∥ t̂` | Not uniquely defined | `+` = `b` and `t̂` parallel; `−` = antiparallel |
| Mixed | Neither ⊥ nor ∥ | Local segment-dependent | — |

### Grain-boundary comparison

| Boundary type | Misorientation | Geometry |
|---|---|---|
| Low-angle tilt | `<10°`, edge-dislocation array | Plane of aligned edge dislocations |
| Low-angle twist | `<10°`, screw-dislocation array | Crossed screw-dislocation network |
| High-angle | `>15°` | Disordered atomic arrangement |
| Twin | Specific mirror symmetry | Two boundaries in pair enclosing twinned region |

### Stacking sequences

| Structure | Sequence | Distinguishing layer |
|---|---|---|
| HCP | AB AB AB … | 3rd layer aligns over A |
| FCC | ABC ABC ABC … | 3rd layer aligns over C |
| Stacking fault | Local break in the repeating sequence | Intrinsic or extrinsic |

## Key Equations

**Vacancy concentration (point defects)**
$$N_v = N \cdot \exp\!\left(-\frac{Q_v}{kT}\right)$$
`N` = lattice sites per unit volume; `Q_v` = vacancy formation energy.

**Burgers vector definition**
$$\vec{b} = \overrightarrow{BA}$$
where `B` is where the Burgers circuit closes in an imperfect crystal and `A` is the starting point.

**Stored elastic energy per unit length of dislocation**
$$E \approx \tfrac{1}{2} G b^2$$
`G` = shear modulus; `b` = magnitude of Burgers vector.

**Hall–Petch qualitative form** (not in chapter as a formula, but stated in the framework): smaller grain size `d` → higher yield stress `σ_y ≈ σ_0 + k / √d`.

## Worked Example: Equilibrium vacancy concentration in copper at 500 °C

Given: copper at `T = 500 °C = 773 K`, `N = 8.0 × 10²⁸ atoms/m³`, `Q_v = 0.9 eV/atom`, `k = 8.62 × 10⁻⁵ eV/K`.

Compute `N_v`:
$$N_v = N \cdot \exp\!\left(-\frac{Q_v}{kT}\right) = 8.0 \times 10^{28} \cdot \exp\!\left(-\frac{0.9}{8.62 \times 10^{-5} \times 773}\right)$$
$$= 8.0 \times 10^{28} \cdot \exp(-13.50) \approx 8.0 \times 10^{28} \times 1.37 \times 10^{-6}$$
$$\boxed{N_v \approx 1.1 \times 10^{23} \text{ vacancies/m}^3}$$

Interpretation: even at 500 °C — well below copper's melting point (1085 °C) — there are roughly `10²³` empty lattice sites per cubic metre. This is why diffusion, creep, and annealing can proceed without ever exceeding the melting temperature.

## Key Takeaways

1. **Defects are thermodynamic, not accidental** — vacancies exist at equilibrium and grow exponentially with `T` via `N_v = N exp(−Q_v/kT)`; do not treat them as damage.
2. **Match defect type to property** — colour → colour centres; ionic conductivity → Schottky/Frenkel; plasticity → dislocations; strength at low `T` → grain boundaries; hardness → dispersion particles.
3. **Use the Burgers vector as the dislocation's identity card** — its orientation relative to `t̂` is what makes a dislocation edge, screw, or mixed.
4. **Slip is conservative, climb is not** — edge-dislocation glide preserves atom count; climb requires diffusion of vacancies or atoms.
5. **Smaller grains → stronger material (at low T)** — Hall–Petch; reverse at high T.
6. **Energy of a dislocation scales as `Gb²`** — dislocations prefer the smallest possible Burgers vector, which is why they split into partials and why they repel.
7. **Charge neutrality forces defect pairing in ionic crystals** — never see a lone vacancy in NaCl; it always comes paired (Schottky) or with an interstitial (Frenkel).

## Connects To

- **Ch 2 (Crystal Structure / Bonding)** — defects are deviations from the perfect periodic lattice defined there.
- **Ch 12 (Mechanical Properties)** — dislocations and grain boundaries are the atomic-level origin of yield strength, ductility, and work hardening.
- **Ch 14 (Semiconductors)** — intentional doping is the deliberate introduction of point defects; p–n junctions rely on substitutional impurities.
- **Ch 15 (Dielectrics / Optical Materials)** — colour centres, polarons, and excitons determine the optical absorption of ionic crystals.
- **External: metallurgy** — annealing, quenching, cold-working, precipitation hardening, and creep all act on defect populations.
- **External: solid-state physics** — polaron and exciton concepts reappear in band theory and polaronic transport in transition-metal oxides.