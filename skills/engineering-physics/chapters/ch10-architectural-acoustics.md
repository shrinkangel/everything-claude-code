# Chapter 10: Architectural Acoustics

## Core Idea
A hall's acoustic character is set by one number — **reverberation time** — which Sabine showed is determined entirely by room volume divided by total absorption ($T = 0.165V/\sum \alpha_i s_i$). Designing a hall is the engineering problem of hitting the right T-band (0.5–1 s speech, 1–2 s music) by choosing surface materials whose absorption coefficients sum to the required value.

## Frameworks Introduced

- **Sabine's Reverberation Formula**: $T = \dfrac{0.165\,V}{\sum \alpha_i s_i}$
  - When to use: any enclosed space where you need to predict or set how long a sound lingers after the source stops. V in m³, $\alpha_i$ dimensionless, $s_i$ in m².
  - How: (1) tabulate every surface and its absorption coefficient $\alpha_i$ (open window = 1.0 Sabin); (2) compute total absorption $A = \sum \alpha_i s_i$; (3) plug into the formula. For air at 20 °C the constant comes from $24V\ln 10 / (cA)$ with $c = 340$ m/s.

- **Sabine (Open-Window Unit) — absorption measurement scale**: 1 Sabin = absorption of 1 m² of open window ($\alpha = 1.0$ by definition).
  - When to use: reporting how absorptive a material is, or computing equivalent absorption from surface area.
  - How: if area $s$ of material absorbs as much as 1 m² of open window, then $\alpha = 1/s$. Units make every "amount of absorption" an *area-like* quantity.

- **Absorption ↔ Reflection complement**: $\alpha = 1 - R$, where $R$ is the reflection coefficient.
  - When to use: when you know how much is reflected (e.g., from impedance data) and want absorption.
  - How: $R = +1$ → rigid wall, $\alpha = 0$; $R = -1$ → soft wall, $\alpha = 0$ (energy returned but phase-flipped); $R = 0$ → perfect absorber (anechoic).

- **Sabine's two absorption-measurement protocols**:
  - **Method 1 (sample in empty room)**: $\alpha = \dfrac{0.165V}{S}\left(\dfrac{1}{T_2} - \dfrac{1}{T_1}\right)$ — measure reverberation with and without a known-area sample of the test material.
  - **Method 2 (two-source decay)**: $\alpha = \dfrac{4V}{cS}\cdot\dfrac{\ln(P_1/P_2)}{t_1 - t_2}$ — drive the room with two sources of different power $P_1, P_2$, time how long each takes to decay to the same audibility level.
  - When to use: lab characterization of new absorbers (Method 1) vs. in-situ average $\alpha$ of an existing hall (Method 2).

- **Room-Averaged Sound Absorption Coefficient**: $\bar\alpha = \dfrac{\sum_{i=1}^n \alpha_i s_i}{\sum_{i=1}^n s_i}$
  - When to use: when walls, floor, ceiling have different materials — collapse them into one number for whole-room Sabine estimates.

- **Decibel Scales (three log-compressed levels)**
  - Sound Pressure Level: $L_P = 20\log_{10}(p_{\rm rms}/p_0)$, $p_0 = 2\times 10^{-5}$ N/m².
  - Sound Intensity Level: $L_I = 10\log_{10}(I/I_0)$, $I_0 = 10^{-12}$ W/m².
  - Sound Power Level: $L_P = 10\log_{10}(P/P_0)$, $P_0 = 10^{-12}$ W.
  - When to use: any auditory-range measurement, because human loudness is logarithmic (factor-of-10 intensity = +10 dB; factor-of-2 pressure = +6 dB; factor-of-2 intensity = +3 dB).

- **Acoustic-Quieting Taxonomy**: Source → Path → Receiver. Quieting attacks one of: noise generation, sympathetic vibration, resonance, transmission, reflection; plus observer-side tactics (masking, re-direction, hearing protection).

## Key Concepts

