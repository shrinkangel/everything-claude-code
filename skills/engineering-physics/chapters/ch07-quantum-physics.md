# Chapter 7: Elementary Concepts of Quantum Physics

## Core Idea
Nature is **dual** at every scale — radiation has particle properties (photons carry momentum $p = h/\lambda$) and particles have wave properties (de Broglie wavelength $\lambda = h/p$); the master switch between classical and quantum behavior is Planck's constant $h$, with $\lim_{n\to\infty}\text{Quantum} = \text{Classical}$.

## Frameworks Introduced

- **Planck's radiation law** (master blackbody formula) $E_\lambda d\lambda = \dfrac{8\pi hc}{\lambda^5}\dfrac{1}{e^{hc/\lambda kT}-1}\,d\lambda$
  - When to use: any problem about thermal radiation spectrum, peak wavelength, total emitted power.
  - How: apply directly; recover Wien's law at low $T$ (drop "$-1$"), recover Rayleigh–Jeans at high $T$ (Taylor expand denominator).

- **Einstein's photoelectric equation** $h\nu = \tfrac{1}{2}m_ev^2 + w_0$, with stopping-potential form $V_0 = \dfrac{h\nu - w_0}{e}$
  - When to use: photoelectron kinetic energy, threshold frequency, work function, or extracting $h$ from the slope of a $V_0$–$\nu$ plot.
  - How: read $w_0$ from negative $y$-intercept $\times e$; read $h$ from slope $\times e$; threshold frequency from $|y\text{-intercept}|/h$.

- **Compton shift formula** $\Delta\lambda = \lambda - \lambda_0 = \lambda_C(1-\cos\theta)$, where $\lambda_C = \dfrac{h}{m_0 c} = 0.02426\,\text{Å}$ (electron Compton wavelength)
  - When to use: wavelength of scattered X-ray photon, scattered-photon energy, or checking the photon-as-particle model.
  - How: maximum shift at $\theta = 180°$ ($\Delta\lambda = 2\lambda_C$); zero shift at $\theta = 0°$. Treat the photon–electron collision as a relativistic two-body elastic collision.

- **de Broglie hypothesis** $\lambda = \dfrac{h}{p} = \dfrac{h}{mv}$ (non-relativistic) or $\lambda = \dfrac{hc}{\sqrt{K(K+2m_0 c^2)}}$ (relativistic)
  - When to use: matter-wave wavelength of electrons, neutrons, protons; Davisson–Germer diffraction maxima; electron-microscope design.
  - How: compute $\lambda$, plug into crystal-diffraction $n\lambda = d\sin\theta$ (Bragg) or single-slit diffraction; group velocity $v_g = v$, phase velocity $v_p \neq v$ (vacuum is dispersive for matter waves).

- **Bohr model of the hydrogen atom** (postulates + three master formulas)
  - Orbital radius: $r_n = \dfrac{h^2}{4\pi^2 m k e^2}\,n^2$ (parabolic in $n$).
  - Total energy: $E_n = -\dfrac{2\pi^2 m k^2 e^4}{h^2 n^2} = -\dfrac{13.6\,\text{eV}}{n^2}$.
  - Quantized angular momentum: $L = n\hbar$.
  - Transition frequency: $\nu = \dfrac{2\pi^2 m k^2 e^4}{h^3}\!\left(\dfrac{1}{n_1^2}-\dfrac{1}{n_2^2}\right) = R_H c\!\left(\dfrac{1}{n_1^2}-\dfrac{1}{n_2^2}\right)$ with $R_H = 1.097\times 10^7\,\text{m}^{-1}$.

- **Heisenberg uncertainty principle** $\Delta x\,\Delta p \geq \hbar/2$, plus $\Delta E\,\Delta t \geq \hbar/2$ and $\Delta J\,\Delta\theta \geq \hbar/2$
  - When to use: estimating confinement energy, ruling out classically-forbidden states (electron inside nucleus), explaining line widths, setting minimum kinetic energy.
  - How: set $\Delta x = L$ (size of confinement), then $\Delta p \approx \hbar/L$ → kinetic energy floor.

