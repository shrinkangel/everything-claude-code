# Chapter 6: Electromagnetic Waves

## Core Idea
Maxwell's equations force time-varying electric and magnetic fields to propagate as coupled transverse waves whose speed in vacuum is fixed by the medium constants ($c = 1/\sqrt{\mu_0 \varepsilon_0}$), whose energy flow is given by the Poynting vector, and whose amplitude obeys a single second-order wave equation $\nabla^2 \mathbf{E} - \mu\varepsilon \partial^2\mathbf{E}/\partial t^2 - \mu\sigma \partial\mathbf{E}/\partial t = 0$ — applicable uniformly in vacuum, dielectrics, conductors, and plasma.

## Frameworks Introduced

- **Poynting's Theorem (energy conservation in fields)**
  - When to use: any closed volume $V$ bounded by surface $S$ containing time-varying fields, charges, currents.
  - How: write $-\partial_t[\frac{1}{2}\mathbf{B}\cdot\mathbf{H} + \frac{1}{2}\mathbf{D}\cdot\mathbf{E}] = \mathbf{J}\cdot\mathbf{E} + \nabla\cdot(\mathbf{E}\times\mathbf{H})$. The LHS is the rate of stored EM-energy decrease; RHS terms are power delivered to charges (work) and outward energy flux (Poynting vector). Closed system, energy balance is exact.
  - Poynting vector: $\mathbf{P} = \mathbf{E}\times\mathbf{H}$ — instantaneous power density (W/m²).

- **EM wave equation in charge-free linear isotropic medium**
  - $\nabla^2\mathbf{E} - \mu\varepsilon \frac{\partial^2\mathbf{E}}{\partial t^2} - \mu\sigma \frac{\partial\mathbf{E}}{\partial t} = 0$ and same for $\mathbf{H}$.
  - $\sigma = 0$ → lossless wave equation, phase speed $v = 1/\sqrt{\mu\varepsilon}$.
  - $\sigma \ne 0$ → diffusion-like damped propagation (conductors). In vacuum: $c = 1/\sqrt{\mu_0\varepsilon_0} \approx 3\times10^8$ m/s.

- **Plane monochromatic wave structure (transverse, in-phase E and H)**
  - $\mathbf{E}(z,t) = \mathbf{E}_0 e^{i(\omega t - kz)}$, $\mathbf{H}(z,t) = \mathbf{H}_0 e^{i(\omega t - kz)}$ (real parts are physical).
  - E and H must have the same phase ($\alpha = 0$); phase difference other than zero is impossible.
  - Intrinsic impedance $\eta = E/H = \sqrt{\mu/\varepsilon}$. For vacuum: $\eta_0 \approx 377\,\Omega$.
  - Right-hand orthogonal set: $\mathbf{E} \perp \mathbf{H} \perp \mathbf{k}$, with $\mathbf{k}\times\mathbf{E} = \mu\omega\mathbf{H}$.

- **Vector and scalar potentials + Lorentz gauge**
  - $\mathbf{B} = \nabla\times\mathbf{A}$; $\mathbf{E} = -\partial\mathbf{A}/\partial t - \nabla\phi_E$.
  - Lorentz gauge: $\nabla\cdot\mathbf{A} + \mu\varepsilon\,\partial\phi_E/\partial t = 0$.
  - Under this gauge the potentials decouple into two symmetric wave equations: $\nabla^2\mathbf{A} - \mu\varepsilon\,\partial^2\mathbf{A}/\partial t^2 = -\mu\mathbf{J}$ and $\nabla^2\phi_E - \mu\varepsilon\,\partial^2\phi_E/\partial t^2 = -\rho/\varepsilon$.

- **Plasma propagation: dispersion by plasma frequency**
  - Plasma frequency: $\omega_p = \sqrt{Ne^2/(\varepsilon_0 m_e)}$. Propagation constant $\gamma = \frac{1}{c}\sqrt{\omega_p^2 - \omega^2}$.
  - $\omega > \omega_p$: $\gamma$ purely imaginary → propagation, refractive index $n = \sqrt{1-\omega_p^2/\omega^2}$.
  - $\omega = \omega_p$: cut-off; $\gamma = 0$, wave cannot enter.
  - $\omega < \omega_p$: $\gamma$ purely real → exponential attenuation (evanescent). Total reflection.
  - $\omega \gg \omega_p$: $n\to 1$, plasma is transparent (lasers through ionosphere).