- **Reverberation**: persistence of audible sound in a hall after the source has stopped, due to multiple reflections from walls, ceiling, and fittings.
- **Reverberation Time (Sabine standard)**: time for sound energy density to fall to $10^{-6}$ of its steady-state value (a 60 dB drop).
- **Absorption Coefficient $\alpha$**: ratio of sound energy absorbed by a surface to the total incident energy; $0 \le \alpha \le 1$.
- **Sabin (O.W.U.)**: unit of absorption; 1 Sabin = absorption of 1 m² of open window.
- **Reflection Coefficient $R$**: ratio of reflected to incident energy; $R = +1$ rigid wall, $R = -1$ soft wall, $R = 0$ perfect absorber.
- **Anechoic (dead) room**: every surface has $\alpha = 1$.
- **Reverberant (live/hard) room**: surfaces have $\alpha = 0$.
- **Echelon effect**: regular step-like surfaces (staircases, railings) produce periodic echoes that fuse into a musical tone; mitigated by carpeting.
- **Focussing**: cylindrical/spherical wall concavities concentrate reflections at a point, creating loud and dead zones.
- **Absorptive vs Reactive Muffler**: absorptive converts acoustic energy to heat via porous lining (good at high f, broadband); reactive reflects via impedance mismatch (good at low f, narrow-band, no energy dissipation).
- **Inverse-square spreading**: outdoor sound intensity falls as $1/(4\pi r^2)$ from a point source — basis of distance-based soundproofing.

## Mental Models

- **Think of a hall as an energy reservoir**: Sabine's ODE $d\rho/dt + \beta\rho = 4P/(cA)$ with $\beta = cA/(4V)$ is literally a first-order RC charge/discharge. Steady-state density is $\rho_0 = 4P/(cA)$; decay is exponential $\rho = \rho_0 e^{-\beta t}$. Reverberation time is just the time constant of an acoustic RC circuit.
- **Use the open window as the universal "1 Sabin" yardstick**: every absorption measurement is "how many m² of open window does this equal?" Materials are characterised by area-equivalence, not by an opaque coefficient alone.
- **Decibels add in intensity, not in level**: doubling two 60 dB sources does NOT give 120 dB. Convert each level to linear intensity, sum, convert back. Doubling intensity = +3 dB; doubling pressure = +6 dB.
- **Acoustic quieting is a chain, not a switch**: each link (generation → transmission → reception) has its own quieting tactic. The cheapest place to attack is usually at the source; the most reliable is breaking the mechanical path (room-within-a-room, decoupled mounts).
- **Porous absorbers eat highs; resonant absorbers eat lows**: porous open-cell foams are broadband mid/high; Helmholtz resonators and resonant panels target low-frequency rumble. You usually need both.

## Anti-patterns

- **Treating "sound" and "noise" as physically distinct**: both are atmospheric pressure fluctuations about ambient; the distinction is purely subjective. Design for *level*, not for "noise" as a separate phenomenon.
- **Adding dB values directly**: 70 dB + 70 dB ≠ 140 dB. Always convert to intensity (or pressure-squared), sum, convert back. Two identical sources give +3 dB, not +6 dB.
- **Aiming for "no reverberation"**: reverberation is desirable for music (gives fullness, T ≈ 1–2 s). Over-damping makes a hall feel "dead". Match T to use: 0.5–1 s speech, 1–2 s music.
- **Using only porous absorbers**: they underperform at low frequencies; low-f rumble passes straight through. Pair with Helmholtz resonators or resonant panels.
- **Adding curved walls for aesthetics**: spherical or cylindrical concave surfaces focus reflections to points → loud zones elsewhere, dead zones at the focus. Treat with absorbers or flatten the geometry.
- **Confusing soundproofing with absorption**: sound absorption reduces reverberation *inside* a room; soundproofing blocks transmission *into or out of* a room. Open windows in a wall reduce reverberation but destroy soundproofing.
- **Leaving staircases bare**: parallel reflective risers create echelon effect — periodic echoes that the ear integrates into a tone. Cover with carpet or diffusers.
- **Forgetting the audience**: a full audience adds ~0.75 m² of open-window-equivalent absorption per person at 500 Hz. Specify reverberation for both empty and occupied hall.

## Reference Tables

### Sabine's requirements for an acoustically good hall (verbatim)
| # | Requirement |
|---|---|
| i | Sound sufficiently loud everywhere; no echoes |
| ii | Relative intensities of complex-sound components preserved |
| iii | Successive syllables clear and distinct (no overlap) |
| iv | Reverberation proper — 1–2 s music, 0.5–1 s speech |
| v | No concentration of sound in any part |
| vi | Boundaries sufficiently soundproof against external noise |
| vii | No Echelon effect |
| viii | No resonance inside the building |