- **Schrödinger equation** (time-dependent + time-independent)
  - Time-dependent (3D): $i\hbar\dfrac{\partial\psi}{\partial t} = -\dfrac{\hbar^2}{2m}\nabla^2\psi + V\psi$.
  - Time-independent (3D): $\nabla^2\psi + \dfrac{2m}{\hbar^2}(E-V)\psi = 0$.
  - When to use: any quantum-mechanical problem — hydrogen atom, particle in a box, harmonic oscillator.
  - How: solve for bound states to get eigenfunctions $\psi_n$ (shape) and eigenvalues $E_n$ (allowed energies). Cannot be derived — it is a basic principle.

## Key Concepts

- **Blackbody**: idealized body absorbing all incident radiation; a small hole in a hollow cavity with polished inner walls is an excellent practical realization.
- **Work function $w_0$**: minimum energy needed to liberate an electron from a metal at 0 K.
- **Threshold frequency $\nu_0$**: minimum frequency below which no photoelectric emission occurs ($\nu_0 = w_0/h$).
- **Stopping potential $V_0$**: retarding potential that just stops the most energetic photoelectrons ($eV_0 = \tfrac{1}{2}m_ev_{\max}^2$).
- **Compton wavelength $\lambda_C$**: depends on the *scattered* particle — for electrons, $\lambda_C = 0.02426$ Å.
- **de Broglie wavelength $\lambda$**: for a particle of momentum $p$, the wavelength of its matter wave; equals the photon's wavelength when both carry the same momentum.
- **Stationary orbit** (Bohr): one of the discrete allowed electron orbits; atom does not radiate while electron is in a stationary orbit.
- **Observable**: any measurable dynamical quantity (position, energy, momentum, angular momentum); each corresponds to a quantum-mechanical operator.
- **Operator $\hat{A}$**: linear mapping satisfying $\hat{A}(a_1\psi_1 + a_2\psi_2) = a_1\hat{A}\psi_1 + a_2\hat{A}\psi_2$; momentum operator is $-i\hbar\,\partial/\partial x$.
- **Eigenvalue equation**: $\hat{A}\psi = a\psi$ where $a$ is the eigenvalue (the allowed measured value).
- **Wave function $\psi$**: complex mathematical function of space and time whose squared magnitude $|\psi|^2$ gives probability density; $\psi$ alone has no direct physical meaning.
- **Probability density**: $P = |\psi|^2$; the probability of finding the particle in volume $dV$ is $P\,dV = |\psi|^2\,dV$.
- **Normalization**: choosing the multiplicative constant so that $\int |\psi|^2 dV = 1$ (particle exists somewhere).
- **Expectation value $\langle A\rangle$**: weighted average of measured values of observable $A$ over many identical systems; $\langle A\rangle = \int \psi^*\hat{A}\psi\,dV$.
- **Hamiltonian**: operator for total energy, $\hat{H} = -\dfrac{\hbar^2}{2m}\nabla^2 + V$.

## Mental Models

- **Use $h$ as a switch**: if $\Delta x\,\Delta p \gg h$, treat classically; if $\Delta x\,\Delta p \sim h$, quantum effects dominate. For everyday objects $h$ is negligibly small — that's why we never notice quantization.
- **Think of wave-particle duality as "two lenses, one reality"**: choose the photon picture (Compton, photoelectric) when momentum transfer dominates; choose the wave picture (interference, diffraction) when phase coherence dominates. Same entity, different observable.
- **Phase vs group velocity of matter waves**: $v_g = v$ (particle speed) always, but $v_p > c$ for relativistic free particles and $v_p = v/2$ for non-relativistic free particles — $v_p$ is unphysical; signals travel at $v_g$. This is the only chapter where vacuum is dispersive.
- **Use Bohr as "semi-classical with quantization patches"**: classical mechanics gives the orbit; quantization ($L = n\hbar$) selects which orbits exist. Better results need full Schrödinger treatment.
- **Probabilistic interpretation**: $|\psi|^2$ tells you where the particle *might* be; never say "30% of the electron is here" — the electron is whole, just present with 30% probability.

