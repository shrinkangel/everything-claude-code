# Chapter 19: Magnetic Properties of Materials

## Core Idea
All matter is magnetic — the five macroscopic classes (dia-, para-, ferro-, antiferro-, ferri-) differ only in *how* atomic moments respond to an applied field, unified by the relation $\vec{B} = \mu_0(\vec{H} + \vec{M})$ and the susceptibility definition $\chi_m = M/B$.

## Frameworks Introduced

- **The Magnetic Parameter Relation** $\vec{B} = \mu_0\vec{H} + \mu_0\vec{M}$ with $\mu_r = 1 + \chi_m$
  - When to use: classifying any material's response to $H$; converting between $B$, $H$, $M$, $\chi_m$, $\mu_r$.
  - How: read off $\chi_m$ from one quantity (susceptibility, permeability), derive the rest. Always identify whether $B$ is *external* (free-space) or *internal* (effective on atoms).

- **Larmor's theorem for diamagnetism** $\omega_L = eB/(2m)$
  - When to use: predicting the induced (opposing) moment in any atom — the universal diamagnetic response.
  - How: applied field perturbs orbital frequency by $\omega_L$; integrate over $Z$ electrons and use spherical symmetry $\langle \rho^2 \rangle = (2/3)\langle r^2 \rangle$ to get $\chi_{dia} = -\mu_0 N Z e^2 \langle r^2 \rangle / (6m)$.

- **Langevin / Brillouin theory of paramagnetism** $M = N\mu_m L(a)$ or $M = N g \mu_B J \, B_J(a)$
  - When to use: paramagnets with permanent atomic dipoles (incomplete shells).
  - How: high-field/low-T → $L(a) \to 1$ (saturation); low-field/high-T → $L(a) \approx a/3$ → Curie's law $\chi_p = C/T$.

- **Weiss molecular-field theory** $\vec{B}_T = \vec{B}_e + \lambda \vec{M}$ giving $\chi_m = C/(T - T_C)$
  - When to use: ferromagnets — predicts spontaneous magnetization below $T_C$ and Curie–Weiss behaviour above.
  - How: solve $M(T) = N g \mu_B J \, B_J(a)$ with $a = g\mu_B J(B_e + \lambda M)/kT$ graphically (Brillouin plot); tangency at origin defines $T_C$.

- **Curie's law** $\chi_p = C/T$ and **Curie–Weiss law** $\chi_m = C/(T - T_C)$
  - When to use: paramagnetic regime of any magnetic material.
  - How: linearize Langevin/Brillouin at $a \ll 1$; only difference is the offset $T_C$ (ferromagnets above $T_C$) or $\theta$ (antiferromagnets).

- **Domain / hysteresis framework**
  - When to use: designing or selecting ferromagnetic materials for permanent magnets vs transformer cores.
  - How: read hysteresis loop — area = energy loss/cycle, $M_r$ (remnant) and $B_C$ (coercive) classify hard vs soft; Bloch-wall motion (reversible → irreversible) drives the loop.

## Key Concepts

- **Magnetic dipole moment**: $\vec{\mu}_m = \vec{l}m$ (pole model) or $\vec{\mu}_m = nia\hat{a}$ (current loop); direction by right-hand screw rule.
- **Intensity of magnetization $M$**: net magnetic dipole moment per unit volume.
- **Magnetic susceptibility** $\chi_m = M/B = \mu_0 M / \mu_0 H$: sign of $\chi_m$ is the first classifier (negative → diamagnetic; small positive → para/antiferro; large positive → ferro/ferri).
- **Bohr magneton** $\mu_B = e\hbar/(2m) = 9.27 \times 10^{-24}\ \text{A·m}^2$: the fundamental unit of atomic magnetic moment.
- **Curie constant** $C = N\mu_0 \mu_m^2/(3k)$ for classical Langevin paramagnets; $C = N\mu_0 g^2 \mu_B^2 J(J+1)/(3k)$ in quantum (Brillouin) form.
- **Curie temperature $T_C$**: temperature above which a ferromagnet loses spontaneous magnetization and behaves as a paramagnet (Fe 1043 K, Co 1394 K, Ni 631 K).
- **Néel temperature $T_N$**: analogous transition temperature for antiferromagnets; susceptibility peaks at $T_N$.
- **Larmor frequency** $\omega_L = eB/(2m)$: precession frequency of orbital moment about applied field.
- **Heisenberg exchange integral** $J_e$: positive → ferromagnetic (parallel spins); negative → antiferromagnetic (antiparallel spins). Drives spin alignment, not orbital alignment.
- **Domain (Bloch wall)**: boundary ~$10^{-2}\ \mu$m thick between regions of aligned spin; wall motion (not domain rotation) is the low-energy magnetization mechanism.
- **Effective Bohr magneton number** $p = g\sqrt{J(J+1)}$: experimentally determined from $\chi$ measurements.