### Wall-type ↔ absorption behaviour
| Reflection regime | $R$ | $\alpha$ | Wall character |
|---|---|---|---|
| Perfect absorber | 0 | 1 | Anechoic / "dead" surface |
| Rigid (in-phase) | +1 | 0 | "Hard" wall |
| Soft (out-of-phase) | −1 | 0 | "Soft" wall (energy returned, flipped phase) |

### Absorptive vs Reactive Mufflers
| Property | Absorptive | Reactive |
|---|---|---|
| Mechanism | Porous lining → heat | Impedance mismatch → reflection |
| Best frequency | High (broadband) | Low (narrow-band) |
| Back-pressure | Low | High |
| Energy fate | Dissipated as heat | Kept inside system |
| Examples | Lined ducts, plenum chambers | Resonant silencers, expansion chambers |

### Quieting attack-points
| Link in chain | Tactic |
|---|---|
| Source | Quieter machine, slower RPM, partial vacuum |
| Vibration transfer | Decoupling mounts, room-within-a-room |
| Airborne transmission | Mass-loaded walls, double panes, sealing edges |
| Reflection | Porous + resonant absorbers, diffusers |
| Receiver | Hearing protection, observer placement, refraction masking |

### Typical reverberation times
| Space | T (seconds) |
|---|---|
| Living room | ~0.3 |
| Most large halls (good) | 0.2–0.7 |
| Empty reverberation chamber | up to 10 |
| Music hall (target) | 1–2 |
| Lecture hall (target) | 0.5–1 |

## Key Equations

**Sabine's Reverberation Time**

- **Reverberation time**: $T = \dfrac{0.165\,V}{\sum_i \alpha_i s_i}$ (with $c = 340$ m/s in air at 20 °C).
- **Energy ODE**: $V\dfrac{d\rho}{dt} = P - \dfrac{\rho c A}{4}$ where $A = \sum_i \alpha_i s_i$.
- **Decay constant**: $\beta = \dfrac{cA}{4V}$.
- **Steady-state density**: $\rho_0 = \dfrac{4P}{cA}$.
- **Exponential decay**: $\rho(t) = \rho_0\,e^{-\beta t}$.
- **Definition of T (60 dB drop)**: $\rho/\rho_0 = 10^{-6} = e^{-\beta T} \Rightarrow T = 6\ln 10 / \beta = \dfrac{24 V \ln 10}{cA}$.

**Absorption / Reflection**

- **Absorption coefficient**: $\alpha = \dfrac{E_{\rm absorbed}}{E_{\rm incident}} = 1 - \dfrac{E_{\rm reflected}}{E_{\rm incident}} = 1 - R$.
- **Open-window unit**: 1 m² open window ↔ 1 Sabin; $\alpha = (\text{1 m² of window})/(\text{area of material with same absorption})$.
- **Room-averaged $\alpha$**: $\bar\alpha = \dfrac{\sum_i \alpha_i s_i}{\sum_i s_i}$.

**Absorption Measurement**

- **Method 1 (sample test)**: $\alpha = \dfrac{0.165\,V}{S}\left(\dfrac{1}{T_2} - \dfrac{1}{T_1}\right)$.
- **Method 2 (two-source decay)**: $\alpha = \dfrac{4V}{cS}\cdot\dfrac{\ln(P_1/P_2)}{t_1 - t_2}$.

**Decibel Scales**

- **SPL**: $L_P = 20\log_{10}(p_{\rm rms}/p_0)$, $p_0 = 2\times 10^{-5}$ N/m².
- **SIL**: $L_I = 10\log_{10}(I/I_0)$, $I_0 = 10^{-12}$ W/m².
- **SWL**: $L_P = 10\log_{10}(P/P_0)$, $P_0 = 10^{-12}$ W.
- **Intensity↔pressure**: $I = p_{\rm rms}^2 / (\rho v)$.
- **Inverse-square intensity**: $I = P/(4\pi r^2)$.

**Acoustic Quieting (structural)**
- **Attenuation constant** (absorptive muffler): higher → more energy dissipated as heat.
- **Insertion loss** (reactive muffler): the dB reduction produced at a target frequency.

## Worked Example: Reverberation time and total absorption

**Problem (Example 10.1)**: An auditorium has volume $V = 30{,}600$ m³. Required reverberation time $T = 0.8$ s. Find total absorption.

