# Chapter 9: Special Theory of Relativity

## Core Idea
The laws of physics and the speed of light in vacuum are the same in **all inertial frames**, so length, time, and mass depend on the observer's relative motion — measured through the Lorentz transformation with $\gamma = 1/\sqrt{1-v^2/c^2}$ as the single scaling factor that replaces Galilean absolutes.

## Frameworks Introduced

- **Einstein's Two Postulates of Special Relativity**
  - When to use: any claim about what different inertial observers measure.
  - How:
    1. *Principle of relativity* — all laws of physics have the same form in every inertial frame.
    2. *Constancy of the speed of light* — $c$ in vacuum is the same for every inertial observer, regardless of source or observer motion.

- **Lorentz Transformation** (for $S'$ moving at $v$ along $+x$ relative to $S$)
  - When to use: converting space-time coordinates of any single event between two inertial frames.
  - How: apply $x' = \gamma(x - vt)$, $t' = \gamma(t - vx/c^2)$, $y' = y$, $z' = z$ with $\gamma = 1/\sqrt{1-v^2/c^2}$.
  - Inverse: swap primed/unprimed and replace $v$ with $-v$.
  - Galilean transformation is recovered in the limit $v \ll c$ (i.e., $\gamma \to 1$).

- **Three Kinematic Consequences of the Lorentz Transformation**
  - *Length contraction*: $\ell = \ell_0/\gamma$ — only along the direction of motion; perpendicular dimensions unchanged.
  - *Time dilation*: $\Delta t = \gamma \Delta t_0$ — proper time $\Delta t_0$ is measured in the clock's own rest frame.
  - *Relativity of simultaneity*: events simultaneous in $S$ at different $x$ are **not** simultaneous in $S'$.

- **Relativistic Velocity Addition** (along $x$): $u_x = (u_x' + v)/(1 + u_x'v/c^2)$.
  - When to use: composing speeds measured by different observers along the line of motion.
  - How: perpendicular components carry an extra factor $\gamma$, so $u_y = u_y' / [\gamma(1 + u_x'v/c^2)]$.

- **Relativistic Momentum**: $\vec{p} = \gamma m_0 \vec{v}$.
  - When to use: any collision, force-balance, or particle dynamics at speeds where classical $p = m_0 v$ would violate momentum conservation across frames.

- **Mass-Energy Equivalence**: $E = \gamma m_0 c^2 = K + m_0 c^2$.
  - When to use: any system where energy is released (nuclear reactions, pair production) or absorbed (accelerator dynamics).
  - How: $K = (\gamma - 1)m_0 c^2$ is the relativistic kinetic energy; $m_0 c^2$ is rest energy; $E^2 = p^2 c^2 + m_0^2 c^4$.

- **Generalized Newton's Second Law**: $\vec{F} = d\vec{p}/dt$ with $p = \gamma m_0 v$.
  - When to use: high-speed dynamics where acceleration is **not** parallel to force.
  - How: acceleration is decomposed into *longitudinal* (mass factor $m_0/\gamma^3$) and *transversal* (mass factor $m_0/\gamma$) components.

## Key Concepts

- **Inertial frame**: Newton's first law holds; no experiment can detect its absolute velocity; any frame at constant velocity relative to one is also inertial.
- **Proper length $\ell_0$**: rod's length in its own rest frame — the maximum value.
- **Proper time $\Delta t_0$**: time between two events occurring at the *same place* — the minimum value.
- **Lorentz factor** $\gamma = 1/\sqrt{1-v^2/c^2}$: $\gamma \to 1$ at low speeds, $\gamma \to \infty$ as $v \to c$.
- **Ether (aether)**: the 19th-century hypothesized light-propagation medium, ruled out by Michelson-Morley's null result.
- **Rest / invariant mass $m_0$**: mass measured in the object's rest frame; the same in every inertial frame.
- **Relativistic mass $m = \gamma m_0$**: deprecated by Hawking/Feynman-era literature for advanced use (QFT, GR), but retained here at elementary level.
- **Massless particle**: $m_0 = 0 \Rightarrow E = pc$, speed exactly $c$ (photon, gluon, gauge bosons).
- **Longitudinal / transversal mass**: $m_0/\gamma^3$ (parallel to motion) vs $m_0/\gamma$ (perpendicular to motion) — historical artifacts of the variable-mass view.

## Mental Models

- **Use proper-vs-improper as the single bookkeeping rule**: always identify which frame measures the *proper* quantity (rod's rest frame → proper length; clock's rest frame → proper time). The moving frame then divides by $\gamma$ (length) or multiplies by $\gamma$ (time). Reverse the formula and you get a wrong answer.
- **Think of $\gamma$ as a single switch that governs all kinematic effects**: $\ell = \ell_0/\gamma$, $\Delta t = \gamma \Delta t_0$, $p = \gamma m_0 v$, $E = \gamma m_0 c^2$, $m = \gamma m_0$. Once $\gamma$ is known, every effect follows.
- **Use relativistic velocity addition to test "can $c$ be exceeded?"**: $c$ is the speed limit because adding any speed $\le c$ to $c$ (in the right algebra) returns $c$ exactly. The denominator $1 + uv/c^2$ is what enforces the cap.
- **Think of $E = mc^2$ as a rest-energy inventory, not a conversion formula**: every body already carries $m_0 c^2$ joules; small changes in rest mass correspond to enormous energy release because $c^2$ is huge.

