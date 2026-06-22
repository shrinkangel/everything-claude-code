# Chapter 21: Optical Properties of Materials

## Core Idea
Every optical phenomenon in matter — scattering, reflection, refraction, absorption, transmission — reduces to **one electron-on-a-spring problem** in a damping medium, dressed with a complex refractive index $n_c = n - ib$ and the plasma/oscillator resonance frequency $\omega_p$ or $\omega_0$.

## Frameworks Introduced

- **Six optical phenomena checklist** — scattering, reflection, refraction, transmission, absorption, luminescence. When light hits a material, any subset can occur; together they fully characterize the optical response.
  - When to use: opening analysis of any new material's optical behavior.
  - How: identify which phenomena are dominant from $\omega$ vs $\omega_p$ (metals) or $\omega$ vs $\omega_0$ (dielectrics).

- **Reflectivity at normal incidence (Fresnel)** $R = \left(\dfrac{n_2 - n_1}{n_2 + n_1}\right)^2$ for dielectrics, generalized to complex index as $R = \dfrac{(n-1)^2 + b^2}{(n+1)^2 + b^2}$.
  - When to use: relating measurable reflectance to material index.
  - How: for dielectrics use $n$ only; for metals/dense absorbers, use $n$ and $b$; for good conductors $\sigma \to \infty \Rightarrow R \to 1$.

- **Skin depth and absorption coefficient** $\delta = \sqrt{2/(\mu\sigma\omega)}$, $\gamma = 2/\delta = \sqrt{2\mu\sigma\omega}$; intensity decays as $I = I_0 e^{-\gamma r}$.
  - When to use: quantifying how deep EM waves penetrate a conductor.
  - How: combine with $R \to 1$ result — "good conductors are simultaneously good reflectors and good absorbers" because their $\delta$ is tiny.

- **Transmission law for a slab** $I_T = I_0 (1-R)^2 e^{-\gamma \ell}$ (Eq. 7.46).
  - When to use: design of windows, filters, optical-fiber segments; lab absorption measurements.
  - How: factor $(1-R)^2$ for two surface losses, then exponential absorption through thickness $\ell$.

- **Quantum absorption criterion** $h\nu \ge E_g$ (metals: $h\nu \ge \Delta E$).
  - When to use: predicting which photon energies a non-metal can absorb.
  - How: rewrite as $\lambda_{max} = hc/E_g$ to get the cutoff wavelength; beyond this, the material is transparent.

- **Three transition types** — direct inter-band (momentum conserved, no phonon), indirect inter-band (momentum changes, phonon created, $h\nu > E_g$), intra-band (within partially filled band, metals only, infrared).
  - When to use: explaining why materials are transparent to some wavelengths and absorbing to others.

- **Atomic theory of optical properties via driven damped oscillator** — for metals (free electrons, no restoring force): $m\ddot x + \xi\dot x = eE$; for dielectrics (bound electrons, restoring force): $m\ddot x + \xi\dot x + a x = eE$. Resolvent gives complex dielectric constant $\varepsilon_r = 1 + \omega_p^2/(\omega_0^2 - \omega^2 + i\xi\omega/m)$ (dielectric form) or $1 + \omega_p^2/(i\omega\omega_d - \omega^2)$ (metal form).
  - When to use: deriving $n(\omega)$ and $b(\omega)$ for any material.
  - How: solve the linear ODE for the polarization $P = Nex$, identify $\varepsilon_r$, take $\sqrt{\varepsilon_{rc}} = n_c$.

## Key Concepts

- **Light vector**: the electric vector $\vec E$ of an EM wave — the vibrating component responsible for almost all optical phenomena (not $\vec B$).
- **Rayleigh scattering**: $I_{scat} \propto 1/\lambda^4$ when particle size $\ll \lambda$; explains blue sky, red sunsets.
- **Mie / Tyndall scattering**: when particle size $\gtrsim \lambda$ — Mie theory takes over and Tyndall scattering dominates for sizes larger than $\lambda$ (fog and clouds appear white).
- **Complex refractive index** $n_c = n - ib$: real part $n$ governs phase velocity, imaginary part $b$ (extinction coefficient) governs attenuation.
- **Phonon**: quantum of lattice vibrational energy; created/absorbed in indirect and intra-band transitions to conserve momentum.
- **Plasma angular frequency** $\omega_p = \sqrt{Ne^2/(\varepsilon_0 m)}$; for metals $\omega_p \sim 10^{15}$ Hz. Metal becomes transparent when $\omega > \omega_p$.
- **Damping frequency** $\omega_d = \varepsilon_0\omega_0^2/\sigma_{dc}$; for metals $\omega_d \sim 10^{12}$ Hz. Acts as the relaxation rate of free electrons.
- **Natural (resonance) frequency** $\omega_0 = \sqrt{a/m}$ for bound electron in a dielectric (analogous to spring constant $a$).
- **Anomalous dispersion**: $n$ *decreases* with increasing $\omega$ in the neighborhood of $\omega_0$; outside this region $n$ increases with $\omega$ (normal dispersion).
- **Ac conductivity** $\sigma_{ac} = \varepsilon_0\omega_p^2/\omega_d$ (Eq. 7.71) equals $\sigma_{dc}$ in the far infrared.

