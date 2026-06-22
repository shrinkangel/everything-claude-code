# Chapter 20: Superconductivity

## Core Idea
Below a characteristic critical temperature $T_C$, certain materials undergo a phase transition into a state with **two simultaneous, defining properties**: exactly zero electrical resistivity AND perfect diamagnetism (Meissner effect). The superconducting state is explained by BCS theory as a condensate of Cooper pairs bound by phonon exchange, and is characterized by three engineering limits — $T_C$, $B_C$, and $J_C$ — that must all be respected simultaneously.

## Frameworks Introduced

- **The Three Critical Limits Framework** ($T_C$, $B_C$, $J_C$)
  - When to use: any engineering decision about superconducting device operation or material selection.
  - How: the superconductor only persists when ALL three quantities stay below their critical values. Cross any one threshold → instant collapse to normal state. Operating point must lie inside the "critical surface" in $(T, B, J)$ space.

- **Critical Field Parabolic Law** $B_C(T) = B_{C0}\left(1 - \dfrac{T^2}{T_C^2}\right)$
  - When to use: type-I superconductors; computing maximum allowable field at operating temperature $T$.
  - How: read $B_{C0}$ from material table, compute. Returns the field above which superconductivity dies at temperature $T$.

- **Meissner Effect (Perfect Diamagnetism)**
  - When to use: identifying the true superconducting state vs. merely "zero resistance"; predicting magnetic behavior at low $T$.
  - How: when $T < T_C$ in any applied field $B$, the superconductor generates surface currents that exactly cancel interior $B$. Result: $B_{inside} = 0$, magnetic susceptibility $\chi = -1$, levitation possible. This is NOT a consequence of $R=0$ — it is an independent, defining property.

- **BCS Theory (Cooper Pair Mechanism)**
  - When to use: understanding why $T_C$ exists at all; predicting isotope effect and energy gap; explaining why good conductors (Cu, Au, Ag) are NOT superconductors.
  - How: phonon-mediated attractive interaction overcomes Coulomb repulsion between two electrons → they bind into a Cooper pair of size (coherence length $\xi$) much larger than lattice spacing → all pairs condense into a single quantum ground state.

- **Type-I vs Type-II Classification by Magnetization Response**
  - When to use: selecting materials for magnets, high-field applications, or current-carrying coils.
  - How: type-I expels field completely up to $B_C$ then collapses abruptly (low $B_C$, "soft"). Type-II allows flux penetration as vortices between $B_{C1}$ and $B_{C2}$ (high $B_{C2}$ ~100× larger, "hard") — only type-II is useful for high-field engineering.

- **London Equations (Two-Fluid Model)**
  - When to use: deriving the Meissner effect analytically; computing penetration depth $\lambda$.
  - How: treat superconductor as mixture of normal electrons ($N_n$) and superfluid electrons ($N_s$). First equation: $d\vec{J}_s/dt = (N_s e^2/m^*)\vec{E}$. Second equation: $\nabla \times \vec{J}_s = -(N_s e^2/m^*)\vec{B}$. Combining with Maxwell's equations yields exponential field decay $B(x) = B_0 e^{-x/\lambda}$ inside the material.

- **Josephson Effect + SQUID**
  - When to use: ultra-sensitive magnetic field measurement; ultra-fast switching; voltage standard.
  - How: two superconductors separated by ~10–20 Å insulator form a junction. Cooper pairs tunnel with zero resistance below a critical current. SQUID = two Josephson junctions in parallel → most sensitive magnetic flux sensor known.

## Key Concepts

