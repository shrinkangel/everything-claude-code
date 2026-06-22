# Chapter 22: Optoelectronic Devices

## Core Idea
Every optoelectronic device is a transducer between photons and electrons that is unlocked by one enabling trick — **population inversion** — and one guiding principle — **total internal reflection**. Master the Einstein A/B coefficients, the three- and four-level pumping schemes, and Snell's law applied at the core-cladding interface, and you simultaneously understand lasers, LEDs, photodetectors, and fiber-optic links.

## Frameworks Introduced

- **Photon-energy ↔ wavelength conversion** $\lambda(\text{Å}) = \dfrac{12400}{E(\text{eV})}$
  - When to use: any time a problem gives an optical wavelength and asks for photon energy, or vice versa — the single most-used formula in this chapter.
  - How: plug energy in eV to get wavelength in Ångström (the 12400 = hc/e with the right unit scaling). Memorize; never derive.

- **Einstein A/B rate equations** — three competing transition rates at thermal equilibrium:
  - Stimulated absorption: $R_{12} = B_{12}N_1 u(\nu)$
  - Spontaneous emission: $R_{21}^{\text{sp}} = A_{21}N_2$
  - Stimulated emission: $R_{21}^{\text{st}} = B_{21}N_2 u(\nu)$
  - Equilibrium forces $R_{12} = R_{21}^{\text{sp}} + R_{21}^{\text{st}}$ → reproduces Planck's law only if stimulated emission is included.
  - **Einstein relations**: $\dfrac{A_{21}}{B_{21}} = \dfrac{8\pi h \nu^3}{c^3}$ and $B_{12} = B_{21}$.

- **Population inversion + optical resonator** — the two conditions for lasing:
  - Population inversion: $N_2 > N_1$, achieved by *pumping* atoms into a **metastable state** ($\tau \sim 10^{-3}$ s vs $10^{-8}$ s normal excited state; required by $\Delta E \cdot \Delta t = \hbar/2$).
  - Optical resonator: two parallel mirrors ($m\lambda/2 = L$, with $m \sim 10^6$), one fully reflecting, one partially transmitting. Mode spacing $\Delta\nu = c/(2L\mu)$; number of modes $N = \text{bandwidth}/\Delta\nu$.
  - When to use: any "design a laser" or "explain coherent output" question.

- **Three-level vs four-level laser systems** — the practical schemes for getting and *holding* inversion:
  - Three-level (ruby): pump $E_0 \to E_2$ (excited, fast decay) → atoms accumulate in metastable $E_1$ → laser transition $E_1 \to E_0$. Needs >50% inversion → high threshold.
  - Four-level (He-Ne, Nd:YAG): add a lower level $E'$ slightly above ground → laser transition ends *above* ground → only requires $N_{E_1} > N_{E'}$, easy to maintain. CW operation possible.

- **Direct vs indirect band-gap recombination** — the rule for whether an LED works:
  - Direct gap (GaAs, InP): conduction-band minimum and valence-band maximum occur at same $k$ → recombination emits photon efficiently.
  - Indirect gap (Si): different $k$ → must involve phonon to conserve momentum → recombination usually non-radiative. **This is why silicon cannot make efficient LEDs.**

- **Total-internal-reflection step-index fiber** — numerical aperture and acceptance angle:
  - $\text{NA} = n_1\sin\theta_a = \sqrt{n_1^2 - n_2^2} = n_1\sqrt{2\Delta}$, with $\Delta = (n_1^2 - n_2^2)/(2n_1^2)$.
  - Only rays with $\theta < \theta_a$ (typically ~11° for silica) propagate; acceptance angle = $2\theta_a$.

- **Graded-index fiber** — parabolic $n(r) = n_0[1 - \tfrac{1}{2}\alpha r^2]$ so peripheral rays travel faster than axial rays → all modes arrive together → minimizes modal dispersion inherent in step-index multimode fiber.

## Key Concepts