## Mental Models

- **Think of an electron as a damped driven oscillator, not a particle in a box.** The "atomic theory" of optics is just Newton's second law with $F = -kx$ (or none for free electrons), $F = -b\dot x$ (damping), and $F = eE_0 e^{i\omega t}$ (driving). The complex frequency response *is* the optical property.
- **Use $\omega$ vs $\omega_p$ (metals) and $\omega$ vs $\omega_0$ (dielectrics) as a switchboard.** Below the resonance, you have one regime (reflector/absorber); above it, the other (transparent for metals, anomalous dispersion for dielectrics). All curves of $n(\omega)$ and $b(\omega)$ fall out of this comparison.
- **Pair $R$ and $T$ through the Fresnel pair** — for a clean non-absorbing interface at normal incidence, $R + T = 1$ only with the proper Fresnel $T$ formula. For a slab, $(1-R)^2$ captures the *two* surface losses.
- **Distinguish inter-band vs intra-band by who pays for momentum conservation.** Direct transitions need no phonon; indirect and intra-band require a phonon to soak up crystal momentum.

## Anti-patterns

- **Treating $R + T = 1$ for a metal slab without $(1-R)^2$**: forgetting the two-surface reflection loss underestimates $I_T$ by a factor up to $(1-R)^2$. For glass $R \approx 0.04$ so this matters for precision optics.
- **Claiming "metals absorb light" via skin depth alone**: skin depth $\delta$ describes *attenuation*, not the underlying quantum process; the metallic $b(\omega)$ comes from intra-band transitions of free electrons.
- **Setting $R \to 1$ from "$\sigma \to \infty$" without checking the small-correction term $4\omega\mu_2\varepsilon_1/(2\mu_1\sigma_2)$**: for finite-conductivity metals (e.g., doped Si, poor conductors), this correction shifts $R$ measurably.
- **Confusing the plasma frequency of metals with that of the ionosphere**: the formula $\omega_p = \sqrt{Ne^2/\varepsilon_0 m}$ is the same, but the $N$ and $m$ are different (free electrons in conduction band vs free electrons in ionospheric plasma).
- **Calling visible-light absorption "electronic polarization"** without distinguishing classical (cloud-shift) vs quantum (band-to-band) pictures — they give different answers for frequency dependence.
- **Assuming all non-metals absorb any photon**: the band-gap criterion $h\nu \ge E_g$ means materials with $E_g > 3.1$ eV are transparent to *all* visible light (e.g., diamond, $E_g = 5.6$ eV).
- **Direct vs indirect transition confusion**: indirect transitions need $h\nu > E_g$ (some surplus goes to the phonon), direct transitions need $h\nu \ge E_g$. Confusing the inequality flips the answer.

## Reference Tables

### Optical phenomena by material type

| Phenomenon | Dielectric | Good conductor | Frequency dependence |
|---|---|---|---|
| Scattering | Weak (Rayleigh, particles < 0.05$\lambda$) | Strong from surface free electrons | $\propto 1/\lambda^4$ (small particles) |
| Reflection $R$ | $\left(\frac{n_2-n_1}{n_2+n_1}\right)^2$, small | $\approx 1$ | $R$ rises with $b(\omega)$ |
| Refraction $T$ | $(1-R)^2 e^{-\gamma\ell}$ | $\approx 0$ | Falls with $\omega$ in metals |
| Absorption | $h\nu \ge E_g$ required | Intra-band for $\omega < \omega_p$ | $\gamma = \sqrt{2\mu\sigma\omega}$ |

### Material regimes by frequency