## Anti-patterns

- **Treating Planck as an approximation valid only at high frequency**: Planck is the *exact* blackbody law; Wien and Rayleigh–Jeans are its limits. Pick the wrong limit and you get the "ultraviolet catastrophe" ($E \to \infty$).
- **Mixing classical wave expectations with the photoelectric effect**: expecting emission intensity to depend on amplitude (it depends on *frequency*) and time delay (it is instantaneous). Both fail without photon quanta.
- **Forgetting $\nu_0$ in photoelectric problems**: below threshold frequency, no electrons are emitted regardless of intensity or exposure time.
- **Treating Compton shift as depending on incident wavelength or intensity**: it depends only on scattering angle $\theta$ and the *scattered particle's* rest mass — same shift for any incident $\lambda$ at fixed $\theta$.
- **Believing Bohr model describes real orbits**: Bohr orbits are not physical trajectories — electrons have no well-defined path (Heisenberg). Bohr is a calculational tool; Schrödinger gives the actual electron cloud.
- **Reading $\psi$ as a physical field like $\mathbf{E}$ or pressure**: $\psi$ is complex and unobservable; only $|\psi|^2$ is real. This is not a wave of "electron stuff sloshing through space".
- **Trying to derive Schrödinger's equation from classical physics**: it cannot be derived — it is a postulate. You can only verify it (its solutions reproduce known spectra).
- **Stopping at Bohr for the hydrogen atom**: Bohr gets the energy levels right but cannot handle fine structure, Zeeman effect, multi-electron atoms, or intensity ratios.

## Reference Tables

### Observables → Operators

| Observable | 3D operator | 1D operator |
|---|---|---|
| Total energy $E$ | $i\hbar\,\partial/\partial t$ | $i\hbar\,\partial/\partial t$ |
| Linear momentum $\mathbf{p}$ | $-i\hbar\nabla$ | $-i\hbar\,\partial/\partial x$ |
| Kinetic energy $p^2/2m$ | $-\hbar^2\nabla^2/2m$ | $-\hbar^2\partial^2/2m\partial x^2$ |
| Position $\mathbf{r}$ | $\mathbf{r}$ | $x$ |
| Potential energy $V$ | $V$ | $V$ |
| Hamiltonian $H$ | $-\hbar^2\nabla^2/2m + V$ | $-\hbar^2\partial^2/2m\partial x^2 + V$ |

### Hydrogen spectral series

| Series | $n_1$ (lower) | $n_2$ values | Spectral region |
|---|---|---|---|
| Lyman | 1 | 2, 3, 4, … | Ultraviolet |
| Balmer | 2 | 3, 4, 5, … | Visible |
| Paschen | 3 | 4, 5, 6, … | Infrared |
| Brackett | 4 | 5, 6, 7, … | Infrared |
| Pfund | 5 | 6, 7, 8, … | Far infrared |

Common formula for all: $\dfrac{1}{\lambda} = R_H\!\left(\dfrac{1}{n_1^2}-\dfrac{1}{n_2^2}\right)$, $R_H = 1.097\times 10^7\,\text{m}^{-1}$.

### When each photon-matter interaction dominates

| Radiation | Dominant effect | Reason |
|---|---|---|
| Gamma ray ($\geq 1.02$ MeV) | Pair production | Photon energy exceeds $2m_0c^2$ |
| X-ray (~ keV) | Compton scattering | Photon energy comparable to electron rest energy |
| UV / visible (~ eV) | Photoelectric effect | Photon energy comparable to work function |