## Anti-patterns

- **Treating length, time, and mass as observer-independent absolutes**: in special relativity all three depend on the relative velocity between frames — the chapter's central lesson.
- **Applying length contraction perpendicular to motion**: contraction occurs only **along** the direction of motion. Perpendicular dimensions are invariant.
- **Using proper time for the moving observer**: $\Delta t_0$ is the *shortest* time interval, measured in the clock's own rest frame. An observer watching a moving clock sees $\Delta t = \gamma \Delta t_0 > \Delta t_0$ — the clock runs *slower*, not faster.
- **Adding velocities Galilean-style at relativistic speeds**: $u + v$ over-estimates; the correct addition has a denominator $1 + uv/c^2$ that pulls the result back below $c$.
- **Writing $p = m_0 v$ for high-speed collisions**: momentum conservation across inertial frames then fails. The unique generalization that preserves conservation is $p = \gamma m_0 v$.
- **Confusing relativistic mass with rest mass**: $m_0$ is invariant; $m = \gamma m_0$ grows with speed. Modern treatments prefer to keep $m_0$ everywhere and let $\gamma$ carry the speed dependence — the chapter notes "relativistic mass" is less useful in QFT/GR.
- **Assuming acceleration is parallel to force at high $v$**: $\vec{a}$ has both longitudinal ($1/\gamma^3$ effective mass) and transversal ($1/\gamma$) components; direction differs from $\vec{F}$ except in special cases.
- **Concluding "time dilation means the moving twin is younger" without specifying the trip**: the twin paradox resolves only via the *non-inertial* turn-around segment. Pure inertial time dilation is symmetric.

## Reference Tables