## Mental Models

- **Use the sign of $\chi_m$ as a triage test**: every material falls into one of the five classes by measuring response direction and magnitude — positive strong = ferro/ferri, positive weak = para/antiferro, negative = diamagnetic. Don't classify by intuition, classify by $\chi_m$.
- **Think of magnetization as competition between field alignment and thermal agitation**: $a = \mu_m B / kT$ is a single dimensionless ratio. When $a \gg 1$ (low $T$, high $B$) the Langevin function saturates at 1; when $a \ll 1$ it linearizes to $a/3$ and Curie's law falls out.
- **Domains exist to minimize magnetostatic energy at zero cost**: a uniformly magnetized single-domain piece creates strong external stray fields. Splitting into randomly-oriented domains cancels the external field; magnetization costs only the Bloch-wall energy.
- **The hysteresis loop is the magnetic equivalent of plastic deformation**: below the knee, Bloch walls move reversibly; past it, walls jump irreversibly (Barkhausen jumps). The loop area is the energy dissipated per cycle — heat, not field, is the cost of ferromagnetism.
- **Read ferromagnetism as exchange, not orbital**: Weiss field $\lambda M$ is the *classical* explanation for parallel spin alignment. Heisenberg showed it is electrostatic exchange ($J_e > 0$) between electrons in different quantum states — same observable behaviour, deeper quantum origin.

## Anti-patterns

- **Treating "non-magnetic" as a real category**: the chapter explicitly states that *all* materials are magnetic; even paramagnets and diamagnets have $\chi_m \neq 0$. "Non-magnetic" is engineering shorthand for "weakly magnetic."
- **Confusing $\chi_m$ with $\mu$ or $\mu_r$**: $\chi_m = \mu_r - 1$ (dimensionless), $\mu = \mu_0\mu_r$ (H/m), $M = \chi_m B$ (A/m). Mixing units or skipping the $\mu_0$ factor in SI is the single most common calculation error.
- **Assuming diamagnetism depends on temperature**: Langevin's classical result (Eq. 5.18) shows $\chi_{dia}$ is *independent* of $T$ — derived purely from orbital geometry, no thermal population effect. Only paramagnetism (and higher) involves $kT$.
- **Confusing Langevin's classical paramagnetism with the correct quantum (Brillouin) version**: classical theory predicts continuous moment alignment — Leeuwan's objections (continuous angular momentum spectrum, arbitrary angle) killed it. Quantum theory restricts moments to $2J+1$ discrete orientations; Brillouin function $B_J(a)$ reduces to Langevin $L(a)$ only as $J \to \infty$.
- **Reading the hysteresis loop backwards**: remnant magnetization $M_r$ is on the $M$-axis at $B=0$; coercive field $B_C$ is on the $B$-axis at $M=0$. Hard vs soft materials differ by the *area* (loss), not the value of either alone.
- **Assuming ferromagnetism survives across $T_C$**: heating a magnet above $T_C$ and cooling it does *not* restore ferromagnetism — grains re-magnetize in random directions. Only a strong external field can re-establish bulk magnetization.
- **Ignoring exchange interaction when explaining spontaneous magnetization**: Weiss's molecular field is a phenomenological constant; Heisenberg exchange is the actual origin. Materials with $J_e > 0$ are ferromagnetic; those with $J_e < 0$ are antiferromagnetic.

## Reference Tables

### Magnetic material classification
| Property | Diamagnetic | Paramagnetic | Ferromagnetic | Antiferromagnetic | Ferrimagnetic |
|---|---|---|---|---|---|
| Permanent dipoles | None | Yes (random) | Yes (aligned) | Yes (antiparallel) | Yes (uncompensated antiparallel) |
| $\chi_m$ sign | Small negative | Small positive | Very large positive | Small positive | Very large positive |
| $\chi_m$ magnitude | ~$10^{-6}$ | $10^{-5}$–$10^{-2}$ | $\gg 1$ | ~$10^{-3}$ | $\gg 1$ |
| $\chi_m$ vs $T$ | Independent | $\propto 1/T$ | Curie–Weiss $C/(T-T_C)$ for $T>T_C$ | Peak at $T_N$ | Curie–Weiss above $T_N$ |
| Spontaneous $M$ | None | None | Yes (below $T_C$) | None (cancels) | Yes (net, below $T_C$) |
| Ordering temp | — | — | Curie $T_C$ | Néel $T_N$ | Néel $T_N$ |
| Above ordering $T$ | Diamagnet | Paramagnet | Paramagnet | Paramagnet | Paramagnet |
| Exchange $J_e$ | — | — | Positive | Negative | Mixed |
| Examples | Au, Ge, Bi, Si | Na, O₂, Al | Fe, Co, Ni, Gd | MnO, FeO, Cr₂O₃ | Ferrites (MnFe₂O₄, etc.) |