| Regime | Condition | Metal behavior | Dielectric behavior |
|---|---|---|---|
| Far IR | $\omega^2 \ll \omega_d^2$ | $\sigma_{ac} = \sigma_{dc}$ | — |
| Visible | $\omega^2 \gg \omega_d^2$, $\omega < \omega_p$ | Reflector ($n < 1$, large $b$) | Normal dispersion if $\omega \ll \omega_0$ |
| Near $\omega_0$ | $\omega \approx \omega_0$ | — | Anomalous dispersion, peak $b$ |
| $\omega > \omega_p$ | UV | Transparent | Transparent if $E_g$ small enough |

### Skin depth / absorption formulas

| Quantity | Formula | Depends on |
|---|---|---|
| Skin depth $\delta$ | $\sqrt{2/(\mu\sigma\omega)}$ | $\sigma, \mu, \omega$ |
| Absorption coefficient $\gamma$ | $2/\delta = \sqrt{2\mu\sigma\omega}$ | $\sigma, \mu, \omega$ |
| Intensity law | $I = I_0 e^{-\gamma r}$ | $\gamma, r$ |
| Slab transmission | $I_T = I_0 (1-R)^2 e^{-\gamma\ell}$ | $R, \gamma, \ell$ |

### Quantum transitions

| Transition | Momentum change? | Phonon? | $h\nu$ threshold | Material |
|---|---|---|---|---|
| Direct inter-band | No | No | $h\nu \ge E_g$ | Non-metal |
| Indirect inter-band | Yes | Yes | $h\nu > E_g$ | Non-metal |
| Intra-band | Yes | Yes | Any (low $E$) | Metal only |

## Key Equations

**Reflection (Fresnel)**
$$R = \left(\frac{n_2 - n_1}{n_2 + n_1}\right)^2 \text{ (normal incidence, dielectric)}$$
$$R = \frac{(n-1)^2 + b^2}{(n+1)^2 + b^2} \text{ (complex index)}$$

**Refraction (transmission through one interface)**
$$T = \frac{4 n_1 \cos\theta_I \cos\theta_T}{(n_2\cos\theta_I + n_1\cos\theta_T)^2} \text{ (dielectric, normal)}$$

**Absorption (macroscopic, good conductor)**
$$\delta = \sqrt{2/(\mu\sigma\omega)}, \quad \gamma = 2/\delta = \sqrt{2\mu\sigma\omega}$$
$$I = I_0 e^{-\gamma r}, \quad I_T = I_0 (1-R)^2 e^{-\gamma\ell}$$

**Good-conductor limits**
$$R \approx 1, \quad T \approx 0$$

**Quantum absorption threshold**
$$h\nu \ge E_g \quad\Longleftrightarrow\quad \lambda \le \lambda_{max} = hc/E_g$$

**Complex index and dielectric constant**
$$n_c^2 = \varepsilon_{rc}, \quad n_c = n - ib$$
$$\varepsilon_r = n^2 - b^2, \quad \varepsilon_{ri} = 2nb$$
$$n^2 + b^2 = \sqrt{\varepsilon_r^2 + \varepsilon_{ri}^2}$$

**Drude (free electrons, metal)**
$$m\ddot x + \xi\dot x = eE \;\Rightarrow\; \varepsilon_{rc} = 1 + \frac{\omega_p^2}{i\omega\omega_d - \omega^2}$$
$$\omega_p^2 = Ne^2/(\varepsilon_0 m), \quad \omega_d = \varepsilon_0\omega_0^2/\sigma_{dc}$$

**Lorentz (bound electrons, dielectric)**
$$m\ddot x + \xi\dot x + ax = eE$$
$$\varepsilon_{rc} = 1 + \frac{Ne^2/m\varepsilon_0}{\omega_0^2 - \omega^2 + i\xi\omega/m}, \quad \omega_0^2 = a/m$$

## Worked Example: Transmission through a dielectric slab

Given: transmissivity $T = 0.80$ at thickness $x = 10$ mm, refractive index $n = 1.55$. Find the absorption coefficient $\gamma$ of the material.

1. Compute reflectivity at normal incidence:
   $$R = \left(\frac{n-1}{n+1}\right)^2 = \left(\frac{1.55 - 1}{1.55 + 1}\right)^2 = \left(\frac{0.55}{2.55}\right)^2 = 0.0465$$

2. Apply the slab transmission law $T = (1-R)^2 e^{-\gamma x}$:
   $$0.80 = (1 - 0.0465)^2 e^{-\gamma \cdot 10} = (0.9535)^2 e^{-10\gamma}$$

3. Solve for $\gamma$:
   $$\gamma = \frac{1}{x} \ln\!\left(\frac{(1-R)^2}{T}\right) = \frac{1}{10}\ln\!\left(\frac{0.9092}{0.80}\right) = \frac{0.1279}{10} \approx 0.0128\text{ mm}^{-1}$$