### Relativistic vs Newtonian quantities (single-$\gamma$ table)
| Quantity | Newtonian (Galilean) | Relativistic (Lorentz) | Ratio |
|---|---|---|---|
| Length $\ell$ | $\ell_0$ (invariant) | $\ell_0/\gamma$ | $\div\gamma$ |
| Time interval $\Delta t$ | $\Delta t_0$ (invariant) | $\gamma \Delta t_0$ | $\times\gamma$ |
| Momentum $p$ | $m_0 v$ | $\gamma m_0 v$ | $\times\gamma$ |
| Mass $m$ | $m_0$ (invariant) | $\gamma m_0$ | $\times\gamma$ |
| Total energy $E$ | $\tfrac{1}{2} m_0 v^2$ (KE only) | $\gamma m_0 c^2$ | $\times\gamma$ factor in $E$ |
| Rest energy | 0 | $m_0 c^2$ | — |
| Velocity addition | $u = u' + v$ | $u = (u'+v)/(1+u'v/c^2)$ | $c$ cap |

### Relativistic velocity transformation (3-component)
| Component | $S' \to S$ | $S \to S'$ |
|---|---|---|
| $x$ | $u_x = \dfrac{u_x' + v}{1 + u_x' v/c^2}$ | $u_x' = \dfrac{u_x - v}{1 - u_x v/c^2}$ |
| $y$ | $u_y = \dfrac{u_y' \sqrt{1-v^2/c^2}}{1 + u_x' v/c^2}$ | $u_y' = \dfrac{u_y \sqrt{1-v^2/c^2}}{1 - u_x v/c^2}$ |
| $z$ | $u_z = \dfrac{u_z' \sqrt{1-v^2/c^2}}{1 + u_x' v/c^2}$ | $u_z' = \dfrac{u_z \sqrt{1-v^2/c^2}}{1 - u_x v/c^2}$ |

### Direction of acceleration vs force at high $v$
| Geometry | Effective inertial mass |
|---|---|
| $\vec{a} \parallel \vec{v}$ (longitudinal) | $m_0/\gamma^3$ — *longitudinal mass* |
| $\vec{a} \perp \vec{v}$ (transversal) | $m_0/\gamma$ — *transversal mass* |
| General | neither $\vec{a}$ nor direction of $\vec{F}$ coincide |

## Key Equations

**Lorentz factor & transformation**
- Lorentz factor: $\gamma = 1/\sqrt{1-v^2/c^2}$
- Lorentz transformation: $x' = \gamma(x - vt)$, $t' = \gamma(t - vx/c^2)$, $y' = y$, $z' = z$

**Kinematic consequences**
- Length contraction: $\ell = \ell_0/\gamma$
- Time dilation: $\Delta t = \gamma \Delta t_0$
- Relativity of simultaneity: $t_2' - t_1' = (t_2 - t_1)/\gamma$ when $\Delta x \neq 0$

**Dynamics**
- Relativistic momentum: $\vec{p} = \gamma m_0 \vec{v}$
- Rest / relativistic mass: $m_0$ invariant; $m = \gamma m_0$
- Total energy: $E = \gamma m_0 c^2$
- Rest energy: $E_0 = m_0 c^2$
- Kinetic energy: $K = (\gamma - 1) m_0 c^2$
- Energy-momentum invariant: $E^2 = p^2 c^2 + m_0^2 c^4$
- Massless particle dispersion: $E = pc$
- Generalized Newton's second law: $\vec{F} = d(\gamma m_0 \vec{v})/dt$

**Velocity transformation (parallel to motion)**
- $u = (u' + v)/(1 + u'v/c^2)$

**Low-speed recovery** (binomial expansion): $K \approx \tfrac{1}{2} m_0 u^2$, confirming Newtonian limit when $u \ll c$.

## Worked Example: Twin-paradox time-dilation calculation

A 20-year-old woman gives birth and immediately leaves Earth at $v = 0.985c$. After 10 years on her own clock she returns. How old is her daughter?

1. Identify the proper time $\Delta t_0$ — the duration in the *travelling* frame: $\Delta t_0 = 30 - 20 = 10$ yrs.
2. Compute $\gamma$ for $v = 0.985c$:
   $\gamma = 1/\sqrt{1 - (0.985c)^2/c^2} = 1/\sqrt{1 - 0.970225} = 1/\sqrt{0.029775} \approx 5.795$.
3. Apply time dilation $\Delta t = \gamma \Delta t_0$:
   $\Delta t = 5.795 \times 10$ yrs $\approx 57.95$ yrs.
4. Daughter's age on mother's return: $20 + 57.95 \approx 77.95$ yrs (roughly 78 years old).

The travel aged the daughter by ~58 years while the mother aged only 10. The turnaround segment (not analyzed here) is non-inertial and breaks the apparent symmetry of pure inertial time dilation — the textbook "twin paradox."

## Key Takeaways

1. **Two postulates + linearity + isotropy of space-time uniquely fix the Lorentz transformation** — Galilean transformation is its $v \ll c$ limit, not an independent law.
2. **$\gamma$ is the single switch** — length contracts by $\gamma$, time dilates by $\gamma$, momentum and energy grow by $\gamma$, mass scales by $\gamma$. Compute $\gamma$ first; everything else falls out.
3. **Use proper quantities in the *rest* frame** — proper length is the *maximum*; proper time is the *minimum*. The moving observer always measures the contracted/dilated value.
4. **Velocity addition enforces $c$ as a hard cap** — Galilean $u+v$ can exceed $c$; relativistic $(u'+v)/(1+u'v/c^2)$ never does.
5. **Momentum must be generalized as $p = \gamma m_0 v$ to keep conservation across inertial frames** — this is the only definition that survives the Lorentz transformation.
6. **$E = mc^2$ is an identity, not a conversion recipe** — every body carries $m_0 c^2$ of rest energy; changes in rest mass from energy exchange are minuscule compared to total energy content (huge because $c^2$ is huge).
7. **Acceleration is not parallel to force at relativistic speeds** — decompose $\vec{F}$ along $\vec{v}$ (longitudinal, $1/\gamma^3$ mass) and perpendicular (transversal, $1/\gamma$ mass); only in these two special cases does $\vec{a} \parallel \vec{F}$.

## Connects To

- **Ch 1 (Oscillations and Waves)**: classical kinematics underpinning Galilean relativity — needed to see what special relativity *replaces*.
- **Ch 3 (Gravitation) / General Relativity**: special relativity is the flat-space-time limit; non-inertial (accelerated) frames of Ch 9.2.2 lead to fictitious (d'Alembert) forces and motivate curved-space-time formulations.
- **Ch 5/6 (Electromagnetism)**: Michelson-Morley (§9.4) tested whether light propagated through an ether; Maxwell's equations imply $c = 1/\sqrt{\epsilon_0\mu_0}$ — a constant in vacuum that special relativity elevates to a postulate.
- **Ch 7 (Quantum Physics)**: photoelectric effect, Compton scattering, pair production — all use $E = pc$ for massless photons and $E^2 = p^2c^2 + m_0^2c^4$ for massive particles.
- **Nuclear / particle physics**: $E = mc^2$ is the basis for binding energy per nucleon, fusion/fission yields, and accelerator design (use $K = (\gamma-1)m_0 c^2$ to find $v$ from a given accelerating voltage).
- **GPS / satellite engineering**: gravitational + special-relativistic time corrections are both required for position accuracy — special-relativistic correction arises because satellite clocks run slower in the satellite's frame.
- **External — four-vectors / Minkowski space**: $x^\mu = (ct, \vec{x})$ and $\gamma$ become the Lorentz boost matrix; the formalism here is the $1+3$-decomposition of the 4-vector formulation.