**Solution**: Invert Sabine's formula:

$$\sum_i \alpha_i s_i = \frac{0.165\,V}{T} = \frac{0.165 \times 30{,}600}{0.8} = \frac{5049}{0.8} \approx 6311.25 \text{ Sabins}$$

≈ **6311 O.W.U.** (Sabines) of absorption are required — distributed across ceiling panels, seating, audience, drapes, etc., such that their $\alpha_i s_i$ contributions sum to this number.

**Companion check (Example 10.3)**: A room with walls $s_1 = 3000$ m² ($\alpha_1 = 0.03$), ceiling $s_2 = 1500$ m² ($\alpha_2 = 0.08$), floor $s_3 = 1500$ m² ($\alpha_3 = 0.06$):

$$\bar\alpha = \frac{3000(0.03) + 1500(0.08) + 1500(0.06)}{3000 + 1500 + 1500} = \frac{90 + 120 + 90}{6000} = \frac{300}{6000} = 0.05$$

Then plug into Sabine: $T = 0.165 V / (\bar\alpha S)$.

**Companion check (Example 10.5)**: Pressure doubling → $+20\log_{10} 2 \approx +6.02$ dB. Intensity doubling → $+10\log_{10} 2 \approx +3.01$ dB. These are the workhorse rules of thumb for any dB problem.

## Key Takeaways

1. **Sabine's formula is the single load-bearing equation**: $T = 0.165V/\sum\alpha_i s_i$. Every acoustic design decision — material choice, audience size, upholstery, drapes — is a knob that changes the denominator.
2. **Open window = 1 Sabin is the universal yardstick**: express every absorber's effect as "m² of open window equivalent" and sums become additive.
3. **Match T to the use case**: 0.5–1 s for speech intelligibility, 1–2 s for musical warmth. Dead rooms kill music; live rooms kill speech.
4. **dB is logarithmic — never add dB directly**: convert to intensity, sum, convert back. Doubling intensity adds only 3 dB; doubling pressure adds 6 dB.
5. **Quieting is multi-link**: source reduction, decoupling, absorption, isolation, and receiver protection each attack a different link in the source-to-listener chain. Pick the cheapest effective link first.
6. **Porous for highs, resonant for lows**: pair open-cell foam (broadband mid/high) with Helmholtz resonators / resonant panels (low-frequency rumble) for full-spectrum absorption.
7. **Audience is part of the design**: ~0.75 Sabins per person at 500 Hz — design for both empty and full conditions.

## Connects To

- **Ch 1 (Oscillations and Waves)**: Sabine's energy ODE is a first-order RC circuit; reverberation time is the acoustic time-constant. The $\beta = cA/(4V)$ ↔ $1/(RC)$ mapping is direct.
- **Ch 2 (Interference) / Ch 4 (Polarization)**: Focussing and stationary-wave patterns in halls are interference phenomena; phase relationships of direct + reflected waves set the loud/dead zones Sabine's formula can't predict.
- **Ch 11 (Ultrasonics)**: The same $\alpha$-vs-frequency trade-off applies to ultrasonic absorbers and to diagnostic imaging where reflections must be controlled.
- **External: control theory / RC circuits**: Sabine's exponential growth and decay map onto charge/discharge of a capacitor; the "60 dB drop = $6\ln 10$ time-constants" analogy is exact.
- **External: building standards (ISO 3382, NC/BBN noise criteria)**: Sabine's formula underpins standardised measurement of reverberation time (T20, T30 interrupted-noise methods) and rating of HVAC noise.
- **External: occupational health (OSHA, NIOSH)**: dB scales and quieting tactics drive hearing-conservation regulations and time-weighted exposure limits.
- **Ch 3 (Diffraction)**: low-frequency sound diffraction around pillars and balcony edges is a major determinant of seat-to-seat variation in concert-hall acoustics; the wavelength of bass notes (≥ 1.7 m at 200 Hz) is comparable to architectural features, so Huygens-knife-edge diffraction dominates.
- **Ch 12 (Non-Destructive Testing)**: the same acoustic-impedance-mismatch principle that defines absorption in porous absorbers (this chapter) is what generates the echoes in Ch 12's ultrasonic pulse-echo flaw detection; the Ch 12 inspection head is an engineered version of an acoustic "wall."