### Photoelectric-effect extraction from a $V_0$–$\nu$ plot

| Quantity | How to read from plot |
|---|---|
| Planck's constant $h$ | Slope $\times e$ |
| Work function $w_0$ | $\lvert y\text{-intercept}\rvert \times e$ |
| Threshold frequency $\nu_0$ | $\lvert y\text{-intercept}\rvert / h$ |

## Key Equations

- **Planck's constant values**: $h = 6.626\times 10^{-34}\,\text{J·s}$; $\hbar = h/2\pi = 1.0546\times 10^{-34}\,\text{J·s}$; $hc = 12{,}400\,\text{eV·Å}$
- **Boltzmann constant**: $k = 1.38\times 10^{-23}\,\text{J/K} = 8.62\times 10^{-5}\,\text{eV/K}$
- **Planck's radiation law** (per unit volume, frequency form):
  $E_\nu d\nu = \dfrac{8\pi h\nu^3}{c^3}\dfrac{d\nu}{e^{h\nu/kT}-1}$
- **Wien's law** (low-$T$ limit): $E_\lambda d\lambda = \dfrac{8\pi hc}{\lambda^5}e^{-hc/\lambda kT}d\lambda$
- **Rayleigh–Jeans law** (high-$T$ limit): $E_\lambda = AT/\lambda^4$ (fails at low $\lambda$ — ultraviolet catastrophe)
- **Wien's displacement law**: $\lambda_m T = 2.898\times 10^{-3}\,\text{m·K}$
- **Stefan's law**: $P/A = \sigma T^4$, $\sigma = 5.67\times 10^{-8}\,\text{W/m}^2\text{K}^4$
- **Einstein photoelectric equation**: $h\nu = \tfrac{1}{2}m_ev^2 + w_0$, with $w_0 = h\nu_0$
- **Compton shift**: $\lambda - \lambda_0 = \lambda_C(1-\cos\theta)$, $\lambda_C = h/(m_0 c)$
- **Pair production threshold**: $h\nu \geq 2m_0c^2 = 1.02\,\text{MeV}$
- **de Broglie wavelength** (non-rel): $\lambda = h/(mv)$; (relativistic): $\lambda = hc/\sqrt{K(K+2m_0c^2)}$
- **Phase velocity of matter wave** (rel free particle): $v_p = c^2/v > c$; (non-rel): $v_p = v/2$
- **Bohr angular momentum quantization**: $L = mvr = n\hbar$, $n = 1, 2, 3, \ldots$
- **Bohr orbit radius**: $r_n = \dfrac{h^2 n^2}{4\pi^2 m k e^2}$ (parabolic in $n$)
- **Bohr total energy**: $E_n = -\dfrac{13.6\,\text{eV}}{n^2}$
- **Bohr transition wavenumber**: $1/\lambda = R_H(1/n_1^2 - 1/n_2^2)$
- **Heisenberg**: $\Delta x\,\Delta p \geq \hbar/2$; $\Delta E\,\Delta t \geq \hbar/2$; $\Delta J\,\Delta\theta \geq \hbar/2$
- **Schrödinger (3D, time-dep)**: $i\hbar\dfrac{\partial\psi}{\partial t} = -\dfrac{\hbar^2}{2m}\nabla^2\psi + V\psi$
- **Schrödinger (3D, time-indep)**: $\nabla^2\psi + \dfrac{2m}{\hbar^2}(E-V)\psi = 0$
- **Expectation value**: $\langle A\rangle = \int \psi^*\hat{A}\psi\,dV$ (normalized $\psi$)
- **Zero-point energy of harmonic oscillator** (from uncertainty): $E_{\min} = \tfrac{1}{2}\hbar\omega$

## Worked Example: Compton-shifted wavelength at $\theta = 45°$

**Problem** (Example 7.7): X-rays of wavelength $\lambda_0 = 0.71$ Å are scattered from a target. Find (a) the wavelength of the X-rays scattered through $\theta = 45°$, and (b) the maximum wavelength present in the scattered X-rays.