- **Superconductivity**: complete disappearance of electrical resistivity combined with perfect diamagnetism below $T_C$.
- **Critical temperature $T_C$**: temperature below which the material becomes superconducting (varies by isotope per $M^\alpha T_C = $ constant, $\alpha \approx 0.5$).
- **Critical magnetic field $B_C$**: applied field above which superconductivity is destroyed at a given temperature.
- **Critical current density $J_C$**: maximum current per area the superconductor can carry before reverting to normal state.
- **Meissner effect**: expulsion of magnetic flux from the interior of a superconductor ($B_{inside} = 0$, $\chi = -1$).
- **Cooper pair**: two electrons bound by virtual phonon exchange; the charge carrier of the superconducting state; boson-like, can condense into a single quantum state.
- **Phonon**: quantized lattice vibration; the "glue" that mediates electron-electron attraction in BCS theory.
- **Type-I (soft) superconductor**: complete flux expulsion until abrupt collapse at single $B_C$; low $B_C$ (≤0.1 T); e.g., Pb, Hg, Sn, Al.
- **Type-II (hard) superconductor**: flux penetrates as quantized vortices between $B_{C1}$ and $B_{C2}$; high $B_{C2}$ (~30 T observed); e.g., Nb, YBCO; only type suitable for high-field magnets.
- **Vortex state**: mixed state of type-II between $B_{C1}$ and $B_{C2}$ — magnetic flux tubes threading normal-conducting cylinders surrounded by superconducting regions.
- **Flux pinning**: trapping of magnetic flux lines at defects/grain boundaries in type-II superconductors — enables stable levitation and zero-friction gyroscopes.
- **London penetration depth $\lambda$**: characteristic distance over which external $B$ decays to $1/e$ inside a superconductor (~1000 Å typical). $\lambda(T) = \lambda(0)/\sqrt{1-(T/T_C)^4}$.
- **Coherence length $\xi$**: size of a Cooper pair; distance over which Cooper pairs travel without breaking.
- **Energy gap**: minimum energy needed to break a Cooper pair; BCS predicts $\sim 3.53\, k_B T_C$ at $T = 0$; zero at $T_C$, maximum at 0 K.
- **Josephson junction**: two superconductors separated by a thin (~10–20 Å) insulating barrier; Cooper pairs tunnel through; basis for SQUID and superconducting electronics.
- **SQUID (Superconducting Quantum Interference Device)**: two Josephson junctions in parallel; most sensitive magnetic flux sensor known (senses fields a billion times weaker than a compass needle).

## Mental Models

- **Use the "triple ceiling" mental model**: superconductivity is a 3D operating region bounded by $T_C$, $B_C$, $J_C$. Heat it past $T_C$, magnetize it past $B_C$, or push it past $J_C$ → collapse. Optimizing one limit in isolation is meaningless.
- **Think of the superconductor as a magnetic mirror, not just a perfect wire**: zero resistance alone is necessary but NOT sufficient — perfect diamagnetism (Meissner) is the other defining property. A perfect conductor alone would freeze in whatever field existed at $T_C$; a superconductor actively expels it.
- **Think of Cooper pairs as cars drafting on a highway**: the leading electron distorts the lattice (creates a positive trough); the trailing electron is drawn into that trough. They move as a unit, immune to single-electron scattering because they are a coherent quantum entity.
- **Type-II's vortex state is a controlled compromise**: instead of an all-or-nothing Meissner response (type-I), it lets flux thread through as quantized vortices once $B > B_{C1}$. This costs partial magnetic response but buys 100× higher $B_{C2}$ — the engineering reason type-II dominates real applications.
- **Penetration depth is a "skin" depth, not a bulk property**: $\lambda$ tells you how thin the active shielding layer is. Beyond $\sim 3\lambda$ inside the material, $B$ is essentially zero.

## Anti-patterns

- **Calling superconductivity "just zero resistance"**: incorrect — a perfect conductor (R = 0 but no Meissner) is NOT a superconductor. Perfect diamagnetism is independent and equally defining. Onnes discovered $R=0$ in 1911; Meissner & Ochsenfeld discovered flux expulsion only in 1933.
- **Assuming good conductors become superconductors at low $T$**: opposite — Cu, Ag, Au never superconduct. Superconductivity requires STRONG electron-lattice coupling, which good conductors (weak coupling) lack.
- **Computing $B_C(T)$ from a linear approximation**: the parabolic law is $1 - T^2/T_C^2$, not $1 - T/T_C$. Using linear gives wrong answer at mid-range temperatures.
- **Using type-I for high-field magnets**: type-I's $B_C < 0.1$ T makes it useless for any practical magnet. Always pick type-II for coils carrying high current in high field.
- **Confusing penetration depth with coherence length**: $\lambda$ = magnetic field decay length. $\xi$ = Cooper pair spatial size. The ratio $\kappa = \lambda/\xi$ determines type-I ($\kappa < 1/\sqrt{2}$) vs type-II ($\kappa > 1/\sqrt{2}$).
- **Forgetting that current density has its own critical value**: a superconducting wire at $T < T_C$ can still be driven normal by exceeding $J_C$, even with no applied magnetic field.
- **Treating SQUID as a single Josephson junction**: SQUID specifically requires two junctions in parallel — the interference between them is what gives it extraordinary sensitivity.