- **Boundary conditions for EM waves at interface**
  - $B_{1n} = B_{2n}$ (normal $\mathbf{B}$ continuous).
  - $E_{1t} = E_{2t}$ (tangential $\mathbf{E}$ continuous).
  - $H_{1t} = H_{2t}$ (tangential $\mathbf{H}$ continuous between dielectrics).
  - $D_{1n} - D_{2n} = \sigma_f$ (free surface charge).
  - Consequences: $\omega_I = \omega_R = \omega_T$, coplanar $\mathbf{k}_I, \mathbf{k}_R, \mathbf{k}_T$, $\theta_I = \theta_R$ (law of reflection), and Snell's law $n_1\sin\theta_I = n_2\sin\theta_T$.

## Key Concepts

- **Poynting vector** $\mathbf{P} = \mathbf{E}\times\mathbf{H}$: instantaneous EM power density (W/m²); for plane wave, $P = EH$.
- **EM energy density**: $u = \frac{1}{2}\mathbf{B}\cdot\mathbf{H} + \frac{1}{2}\mathbf{D}\cdot\mathbf{E}$ (magnetic + electric contributions, equal on average for propagating wave).
- **Intrinsic impedance** $\eta = \sqrt{\mu/\varepsilon}$; vacuum value $\eta_0 = \sqrt{\mu_0/\varepsilon_0} \approx 376.7\,\Omega$.
- **Refractive index** $n = c/v = \sqrt{\mu_r\varepsilon_r}$ (must be evaluated at the same frequency for $\mu_r, \varepsilon_r$).
- **Plasma frequency** $\omega_p = \sqrt{Ne^2/(\varepsilon_0 m_e)}$: a property of the ionized medium; sets the high-pass filter behaviour for wave propagation.
- **Cut-off frequency** $\nu_c = \omega_p/(2\pi)$: frequencies above it propagate; below are reflected/absorbed.
- **Phase speed in plasma** $v = c/\sqrt{1-\omega_p^2/\omega^2}$ — dispersive (depends on $\omega$); faster than $c$ is allowed because it is not signal speed.
- **Propagation constant** $\gamma = \alpha + i\beta$: real part $\alpha$ = attenuation; imaginary part $\beta$ = phase shift per metre; $\beta\lambda = 2\pi$.
- **Transverse EM wave**: $\mathbf{E}\cdot\mathbf{k}=0$, $\mathbf{H}\cdot\mathbf{k}=0$, $\mathbf{k}\times\mathbf{E} = \mu\omega\mathbf{H}$.

## Mental Models

- **Use the Poynting vector as the "field momentum" of EM energy**: any place where a wave enters or leaves a volume, account for energy by computing $\oint_S \mathbf{P}\cdot d\mathbf{s}$ — same role as mechanical work + kinetic-energy flux.
- **Think of EM waves as a coupled harmonic oscillator pair**: curl-of-Maxwell-Faraday gives $\mathbf{E}$ a wave equation driven by $\partial\mathbf{B}/\partial t$, and curl-of-Maxwell-Ampere gives $\mathbf{H}$ a wave equation driven by $\partial\mathbf{D}/\partial t$ — they cannot oscillate without each other.
- **Plasma is a high-pass filter**: frequencies below $\omega_p$ bounce off; frequencies above pass through with refractive index $< 1$. This is why AM radio bounces off the ionosphere but FM and satellite TV pass through.
- **Lorentz gauge decouples the potentials**: the four Maxwell equations become two independent second-order wave equations in $(\phi_E, \mathbf{A})$ — much easier to solve than the coupled $\mathbf{E},\mathbf{B}$ system, especially with sources.
- **Good conductors are mirrors at EM-wave frequencies**: $\sigma_2/(\varepsilon_2\omega) \gg 1$ makes $E_{0R}/E_{0I} \to -1$ and $E_{0T}/E_{0I} \to 0$ — reflection nearly 100%, transmission highly attenuated.

