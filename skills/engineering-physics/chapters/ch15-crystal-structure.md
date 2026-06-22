# Chapter 15: Crystal Structure

## Core Idea
A crystal is a periodic 3D arrangement of atoms described by a **lattice + basis** (`Lattice + basis = crystal structure`); once you can read directions (`[hkl]`), planes (`(hkl)`), and interplanar spacing (`d_{hkl}`), you have everything needed to compute packing, density, and to interpret X-ray diffraction via **Bragg's law** `2d sinθ = nλ` and the **reciprocal lattice** condition `Δk = G`.

## Frameworks Introduced

- **Lattice + Basis construction**
  - When to use: any time a crystal is described — pick the smallest repeated unit (primitive cell) and attach a basis of atoms.
  - How: identify three primitive translation vectors $\vec{a}_1, \vec{a}_2, \vec{a}_3$; their unit cell volume is $V = \vec{a}_1 \cdot (\vec{a}_2 \times \vec{a}_3)$ (cyclic permutations all give the same `V`). Attach a basis of atoms identically at every lattice point.

- **Miller indices for crystal planes `(hkl)`**
  - When to use: identifying any crystal plane that intersects the three crystallographic axes.
  - How: (i) shift origin if plane passes through it, (ii) find intercepts $(p, q, r)$, (iii) take fractional intercepts $(p/a_1, q/a_2, r/a_3)$, (iv) reciprocate, (v) reduce to smallest integers — that is `(hkl)`. A plane parallel to an axis → intercept is `∞` → index is `0`.

- **Direction indices `[uvw]`**
  - When to use: identifying a line through two lattice points.
  - How: write the vector between two points as $\vec{T} = n_1\vec{a}_1 + n_2\vec{a}_2 + n_3\vec{a}_3$, reduce the integer coefficients $(n_1, n_2, n_3)$ to smallest integers; bracket as `[n₁ n₂ n₃]`, negatives as overbar. Origin shift required if direction passes through origin.

- **Interplanar spacing formula** (orthogonal axes, $a = b = g = 90°$)
  - When to use: any time you need the distance between adjacent `(hkl)` planes — required for Bragg's law and density calculations.
  - How: $\frac{1}{d_{hkl}^2} = \frac{h^2}{a_1^2} + \frac{k^2}{a_2^2} + \frac{\ell^2}{a_3^2}$. For cubic: $d_{hkl} = a / \sqrt{h^2 + k^2 + \ell^2}$. Hexagonal: add $\frac{4}{3}\frac{(h^2+hk+k^2)}{a^2}$.

- **Atomic Packing Factor (APF) = (volume of atoms in cell) / (volume of cell)**
  - When to use: comparing how tightly different structures pack — higher APF → higher density.
  - How: (i) count effective atoms per cell (corner 1/8, face 1/2, body 1, edge 1/4), (ii) relate atomic radius `r` to lattice parameter `a` via the geometry of nearest-neighbor contact, (iii) take the ratio. Reference values: SC = 0.52, BCC = 0.68, FCC = HCP = 0.74.

- **Bragg's law** `2d_{hkl} sin θ = nλ`
  - When to use: relating X-ray wavelength, glancing angle, and interplanar spacing; reading off the diffraction angle in any cubic crystal from a known `(hkl)`.
  - How: for first-order diffraction (`n = 1`) the path difference between rays from adjacent planes equals `λ`; constraint `λ < 2d` for any diffraction to occur. Combines directly with the interplanar spacing formula to give the diffraction directions.

- **Reciprocal lattice** — vector space where diffraction is geometry
  - When to use: when many sets of planes exist simultaneously (real diffraction problem) and you want a single unified picture. Also gives the **central scattering theorem** `Δk = G`, i.e., the scattering normal `k − k₀` equals a reciprocal lattice vector — equivalent to Bragg's law in vector form.
  - How: define primitive reciprocal vectors $b_i = 2π \frac{\vec{a}_j \times \vec{a}_k}{\vec{a}_1 \cdot (\vec{a}_2 \times \vec{a}_3)}$ (cyclic). The reciprocal of reciprocal = direct. A reciprocal lattice point $\vec{G} = h\vec{b}_1 + k\vec{b}_2 + \ell\vec{b}_3$ is perpendicular to the `(hkl)` planes of the direct lattice and `|G| = 2π/d_{hkl}`.

