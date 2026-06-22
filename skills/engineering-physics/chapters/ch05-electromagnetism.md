# Chapter 5: Electromagnetism

## Core Idea
All classical electromagnetic phenomena — static and dynamic — are fully described by **four first-order partial differential equations** (Maxwell's equations) that couple electric and magnetic fields to charges and currents in any medium. Master these four equations plus the vector calculus machinery (div, grad, curl, Stokes, Gauss-divergence) needed to flip between integral and differential form, and you simultaneously understand electrostatics, magnetostatics, induction, and the existence of EM waves.

## Frameworks Introduced

- **Maxwell's equations (differential form)**
  - $\nabla \cdot \mathbf{D} = \rho$
  - $\nabla \cdot \mathbf{B} = 0$
  - $\nabla \times \mathbf{E} = -\partial \mathbf{B}/\partial t$
  - $\nabla \times \mathbf{H} = \mathbf{J} + \partial \mathbf{D}/\partial t$
  - When to use: any macroscopic problem coupling $\mathbf{E}$, $\mathbf{D}$, $\mathbf{B}$, $\mathbf{H}$ to sources $\rho$, $\mathbf{J}$.
  - How: pick the form (vacuum / free space / linear isotropic / harmonically varying) matching the medium, then apply to a point (differential) or an Ampèrian/Gaussian surface (integral).

- **Gauss's law of electrostatics (integral)**: $\oint_S \mathbf{E} \cdot \hat{\mathbf{n}}\, ds = q/\varepsilon_0$
  - Differential form: $\nabla \cdot \mathbf{E} = \rho/\varepsilon_0$.
  - When to use: charge distribution has high symmetry (spherical, cylindrical, planar) so the surface integral collapses.
  - How: choose a Gaussian surface where $\mathbf{E}$ is constant and parallel to $\hat{\mathbf{n}}$, evaluate $\oint \mathbf{E}\cdot d\mathbf{s}$, equate to $q_{\text{enc}}/\varepsilon_0$.
  - In a dielectric: $\oint \mathbf{D}\cdot d\mathbf{s} = q'$ (free charge only) → $\nabla \cdot \mathbf{D} = \rho'$.

- **Ampère's circuital law**: $\oint_C \mathbf{B}\cdot d\boldsymbol{\ell} = \mu_0 I$ (no magnetic material)
  - Differential form: $\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$.
  - When to use: current geometry has cylindrical symmetry (infinite wire, solenoid, toroid).
  - How: choose an Amperian loop where $\mathbf{B}$ is constant and parallel to $d\boldsymbol{\ell}$, evaluate the line integral.

- **Faraday's law of electromagnetic induction**: $\text{emf} = -d\Phi/dt$
  - Integral form: $\oint_C \mathbf{E}\cdot d\boldsymbol{\ell} = -(d/dt)\int_S \mathbf{B}\cdot d\mathbf{s}$.
  - Differential form: $\nabla \times \mathbf{E} = -\partial \mathbf{B}/\partial t$.
  - When to use: time-varying flux through a circuit (moving coil, changing field).
  - How: identify $\Phi$ as a function of $t$, differentiate; sign set by Lenz's law (induced emf opposes its cause).

- **Displacement current** (Maxwell's correction to Ampère): $I_d = \varepsilon_0\, d\Phi_E/dt$
  - Current density: $\mathbf{J}_d = \partial \mathbf{D}/\partial t$.
  - Generalized Ampère: $\oint \mathbf{B}\cdot d\boldsymbol{\ell} = \mu_0(I_C + I_M + I_d)$.
  - When to use: anywhere conduction current is interrupted (capacitor gap) but fields still propagate. Critical for EM-wave existence.
  - How: compute $\varepsilon_0\, dE/dt \cdot A$ in the gap; equals conduction current in the wires.

- **Two integral-theorem bridges** (Gauss-divergence + Stokes)
  - Gauss divergence: $\int_V (\nabla \cdot \mathbf{F})\, dV = \oint_S \mathbf{F}\cdot \hat{\mathbf{n}}\, ds$ — converts flux integrals to volume integrals.
  - Stokes: $\oint_C \mathbf{F}\cdot d\boldsymbol{\ell} = \int_S (\nabla \times \mathbf{F})\cdot \hat{\mathbf{n}}\, ds$ — converts line integrals to surface integrals.
  - When to use: to flip every Maxwell equation between integral and differential form. Always.

## Key Concepts

- **Scalar vs vector field**: scalar field assigns a scalar to every point; vector field assigns a vector.
- **Line integral / circulation**: $\int_C \mathbf{F}\cdot d\boldsymbol{\ell}$ — work done if $\mathbf{F}$ is a force; potential difference if $\mathbf{F}$ is $\mathbf{E}$.
- **Surface integral / flux**: $\int_S \mathbf{F}\cdot \hat{\mathbf{n}}\, ds$ — number of field lines crossing $S$.
- **Gradient** $\nabla\phi$: vector pointing in direction of steepest increase of $\phi$; magnitude equals max rate.
- **Divergence** $\nabla \cdot \mathbf{F}$: scalar; net flux per unit volume out of an infinitesimal element. Zero → solenoidal.
- **Curl** $\nabla \times \mathbf{F}$: vector; line-integral-per-unit-area around infinitesimal loop → local "rotation." Zero → irrotational/conservative (e.g., static $\mathbf{E}$).
- **Conservative vs non-conservative $\mathbf{E}$**: static-charge $\mathbf{E}$ is conservative ($\nabla\times\mathbf{E}=0$, path-independent work, lamellar); induced $\mathbf{E}$ from changing flux is non-conservative ($\nabla\times\mathbf{E} \ne 0$).
- **Lamellar (irrotational) vs solenoidal fields**: lamellar has $\nabla\times=0$ (derivable from scalar potential); solenoidal has $\nabla\cdot=0$ (derivable from vector potential). Maxwell: $\mathbf{E}$-field is partly lamellar; $\mathbf{B}$-field is solenoidal ($\nabla\cdot\mathbf{B}=0$).
- **Electric displacement** $\mathbf{D} = \varepsilon \mathbf{E}$: separates free charge from polarization charge; Gauss's law uses $\mathbf{D}$ in dielectrics.
- **Lenz's law**: the negative sign in Faraday's law — induced emf opposes the change that produced it.
- **Magnetic induction $\mathbf{B}$**: SI unit Tesla ($\text{N/A·m} = \text{Wb/m}^2$); CGS unit Gauss; $1\,\text{T} = 10^4$ Gauss.
- **Permittivity $\varepsilon_0$ and permeability $\mu_0$**: fundamental constants coupling fields to sources in vacuum.

## Mental Models

- **Use the integral↔differential duality as a switch**: the integral form tells you what happens to a *closed surface/loop*; the differential form tells you what happens at a *point*. Pick whichever matches the symmetry of the problem; flip using Stokes or Gauss-divergence.
- **Think of "field lines as flux"**: divergence = source/sink density; curl = circulation density. Gauss's law says field lines *begin* on positive charges; $\nabla\cdot\mathbf{B}=0$ says magnetic lines are *always closed loops* — no magnetic monopoles.
- **Symmetry is the unlock for both Gauss and Ampère**: spherical charge distribution → spherical Gaussian surface (so $\mathbf{E}\parallel\hat{\mathbf{n}}$, $|E|$ constant). Straight wire → circular Amperian loop (so $\mathbf{B}\parallel d\boldsymbol{\ell}$, $|B|$ constant). Without symmetry, fall back to Coulomb/Biot-Savart.
- **Nature loves symmetry (Faraday ↔ Maxwell)**: Faraday says changing $\mathbf{B}$ makes $\mathbf{E}$. Maxwell said "by symmetry, changing $\mathbf{E}$ must make $\mathbf{B}$" — that's the displacement current. Drop the displacement term and EM waves vanish; keep it and $c = 1/\sqrt{\mu_0\varepsilon_0}$ falls out.
- **Induced $\mathbf{E}$ is as real as static $\mathbf{E}$**: only the *source* differs. Static $\mathbf{E}$ comes from charge distribution; induced $\mathbf{E}$ comes from changing $\mathbf{B}$. Both exert force $q\mathbf{E}$ on charges.

## Anti-patterns

- **Treating Gauss's law as a "general formula for $\mathbf{E}$"**: it only collapses to a closed-form answer when symmetry makes $\mathbf{E}\cdot\hat{\mathbf{n}}$ constant on the Gaussian surface. For asymmetric charge distributions you must integrate (or use Coulomb directly).
- **Forgetting the displacement current in Ampère's law**: classical Ampère fails between capacitor plates; Maxwell's correction $\varepsilon_0\, d\Phi_E/dt$ keeps $\nabla\cdot\mathbf{B}=0$ consistent and is what makes EM waves possible.
- **Dropping the negative sign in Faraday's law**: the sign is not cosmetic — it encodes Lenz's law (energy conservation). Predicting the wrong direction of induced current breaks generators, transformers, eddy-current brakes.
- **Confusing conservative with non-conservative $\mathbf{E}$**: a static-charge $\mathbf{E}$ has a scalar potential ($\nabla\times\mathbf{E}=0$); an induced $\mathbf{E}$ does not. You cannot assign a single-valued potential to an induced $\mathbf{E}$.
- **Saying "magnetic monopoles exist because we want symmetry with $\nabla\cdot\mathbf{E}=\rho$"**: experimentally $\nabla\cdot\mathbf{B}=0$ stands; there are no magnetic charges. Magnetism is generated by currents and changing $\mathbf{E}$, never by sources.
- **Using $\mathbf{E}$ and $\mathbf{D}$ interchangeably**: $\mathbf{E}$ is the fundamental field; $\mathbf{D}=\varepsilon\mathbf{E}$ is the auxiliary field that makes Gauss's law count only free charges. In dielectrics they differ and matter.
- **Applying Stokes/Gauss divergence without checking the surface is closed or the loop bounds the surface**: Stokes requires the loop to be the boundary of $S$; Gauss divergence requires $S$ to be closed. Get this wrong and the integral equations fail.

## Reference Tables

### Maxwell's equations — forms in different media

| Medium | Gauss (E) | Gauss (B) | Faraday | Ampère-Maxwell |
|---|---|---|---|---|
| Vacuum ($\rho=0$, $\mathbf{J}=0$) | $\nabla\cdot\mathbf{E}=0$ | $\nabla\cdot\mathbf{B}=0$ | $\nabla\times\mathbf{E}=-\partial\mathbf{B}/\partial t$ | $\nabla\times\mathbf{B}=\mu_0\varepsilon_0\,\partial\mathbf{E}/\partial t$ |
| Linear isotropic ($\mathbf{D}=\varepsilon\mathbf{E}$, $\mathbf{B}=\mu\mathbf{H}$) | $\nabla\cdot\mathbf{E}=\rho/\varepsilon$ | $\nabla\cdot\mathbf{H}=0$ | $\nabla\times\mathbf{E}=-\mu\,\partial\mathbf{H}/\partial t$ | $\nabla\times\mathbf{H}=\mathbf{J}+\varepsilon\,\partial\mathbf{E}/\partial t$ |
| Harmonically varying ($\sim e^{i\omega t}$) | $\nabla\cdot\mathbf{D}=\rho$ | $\nabla\cdot\mathbf{B}=0$ | $\nabla\times\mathbf{E}+i\omega\mathbf{B}=0$ | $\nabla\times\mathbf{H}-i\omega\mathbf{D}=\mathbf{J}$ |
| Integral form (general) | $\oint\mathbf{D}\cdot d\mathbf{s}=q$ | $\oint\mathbf{B}\cdot d\mathbf{s}=0$ | $\oint\mathbf{E}\cdot d\boldsymbol{\ell}=-d/dt\int\mathbf{B}\cdot d\mathbf{s}$ | $\oint\mathbf{H}\cdot d\boldsymbol{\ell}=\int(\mathbf{J}+\partial\mathbf{D}/\partial t)\cdot d\mathbf{s}$ |

### Conduction current vs displacement current

| Property | Conduction current $I_C$ | Displacement current $I_d$ |
|---|---|---|
| Origin | Motion of charge carriers | Time-varying electric flux |
| Possible in | Conductors only | Any medium, **including vacuum** |
| Depends on | Potential difference, resistivity | $d\Phi_E/dt$ and $\varepsilon$ |
| Ohm's law | Obeys | Does not obey |
| Magnitude (typical conductor) | Dominates | Normally negligible |
| Phase (alternating E) | Lags $\mathbf{E}$ by $\pi/2$ | Leads $\mathbf{E}$ by $\pi/2$ |
| Across capacitor gap | **Discontinuous** | **Continuous** |

### Vector calculus operator summary

| Operator | Type | Physical meaning |
|---|---|---|
| $\nabla\phi$ (gradient) | Vector | Steepest ascent of $\phi$ |
| $\nabla\cdot\mathbf{F}$ (divergence) | Scalar | Net flux per unit volume out of point |
| $\nabla\times\mathbf{F}$ (curl) | Vector | Circulation per unit area around point |
| $\nabla^2\phi$ (Laplacian) | Scalar | $\nabla\cdot(\nabla\phi)$ |

### Magnetic induction formulas (special cases, vacuum)

| Configuration | Magnitude of $\mathbf{B}$ |
|---|---|
| Long straight wire (finite ends at angles $\theta_1,\theta_2$) | $B=\dfrac{\mu_0 I_0}{4\pi r}(\sin\theta_2-\sin\theta_1)$ |
| Infinitely long straight wire | $B=\dfrac{\mu_0 I_0}{2\pi r}$ |
| On axis of circular coil ($n$ turns, radius $r$, axial distance $x$) | $B=\dfrac{\mu_0 n I_0 r^2}{2(r^2+x^2)^{3/2}}$ |
| Centre of circular coil | $B=\dfrac{\mu_0 n I_0}{2r}$ |
| On axis of circular coil, $x\gg r$ | $B\approx\dfrac{\mu_0 n I_0 r^2}{2x^3}$ |
| On axis of solenoid ($n$ turns/length) | $B=\mu_0 n I_0$ |

## Worked Example: Induced emf from a time-varying flux

A coil perpendicular to its plane has flux $\Phi(t) = 5t^2 + 7t + 9$ Wb. Find the induced emf at $t = 2$ s.

1. Faraday's law: $\varepsilon = -d\Phi/dt$.
2. Differentiate: $d\Phi/dt = 10t + 7$ V (Wb/s = V).
3. Evaluate at $t = 2$ s: $\varepsilon = -(10\cdot 2 + 7) = -27$ V.
4. The negative sign (Lenz's law) tells you the induced emf opposes the *increase* in flux; magnitude is $27$ V.

This is the universal pattern: write $\Phi$ as an explicit function of $t$, take one derivative, read off magnitude and direction. No integration, no field geometry required.

## Worked Example: Displacement current in a parallel-plate capacitor

A parallel-plate capacitor has circular plates of radius $R$; $E$ between plates rises at rate $dE/dt$. Find the induced magnetic field $B$ at a point at radius $x$ (a) inside ($x \le R$) and (b) outside ($x \ge R$) the plate region.

(a) Inside: choose a circular Amperian loop of radius $x$ in the plane between the plates. $\Phi_E = \pi x^2 E$. Generalized Ampère:

$$B\cdot 2\pi x = \mu_0 \varepsilon_0 \frac{d}{dt}(\pi x^2 E) = \mu_0 \varepsilon_0 \pi x^2 \frac{dE}{dt}$$

$$\Rightarrow \quad B = \frac{\mu_0 \varepsilon_0 x}{2}\frac{dE}{dt}$$

(b) Outside: same loop radius $x$, but $\Phi_E = \pi R^2 E$ (limited by plate area):

$$B = \frac{\mu_0 \varepsilon_0 R^2}{2x}\frac{dE}{dt}$$

Note that even in the *gap between the plates* (no conduction current can flow), the time-varying $E$ produces a real $\mathbf{B}$ — the displacement current.

## Key Takeaways

1. **Four equations, everything else is corollary** — Coulomb, Biot-Savart, Faraday, Ampère all drop out of Maxwell's four. Don't relearn them; derive when needed.
2. **Symmetry is the prerequisite for closed-form $\mathbf{E}$ or $\mathbf{B}$** — pick the Gaussian/Amperian surface that exploits it; the integral collapses because $|E|$ or $|B|$ is constant on it.
3. **Integral ↔ differential form is a free translation** — always reachable via Stokes (curl → line integral) or Gauss-divergence (div → flux integral). Master this translation and you stop memorizing equations.
4. **Displacement current is not optional** — it's the term that makes Ampère's law valid across a capacitor gap and is what produces EM waves. Drop it and you lose light.
5. **The induced $\mathbf{E}$ is non-conservative** — $\nabla\times\mathbf{E}\ne 0$ in time-varying fields, so no scalar potential exists. Loop a charge around a changing flux and you get net work out per cycle (that's a generator).
6. **Static $\mathbf{E}$ vs induced $\mathbf{E}$ are physically distinct fields with the same units** — both exert $q\mathbf{E}$, but only the static one is derivable from a potential.
7. **$\nabla\cdot\mathbf{B}=0$ is empirical, not symmetric** — there are no magnetic monopoles; magnetic field lines have no beginning or end. All magnetism is from currents or from $\partial\mathbf{E}/\partial t$.

## Connects To

- **Ch 6 (EM Waves)** — Maxwell's equations in vacuum predict a wave equation with $c = 1/\sqrt{\mu_0\varepsilon_0}$. The displacement current introduced here is what makes that derivation possible.
- **Ch 3 (Vector Calculus foundations)** — grad, div, curl, Stokes, Gauss-divergence introduced as mathematical tools; here they're applied to physical fields. Mastering the operators in Ch 3 lets you flip Maxwell freely.
- **Ch 9 / Ch 10 (Dielectric & Magnetic Materials, Vol 2)** — distinction between free and bound charges, polarization, magnetization currents $I_M$ in Ampère's generalized form $\oint\mathbf{B}\cdot d\boldsymbol{\ell}=\mu_0(I_C+I_M+I_d)$.
- **Ch 4 (Polarization)** — the $\mathbf{D}=\varepsilon\mathbf{E}$ relation used in the dielectric form of Gauss's law comes from the polarization analysis of Ch 4.
- **External: special relativity** — Maxwell's equations are Lorentz-covariant as written; $c=1/\sqrt{\mu_0\varepsilon_0}$ is the invariant speed that forced Einstein's kinematics.
- **External: electrical engineering** — every circuit law (Coulomb's law, $V=IR$, transformer EMF, generator EMF) is a special case of Maxwell's equations in a particular geometry.