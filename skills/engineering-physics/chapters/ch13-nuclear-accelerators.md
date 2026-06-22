# Chapter 13: Nuclear Accelerators

## Core Idea
Every accelerator boils down to two field-particle interactions: a static electric field gives **one-shot** energy via $E_k = qV$, and a magnetic field bends the path into a circle of radius $r = mv/qB$, enabling **repeated** small kicks that sum to high energy. The whole chapter is the engineering of *which combination* of E, B, static, and RF best suits a given particle (electrons vs. heavy ions) and energy target.

## Frameworks Introduced

- **Two Fundamental Acceleration Principles**
  - Electric-field acceleration (one-shot): $E_k = qV$ — energy limited by insulation / max sustainable voltage.
  - Magnetic-field acceleration (repeated): $E_k = \frac{1}{2}mv^2 = \frac{B^2R^2q^2}{2m}$, with $Brq = mv$ — energy limited by magnet strength and orbit radius.
  - How: pick electric when you need a single large push; pick magnetic when you want to add energy in many small steps around a closed orbit.

- **D.C. vs. R.F. Accelerator Classification**
  - D.C. accelerators: build a single high D.C. voltage between two terminals, charge crosses once. (Cockcroft–Walton, Van de Graaff, Tandem)
  - R.F. accelerators: apply moderate AC voltage repeatedly across gaps; particle gets a small kick each crossing. (Linear/drift-tube, cyclotron, synchrotron, betatron)
  - When to use: D.C. for steady, monoenergetic beams up to ~10 MeV; R.F. for higher energies and pulsed beams.

- **Linear vs. Cyclic Geometry**
  - Linear: particle travels in a straight line, drift tubes shield during wrong-half-cycle. (Drift-tube linac)
  - Cyclic: particle spirals / orbits in a magnetic field, returning to the accelerating gap. (Cyclotron, synchrotron, betatron)

- **Cyclotron Resonance Condition** $\nu = \frac{qB}{2\pi m}$
  - When to use: any cyclic accelerator where particle crosses the gap repeatedly.
  - How: lock the r.f. frequency $\nu$ to match the orbital frequency so the ion always meets the right-polarity dee on re-entry. Constant for non-relativistic $m$.

- **Betatron Condition** $B_G = \frac{1}{2}\langle B \rangle$
  - When to use: any induction accelerator that confines electrons to a **constant-radius** orbit while accelerating.
  - How: shape the pole pieces so the guiding field on the orbit equals half the average flux density over the orbit area — then $\frac{d(mv)}{dt} = re\frac{dB_G}{dt}$ matches $\frac{e}{2\pi r}\frac{d\phi_B}{dt}$ exactly.

- **Relativistic Resonance Correction** (synchrocyclotron vs. synchrotron)
  - Cyclotron formula fails when $m$ grows with $v$: $\nu = qB/(2\pi m)$ drifts out of resonance.
  - Synchrocyclotron: decrease $\nu$ as $\nu m$ stays constant (B fixed).
  - Synchrotron: increase B as B/m stays constant ($\nu$ fixed).
  - Use synchrocyclotron for heavy ions; use synchrotron for electrons where B can be ramped fast.

- **Tandem Doubling** (charge-stripping trick)
  - Inject negative ion → accelerate to +V terminal → strip 2 e⁻ → positive ion accelerated again → effective energy gain $= (q_1 + q_2)V$ from a single V.
  - When to use: heavy-ion acceleration where terminal voltage is the bottleneck; example given — oxygen at $V = 5$ MV yields $5 + 40 = 45$ MeV.

## Key Concepts

- **Distance of closest approach** $\delta = \frac{Ze \cdot 2e}{4\pi\varepsilon_0 E_k}$: minimum distance an $\alpha$-particle reaches a nucleus; only $\delta \to 0$ disintegrates the target, which is why natural $\alpha$s only broke light elements.
- **Voltage multiplier circuit (Cockcroft–Walton)**: N voltage doublers (capacitor + rectifier ladder driven by an r.f. transformer) cascade to give $V \approx 2NV_0$ at the output.
- **Ripple voltage** $\pm\Delta V = \frac{IN(N+1)}{4\nu C}$: residual oscillation on the multiplied DC; reduce by increasing $\nu$ and $C$.
- **Spray comb / collection comb**: corona-discharge points in Van de Graaff — spray comb deposits charge on belt at ground level, collection comb lifts it to the high-voltage terminal.
- **Dees**: two hollow D-shaped half-cylinders in a cyclotron, alternately biased to give a kick in the gap; ion drifts at constant speed inside (no field inside).
- **Drift tube**: cylindrical electrode in a linac, length chosen so the ion takes exactly T/2 to cross — successive tubes grow as $\sqrt{n}$.
- **Doughnut chamber**: toroidal vacuum chamber of a betatron sitting between electromagnet poles.
- **Stripper canal**: thin carbon foil (or low-pressure gas) inside the tandem terminal that strips electrons from a negative ion to convert it back to positive.
- **Synchrotron radiation loss** $U = \frac{e^2 E^4}{3r\varepsilon_0 m_0^4 c^8} = 88.5 \frac{E^4(\text{GeV})}{r(\text{m})}$ keV — sets the upper energy limit of circular electron accelerators.

