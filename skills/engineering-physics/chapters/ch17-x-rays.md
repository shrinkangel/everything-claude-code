# Chapter 17: X-rays (Volume 2)

## Core Idea
X-rays are produced when high-speed electrons strike a metal target: their **continuous (Bremsstrahlung) spectrum** is set by the Duane-Hunt short-wavelength limit $\lambda_{\min} = hc/qV$, while their **characteristic line spectrum** obeys Moseley's law $\sqrt{\nu} \propto (Z-\sigma)$ and is diffracted by crystal planes according to **Bragg's law** $2d\sin\theta = n\lambda$ — these three laws together turn X-rays into the primary tool for atomic-number identification and crystal-structure analysis.

## Frameworks Introduced

- **Duane-Hunt short-wavelength limit** $\lambda_{\min} = hc/(qV) = 12400\,\text{Å·V}/V$
  - When to use: when an electron's *entire* kinetic energy $qV$ converts to a single photon (one-shot stopping).
  - How: independent of target material; sets the highest-frequency cutoff of the continuous spectrum, shift-left by raising tube voltage.

- **Two-component X-ray spectrum (continuous + characteristic)**
  - Continuous: rapid multi-collision deceleration of electrons inside target atoms — broad spectrum with intensity $I_C = AiZV^m$ (m ≈ 2).
  - Characteristic: inner-shell ionization (K, L, ...) followed by outer-electron transition; sharp lines like $K_\alpha$ (L→K), $K_\beta$ (M→K) on top of the continuum.
  - When to use: any spectrum analysis problem — first locate the cutoff $\lambda_{\min}$, then identify which characteristic lines are excited.

- **Moseley's Law** $\nu = Rc\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)(Z - \sigma)^2$
  - When to use: identifying unknown elements from their $K_\alpha$ wavelength, OR verifying periodic-table ordering.
  - How: $\sigma$ = nuclear screening constant. For K-series use $\sigma = 1$. For $K_\alpha$-line: $\lambda = 4/[3R(Z-1)^2]$. Plotting $\sqrt{\nu}$ vs $Z$ gives a straight line — the true ordering key of the periodic table.

- **Bragg's Law** $2d\sin\theta = n\lambda$
  - When to use: (a) known $\lambda$, unknown $d$ → crystal structure analysis; (b) known $d$, unknown $\lambda$ → X-ray spectroscopy.
  - How: rotate crystal + detector in 1:2 ($\theta$ : $2\theta$) geometry; intensity peaks occur only at Bragg angles.

- **Linear absorption (Beer-Lambert form)** $I(x) = I_0 e^{-\mu x}$
  - When to use: predicting transmitted fraction, choosing filter thickness, distinguishing hard vs soft X-rays.
  - How: convert to mass absorption $\mu/\rho = k\lambda^3 Z^3$ for material-independent comparison; expect a sharp $K$-absorption edge.

- **Powder (Debye-Scherrer) method**
  - When to use: sample is polycrystalline / only available as powder / nanoparticles < 10 µm.
  - How: random orientations guarantee some crystallites satisfy Bragg's condition for every $d$-spacing → cone of half-angle $2\theta$ → arcs/rings on cylindrical film. Compute $\theta_i = 90°\cdot l_i/(\pi D)$ from arc spacing $l_i$ on film of drum diameter $D$.

## Key Concepts

- **Continuous (Bremsstrahlung) spectrum**: broad X-ray band from multi-step deceleration; $\lambda_{\min}$ set by $V$, intensity scales as $Z\cdot V^2$.
- **Characteristic spectrum**: sharp lines at discrete wavelengths set by atomic energy levels; depends on target Z, not on V (above the critical excitation voltage).
- **Hard vs soft X-rays**: hard = short wavelength, high penetrating power; soft = long wavelength, easily absorbed; controlled by $V$ and target $Z$.
- **Critical excitation voltage** $V_K$: minimum tube voltage to knock out a K-shell electron (= $W_K/q$); characteristic lines cannot appear below it.
- **Linear absorption coefficient** $\mu$ and **mass absorption coefficient** $\mu/\rho$: fractional decrease per unit length / per unit areal density; $\mu/\rho = k\lambda^3 Z^3$ between absorption edges.
- **K-absorption edge** $\lambda_K$: wavelength discontinuity in $\mu/\rho$ at the K-ionization energy; used to filter out $K_\beta$ (filter thickness tuned so $K_\alpha$ barely survives).
- **Crystal as a 3D diffraction grating**: lattice spacing $\sim$ Å matches X-ray $\lambda$ → crystals replace ruled gratings for X-ray wavelengths.
- **Ka-line** (1.54 Å for Cu, 0.71 Å for Mo): the strong, narrow monochromatic line that makes X-ray diffraction practical; $K_\beta$ removed by filter.
- **Ewald sphere**: geometric construct in reciprocal space showing which reciprocal-lattice points satisfy Bragg's condition.