### Hard vs soft ferromagnetic materials
| Property | Hard | Soft |
|---|---|---|
| Magnetize/demagnetize | Difficult | Easy |
| Hysteresis loop | Broad | Steep/narrow |
| Loop area | Large (high loss) | Small (low loss) |
| Susceptibility | Small | Large |
| Permeability | Small | Large |
| Coercivity $B_C$ | High | Low |
| Remnant $M_r$ | High | Low |
| Eddy-current loss | More | Less |
| Examples | Carbon steel, tungsten steel, alnico, Cr steel | Silicon steel, Ni–Fe, Fe–Co alloys |
| Application | Permanent magnets | Transformer cores, inductors |

### Magnetic quantities and units
| Symbol | Name | Definition | SI unit |
|---|---|---|---|
| $\vec{\mu}_m$ | Magnetic dipole moment | $\vec{l}m$ or $nia\hat{a}$ | A·m² |
| $\vec{M}$ | Magnetization | Dipole moment per unit volume | A/m |
| $\vec{B}$ | Magnetic flux density | $\Phi/A$ | T (Wb/m²) |
| $\vec{H}$ | Magnetic field intensity | $B/\mu$ | A/m |
| $\mu$ | Permeability | $\mu_0\mu_r$ | H/m |
| $\mu_r$ | Relative permeability | $\mu/\mu_0$ | dimensionless |
| $\chi_m$ | Susceptibility | $M/H$ | dimensionless |

## Key Equations

**Definitions**
- Dipole moment of current loop: $\vec{\mu}_m = nia\hat{a}$
- Torque on dipole: $\vec{\tau} = \vec{\mu}_m \times \vec{B}$
- $B = \mu H$ in linear medium
- $\mu_r = 1 + \chi_m$
- Bohr magneton: $\mu_B = e\hbar/(2m) = 9.27 \times 10^{-24}\ \text{A·m}^2$

**Diamagnetism (Langevin classical)**
- Larmor frequency: $\omega_L = eB/(2m)$
- Induced moment per atom: $\mu_m = -Ze^2 B \langle r^2 \rangle/(6m)$ (using $\langle \rho^2 \rangle = (2/3)\langle r^2 \rangle$)
- Diamagnetic susceptibility: $\chi_{dia} = -\mu_0 NZ e^2 \langle r^2 \rangle/(6m) = -5.89 \times 10^{-15} NZ\langle r^2 \rangle$
- Per-mole: $\chi_{dia} = -3.55 \times 10^{12} Z\langle r^2 \rangle$ /mole·m²