## Anti-patterns

- **Treating EM energy density as purely electric or purely magnetic**: for a propagating wave the time-averaged electric and magnetic energy densities are *equal*; storing only one misses half the energy.
- **Confusing phase speed with signal speed in plasma**: $v = c/\sqrt{1-\omega_p^2/\omega^2} > c$ is not a violation of relativity — it is the speed of constant-phase surfaces, not of energy or information.
- **Assuming wave amplitude is preserved in conductors**: $\sigma \ne 0$ adds a $\mu\sigma\,\partial\mathbf{E}/\partial t$ damping term, making propagation diffusive (rapid attenuation / skin depth).
- **Adding complex amplitudes when mixing real and imaginary parts**: the author explicitly warns — use only the real part, or only the imaginary part, of $\mathbf{E}_0 e^{i(\omega t - \mathbf{k}\cdot\mathbf{r})}$, never intermingle.
- **Believing "metallic reflection = 100% via some special formula"**: it emerges from the *limit* $\sigma_2/(\varepsilon_2\omega) \to \infty$; the exact Fresnel coefficient $\to -1$ only in that asymptotic limit. Finite conductivity gives slightly less than unity reflection.
- **Forgetting the sign in $\mathbf{E} = -\nabla\phi_E - \partial\mathbf{A}/\partial t$**: dropping either term loses either the static or the inductive part of the field.

## Reference Tables

### Comparison of Poynting's theorem terms

| Term | Physical meaning | Sign in energy balance |
|---|---|---|
| $-\partial_t[\frac{1}{2}\mathbf{B}\cdot\mathbf{H} + \frac{1}{2}\mathbf{D}\cdot\mathbf{E}]$ | Decrease of EM stored energy in $V$ | Loss from field |
| $\int_V \mathbf{J}\cdot\mathbf{E}\,dV$ | Power delivered by field to charges | Source/sink |
| $\oint_S (\mathbf{E}\times\mathbf{H})\cdot d\mathbf{s}$ | Outward EM energy flux (Poynting) | Energy escaping volume |

### Plane-wave properties at a glance

| Property | Expression | Vacuum value |
|---|---|---|
| Phase speed $v$ | $1/\sqrt{\mu\varepsilon}$ | $c \approx 3\times10^8$ m/s |
| Intrinsic impedance $\eta$ | $\sqrt{\mu/\varepsilon}$ | $\eta_0 \approx 377\,\Omega$ |
| Refractive index $n$ | $c/v = \sqrt{\mu_r\varepsilon_r}$ | 1 |
| E–H amplitude ratio | $E/H = \eta$ | $376.7$ V/(A/m) |
| Relation between fields | $\mathbf{k}\times\mathbf{E} = \mu\omega\mathbf{H}$ | — |

### Plasma propagation regimes

| Regime | $\omega$ vs $\omega_p$ | $\gamma$ | Behaviour |
|---|---|---|---|
| Very high frequency | $\omega \gg \omega_p$ | pure imaginary, $\beta\approx\omega/c$ | $n \to 1$, undeviated |
| Above cut-off | $\omega > \omega_p$ | pure imaginary | Propagates, $n<1$, wave bends away from normal |
| Cut-off | $\omega = \omega_p$ | zero | Wave cannot enter medium |
| Below cut-off | $\omega < \omega_p$ | pure real, $\alpha=\sqrt{\omega_p^2-\omega^2}/c$ | Total internal reflection, evanescent |

### Boundary conditions summary

| Field component | Behaviour across interface |
|---|---|
| $B_n$ | Continuous |
| $E_t$ | Continuous |
| $H_t$ | Continuous (between dielectrics) |
| $D_n$ | Discontinuous by $\sigma_f$ |

### Conducting-medium Fresnel results (good conductor)

