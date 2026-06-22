# Chapter 18: Bonding in Solids

## Core Idea
Every solid is held together by a **competition between attractive and repulsive inter-atomic forces** that produces a single minimum in the total potential-energy curve; that minimum's depth (`U₀`) and location (`r₀`) define the **bonding energy** and **bond length**, and the *type* of attraction (electron transfer, sharing, delocalization, polarization) sets every macroscopic property — conductivity, transparency, brittleness, density, melting point — the engineer cares about.

## Frameworks Introduced

- **The Two-Force Bond Model (attraction + Pauli repulsion)**
  - When to use: any analysis of why atoms stick at a specific separation and not closer.
  - How: write $F_A = +A/r^i$ (attractive, $i > 0$) and $F_R = -B/r^j$ (repulsive, $j > i$, $j \approx 9-12$). Equilibrium `r₀` is where $F_A + F_R = 0$; bond length and bond energy drop out.
  - Repulsion origin: **Pauli exclusion principle** kicks in once outer shells overlap (NOT Heisenberg, NOT Coulomb of like charges — author warns explicitly).

- **Lennard-Jones-style total potential** $U(r) = -C/r^m + D/r^n$
  - When to use: any analytical model of the $U(r)$ well, ionic-pair potentials, VdW pair potentials.
  - How: set $dU/dr|_{r_0} = 0$ to locate `r₀`; substitute back to get bonding energy `U₀`. Every primary and secondary bond fits this shape.

- **Primary vs Secondary Bond Taxonomy**
  - Primary (strong, inter-atomic): **ionic, covalent, metallic**.
  - Secondary (weaker, inter-molecular): **hydrogen, van der Waals**.
  - Decision rule: primary bonds arise from *changes in electron ownership* (gain/lose/share); secondary bonds arise from *polarization or partial charges* with no electron transfer.
  - Cross-cut: **directional** (covalent, hydrogen) vs **non-directional** (ionic, metallic, VdW) — directionality controls how closely atoms can pack.

- **The 8 − N Covalent Bonding Rule**
  - For an atom with `N` valence electrons, maximum covalent partners = `8 − N`.
  - Examples: Cl (N=7) → 1 bond (Cl₂); C (N=4) → 4 bonds (diamond, CH₄); H (N=1) → 1 bond.
  - Use when predicting molecular geometry and stoichiometry of covalent solids.

- **The Three Van der Waals Sub-Forces** (all decay as `1/r⁶`)
  - **Keesom**: permanent dipole ↔ permanent dipole, $W \propto -\mu_1^2 \mu_2^2 / (k_B T \cdot r^6)$ — temperature-dependent.
  - **Debye**: permanent dipole ↔ induced dipole, $W \propto -(\mu^2 \alpha)/r^6$ — temperature-independent.
  - **London dispersion**: instantaneously induced dipole ↔ induced dipole, $W \propto -(\alpha_1 \alpha_2 \cdot I_1 I_2) / ((I_1 + I_2) r^6)$ — omnipresent, dominates in noble gases.
  - Use when ranking the relative contribution to a molecule's total VdW energy; London is always present, Keesom only when both molecules are polar.

- **Hamaker-Constant Macroscopic VdW (geometries)**
  - Sphere–sphere: $W = -A R_1 R_2 / [6d(R_1 + R_2)]$
  - Sphere–plane: $W = -A R / (6d)$
  - Crossed cylinders: $W = -A R_1 R_2 / (6d)$ (same form as sphere–sphere)
  - Two flat surfaces, per unit area: $W = -A / (12\pi d^2)$
  - Use when computing adhesion, gecko locomotion, colloidal stability, AFM tip–sample force.