## Mental Models

- **Use the energy-budget swap when picking an accelerator**: need ≤10 MeV of protons → D.C. is simplest. Need ≥100 MeV → must use R.F. and a cyclic geometry. Need electrons at high energy → betatron (induction) or synchrotron (B ramping), because their low mass goes relativistic fast.
- **Think of resonance as a phase-locked handshake**: the r.f. field and the orbiting particle must keep meeting at the right phase every half cycle. Any mass change (relativistic) breaks the handshake — that's the entire reason synchrocyclotrons and synchrotrons exist.
- **Cyclotron radius is its energy gauge**: $E_k = B^2R^2q^2/(2m)$, so bigger magnets at the same B give more energy directly — energy scales as $R^2$.
- **Betatron condition is "field geometry = half-area-average"**: if you shape the pole pieces so the on-orbit field is exactly half the area-averaged field, acceleration and orbital confinement stay in lockstep. Violate it and the spiral either collapses inward or escapes outward.
- **Tandem = same voltage, double the energy**: when you can't raise V (insulation ceiling), flip the charge inside the terminal and get accelerated twice — the canonical "hack around a hardware limit."

## Anti-patterns

- **Confusing "energy of particles" with "speed"**: accelerator effectiveness is always reported as kinetic energy, not velocity; even 1 TeV ≈ mosquito-in-flight.
- **Assuming cyclotron frequency is fixed**: for electrons, $m$ grows relativistically even at 1 MeV, so $\nu = qB/(2\pi m)$ drifts out of resonance; constant-$\nu$ cyclotrons cannot accelerate electrons to high energy.
- **Treating the r.f. voltage as the cyclotron's energy dial**: maximum cyclotron energy $E_m = B^2R^2q^2/(2m)$ does **not** depend on the r.f. peak voltage $V_0$ — energy is set by $B$ and $R$.
- **Ignoring insulation in Van de Graaff design**: corona discharge and belt leakage set the equilibrium potential — enclosure in high-pressure SF₆–air or CCl₂F₂–air mixture is what allows the 10 MV figure.
- **Forgetting radiation loss in electron rings**: above a few hundred MeV, $U \propto E^4/r$ radiation loss exceeds energy gain — this is why the largest circular electron accelerators (LEP) eventually became linear colliders.

## Reference Tables

### Accelerator classification

| Class | Subtype | Example | Energy scale | Particle |
|---|---|---|---|---|
| D.C. | Voltage multiplier | Cockcroft–Walton | ≤ 4 MeV | p, d, α |
| D.C. | Charge transport on belt | Van de Graaff | ≤ 10 MeV (×2 for tandem) | p, heavy ions |
| R.F. (linear) | Drift tubes | Drift-tube linac | 10s of MeV | p (expensive) |
| R.F. (cyclic) | Constant B, constant ν | Cyclotron | ≤ 25 MeV (non-relativistic) | p, d, α |
| R.F. (cyclic) | Constant B, ν modulated | Synchrocyclotron | ≤ 500 MeV | p, d, α |
| R.F. (cyclic) | Ramped B, constant ν | Synchrotron | GeV | p, e⁻ |
| R.F. (cyclic) | Induction | Betatron | ≤ 340 MeV | e⁻ |

### Cyclotron vs. Betatron (path geometry)

| | Cyclotron | Betatron |
|---|---|---|
| Path | Expanding spiral (radii grow) | Fixed-radius circle |
| Acceleration | Many kicks at gap (r.f.) | Continuous induction ($d\phi_B/dt$) |
| Guiding field | Static B | Time-varying B |
| Confines via | Centripetal force balance | Betatron condition $B_G = \frac{1}{2}\langle B \rangle$ |
| Particle | Heavy ions | Electrons only |

### Cockcroft–Walton voltage multiplier

| Quantity | Expression |
|---|---|
| Output voltage (loaded) | $V = 2NV_0 - \frac{I}{12\nu C}\bigl(8N^3 + 9N^2 + N\bigr)$ |
| Output voltage (unloaded, high νC) | $V \approx 2NV_0$ |
| Ripple voltage | $\pm\Delta V = \frac{IN(N+1)}{4\nu C}$ |

### Tandem accelerator energy gain (worked example in text)

| Stage | Charge | Energy gained |
|---|---|---|
| Stage 1 (neg ion, $V = 5$ MV) | $q = -e$ | 5 MeV |
| Stripping in terminal | 8 e⁻ removed (for O) | — |
| Stage 2 (pos ion) | $q = +8e$ | 40 MeV |
| **Total** | | **45 MeV** |

## Key Equations