## Mental Models

- **Use the "stopped in one shot" shortcut for $\lambda_{\min}$**: any time an electron's *full* KE $qV$ becomes a single photon, write $hc/\lambda = qV$ immediately — independent of target Z. If the problem says "shortest wavelength", this is the only physics you need.

- **Think of X-ray spectra as two layers**: continuous (background hill) with characteristic lines (sharp spikes on top). Identify $\lambda_{\min}$ first (it's the leading edge of the hill), then read off the spike positions — that spike cluster's position is set by Z via Moseley.

- **Think of $\sqrt{\nu}$ vs $Z$ as the periodic table's "true coordinate"**: before Moseley, elements were ordered by atomic mass (Co-Ni inversion). Moseley's straight-line plot is what justified reordering by atomic number — the chart is literally a graph.

- **Use the 1:2 ($\theta$ : $2\theta$) rotation rule when setting up Bragg's spectrometer**: the turn-table and ionization chamber are mechanically coupled so detector motion is always twice the crystal rotation — this guarantees the reflected beam always enters the chamber. Forget the rule and you'll lose every reflection.

## Anti-patterns

- **Saying continuous-spectrum wavelength depends on target material**: $\lambda_{\min}$ is set *only* by tube voltage $V$. Target Z affects *intensity* $I_C \propto ZV^2$, not wavelength distribution.
- **Confusing $K_\alpha$ with $K_\beta$ order by wavelength**: $K_\alpha$ (L→K) is *longer* wavelength than $K_\beta$ (M→K) because the L→K transition has smaller energy gap than M→K. Reverse this and you'll misidentify elements.
- **Reporting X-ray photons as "particles" or "waves only"**: the continuous spectrum *requires* particle (photon) energy conservation; the characteristic spectrum and diffraction require wave (interference) physics. Both views coexist in the same experiment.
- **Assuming higher voltage changes characteristic wavelengths**: above the critical $V_K$, raising $V$ shifts the continuous spectrum left and increases line intensities — but characteristic wavelengths are *fixed* by atomic energy levels, not by $V$.
- **Forgetting $\sigma \neq 0$ in Moseley's law**: writing $\nu \propto Z^2$ without $(Z-\sigma)^2$ loses the screening correction from the remaining K-shell electron. For K-series, $\sigma = 1$, not 0.
- **Treating absorption as a single mechanism**: the measured $\mu/\rho$ is the *sum* of scattering + true absorption; the two processes have different physical origins and different wavelength dependencies.
- **Thinking 1% efficiency means "low-power tube"**: 99% of input power becomes heat in the target — this is the engineering challenge (water cooling, rotating anodes). The "1% X-ray" figure is what the cooling system must handle.

## Reference Tables

### Common target materials and their $K_\alpha$ wavelengths

| Target | Atomic number Z | $K_\alpha$ wavelength (Å) | Typical use |
|---|---|---|---|
| Mo (Molybdenum) | 42 | 0.71 | Short-λ, small-unit-cell crystals |
| Co (Cobalt) | 27 | 1.79 | Iron-rich samples (avoid Fe fluorescence) |
| Fe (Iron) | 26 | 1.94 | General diffraction |
| Cu (Copper) | 29 | 1.54 | Most common — inorganic materials |
| Cr (Chromium) | 24 | 2.29 | Long-λ, large d-spacing |

### Continuous vs characteristic spectrum

| Feature | Continuous (Bremsstrahlung) | Characteristic |
|---|---|---|
| Origin | Multi-step deceleration in target | Inner-shell ionization + transition |
| Wavelength range | Continuous from $\lambda_{\min}$ upward | Sharp discrete lines ($K_\alpha, K_\beta, L_\alpha, ...$) |
| Depends on V? | Yes (sets $\lambda_{\min}$) | No (lines fixed by atomic levels; intensity increases above $V_K$) |
| Depends on Z? | Intensity $\propto Z$; shape no | Yes — wavelengths $\propto 1/(Z-\sigma)^2$ |
| Linewidth | Broad | Very narrow (half-width ≈ 0.001 Å) |
| Practical role | Background; spectrum baseline | Monochromatic source for diffraction |

### Hard vs soft X-rays

| | Hard X-rays | Soft X-rays |
|---|---|---|
| Wavelength | Short (< ~1 Å) | Longer (> ~1 Å) |
| Penetrating power | High | Low |
| Production | Higher V, higher Z target | Lower V, lower Z target |
| Mass absorption $\mu/\rho$ | Low | High (∝ λ³) |
| Applications | Deep tumour therapy, dense-material radiography | Surface imaging, soft tissue contrast |

## Key Equations

### Production — continuous spectrum
- Kinetic energy of accelerated electron: $KE = \frac{1}{2}mv^2 = qV$
- Single-photon energy conservation (electron fully stopped): $h\nu_{\max} = qV$
- **Duane-Hunt limit**: $\lambda_{\min} = \dfrac{hc}{qV} = \dfrac{12400\,\text{Å·V}}{V}$
- Continuous-spectrum intensity: $I_C = AiZV^m$ with $m \approx 2$
- Heat dissipated in target: $P_{\text{heat}} = VI(1 - \eta)$, with $\eta \lesssim 1\%$

### Characteristic spectrum
- Bohr energy level: $E_n = -\dfrac{m_0 q^4 Z^2}{8\varepsilon_0^2 h^2 n^2}$
- Photon from transition $n_2 \to n_1$: $h\nu = E_{n_2} - E_{n_1}$
- **Moseley's law**: $\nu = Rc\left(\dfrac{1}{n_1^2} - \dfrac{1}{n_2^2}\right)(Z-\sigma)^2$, $R = 1.097\times10^7\,\text{m}^{-1}$
- For $K_\alpha$ ($n_1 = 1, n_2 = 2, \sigma = 1$): $\lambda_{K_\alpha} = \dfrac{4}{3R(Z-1)^2}$
- Critical excitation: $\frac{1}{2}mv^2 = W_K \Rightarrow V_K = W_K/q$
- Characteristic line intensity: $I_K = Bi(V - V_K)^n$ with $n \approx 1.5$

### Absorption
- Differential form: $dI/I = -\mu\,dx$
- **Transmission law**: $I(x) = I_0 e^{-\mu x}$
- Mass absorption: $\mu/\rho = k\lambda^3 Z^3$ (between absorption edges)

### Bragg diffraction
- **Bragg's law**: $n\lambda = 2d\sin\theta$
- Maximum analyzable wavelength (1st order): $\lambda_{\max} = 2d\sin 90° = 2d$
- Powder-method angle from film: $\theta_i = \dfrac{90°}{\pi D}\,l_i$ ($l_i$ = arc separation, $D$ = drum diameter)

## Worked Example: Impurity identification via Moseley's law (Example 3.8)

A cobalt-target tube ($Z = 27$) emits a $K_\alpha$(Co) line plus two weak $K_\alpha$ lines from impurities at 0.2285 nm and 0.1537 nm. Identify the impurity elements (use $\sigma = 1$).

**Step 1 — Apply Moseley for $K_\alpha$.** With $n_1=1, n_2=2, \sigma=1$:
$$\lambda_{K_\alpha} = \frac{4}{3R(Z-1)^2} \;\;\Rightarrow\;\; Z = 1 + \sqrt{\frac{4}{3R\lambda}}$$

**Step 2 — Plug in constants.** With $R = 1.0973731\times10^7\,\text{m}^{-1}$:
$$Z = 1 + \sqrt{\frac{4}{3 \cdot 1.0973731\times 10^7 \cdot \lambda}} = 1 + \sqrt{\frac{3.48571\times 10^{-4}}{\lambda\,[\text{m}]}}$$

**Step 3 — Compute for each impurity.**
- Impurity 1: $\lambda_1 = 0.2285\,\text{nm} = 0.2285\times 10^{-9}\,\text{m}$
$$Z_1 = 1 + \sqrt{\frac{3.48571\times 10^{-4}}{0.2285\times 10^{-9}}} = 1 + \sqrt{1.525\times 10^{6}} = 1 + 1235 \approx \mathbf{24}$$
- Impurity 2: $\lambda_2 = 0.1537\,\text{nm}$
$$Z_2 = 1 + \sqrt{\frac{3.48571\times 10^{-4}}{0.1537\times 10^{-9}}} \approx \mathbf{29}$$

**Step 4 — Identify.** $Z = 24$ is **chromium (Cr)**, $Z = 29$ is **copper (Cu)**.

This is the standard Moseley workflow: measure a $K_\alpha$ wavelength, plug into the $K_\alpha$ formula with $\sigma=1$, solve for $Z$, look up the element. The same procedure re-ordered the periodic table from atomic-mass to atomic-number ordering.

## Key Takeaways

1. **Memorize $\lambda_{\min} = 12400/V$ (Å)** — every "shortest wavelength" problem is one line; remember it's independent of target Z.
2. **X-ray spectrum = continuous hill + characteristic spikes** — the hill comes from multi-collision deceleration, the spikes from inner-shell electron transitions; neither alone tells the full story.
3. **Moseley's law $\sqrt{\nu} \propto (Z-\sigma)$ is the diagnostic tool** — measure one characteristic line, solve for Z, identify the element. This single relationship justified the modern periodic table.
4. **Bragg's law $n\lambda = 2d\sin\theta$ works both directions** — known $\lambda$ → find $d$ (crystal structure); known $d$ → find $\lambda$ (spectroscopy). Use 1:2 ($\theta$ : $2\theta$) rotation in Bragg's spectrometer.
5. **Use the powder method when you don't have a single crystal** — random orientations always find some Bragg-satisfying plane, producing cones of half-angle $2\theta$ on a cylindrical film.
6. **Mass absorption $\mu/\rho = k\lambda^3 Z^3$** — explains why low-Z filters (e.g., Ni foil for Cu target) preferentially absorb $K_\beta$ over $K_\alpha$ (monochromatization by filtration).
7. **Heat management dominates X-ray tube engineering** — 99% of input power goes to heat, not X-rays; tube design is a cooling problem first and an electron-optics problem second.

## Connects To

- **Ch 5–6 (Electromagnetism / EM Waves)**: X-rays are the high-frequency tail of the EM spectrum; the same wave equations apply, but photon energy $h\nu$ dominates the physics at these wavelengths.
- **Ch 7 (Quantum Physics)**: Bohr's energy levels $E_n \propto -Z^2/n^2$ give Moseley's law its theoretical basis — the same model explains hydrogen's spectrum with $Z=1$ and X-ray characteristic lines with $Z \gg 1$.
- **Ch 13–14 (Materials / Crystallography)**: Powder diffraction is the workhorse for crystal-structure determination; Bragg's law combined with miller indices gives unit-cell parameters.
- **Ch 16 (Modern Physics)**: photoelectric effect from X-rays on metal surfaces, Compton scattering, and pair production are all X-ray–matter interaction channels extending beyond simple absorption.
- **External: medical radiography / NDT**: therapeutic (hard X-rays destroy tumours) and diagnostic (radiographs detect fractures, NDT finds cracks in aeroplane fuselages and welded joints) applications are direct consequences of the penetration-vs-wavelength relationship $\mu/\rho \propto \lambda^3 Z^3$.
- **External: Moseley's periodic-table revision**: by establishing that Z (not atomic mass) is the fundamental ordering parameter, Moseley resolved inversions like Co–Ni and predicted missing elements (Tc, Re, etc.) before they were discovered.