- **Metastable state**: long-lived excited level ($\tau \sim 10^{-3}$ s) that acts as the upper laser level; the existence of such a state is the prerequisite for any laser.
- **Population inversion**: $N_2 > N_1$; sometimes called "negative-temperature state" because the Boltzmann factor $e^{-(E_2-E_1)/kT}$ would require $T<0$ for it to hold naturally.
- **Pumping**: external energy source (optical/electrical/chemical/nuclear) used to drive the system out of equilibrium into inversion.
- **Optical resonator / cavity**: two parallel mirrors that convert spontaneous emission into stimulated emission by reflecting photons back through the active medium; supports standing-wave modes $m\lambda/2 = L$.
- **Spontaneous vs stimulated emission**: spontaneous is random (LED); stimulated produces a coherent copy of the triggering photon (laser).
- **Quantum efficiency** of LED: ratio of emitted photons to electrons crossing the junction; close to unity in direct-gap semiconductors.
- **Numerical aperture (NA)**: figure of merit for fiber light-gathering power; $\text{NA} = n_1\sqrt{2\Delta}$.
- **Acceptance angle** $2\theta_a$: the cone of incident angles that propagate by TIR.
- **Modal dispersion**: spreading of a pulse because different modes take different optical paths — the dominant bandwidth limit in step-index multimode fibers.
- **Rayleigh scattering** ($\propto 1/\lambda^4$): intrinsic attenuation mechanism in silica; sets the lower bound on fiber loss.

## Mental Models

- **Think of a laser as an "avalanche of identical photons"**: one triggered stimulated emission produces two photons, those trigger four, then eight, etc. — until the optical resonator siphons off the excess through the partially-reflecting mirror. Coherence and intensity fall out of this cascade, not from any single special photon.
- **Use the "negative temperature" picture for population inversion**: any system in equilibrium obeys $N_2 < N_1$. Pumping artificially forces the system into a state that would be its equilibrium only at $T<0$ — an unnatural, energy-loaded state that "wants" to relax by emitting coherent radiation.
- **Think of NA as the "acceptance cone" of the fiber**: bigger NA = bigger light-gathering angle = easier coupling from a cheap LED source. But bigger NA also means bigger $\Delta$, which trades off against modal bandwidth.
- **Direct vs indirect gap is the "phonon-coupling switch"**: in direct gap, electron-hole pair can dump its energy as one photon; in indirect gap, the lattice must participate, so most energy goes to heat. This single material-property distinction is why GaAs makes LEDs and Si does not.

## Anti-patterns

- **Confusing LED with laser diode**: LED emits by *spontaneous* recombination → incoherent, broad spectrum; laser diode requires population inversion + resonator → coherent, narrow. The semiconductor p-n junction is the same; the operating conditions and output are entirely different.
- **Treating "population inversion" as something lasers do**: inversion is the precondition; the resonator is what *makes* it produce a coherent beam. Without the cavity, you only get amplified spontaneous emission (ASE), not a laser.
- **Assuming silicon can be made into an efficient LED**: silicon's indirect band gap means radiative recombination is suppressed; you need a direct-gap compound (GaAs, InP, GaN). This is a frequent textbook trap question.
- **Forgetting that step-index multimode fiber *always* has modal dispersion**: even a perfect fiber, with zero attenuation, will smear pulses if many modes are excited. Graded-index (parabolic) profile is required to time-align modes.
- **Plugging wavelength in nm into $\lambda = 12400/E$ without unit check**: 12400 needs energy in eV and yields wavelength in Ångström. Substituting meters or joules silently gives the wrong number by 7-8 orders of magnitude.
- **Treating He-Ne laser's laser transition as happening in helium**: it does *not*. Helium only does the pumping by resonant-energy-transfer collision; the laser transition is in neon ($20.66 \text{ eV} \to 18.70 \text{ eV}$). Same trick is used in many gas lasers.

## Reference Tables

### Laser schemes compared

| Scheme | Levels | Active species | Pumping | Laser transition | Output | Duty |
|---|---|---|---|---|---|---|
| Ruby | 3-level | Cr³⁺ in Al₂O₃ | Optical (xenon flash) | $E_1 \to E_0$ | 6943 Å (red) | Pulsed |
| He-Ne | 4-level | Ne (He does pumping) | Electrical discharge | $20.66 \to 18.70$ eV | 6328 Å (red), also IR | CW |
| Semiconductor (GaAs) | 4-level (junction) | GaAs p-n | Forward bias current | Conduction band → valence band | 8000–9000 Å | CW, mod. < $10^{-10}$ s |