- **Closest-approach distance** (motivation for accelerators):
$$\delta = \frac{Ze \cdot 2e}{4\pi\varepsilon_0 E_k}$$
- **Single-shot electric acceleration**:
$$E_k = qV$$
- **Magnetic circular acceleration**:
$$E_k = \frac{1}{2}mv^2 = \frac{B^2R^2q^2}{2m} \quad\text{with}\quad Brq = mv$$
- **Cockcroft–Walton output** (voltage multiplier):
$$V = 2NV_0 - \frac{I}{12\nu C}\bigl(8N^3 + 9N^2 + N\bigr), \qquad \pm\Delta V = \frac{IN(N+1)}{4\nu C}$$
- **Van de Graaff terminal potential**:
$$V = \frac{Q}{C} = \frac{9\times 10^9\, Q}{R}$$
- **Drift-tube linac — speed, length, energy after nth gap**:
$$v_n = 2L_n\nu = \sqrt{\frac{2nqV_0}{m}}, \qquad L_n = L_1\sqrt{n}, \qquad E_n = nqV_0$$
- **Cyclotron speed, frequency, max energy**:
$$v = \frac{Brq}{m}, \qquad \nu = \frac{qB}{2\pi m}, \qquad E_m = \frac{B^2R^2q^2}{2m} = 2\pi^2 m\nu^2 R^2$$
- **Betatron condition**:
$$B_G = \frac{1}{2}\langle B \rangle = \frac{\phi_B}{2\pi r^2}$$
- **Betatron emergent energy**:
$$E = B_{G0}rc = pc, \qquad \langle E \rangle_{\text{avg per rev}} = \frac{e\omega\phi_{B0}}{\pi}$$
- **Synchrotron radiation loss per revolution**:
$$U = 88.5\,\frac{E^4(\text{GeV})}{r(\text{m})}\;\text{keV}$$

## Worked Example: Cyclotron energy from magnet and orbit (Example 13.2)

**Given**: proton on a circular path of radius $R = 0.60$ m in a field $B = 1$ T. Find $E_k$.

1. The text's canonical formula: $E_k = \dfrac{B^2R^2q^2}{2m}$.
2. Substitute: $B^2 = 1$, $R^2 = 0.36$, $q^2 = (1.6\times10^{-19})^2$, $m = 1.67\times10^{-27}$ kg.
3. $E_k = \dfrac{1^2 \cdot 0.36 \cdot (1.6\times10^{-19})^2}{2\cdot 1.67\times10^{-27}} = \dfrac{0.36\cdot 2.56\times10^{-38}}{3.34\times10^{-27}} \approx 2.76\times10^{-12}$ J.
4. Convert: $2.76\times10^{-12}\,\text{J} / (1.6\times10^{-13}\,\text{J/MeV}) \approx 17.2$ MeV.

This is the calculation pattern for any "find cyclotron energy" problem: use $E_k = B^2R^2q^2/(2m)$, **not** $E_k = qV_0$ — the r.f. voltage is irrelevant to final energy.

## Key Takeaways

1. **Two principles, all accelerators**: static-E for one-shot, magnetic-B for repeated — every named machine is a recombination of these.
2. **Cyclotron energy is set by magnet and radius, not r.f. voltage**: $E_m = B^2R^2q^2/(2m)$; bigger $R$ is the most direct way to more energy.
3. **Resonance is fragile**: $\nu = qB/(2\pi m)$ only holds when $m$ is constant; the moment relativity enters (electrons at low MeV, or any ion at higher energy) you must switch to a synchrocyclotron or synchrotron.
4. **Betatron condition is a geometry constraint**: $B_G = \tfrac{1}{2}\langle B \rangle$ must be engineered into the pole faces — that's what holds the orbit constant under continuous induction.
5. **Tandem doubles energy without raising V**: charge-stripping inside the terminal turns one potential into two accelerations — the textbook workaround for the insulation ceiling.
6. **Circular electron accelerators are radiation-limited**: $U \propto E^4/r$ means very high-energy electrons must go straight (linear collider) or to very large $r$.
7. **Beam quality (homogeneity, stability, collimation) is half the performance index**: alongside maximum energy, sharpness and stability of beam energy determine usefulness — Van de Graaff excels on these axes at the cost of energy.

## Connects To

- **Ch 1 (Oscillations and Waves)**: the r.f. source in every R.F. accelerator is just an AC oscillator; cyclotron frequency $\nu = qB/(2\pi m)$ is the r.f. analog of a driven oscillator's natural frequency.
- **Ch 3 (Electromagnetism)**: $q\vec{v}\times\vec{B}$ centripetal force (cyclotron) and Faraday's law $\oint \vec{E}\cdot d\vec{l} = -d\phi_B/dt$ (betatron) are the two magnetic building blocks used here.
- **Ch 4 (Modern Physics / Relativity)**: the relativistic mass growth $m = m_0/\sqrt{1-v^2/c^2}$ is what forces synchro-/betatron designs; synchrotron radiation $U \propto E^4/r$ is a relativistic + classical-EM combined effect.
- **Ch 12 (Nuclear Physics)**: motivation for accelerators is the closest-approach formula $\delta \propto 1/E_k$ — pushing $\delta \to 0$ requires accelerator-grade energies.
- **External — High-voltage engineering**: Cockcroft–Walton voltage multipliers are still used as DC bias supplies for photomultipliers and CRT tubes.
- **External — Medical physics**: betatrons deliver the 6–25 MeV X-ray beams used in cancer therapy; cyclotrons produce radioisotopes (e.g., $^{18}$F for PET).