- **Allotropy vs Polymorphism** (Ostwald's Step Rule)
  - **Allotropy**: multiple crystal forms of a *single element* (e.g., carbon → diamond, graphite, graphene, fullerene; iron → α-BCC, γ-FCC, δ-BCC).
  - **Polymorphism**: multiple crystal forms of a *compound* (e.g., HgI₂ orthorhombic/trigonal; CaCO₃ aragonite/calcite).
  - **Ostwald's rule** (tendency, not law): the *least stable* polymorph crystallizes first, then converts to more stable forms over time.

## Key Concepts

- **Bonding force**: the net force binding atoms/molecules; magnitude sets the state of matter (solid > liquid > gas).
- **Bond length `r₀`**: inter-atomic separation at the minimum of the $U(r)$ curve.
- **Bonding energy `U₀`**: minimum potential energy; equivalently, the energy required to separate two atoms to infinity.
- **Equilibrium condition**: at `r₀`, attractive force equals repulsive force; $F_A + F_R = 0$ and $dU/dr = 0$.
- **Ionization energy / ionization potential**: energy cost to remove an electron from a gaseous atom — relevant for ionic-bond feasibility and the London-dispersion formula.
- **Electronegativity**: tendency of an atom to attract electrons; high difference between two atoms ⇒ ionic bond; similar values ⇒ covalent.
- **Electron cloud / sea of electrons**: the delocalized valence-electron model of metallic bonding; conduction electrons are not bound to any specific ion core.
- **Conduction electrons**: the valence electrons that are free in metals to drift under an applied field → metals conduct.
- **Hamaker constant `A`**: macroscopic effective VdW parameter, typically $10^{-20}$ J to $10^{-19}$ J; encapsulates all pairwise London/Debye/Keesom contributions between bodies.
- **Hydrogen bond length in water**: ≈197 pm; water molecule can form up to 4 H-bonds (2 lone pairs + 2 H atoms).

## Mental Models

- **Think of bonding as a single `U(r)` well** — the shape (depth, width, asymmetry) varies, but every bond type produces one. Read off `r₀` and `U₀` from one plot; don't memorize numbers.
- **Use the electron-ownership test to classify bonds**: transfer ⇒ ionic, share ⇒ covalent, delocalize ⇒ metallic, polarize ⇒ VdW, partial-charge bridge ⇒ hydrogen. Asking "where do the valence electrons *belong*?" answers the question in one step.
- **Think of metallic bonding as cations in a glue of electrons**: the free-electron "sea" simultaneously shields ion-core repulsion AND provides conduction — same electrons, two jobs.
- **Use directionality as a packing predictor**: directional bonds (covalent, hydrogen) prevent dense packing ⇒ lower mass density; non-directional bonds (ionic, metallic, VdW) pack close ⇒ higher density. So if a solid is unexpectedly light for its atomic weight, suspect directionality.
- **Think of Ostwald's rule as a kinetic trap**: crystallization selects the polymorph with the *lowest barrier*, not the *lowest energy*. Same idea as kinetic vs thermodynamic product in organic chemistry.

## Anti-patterns

- **Attributing short-range repulsion to Coulomb repulsion or Heisenberg uncertainty**: the chapter is explicit — short-range repulsion is **Pauli exclusion** between overlapping electron shells. Picking Heisenberg or "Coulomb of like charges" on a quiz is the classic wrong answer.
- **Confusing bonding energy with bond formation energy**: bonding energy is the *minimum* of the `U(r)` well (energy required to *separate* atoms); the energy *released* during bond formation is `−U₀`. A common MCQ trap.
- **Assuming all solids have the same bonding type**: VdW exists in *every* material to some extent; it is only "the dominant bond" in noble gases and polymers. Don't treat VdW as exotic.
- **Treating hydrogen bonds as "just strong VdW"**: hydrogen bonding is a separate, *stronger* category between VdW and covalent; it requires X–H where X is N/O/F. Don't lump them together.
- **Saying "covalent bonds are weak" because molecules like H₂ have low melting points**: the *bond* is strong; the *inter-molecular force* is VdW. Always separate intra-molecular from inter-molecular.
- **Confusing allotropy with phase change**: diamond → graphite is allotropy (solid → solid); ice → water is a phase change, NOT allotropy. Allotropy requires different bonding arrangement, not different temperature.
- **Writing VdW decay as `1/r²` or `1/r³`**: all three sub-forces (Keesom, Debye, London) decay as `1/r⁶` between two molecules. The `1/r²` and `1/r` forms are macroscopic integration results (Hamaker formulas), not pair potentials.
- **Treating the Lennard-Jones exponents `m, n` as universal**: `m` and `n` are empirical per material; only their *ordering* (`n > m`, with `n ≈ 9–12`) is universal.

## Reference Tables

### Bond classification (master taxonomy)
| Class | Type | Bonding mechanism | Directional? | Examples |
|---|---|---|---|---|
| Primary | Ionic | Electron transfer + Coulomb attraction | No | NaCl, KCl, MgO, MgCl₂ |
| Primary | Covalent | Mutual sharing of valence electrons | **Yes (strongly)** | CH₄, Cl₂, Si, Ge, diamond |
| Primary | Metallic | Ion cores + delocalized electron sea | No | Na, K, Mg, Al, Pb |
| Secondary | Hydrogen | Partial + charge on H bridged to lone pair (X–H···Y) | **Yes** | Ice, water, proteins, DNA, nylon |
| Secondary | Van der Waals | Polarization (Keesom + Debye + London) | No | Noble gases (Ar, Kr, Xe), polymers |

### Bond properties comparison (from §4.5)
| Property | Ionic | Covalent | Metallic | VdW | Hydrogen |
|---|---|---|---|---|---|
| Binding strength | Very strong | Strong | Moderate | Weak | Weak |
| Electrical conductivity | Poor | Variable (semiconductor to good) | **High** | Poor | Low |
| Thermal conductivity | Poor | Variable | **High** | — | Low |
| Optical | Transparent (wide freq range) | Transparent to long λ, opaque to short | Opaque (transparent only at very low freq → mid UV) | Transparent | Transparent |
| Packing | Closed (dense) | **Loose** (directional) | Closed (dense) | Closed | **Loose** |
| Directionality | Non-directional | **Strongly directional** | Non-directional | Non-directional | Directional |

### Van der Waals sub-forces (pair potentials, all `~1/r⁶`)
| Sub-force | Mechanism | Energy formula | Temperature-dependent? |
|---|---|---|---|
| Keesom | Permanent dipole ↔ permanent dipole | $W(r) = -\mu_1^2 \mu_2^2 / [3(4\pi\varepsilon\varepsilon_0)^2 k_B T \cdot r^6]$ | **Yes** (∝ 1/T) |
| Debye | Permanent dipole ↔ induced dipole | $W(r) = -[\mu_1^2 \alpha_{02} + \mu_2^2 \alpha_{01}] / [(4\pi\varepsilon\varepsilon_0)^2 r^6]$ | No |
| London | Instantaneously induced dipole ↔ induced dipole | $W(r) = -\frac{3}{2}\frac{\alpha_{01}\alpha_{02}}{(4\pi\varepsilon_0)^2 r^6} \cdot \frac{I_1 I_2}{I_1 + I_2}$ | No |

### Hamaker VdW formulas (macroscopic geometries)
| Geometry | Formula | Notes |
|---|---|---|
| Sphere – sphere | $W = -A R_1 R_2 / [6d(R_1 + R_2)]$ | `d` = surface separation |
| Sphere – plane | $W = -A R / (6d)$ | "Gecko on wall" geometry |
| Crossed cylinders | $W = -A R_1 R_2 / (6d)$ | Same as sphere–sphere at `R >> d` |
| Two flat surfaces (per unit area) | $W = -A / (12\pi d^2)$ | Used for plate–plate adhesion |

### Allotropy of iron (temperature-driven)
| Crystallization T | Structure | Name |
|---|---|---|
| 2800 °F | BCC | δ-iron |
| 2554 °F | FCC | γ-iron (austenite) |
| 1670 °F | BCC | α-iron (ferrite) |

## Key Equations

**Force/energy fundamentals (single bond):**
- Attractive force: $F_A = +A/r^i$ (always pulls atoms together, $i > 0$).
- Repulsive force: $F_R = -B/r^j$ (always pushes apart, $j > i$, typically 9–12).
- Force–potential relation: $F = -\partial U / \partial r$.
- Total pair potential: $U(r) = U_A + U_R = -C/r^m + D/r^n$.
- Equilibrium: $dU/dr|_{r_0} = 0$, equivalently $F_A(r_0) + F_R(r_0) = 0$.

**Covalent bonding stoichiometry:**
- Maximum covalent bonds per atom: `8 − N` where `N` = number of valence electrons.

**Van der Waals pair energies (all `~ 1/r⁶`):**
- Keesom (permanent–permanent): $W(r) = -\dfrac{\mu_1^2 \mu_2^2}{3(4\pi\varepsilon\varepsilon_0)^2 k_B T \cdot r^6}$.
- Debye (permanent–induced): $W(r) = -\dfrac{\mu_1^2 \alpha_{02} + \mu_2^2 \alpha_{01}}{(4\pi\varepsilon\varepsilon_0)^2 r^6}$.
- London dispersion (instantaneous–instantaneous, two identical atoms): $W(r) = -\dfrac{3\alpha_0^2 I}{64\pi^2 \varepsilon_0^2 r^6}$.
- London dispersion (two dissimilar atoms): $W(r) = -\dfrac{3}{2}\dfrac{\alpha_{01}\alpha_{02}}{(4\pi\varepsilon_0)^2 r^6}\dfrac{I_1 I_2}{I_1 + I_2}$.

**Macroscopic Hamaker-constant VdW (regular geometries):**
- Sphere–sphere: $W = -\dfrac{A R_1 R_2}{6 d (R_1 + R_2)}$.
- Sphere–plane: $W = -\dfrac{A R}{6 d}$.
- Crossed cylinders: $W = -\dfrac{A R_1 R_2}{6 d}$.
- Plate–plate (per unit area): $W = -\dfrac{A}{12 \pi d^2}$.

## Worked Example: Equilibrium separation from the Lennard-Jones-like potential

Given the total pair potential $U(r) = -C/r^m + D/r^n$, find the equilibrium bond length `r₀` and bonding energy `U₀`.

1. Equilibrium condition: $\dfrac{dU}{dr} = \dfrac{mC}{r^{m+1}} - \dfrac{nD}{r^{n+1}} = 0$.

2. Solve for `r₀`: $\dfrac{mC}{r_0^{m+1}} = \dfrac{nD}{r_0^{n+1}} \Rightarrow r_0^{n-m} = \dfrac{nD}{mC} \Rightarrow r_0 = \left(\dfrac{nD}{mC}\right)^{1/(n-m)}$.

3. Bonding energy: substitute back. $U_0 = U(r_0) = -\dfrac{C}{r_0^m} + \dfrac{D}{r_0^n}$. Using step 2's ratio, both terms reduce to $\dfrac{mC}{m r_0^m} = \dfrac{C}{r_0^m}$, giving $U_0 = -\dfrac{C}{r_0^m}\left(1 - \dfrac{m}{n}\right) = -\dfrac{(n-m)C}{n r_0^m}$.

This is the calculation pattern for any "find the bond length and depth" problem: set the derivative to zero, isolate `r₀` from the ratio of attractive and repulsive strengths, then substitute. The `(n−m)/n` prefactor shows that bonding energy is always *less* than the pure attractive term at `r₀` — the repulsive term reduces the well depth.

## Key Takeaways

1. **One `U(r)` well, five bond types** — ionic, covalent, metallic, hydrogen, VdW are all the same `−C/r^m + D/r^n` shape; what differs is the *physical origin* of the attractive term.
2. **Repulsion is Pauli, not Coulomb or Heisenberg** — when outer shells overlap, exclusion principle forces atoms apart. This is the chapter's most-quizzed point.
3. **Use the 8−N rule for covalent stoichiometry** — it predicts both molecular geometry (CH₄ vs Cl₂) and crystal structure (diamond's tetrahedral network).
4. **All three VdW sub-forces decay as `1/r⁶`** — never `1/r²` or `1/r³`. The macroscopic `1/d` and `1/d²` Hamaker forms come from integrating pair potentials over bodies, not from pair physics.
5. **Directionality controls packing density** — covalent and hydrogen bonds yield loose-packed, lower-density solids; ionic, metallic, and VdW yield close-packed structures. If a solid is unexpectedly light, suspect directional bonding.
6. **Ostwald's rule is kinetic, not thermodynamic** — least-stable polymorph crystallizes first; don't confuse "appears first" with "most stable forever."
7. **Secondary bonds are weak but property-dominant** — hydrogen bonds raise water's boiling point by ~200 °C, hold DNA/proteins in shape, and power gecko adhesion via VdW. Never treat them as negligible.

## Connects To

- **Ch 15 (Crystal Structure)**: the bonding type determines which crystal structures (FCC, BCC, diamond cubic, etc.) are stable and how densely atoms can pack — directionality is the bridge.
- **Ch 19 (Magnetic Properties)**: metallic bonding's delocalized electrons are the same electrons that respond to magnetic fields; conduction-electron density sets Pauli paramagnetism.
- **Ch 21 (Optical Properties)**: bonding type predicts transparency/opacity ranges directly from the §4.5 comparison table (ionic transparent, metallic opaque except in extreme UV).
- **Ch 23 (Dielectric Materials)**: the `ε` in VdW energy formulas and the polarizability `α` in Debye/London formulas are the same microscopic quantities that determine bulk dielectric constant.
- **External: Lennard-Jones potential**: the chapter's $U(r) = -C/r^m + D/r^n$ is the textbook ancestor of the modern 6-12 LJ potential ($m=6$, $n=12$). Use LJ when you need a closed-form pairwise model in MD simulations.
- **External: gecko adhesion / colloidal science**: macroscopic Hamaker formulas in §4.4.2 directly explain gecko foot-hair adhesion (sphere–plane VdW) and DLVO colloidal stability.
- **External: pharmaceutical polymorphism**: polymorphs of the same drug have different solubilities → different bioavailability → FDA regulators require polymorph control. The §4.6 discussion is exactly this industry's problem.