### Optical fiber classification

| By index profile | By core size | Mode propagation | Bandwidth | Typical use |
|---|---|---|---|---|
| Step-index | Multi-mode (50–200 µm) | Many modes, zig-zag | Low (modal dispersion dominates) | Short-haul, endoscopy |
| Step-index | Single-mode (8–10.5 µm) | One mode | Very high | Long-haul telecom |
| Graded-index | Multi-mode | Many modes, helical | Medium-high (modes time-aligned) | LAN, medium distance |

### Numerical-aperture formulae

| Quantity | Formula | Notes |
|---|---|---|
| Acceptance-angle NA | $\text{NA} = n_1 \sin\theta_a = \sqrt{n_1^2 - n_2^2}$ | Step-index fiber |
| Acceptance-angle NA | $\text{NA} = n_1\sqrt{2\Delta}$ | With relative index difference $\Delta = (n_1^2 - n_2^2)/(2n_1^2)$ |
| Acceptance-angle (general) | $\text{NA} = n_0\sin\theta_0$ | Measured from outside; $n_0 = 1$ in air |
| Mode number (resonator) | $N = \text{bandwidth}/\Delta\nu$ | Within laser gain linewidth |

### LED vs incandescent

| LED | Incandescent |
|---|---|
| ~2 V, 5–10 mA | 120 V AC |
| Monochromatic output | Broad blackbody spectrum |
| $< 10^{-9}$ s switch time | Thermal inertia |
| $> 10^5$ h lifetime | ~10³ h |
| Immune to vibration | Fragile filament |

## Key Equations

**Photons and energy**
- Wavelength–energy: $\lambda(\text{Å}) = \dfrac{12400}{E(\text{eV})}$, equivalently $E = hc/\lambda$
- Energy–time uncertainty: $\Delta E \cdot \Delta t = \hbar/2$ → metastable state width is tiny because lifetime is long

**Einstein rate equations**
- Absorption rate: $R_{12} = B_{12} N_1 u(\nu)$
- Spontaneous rate: $R_{21}^{\text{sp}} = A_{21} N_2$
- Stimulated rate: $R_{21}^{\text{st}} = B_{21} N_2 u(\nu)$
- Equilibrium: $B_{12} N_1 u(\nu) = A_{21} N_2 + B_{21} N_2 u(\nu)$
- Boltzmann population ratio: $N_1/N_2 = \exp[(E_2 - E_1)/kT]$
- Einstein relations: $A_{21}/B_{21} = 8\pi h\nu^3/c^3$ and $B_{12} = B_{21}$
- Spontaneous-to-stimulated ratio at optical frequencies: $A_{21}/[B_{21}u(\nu)] \approx 10^{10}$ → LEDs without inversion are overwhelmingly spontaneous

**Laser cavity**
- Resonant condition: $m\lambda/2 = L$ → $\nu_m = mc/(2L\mu)$, $m \sim 10^6$
- Mode spacing: $\Delta\nu = c/(2L\mu)$
- Number of longitudinal modes: $N = \text{bandwidth}/\Delta\nu$
- Fresnel number: $N_F = D^2/(\lambda L)$; must $\gg 1$ to minimize diffraction loss with plane mirrors
- Spherical-mirror stability: $0 \le (1 - L/R_1)(1 - L/R_2) \le 1$

**LED and semiconductor laser**
- Band gap ↔ wavelength: $E_g = hc/\lambda$, with $4000 \text{ Å} < \lambda < 7000 \text{ Å}$ → $1.77 \text{ eV} < E_g < 3.11 \text{ eV}$

**Optical fibers**
- Numerical aperture: $\text{NA} = \sqrt{n_1^2 - n_2^2} = n_1\sqrt{2\Delta}$
- Relative index difference: $\Delta = (n_1^2 - n_2^2)/(2n_1^2)$
- Rayleigh scattering loss: $\propto 1/\lambda^4$
- Information density: 2 small optical fibers ↔ 24 000 phone calls; 100 g fiber ↔ 33 t of copper wire

## Worked Example

**Example 8.2 — Number of longitudinal modes in a gas laser.**