## Reference Tables

### Type-I vs Type-II Superconductors

| Property | Type-I (soft) | Type-II (hard) |
|---|---|---|
| Flux expulsion | Complete below single $B_C$ | Complete only below $B_{C1}$ |
| Magnetization curve | Reversible, abrupt drop at $B_C$ | Gradual, vortex state between $B_{C1}$ and $B_{C2}$ |
| Typical $B_C$ | ≤ 0.1 T | $B_{C2}$ up to ~30 T |
| Examples | Pb, Hg, Sn, Al, Cr | Nb, V, YBCO, Nb-Ti, Nb₃Sn |
| Use for high-field magnets | No | Yes |
| Penetration/coherence ratio | $\kappa = \lambda/\xi < 1/\sqrt{2}$ | $\kappa > 1/\sqrt{2}$ |

### Critical Surface — Three Independent Limits

| Parameter | Symbol | Meaning | Threshold |
|---|---|---|---|
| Critical temperature | $T_C$ | Below this, $R=0$ and Meissner activate | Material property |
| Critical magnetic field | $B_C$ | Above this, normal state returns | Depends on $T$ |
| Critical current density | $J_C$ | Above this, normal state returns | Depends on $T$ and $B$ |

Material is superconducting only when ALL three lie below their thresholds simultaneously.

### Superconducting State vs Normal State Thermodynamics

| Quantity | Change at transition | Sign |
|---|---|---|
| Free energy $F_N - F_S$ | Decreases | $> 0$ |
| Entropy $S_N - S_S$ | Decreases | $> 0$ (more ordered) |
| Specific heat $C_S - C_N$ | Increases | $> 0$ |
| Resistivity | Drops to zero | — |
| Magnetic response | Perfect diamagnetism ($\chi = -1$) | — |

### Energy Gap Behavior

| Temperature | Energy gap |
|---|---|
| $T = 0$ K | Maximum, $\approx 3.53\, k_B T_C$ (BCS prediction) |
| $T = T_C$ | Zero (gap closes at transition) |
| $T > T_C$ | No superconducting state |

### Application Categories (per author)

| Domain | Mechanism exploited |
|---|---|
| Transportation (maglev) | Magnetic levitation by Meissner repulsion |
| Medical MRI, MEG, SQUID | Strong stable magnetic fields; ultra-sensitive magnetometers |
| Fundamental research | Particle accelerators (superconducting magnets); Planck's constant revision (Josephson) |
| Power systems | >99% efficient generators; superconducting transformers; fault limiters; underground cables |
| Computers | Josephson junctions for petaflop logic; type-II flux storage |
| Electronics | High-frequency filters (zero-resistance at RF) |
| Military | SQUID mine/submarine detection; E-bombs; superconducting antennas |
| Space research | Flux-pinning gyroscopes; X-ray / light detectors |
| Internet | Superconducting digital routers |

## Key Equations

### Critical Field and Current

- Parabolic critical field: $B_C(T) = B_{C0}\left(1 - \dfrac{T^2}{T_C^2}\right)$ — type-I.
- Critical current for cylindrical wire: $I_C = \dfrac{2\pi r B_C}{\mu_0}$.
- Critical current density: $J_C = \dfrac{2 B_C}{\mu_0 r}$ — for cylindrical wire of radius $r$.

### Isotope Effect

- $M^\alpha T_C = \text{constant}$, with $\alpha \approx 0.5$ for most materials (some have $\alpha = 0$).

### Thermodynamics

- Free energy difference: $F_N(0) - F_S(0) = \dfrac{B_C^2}{2\mu_0}$.
- Entropy difference: $S_N - S_S = \dfrac{2 B_C^2(0)\, T}{\mu_0 T_C^2}$.
- Specific heat jump at $T_C$: $C_S - C_N\big|_{T=T_C} = \dfrac{4 B_C^2(0)}{\mu_0 T_C}$ — discontinuous jump confirming a second-order phase transition.
- Electronic specific heat: $C_{V,e} = A e^{-\alpha T_C / T}$ — activated behavior confirming an energy gap.