This pattern — compute $R$ from Fresnel, isolate $(1-R)^2 e^{-\gamma x}$, take the log — is the universal template for "find absorption coefficient from transmission" problems.

## Key Takeaways

1. **The complex refractive index $n_c = n - ib$ is the single handle on every optical property.** Once you know $n(\omega)$ and $b(\omega)$, reflectivity, refraction, transmission, and absorption coefficients are all derived from it.
2. **Good conductors are *both* good reflectors and good absorbers** — not paradoxically. $R \to 1$ reflects almost all incident light; whatever tiny fraction enters is extinguished in a skin depth $\delta = \sqrt{2/(\mu\sigma\omega)}$.
3. **Use the quantum cutoff $h\nu \ge E_g$ as a transparency test** — non-metals with $E_g > 3.1$ eV are transparent to all visible light; metals with $E_g = 0$ absorb every visible photon (above $\omega_p$ they become transparent — the UV transparency of alkali metals).
4. **The atomic theory of optics is just driven-damped-oscillator theory** — metals are the $\omega_0 = 0$ limit (free electrons), dielectrics have $\omega_0 > 0$ (bound electrons). All $n(\omega)$, $b(\omega)$, and dispersion curves fall out of the linear ODE solution.
5. **Anomalous dispersion always sits at the natural frequency** — use $\omega_0$ (dielectric) or $\omega_p$ (metal) as the dividing line between "normal" and "anomalous" behavior.
6. **Two surfaces = $(1-R)^2$ factor** — never omit the second-surface reflection loss when designing optical components or interpreting transmission measurements.
7. **Phonon bookkeeping distinguishes direct from indirect transitions** — momentum conservation forces indirect and intra-band transitions to involve phonons; direct transitions don't. This decides which materials work for a given photon energy.

## Connects To

- **Ch 6 (Electromagnetic Waves)**: the wave equation in a conducting medium $\nabla^2 E - \mu\varepsilon\ddot E - \mu\sigma\dot E = 0$ is the starting point for skin depth and absorption coefficient derivations.
- **Ch 9 (Dielectric Materials)**: electronic polarization (§9.5.1) is the classical counterpart to the bound-electron Lorentz oscillator of §7.7.2; the dielectric constant treatment re-uses $P = N e x$ and $P = \varepsilon_0(\varepsilon_r - 1)E$.
- **Ch 7 (Quantum Physics)**: photon energy $h\nu$, band-gap energy $E_g$, and the band theory of solids are prerequisites for the quantum theory of absorption (§7.5.3).
- **External: Materials engineering**: anti-reflection coatings exploit the impedance mismatch at dielectric surfaces; the design goal $n_{coat} = \sqrt{n_{substrate}}$ follows directly from $R = ((n_2-n_1)/(n_2+n_1))^2$.
- **External: Photonics / laser physics**: stimulated emission (Einstein 1917) and population inversion are *not* covered here but the absorption/emission symmetry in §7.5.3 motivates them — photons emitted when electrons drop back from conduction to valence band.
- **External: Optical fibers**: step-index fiber design uses total internal reflection from a higher-$n$ core to lower-$n$ cladding; the numerical aperture $NA = \sqrt{n_1^2 - n_2^2}$ is the direct application of refraction theory from §7.4.
- **External: Plasma physics**: the Drude formula $\omega_p = \sqrt{Ne^2/(\varepsilon_0 m)}$ is the same expression used for the ionospheric plasma frequency; the metal-optics derivation is reusable verbatim.
- **Ch 4 (Polarization)**: anisotropic optical materials (birefringent crystals, dichroic polarizers) give polarization-dependent reflectance and transmittance; the Jones-matrix formalism of Ch 4 is the natural language for describing Ch 21's anisotropic absorption in crystals.
- **Ch 22 (Optoelectronic Devices) — re-statement**: the absorption coefficient α(ω) and band-gap energy E_g of this chapter are the design parameters of Ch 22's photodetectors and solar cells; the quantum efficiency η = 1 − exp(−αL) of a photodiode active layer is a direct application of the Beer–Lambert law derived here.
- **Ch 25 (Energy Bands) — deeper link**: whether an optical transition is allowed (direct gap) or forbidden (indirect gap) depends on the band structure from Ch 25; GaAs (direct gap) is a good LED material, Si (indirect gap) is a poor one — both are explained by Ch 25's k-space band diagrams.