A He-Ne laser has cavity length $L = 60$ cm and contains gas of refractive index $\mu = 1.0204$. The output bandwidth is $\Delta\nu_{\text{bw}} = 1.5 \times 10^9$ Hz. Find the frequency spacing between adjacent longitudinal modes and the number of optical modes.

1. Mode spacing:
$$\Delta\nu = \frac{c}{2L\mu} = \frac{3 \times 10^{10} \text{ cm/s}}{2 \times 60 \text{ cm} \times 1.0204} = \frac{3 \times 10^{10}}{122.45} \approx 2.45 \times 10^{8} \text{ Hz}$$

2. Number of modes:
$$N = \frac{\text{bandwidth}}{\Delta\nu} = \frac{1.5 \times 10^{9}}{2.45 \times 10^{8}} \approx 6$$

So the output contains ~6 closely spaced frequencies within the gain bandwidth — a real He-Ne laser spectrum shows these as separate longitudinal modes.

**Example 8.6 — Numerical aperture of a step-index fiber.**

Core $n_1 = 1.55$, cladding $n_2 = 1.53$. Find NA.

$$\text{NA} = \sqrt{n_1^2 - n_2^2} = \sqrt{1.55^2 - 1.53^2} = \sqrt{(1.55-1.53)(1.55+1.53)} = \sqrt{0.02 \times 3.08} = \sqrt{0.0616} \approx 0.248$$

So acceptance half-angle $\theta_a = \sin^{-1}(0.248) \approx 14.4°$, giving acceptance cone $2\theta_a \approx 28.8°$. The corresponding relative index difference $\Delta = (n_1^2 - n_2^2)/(2n_1^2) \approx 0.0128$ — a small Δ keeps modal dispersion low but at the cost of a narrow acceptance cone.

## Key Takeaways

1. **Population inversion is the gate, the resonator is the engine** — without inversion no laser action; without resonator you only get amplified spontaneous emission. Both are required.
2. **Direct band gap is non-negotiable for LEDs** — pick from GaAs, InP, GaN family. Silicon is structurally incapable of efficient light emission because of momentum mismatch.
3. **Use the rate-equation view of lasers, not the photon picture** — Einstein's A and B coefficients unify spontaneous emission, stimulated emission, and absorption; their ratio explains why normal light sources are incoherent ($\sim 10^{10}$ ratio in favor of spontaneous at optical frequencies).
4. **Metastable state is the laser trick** — without a long-lived upper level ($\tau \sim 10^{-3}$ s), atoms cannot accumulate fast enough to achieve inversion. Every laser's design centers on finding or engineering one.
5. **NA quantifies fiber light-gathering** — $\text{NA} = \sqrt{n_1^2 - n_2^2}$ is the single number to know for fiber coupling; bigger NA = easier coupling, more modal dispersion.
6. **Step-index multimode fiber is bandwidth-limited by modal dispersion, not loss** — graded-index or single-mode fiber is required for long-distance high-bit-rate links.
7. **He-Ne laser's laser transition is in neon, not helium** — helium only does resonant-energy-transfer pumping. This is a recurring exam trap.

## Connects To

- **Ch 4 (Wave Optics)**: total internal reflection and Snell's law are the foundation of step-index fiber propagation.
- **Ch 7 (Quantum Physics)**: Einstein's A/B coefficients come from blackbody radiation; the photon picture ($E = h\nu$) underlies every LED and laser calculation in this chapter.
- **Ch 9 (Solid-State Physics)**: direct vs indirect band gap, density of states, and the p-n junction (covered earlier) are the foundation for LED and semiconductor-laser operation.
- **Ch 13 (Electromagnetic Waves)**: resonant cavity modes in this chapter are the same standing-wave formalism as microwave and optical resonators; $m\lambda/2 = L$ is universal.
- **External: communications engineering**: optical-fiber links (1310 nm, 1550 nm) are the physical layer of modern telecom; mode spacing, attenuation, and NA directly determine link budget.
- **External: photovoltaic / solar cell engineering**: solar cells are the inverse of an LED — same p-n junction, opposite direction of energy flow. The band-gap window $1.77 < E_g < 3.11$ eV for LEDs applies symmetrically to PV cell efficiency optimization.