### BCS / Energy Gap

- BCS energy gap at 0 K: $\Delta(0) \approx 3.53\, k_B T_C$.

### London Equations

- First: $\dfrac{d\vec{J}_s}{dt} = \dfrac{N_s e^2}{m^*} \vec{E}$.
- Second: $\nabla \times \vec{J}_s = -\dfrac{N_s e^2}{m^*} \vec{B}$.
- Magnetic field penetration: $B(x) = B_0\, e^{-x/\lambda}$.
- London penetration depth: $\lambda = \sqrt{\dfrac{m^*}{\mu_0 e^2 N_s}}$, $\lambda(0) \approx 1000$ Å typical.
- Temperature dependence: $\lambda(T) = \dfrac{\lambda(0)}{\sqrt{1 - (T/T_C)^4}}$.
- Superfluid fraction: $N_s/N_0 = 1 - (T/T_C)^4$ — order parameter.

## Worked Example: Critical Field and Critical Current for Tin

Given: $T_C = 3.72$ K, $B_{C0} = 30.5 \times 10^{-3}$ T (at 0 K). Find $B_C$ at $T = 1.5$ K.

Using the parabolic law:
$$B_C(T) = B_{C0}\left(1 - \frac{T^2}{T_C^2}\right) = 30.5 \times 10^{-3}\left(1 - \frac{1.5^2}{3.72^2}\right)$$
$$= 30.5 \times 10^{-3}(1 - 0.1626) = 30.5 \times 10^{-3} \times 0.8374$$
$$\approx 25.54 \times 10^{-3} \text{ T}$$

Pattern: identify $B_{C0}$ and $T_C$ from material tables → plug into parabolic law → always the same shape. For higher $T$ the field tolerance shrinks quadratically.

## Key Takeaways

1. **Two defining properties, not one**: $R = 0$ AND perfect diamagnetism (Meissner). Memorize this — it eliminates the most common misconception that superconductivity is "just perfect conduction".
2. **Three ceilings, not one**: $T_C$, $B_C$, $J_C$ must all be respected simultaneously. Engineering superconductivity = finding the operating point inside the critical surface.
3. **Type-II for real magnets, period**: type-I's $B_C < 0.1$ T makes it useless for high-field applications. Always choose type-II for coils, motors, generators.
4. **BCS explains the mechanism, not just the phenomenon**: phonon-mediated electron pairing is the only accepted microscopic theory. It predicts isotope effect ($\alpha \approx 0.5$) and energy gap ($3.53\, k_B T_C$) — both experimentally confirmed.
5. **Penetration depth $\lambda$ is the field's "skin"**: $B$ decays as $e^{-x/\lambda}$ inside the superconductor. $\lambda \to \infty$ as $T \to T_C$, mirroring the vanishing of $N_s$.
6. **London equations are the macroscopic toolkit**: combine with Maxwell to derive Meissner and penetration depth analytically — no quantum mechanics required at this level.
7. **Josephson + SQUID = extreme sensitivity**: pair tunneling through thin insulator enables the most sensitive magnetometer known and ~10× faster switching than semiconductor electronics.

## Connects To

- **Ch 5 (Electromagnetism)**: Maxwell's equations combined with London equations yield the Meissner effect; Faraday's law underlies $\nabla \times \vec{E} = -\partial \vec{B}/\partial t$ used in deriving London eqn. 2.
- **Ch 7 (Quantum Physics)**: Cooper pairing is a quantum condensation phenomenon; Josephson tunneling is a direct quantum-mechanical wave-function effect across barriers; the BCS energy gap parallels the band-gap concept in semiconductors.
- **Ch 6 (EM Waves)**: penetration depth relates to electromagnetic wave behavior in conducting media; energy gap governs response to high-frequency EM fields.
- **Ch 18 (Solid State Physics)**: phonon concept (lattice vibration quanta) is foundational to BCS; superconductivity is a property of the crystalline state.
- **External: cryogenic engineering**: practical application of superconductors depends entirely on whether cooling technology can reach $T_C$ — this is the dominant cost driver.
- **External: power engineering**: superconducting transformers, generators, cables, and fault current limiters are the largest near-term commercial deployment.
- **External: medical imaging (MRI, MEG)**: SQUID enables magnetoencephalography measuring brain activity via pico-Tesla fields.