**Solution**

(a) Apply $\lambda = \lambda_0 + \lambda_C(1 - \cos\theta)$ with $\lambda_C = 0.02426$ Å (electron):

$$\lambda = 0.71\,\text{Å} + 0.02426\,\text{Å}\,(1 - \cos 45°) = 0.71 + 0.02426 \times 0.2929 = 0.717\,\text{Å}$$

(b) Maximum wavelength occurs at $\theta = 180°$ ($\cos\theta = -1$):

$$\lambda_{\max} = 0.71\,\text{Å} + 0.02426\,\text{Å}\,(1 - (-1)) = 0.71 + 0.04852 = 0.758\,\text{Å}$$

**Key insight**: The shift is independent of incident wavelength and intensity — only the angle and the scattering particle's mass enter. Treating the photon as a particle (energy $\hbar k c$, momentum $\hbar k$) in a relativistic two-body collision is what produces this angle-dependent wavelength change; classical wave theory predicts a continuous Doppler-broadened spectrum.

## Key Takeaways

1. **Planck's law is the master formula** — Wien (low T), Rayleigh–Jeans (high T), Wien displacement ($\lambda_m T = $ const), and Stefan ($P \propto T^4$) all fall out of it. Memorize Planck; derive the rest.
2. **Three photon-matter interactions, one photon picture**: photoelectric (whole photon absorbed by bound electron), Compton (partial energy transfer to free electron), pair production (photon → matter). Each dominates at a different photon energy range.
3. **de Broglie's $\lambda = h/p$ is universal**: same formula works for photons, electrons, neutrons, even macroscopic particles (whose $\lambda$ is too small to detect). The Davisson–Germer peak at $V = 54$ V, $\theta = 50°$ confirmed it.
4. **Bohr quantizes $L = n\hbar$**: this single rule, combined with classical circular-orbit dynamics, produces the entire hydrogen spectrum. Its limits (no fine structure, no multi-electron atoms) are exactly where you need Schrödinger.
5. **Heisenberg is built into wave kinematics**: a localized particle needs a range of momenta — $\Delta x\,\Delta p \geq \hbar/2$ is just $\Delta k \cdot \Delta x \geq 1/2$ plus $p = \hbar k$. Use it to estimate confinement energy without solving the wave equation.
6. **Probability density $|\psi|^2$ replaces position trajectory**: this is the conceptual break from classical mechanics. The wave function itself has no physical meaning; only its squared modulus does.
7. **Schrödinger is a postulate, not a theorem**: $i\hbar\partial_t\psi = \hat{H}\psi$ is the quantum equivalent of $F = ma$ — derivable from nothing, verified by everything.

## Connects To

- **Ch 1 (Oscillations & Waves)**: matter-wave group/phase velocity distinction (matter waves have $v_g = v$ but $v_p \neq v$); uncertainty principle is the same $\Delta k \cdot \Delta x \geq 1/2$ as a wave packet.
- **Ch 4 (Thermodynamics)**: Stefan's law ($P = \sigma T^4$) and Wien's displacement law are direct special cases of Planck's radiation formula.
- **Ch 5 (Electromagnetism)**: photoelectric effect and Compton scattering are direct experimental evidence that the EM field is quantized into photons with $E = h\nu$, $p = h/\lambda$.
- **Ch 8+ (Solid-State / Semiconductor Physics)**: photoelectric effect on metals and semiconductors underlies photodetectors, solar cells, and image sensors.
- **External: spectroscopy**: Bohr transitions and Rydberg formula drive atomic absorption/emission spectroscopy and laser wavelength selection.
- **External: nuclear physics**: uncertainty principle applied to nucleus size gives a 19.4 MeV kinetic energy floor for confined electrons — explaining why beta-decay electrons cannot be pre-existing nuclear residents.