**Paramagnetism**
- Langevin function: $L(a) = \coth a - 1/a$, with $a = \mu_m B/(kT)$
- Magnetization: $M = N\mu_m L(a)$; saturation $M_s = N\mu_m$
- Low-field limit: $L(a) \approx a/3$ → $\chi_p = N\mu_0\mu_m^2/(3kT) = C/T$ (Curie's law)
- Curie constant: $C = N\mu_0\mu_m^2/(3k)$

**Quantum (Brillouin) paramagnetism**
- Landé $g$-factor: $g = 1 + [J(J+1) + S(S+1) - L(L+1)]/[2J(J+1)]$
- Magnetization: $M = N g \mu_B J \, B_J(a)$ where $B_J(a) = \frac{2J+1}{2J}\coth\!\left(\frac{2J+1}{2J}a\right) - \frac{1}{2J}\coth\!\left(\frac{a}{2J}\right)$
- Curie–Brillouin law: $\chi_m = C/T$ with $C = N\mu_0 g^2 \mu_B^2 J(J+1)/(3k)$
- Effective Bohr magneton number: $p = g\sqrt{J(J+1)}$
- $J$ selection rules: $J = L-S$ (less than half filled), $J = L+S$ (more than half), $J=S$ (exactly half filled, $L=0$)

**Ferromagnetism (Weiss)**
- Internal (molecular) field: $\vec{B}_i = \lambda \vec{M}$
- Total effective field: $\vec{B}_T = \vec{B}_e + \lambda \vec{M}$
- Spontaneous magnetization: $M(T)/M_s(0) = B_J(a)$ with $a = g\mu_B J \lambda M/(kT)$
- Curie temperature: $T_C = N g^2 \mu_B^2 J(J+1) \lambda / (3k)$
- Curie–Weiss law (paramagnetic region): $\chi_m = C/(T - T_C)$

**Antiferromagnetism**
- Heisenberg exchange energy: $E_{ex} = -2 J_e \vec{s}_i \cdot \vec{s}_j$ (parallel spins if $J_e > 0$, antiparallel if $J_e < 0$)
- Above $T_N$: $\chi_m = 2C/(T+\theta)$
- Below $T_N$ (perp to spin axis): $\chi_{m\perp} \approx 1/\beta$ (temperature-independent)
- Below $T_N$ (parallel to spin axis): $\chi_{m\parallel} \approx 0$

## Worked Example: Dipole moment of an iron bar

**Problem**: Iron bar, $5\ \text{cm}$ long, $1\ \text{cm}^2$ cross-section; atomic dipole moment $\mu_{atom} = 1.8 \times 10^{-23}\ \text{A·m}^2$; density $7.85\ \text{g/cm}^3$; atomic mass $55.85\ \text{g}$. All dipoles aligned. Find total dipole moment.

**Solution**:
1. Volume = $5 \times 1 = 5\ \text{cm}^3$
2. Mass = $5 \times 7.85 = 39.25\ \text{g}$
3. Number of atoms:
$$N = \frac{6.023 \times 10^{23}}{55.85} \times 39.25 = 4.23 \times 10^{23}\ \text{atoms}$$
4. Total dipole moment (full alignment):
$$\mu_{bar} = N \mu_{atom} = 4.23 \times 10^{23} \times 1.8 \times 10^{-23} = 7.6\ \text{A·m}^2$$

**Pattern**: when all atomic dipoles align, the macroscopic moment is just $N \times \mu_{atom}$. Compute $N$ from density, molar mass, and Avogadro's number — three physical constants combined with mass is the standard template for any "find bulk moment from atomic moment" problem.

## Key Takeaways

1. **Five classes, two equations**: $\vec{B} = \mu_0(\vec{H} + \vec{M})$ and $\chi_m = M/B$ define the classification. Sign and magnitude of $\chi_m$ is the only diagnostic you need.
2. **Diamagnetism is universal and temperature-independent**: every atom has it; it is masked only when stronger effects (para/ferro) dominate. Langevin's formula $\chi_{dia} = -\mu_0 NZ e^2 \langle r^2 \rangle/(6m)$ depends only on geometry, not $T$.
3. **Curie's law emerges from competition, not law**: $L(a) \approx a/3$ at high $T$ is what produces $\chi \propto 1/T$. Memorize the assumption ($a \ll 1$); the law follows.
4. **Brillouin function > Langevin function**: quantum theory is required for paramagnets — Leeuwan's objections killed classical Langevin. Use $B_J(a)$ with discrete $m_J = -J \ldots +J$; classical Langevin is the $J \to \infty$ limit.
5. **Spontaneous magnetization comes from exchange, not Weiss field**: Weiss's $\lambda M$ is phenomenological. Heisenberg's $J_e > 0$ exchange integral is the actual quantum-mechanical origin. Without it, no ferromagnetism.
6. **The hysteresis loop area = energy lost per cycle**: never pick a ferromagnetic material by saturation magnetization alone. Hard magnets (large area) for permanent magnets; soft magnets (small area) for transformer cores.
7. **Above $T_C$/$T_N$ everything is paramagnetic**: the transition is from ordered (long-range) to disordered (short-range or no) spin arrangement. The same Curie–Weiss formula $\chi = C/(T - T_C)$ applies in the paramagnetic phase.

## Connects To

- **Ch 18 (Dielectric Properties)**: parallel structure — both chapters introduce susceptibility $\chi$ (electric vs magnetic), polarization $P$ vs magnetization $M$, relative permittivity $\varepsilon_r$ vs relative permeability $\mu_r$, and the same five-way classification (linear dielectrics vs dia/para/ferro).
- **Ch 17 (Electromagnetic Induction)**: Lenz's law explicitly invoked as the *physical mechanism* behind diamagnetism in §5.6.1 — induced currents oppose flux change, producing opposing magnetic moment.
- **Ch 20 (Electromagnetic Waves / Maxwell's Equations)**: $B = \mu_0(H + M)$ enters the macroscopic Maxwell equation $\nabla \times \vec{H} = \vec{J}_f + \partial\vec{D}/\partial t$; $\mu_r$ modifies the wave speed $v = c/\sqrt{\mu_r \varepsilon_r}$ inside materials.
- **Ch 22 (Quantum Physics)**: Bohr magneton and Landé $g$-factor are direct quantum-mechanical outputs; Brillouin function arises from summing discrete $m_J$ states with Boltzmann weights.
- **External — electrical machines**: hysteresis loss = loop area × cycles/second determines transformer core heating; remanence $M_r$ sets permanent-magnet field strength; coercivity $B_C$ sets demagnetization resistance.
- **External — solid-state physics**: Heisenberg exchange integral $J_e$ and its dependence on inter-atomic distance $r/r_d$ (Fig. 5.18) is the same physics that determines whether a transition-metal alloy is ferro-, antiferro-, or non-magnetic.