| Quantity | Result |
|---|---|
| $\theta_T$ | $\approx 0$ (transmission normal to surface) |
| $E_{0R}/E_{0I}$ | $\approx -1$ (reflection $\approx 100\%$, $\pi$ phase flip) |
| $E_{0T}/E_{0I}$ | $\approx 0$ (high attenuation) |
| $R_R + R_T$ | $= 1$ (energy conservation) |

## Key Equations

- **Poynting vector (instantaneous power density)**: $\mathbf{P} = \mathbf{E}\times\mathbf{H}$
- **Poynting's theorem (integral form)**: $-\int_V \frac{\partial}{\partial t}\!\left[\frac{1}{2}\mathbf{B}\cdot\mathbf{H} + \frac{1}{2}\mathbf{D}\cdot\mathbf{E}\right]dV = \int_V \mathbf{J}\cdot\mathbf{E}\,dV + \oint_S (\mathbf{E}\times\mathbf{H})\cdot d\mathbf{s}$
- **EM energy density**: $u = \tfrac{1}{2}\mathbf{B}\cdot\mathbf{H} + \tfrac{1}{2}\mathbf{D}\cdot\mathbf{E}$
- **EM wave equation (charge-free linear medium)**: $\nabla^2\mathbf{E} - \mu\varepsilon\,\dfrac{\partial^2\mathbf{E}}{\partial t^2} - \mu\sigma\,\dfrac{\partial\mathbf{E}}{\partial t} = 0$
- **Same for $\mathbf{H}$**: $\nabla^2\mathbf{H} - \mu\varepsilon\,\dfrac{\partial^2\mathbf{H}}{\partial t^2} - \mu\sigma\,\dfrac{\partial\mathbf{H}}{\partial t} = 0$
- **Phase speed**: $v = 1/\sqrt{\mu\varepsilon}$ ; in vacuum $c = 1/\sqrt{\mu_0\varepsilon_0} \approx 3\times10^8$ m/s
- **Intrinsic impedance**: $\eta = \sqrt{\mu/\varepsilon}$ ; $\eta_0 = \sqrt{\mu_0/\varepsilon_0} \approx 376.7\,\Omega$
- **Vector–scalar potential decomposition**: $\mathbf{B} = \nabla\times\mathbf{A}$, $\mathbf{E} = -\partial\mathbf{A}/\partial t - \nabla\phi_E$
- **Lorentz gauge**: $\nabla\cdot\mathbf{A} + \mu\varepsilon\,\partial\phi_E/\partial t = 0$
- **Potential wave equations (with sources)**: $\nabla^2\mathbf{A} - \mu\varepsilon\,\partial^2\mathbf{A}/\partial t^2 = -\mu\mathbf{J}$ ; $\nabla^2\phi_E - \mu\varepsilon\,\partial^2\phi_E/\partial t^2 = -\rho/\varepsilon$
- **Plane-wave field relation**: $\mathbf{k}\times\mathbf{E} = \mu\omega\mathbf{H}$ ; equivalently $\mathbf{H}\times\mathbf{k} = \varepsilon\omega\mathbf{E}$
- **Time-averaged Poynting vector**: $\langle\mathbf{P}\rangle = \tfrac{1}{2}(\varepsilon/\mu)E_0^2\,\hat{\mathbf{k}} = v\,U_d\,\hat{\mathbf{k}}$
- **Plasma angular frequency**: $\omega_p = \sqrt{Ne^2/(\varepsilon_0 m_e)}$
- **Plasma propagation constant**: $\gamma = \dfrac{1}{c}\sqrt{\omega_p^2 - \omega^2} = \alpha + i\beta$
- **Plasma phase speed**: $v = c\big/\sqrt{1-\omega_p^2/\omega^2}$
- **Plasma refractive index**: $n = \sqrt{1-\omega_p^2/\omega^2}$
- **Cut-off frequency**: $\nu_c = \dfrac{1}{2\pi}\sqrt{Ne^2/(\varepsilon_0 m_e)}$
- **Good-conductor $k_T$ (complex)**: $k_T \approx \sqrt{\mu_2\sigma_2\omega/2}\,(1+i)$

## Worked Example: Solar-flux Poynting-vector magnitude and field amplitudes