## Key Concepts

- **Space lattice / Bravais lattice**: array of points where every point has identical surroundings; only 14 distinguishable arrangements exist in 3D, grouped into **7 crystal systems** (cubic, tetragonal, orthorhombic, rhombohedral/trigonal, hexagonal, monoclinic, triclinic).
- **Unit cell**: smallest cell whose translation generates the entire lattice; characterized by 6 lattice parameters (3 edge lengths + 3 interfacial angles α, β, γ).
- **Coordination number**: number of nearest neighbors around an atom — SC = 6, BCC = 8, FCC = 12, HCP = 12.
- **Number of atoms per unit cell** (counted by sharing rule): SC = 1, BCC = 2, FCC = 4, HCP = 6, diamond = 8.
- **Linear density** of atoms = number of atoms centered on a direction per unit length along it; **planar density** = number of atoms centered on a plane per unit area on it.
- **Family of directions `<hkl>`** / **family of planes `{hkl}`**: set of all symmetrically equivalent directions or planes (e.g., `<111>` in cubic = 8 body diagonals; `{110}` = 12 face diagonals).
- **Miller–Bravais indices `(hkil)`**: four-index hexagonal notation with constraint `h + k = −i` (so the third index is redundant; often written `(hk·ℓ)`).
- **Structure factor `F_{hkl}`** (mentioned in §1.11): amplitude of the diffracted beam; depends on basis atom positions, and decides which reflections are systematically absent.
- **Atomic radius `r` ↔ lattice parameter `a`** relations: SC `2r = a`; BCC `4r = √3·a`; FCC `4r = √2·a`; HCP ideal `c/a = √(8/3) ≈ 1.633`.

## Mental Models

- **Think of the lattice as a wireframe and the basis as the atoms glued at every joint.** The wireframe alone is geometric (mathematician's skeleton); the basis carries the chemistry. `Lattice + basis = crystal structure`. Two FCC interpenetrating → NaCl; one FCC + one displaced by `a/4` along body diagonal → diamond.
- **Think of Miller indices as the reciprocals of where a plane "first hits" each axis.** Intercept on an axis → reciprocal → reduce. Plane parallel to axis → reciprocal of `∞` → `0`. This converts geometry to algebra and is the single most useful "translation" between a real drawing and a clean symbol.
- **Use the perpendicularity `[hkl] ⊥ (hkl)` only in cubic systems.** It is the cleanest shortcut in elementary crystallography, but it fails the moment `a₁ ≠ a₂ ≠ a₃`. Outside cubic, derive perpendicularity from dot products, not from index equality.
- **Think of the reciprocal lattice as a "diffraction map" — each point is one set of planes.** Diffraction directions appear directly as points; microscopy images appear directly as atoms (real space). Rotate the crystal, both rotate together. The unit of measurement flips (`m ↔ m⁻¹`).
- **Use `nλ < 2d` as a feasibility filter** before any X-ray diffraction calculation: visible light (`λ ≈ 5000 Å`) cannot diffract off crystals (`d ≈ 3 Å`), so visible-light optical gratings do not work — only X-rays, electrons, or neutrons with de Broglie wavelength of order `Å` can.

## Anti-patterns

- **Treating diffraction as ordinary reflection**: X-ray "reflection" only occurs at the specific angles satisfying Bragg's law, not at arbitrary incidence (unlike a mirror). The beam is built from all atoms in the path, not from a thin surface layer.
- **Forgetting the `2π` factor in reciprocal lattice vectors** when using the *physics* convention: $b_i = 2π \frac{\vec{a}_j \times \vec{a}_k}{V}$. Crystallographers often omit the `2π`; physicists include it. Mixing conventions silently shifts `Δk = G` to `Δk = G/2π`.
- **Averaging Miller indices with the LCM the wrong way**: if coordinates are fractions, multiply by LCM to clear them; if all are integers sharing a common factor, divide to reduce. Doing only one direction silently changes the direction.
- **Computing APF from atomic count alone**: the APF depends on the geometric relation between `r` and `a`. Different structures have different `r(a)` relations (face diagonal for FCC, body diagonal for BCC, edge for SC).
- **Claiming FCC and HCP are the same density**: they have the same packing factor (0.74) but different geometries and basis structures. The "more dense than SC/BCC" conclusion is correct, the "FCC = HCP" identification is not.
- **Conflating CsCl with BCC**: CsCl has two different species on the corner-vs-center sites; the structure is *two interpenetrating simple cubes*, not a single-component BCC lattice. Coordination is 8 here (not 8 from BCC geometry, but 8 from cube-corner-to-center geometry — same number, different physics).
- **Assuming HCP `c/a = √(8/3)` exactly**: it is ideal; real HCP metals range from 1.58 (Be) to 1.89 (Cd), implying atoms are ellipsoidal, not spherical, when they don't sit at the ideal ratio.

## Reference Tables

### The 7 crystal systems (with all 14 Bravais lattices)

| Crystal system | Lattice parameters | Bravais lattices | Symbols | Examples | Atoms/cell |
|---|---|---|---|---|---|
| Cubic | $a_1 = a_2 = a_3$; $\alpha = \beta = \gamma = 90°$ | Simple / BCC / FCC | P / I / F | Cu, Ag / CsCl / NaCl | 1 / 2 / 4 |
| Tetragonal | $a_1 = a_2 \neq a_3$; $\alpha = \beta = \gamma = 90°$ | Simple / Body-centered | P / I | β-Sn / TiO₂ | 1 / 2 |
| Orthorhombic | $a_1 \neq a_2 \neq a_3$; $\alpha = \beta = \gamma = 90°$ | Simple / Body / Base / Face | P / I / C / F | Ga / PbCO₃ / α-S / K₂SO₄ | 1 / 2 / 2 / 4 |
| Rhombohedral (Trigonal) | $a_1 = a_2 = a_3$; $\alpha = \beta = \gamma \neq 90°$ | Simple | P | As, Bi, Sb, Calcite | — |
| Hexagonal | $a_1 = a_2 \neq a_3$; $\alpha = \beta = 90°, \gamma = 120°$ | Simple | P | Mg, Zn | — |
| Monoclinic | $a_1 \neq a_2 \neq a_3$; $\alpha = \gamma = 90° \neq \beta$ | Simple / Base-centered | P / C | Gypsum | 1 / 2 |
| Triclinic | $a_1 \neq a_2 \neq a_3$; $\alpha \neq \beta \neq \gamma \neq 90°$ | Simple | P | K₂Cr₂O₇ | 1 |

### Atomic packing factor (APF) reference

| Structure | Atoms/cell | `r` in terms of `a` | APF |
|---|---|---|---|
| SC | 1 | $r = a/2$ | $\pi/6 \approx 0.524$ |
| BCC | 2 | $r = \sqrt{3}a/4$ | $\sqrt{3}\pi/8 \approx 0.680$ |
| FCC | 4 | $r = a/(2\sqrt{2})$ | $\pi/(3\sqrt{2}) \approx 0.740$ |
| HCP | 6 | $r = a/2$ | $\pi/(3\sqrt{2}) \approx 0.740$ |
| Diamond | 8 | $r = \sqrt{3}a/8$ | $\sqrt{3}\pi/16 \approx 0.340$ |

### Interplanar spacing `d_{hkl}` formulas

| System | Formula |
|---|---|
| Orthogonal (general) | $\frac{1}{d^2} = \frac{h^2}{a_1^2} + \frac{k^2}{a_2^2} + \frac{\ell^2}{a_3^2}$ |
| Cubic | $d = a/\sqrt{h^2 + k^2 + \ell^2}$ |
| Tetragonal | $\frac{1}{d^2} = \frac{h^2 + k^2}{a_1^2} + \frac{\ell^2}{a_3^2}$ |
| Orthorhombic | $\frac{1}{d^2} = \frac{h^2}{a_1^2} + \frac{k^2}{a_2^2} + \frac{\ell^2}{a_3^2}$ |
| Hexagonal | $\frac{1}{d^2} = \frac{4}{3}\frac{h^2 + hk + k^2}{a^2} + \frac{\ell^2}{c^2}$ |

### Reflection vs diffraction (visible light vs X-rays)

| | Reflection (visible light) | Diffraction (X-rays) |
|---|---|---|
| Origin | Thin surface layer | All atoms in beam path |
| Allowed angles | Any angle of incidence | Only Bragg angles `2θ` satisfying `2d sinθ = nλ` |
| Efficiency | Up to ~100% (good mirror) | Very low intensity vs incident beam |

## Key Equations

**Lattice and cell geometry**
- Unit-cell volume: $V = \vec{a}_1 \cdot (\vec{a}_2 \times \vec{a}_3)$ (and its cyclic permutations).
- Lattice translation vector: $\vec{T} = n_1\vec{a}_1 + n_2\vec{a}_2 + n_3\vec{a}_3$, $(n_1, n_2, n_3 \in \mathbb{Z})$.

**Direction `[uvw]` ↔ plane `(hkl)` perpendicularity** (cubic only): $\vec{T} \perp (hkl) \iff (n_1, n_2, n_3) \parallel (h, k, \ell)$.

**Interplanar spacing** (orthogonal axes): $\dfrac{1}{d_{hkl}^2} = \dfrac{h^2}{a_1^2} + \dfrac{k^2}{a_2^2} + \dfrac{\ell^2}{a_3^2}$.

**Atomic packing factor**: $APF = \dfrac{V_{\text{atoms in cell}}}{V_{\text{cell}}} = \dfrac{n \cdot (4/3)\pi r^3}{V_{\text{cell}}}$.

**Bragg's law**: $2 d_{hkl} \sin\theta = n\lambda$, with feasibility `λ < 2d`.

**Diffraction direction (cubic)**: $\sin^2\theta = \dfrac{\lambda^2}{4a^2}(h^2 + k^2 + \ell^2)$.

**Reciprocal lattice primitive vectors**: $b_i = 2\pi \dfrac{\vec{a}_j \times \vec{a}_k}{\vec{a}_1 \cdot (\vec{a}_2 \times \vec{a}_3)}$ (cyclic), with orthogonality $\vec{b}_i \cdot \vec{a}_j = 2\pi \delta_{ij}$.

**Reciprocal lattice vector**: $\vec{G} = h\vec{b}_1 + k\vec{b}_2 + \ell\vec{b}_3$ → perpendicular to `(hkl)` planes, with $|G| = 2\pi / d_{hkl}$.

**Reciprocal volume relation**: $\vec{b}_1 \cdot (\vec{b}_2 \times \vec{b}_3) = \dfrac{(2\pi)^3}{\vec{a}_1 \cdot (\vec{a}_2 \times \vec{a}_3)}$.

**Phase invariance under lattice translations**: $\vec{G} \cdot \vec{T} = 2\pi N$, hence $e^{i\vec{G}\cdot\vec{T}} = 1$ — *the* deep reason periodic crystals produce sharp Bragg peaks.

**Laue conditions (vector)**: $\vec{a}_i \cdot (\vec{k} - \vec{k}_0) = 2\pi h_i$ (one equation per primitive axis).

**Central scattering theorem**: $\Delta\vec{k} = \vec{k} - \vec{k}_0 = \vec{G}$, equivalent to Bragg's law. Equivalently $2\vec{k} \cdot \vec{G} = |\vec{G}|^2$.

## Worked Example: Interplanar spacing ratio in SC (Example 1.6 reproduction)

**Given**: simple cubic lattice with parameter `a`. Compute the ratio `d_{111} : d_{110} : d_{100}`.

1. For a simple cubic lattice, $d_{hkl} = a / \sqrt{h^2 + k^2 + \ell^2}$.
2. For `(111)`: $d_{111} = a / \sqrt{1+1+1} = a/\sqrt{3}$.
3. For `(110)`: $d_{110} = a / \sqrt{1+1+0} = a/\sqrt{2}$.
4. For `(100)`: $d_{100} = a / \sqrt{1+0+0} = a$.
5. Ratio: $d_{111} : d_{110} : d_{100} = \dfrac{a}{\sqrt{3}} : \dfrac{a}{\sqrt{2}} : a = \dfrac{1}{\sqrt{3}} : \dfrac{1}{\sqrt{2}} : 1$.

**This is the pattern for any "compare spacings" problem**: never integrate; just plug `(hkl)` into the cubic formula and form the ratio.

## Key Takeaways

1. **Lattice + basis = crystal structure.** Always separate geometric skeleton (lattice) from chemical content (basis). Diamond is two interpenetrating FCCs offset by `a/4` along the body diagonal — the basis is two atoms.
2. **Miller indices are reciprocals of fractional intercepts.** Read plane → intercept → reciprocal → reduce. The recipe is the same regardless of crystal system; the `d_{hkl}` formula differs.
3. **APF ranks structures: SC 0.52 < BCC 0.68 < FCC = HCP 0.74.** Diamond is the outlier (0.34) — *open*, not close-packed, due to tetrahedral bonding. HCP only achieves 0.74 at the ideal `c/a = √(8/3)`; deviations imply non-spherical atoms.
4. **Bragg's law `2d sinθ = nλ` is one equation in three unknowns** (`d`, `θ`, `n`). Combine it with the `d_{hkl}` formula and the wavelength — then `θ` (the diffraction angle) is fully determined for any `(hkl)` plane.
5. **The reciprocal lattice is the bookkeeping device for many-plane diffraction.** A point $\vec{G}_{hkl}$ encodes both orientation (direction from origin) and spacing (`|G| = 2π/d_{hkl}`) of one set of planes. The central theorem `Δk = G` unifies Bragg and Laue into one vector equation.
6. **Use the `2π`-physics convention consistently**: $b_i = 2π (\vec{a}_j \times \vec{a}_k) / V$, so $\vec{G} \cdot \vec{T} = 2π N$. Crystallographers often drop the `2π`; mixing conventions silently shifts formulas.
7. **Choose the probe by wavelength**: visible light (`λ ≈ 10³–10⁴ d`) cannot diffract crystals (`d ≈ 3 Å`); only X-rays, electrons, and neutrons (de Broglie wavelength ≈ `Å`) can — because of the `λ < 2d` feasibility filter.

## Connects To

- **Ch 1 (Oscillations and Waves)**: wave superposition (constructive interference from path-difference being an integer multiple of `λ`) is the physical root of both Bragg's law and the `e^{i\vec{G}\cdot\vec{T}} = 1` periodicity condition.
- **Ch 7 (Quantum Physics)**: de Broglie wavelength `λ = h/p` is what makes electrons and neutrons usable diffraction probes — without it, the chapter's claim that "X-rays, electrons, protons, neutrons all act as 3D gratings" would not be possible.
- **Ch 14 (Bonding in Solids)**: the structures in §1.7 (diamond, NaCl, CsCl, ZnS) are the geometric realizations of the bond types discussed there — covalent (diamond, ZnS), ionic (NaCl, CsCl). Coordination numbers and radius ratios follow directly from the bonding.
- **Ch 18 (Magnetic Properties) / Ch 19 (Semiconductors)**: the diamond cubic and zinc-blende (cubic ZnS) structures reappear as the lattices of Si, Ge, and compound semiconductors (GaAs, InSb, CdS).
- **External — Materials engineering**: X-ray diffraction is the standard experimental tool for measuring lattice parameters, identifying phases, and computing residual stress. Bragg's law + the cubic `d_{hkl}` formula is the entire backbone of powder diffraction.
- **External — Fourier analysis**: the reciprocal lattice is literally a lattice in Fourier space; diffraction patterns are the Fourier transforms of the real-space electron density. This is the entry point to structure-factor analysis in §1.11.