A textbook problem from the chapter: solar radiation gives an average Poynting magnitude $\langle P \rangle = 1300$ W/m² at Earth's surface. Find the rms electric and magnetic field amplitudes.

1. Average Poynting magnitude in vacuum: $\langle P \rangle = \tfrac{1}{2}(\varepsilon_0/\mu_0)\,E_0^2 = \tfrac{1}{2}\,E_0^2/\eta_0$.
2. Solve for $E_0$: $E_0 = \sqrt{2\langle P\rangle \eta_0} = \sqrt{2 \cdot 1300 \cdot 377}$ V/m $= 990$ V/m.
3. RMS electric field: $E_\text{rms} = E_0/\sqrt{2} = 700$ V/m.
4. Magnetic amplitude from $E/H = \eta_0$: $H_\text{rms} = \varepsilon_0 c\,E_\text{rms} = 1.858$ A/m.

The pattern: given $\langle P\rangle$ and vacuum, jump from $\langle P\rangle = E_0^2/(2\eta_0)$ to $E_0$, then convert via $\eta_0$ to $H_0$, and use $E_\text{rms} = E_0/\sqrt{2}$. Useful for any antenna/sunlight/radio-link field estimate.

## Key Takeaways

1. **The wave equation emerges purely from Maxwell + linearity**: take the curl of Faraday's law and substitute Ampere-Maxwell — no extra physics. $\nabla^2\mathbf{E} = \mu\varepsilon\,\partial^2\mathbf{E}/\partial t^2$ is built into electromagnetism, not added on top.
2. **Poynting's theorem is the field-theory analog of energy conservation**: $\partial_t u + \nabla\cdot\mathbf{P} = -\mathbf{J}\cdot\mathbf{E}$ is to EM what $dE/dt = P_\text{mech}$ is to a particle.
3. **Plane EM waves are transverse and in-phase**: $\mathbf{E}\perp\mathbf{H}\perp\mathbf{k}$ with $E/H = \eta$; any phase difference $\alpha \neq 0$ between $E$ and $H$ is ruled out by Maxwell.
4. **The speed of light is fixed by vacuum constants**: $c = 1/\sqrt{\mu_0\varepsilon_0} \approx 3\times 10^8$ m/s. Measuring $c$ and either $\mu_0$ or $\varepsilon_0$ determines the other.
5. **The medium is encoded entirely in $\mu, \varepsilon, \sigma$**: changing the medium changes the wave equation, the phase speed, and whether propagation or attenuation dominates. Conductors ($\sigma\ne0$) attenuate; dielectrics ($\sigma=0$) propagate losslessly.
6. **Plasma sets its own high-pass filter**: $\omega_p$ is determined by electron density $N$; only $\omega > \omega_p$ propagates. This is why HF signals bounce off the ionosphere, while satellite TV passes through.
7. **At a good conductor, $R_R \to 1$, $R_T \to 0$**: reflection is essentially 100%, transmission is exponentially damped (skin depth). Metal *is* a mirror because its conduction current is so large that the wave cannot penetrate.

## Connects To

- **Ch 5 (Electromagnetism)**: this chapter consumes Ch5's Maxwell equations as inputs and derives their wave consequences.
- **Ch 7 (Quantum Physics / Photons)**: $E = h\nu$ combined with $\langle P \rangle = E_0^2/(2\eta_0)$ connects classical wave intensity to photon flux.
- **Ch 8 (Optical fibres / waveguides)**: total internal reflection ($\omega < \omega_p$ analog in plasmas vs. $n_1 > n_2$ in fibres) is the same phenomenon under different boundary conditions.
- **Ch 10 (Antennas and radiation)**: Poynting vector and $\eta_0$ are the foundations of antenna gain and free-space path loss.
- **External: plasma physics, ionospheric physics**: the $\omega_p = \sqrt{Ne^2/(\varepsilon_0 m_e)}$ formula is the basis for ionospheric sounding and HF radio propagation.
- **External: skin depth and eddy currents**: $\alpha = \sqrt{\mu_2\sigma_2\omega/2}$ gives skin depth $\delta = 1/\alpha$, the basis for electromagnetic shielding and induction heating.
