# Chapter 25: Energy Bands in Solids

## Core Idea
Bringing `N` isolated atoms together splits each atomic level into `N` closely spaced sub-levels (allowed bands) separated by gaps where no electron energy is permitted (forbidden bands); whether a solid conducts, insulates, or semi-conduces is decided entirely by whether those bands are partially full, full with a small gap, or full with a large gap.

## Frameworks Introduced

- **Bloch's Theorem** — eigenfunctions of a periodic potential take the form $\psi_k(x) = u_k(x)\,e^{ikx}$, where $u_k(x)$ is periodic with the lattice period $a$.
  - When to use: any quantum-mechanical problem set inside a crystal lattice — never assume plane-wave (free-electron) solutions.
  - How: write the wave as a plane wave $e^{ikx}$ modulated by a periodic Bloch function $u_k(x)$; enforce continuity of $\psi$ and $\psi'$ across each unit-cell boundary.

- **Standing-Wave Origin of the Band Gap** — left-going $\psi_+ = A e^{ikx}$ and right-going $\psi_- = A e^{-ikx}$ electron waves superpose into two standing waves $\psi_1 \propto \cos(n\pi x/a)$ and $\psi_2 \propto \sin(n\pi x/a)$.
  - When to use: to explain *qualitatively* why gaps open up at Brillouin-zone boundaries without invoking the full Kronig–Penney machinery.
  - How: $\psi_1$ piles charge on the ion cores (lower PE), $\psi_2$ piles charge between them (higher PE) — the PE difference *is* the gap $E_g$.

- **Kronig–Penney Model** — a 1-D square-well periodic potential with periodicity $(a+b)$, period `a` of free space and width `b` of barrier height $V_0$, used to derive the central dispersion constraint
  $$\frac{P \sin k_0 a}{k_0 a} + \cos k_0 a = \cos k a, \quad P = \frac{mV_0 ab}{\hbar^2}$$
  - When to use: when you need the *mathematical* condition separating allowed from forbidden energies, and how band-width depends on binding strength.
  - How: solve Schr. eq. in regions I ($V=0$) and II ($V=V_0$); enforce continuity at $x=0$ and $x=a$; the determinant condition yields the equation above; plot LHS vs $k_0 a$ and read off allowed ranges where it stays within $[-1, +1]$.

- **Band-Capacity Rule** — an energy band built from an atomic level with orbital quantum number $\ell$ accommodates $2(2\ell+1)N$ electrons in $N$ atoms.
  - When to use: counting whether a band is full, half-full, or empty.
  - How: $\ell = 0,1,2,3$ for s,p,d,f → capacities $2N, 6N, 10N, 14N$. Apply Pauli exclusion (2 electrons per level for spin).

- **Material Classification by Filling** — conductors / insulators / semiconductors are distinguished by where the Fermi level sits relative to band edges and gaps.
  - When to use: predicting electrical behavior from a band diagram alone.
  - How: (a) Cu-like metal — Fermi level sits *inside* a partially filled band; (b) Mg-like metal — filled valence band *overlaps* empty conduction band; (c) insulator — valence band full, $E_g \gg 1$ eV; (d) semiconductor — valence band full, $E_g \sim 1$ eV, Fermi level mid-gap.

- **Two Limiting Cases of the Kronig–Penney Equation** — $P$ interpolates continuously between the two extremes of electron behavior.
  - When to use: sanity-checking that any band-structure calculation reduces correctly to known limits.
  - How: $P \to \infty \Rightarrow$ tightly bound electrons, $E_n = n^2 h^2/(8 m a^2)$ (infinite well); $P \to 0 \Rightarrow$ free electrons, $E = \hbar^2 k^2/(2m)$ (free parabola).

- **Four Band-Width Trends** from the Kronig–Penney plot of $P\,\mathrm{sinc}(k_0 a) + \cos k_0 a$ vs $k_0 a$:
  - Allowed-band width **grows** as $k_0 a$ (energy) increases.
  - Forbidden-band width **shrinks** as $k_0 a$ increases.
  - Width of any particular band **decreases** as $P$ (binding strength) increases.
  - Discontinuities in $E(k)$ occur at $k = \pm n\pi/a$ — the Brillouin-zone boundaries.

## Key Concepts

- **Allowed energy band** — a range of electron energies permitted inside a solid; arises from `N` overlapping atomic levels producing `N` closely spaced states.
- **Forbidden energy band (gap)** — a range of energies where no electron state exists; $E_g$ is the gap width.
- **Valence band** — the highest band that contains electrons at 0 K.
- **Conduction band** — the lowest band that is empty (or only partially filled) at 0 K; electrons here are mobile.
- **Fermi level $\varepsilon_F$** — the energy up to which states are filled at 0 K; in a metal it lies inside a band; in a semiconductor it lies mid-gap; in an insulator it sits at the top of the valence band.
- **Brillouin-zone boundary** — values of $k$ at which $E(k)$ is discontinuous: $k = \pm n\pi/a$.
- **Dispersion relation** — the relation $E(k)$ between electron energy and wave-vector; a parabola for free electrons, but with gaps and curvature changes for periodic-lattice electrons.
- **Overlap of bands (e.g., Mg)** — when the valence and conduction bands merge at equilibrium spacing, even a "filled" valence band gives metallic conduction.
- **Diamond paradox** — a half-filled 2s+2p band would *predict* conduction, but at equilibrium the $sp^3$ hybridization splits the compound band with a $\sim 7$ eV gap → insulator.
- **Bloch function** $u_k(x)$ — periodic part of the wavefunction; $u_k(x+a) = u_k(x)$.

## Mental Models

- **Think of a band as `N` copies of one atomic level, packed together**: when `N` identical atoms coalesce, every energy level of the free atom splits into exactly `N` sub-levels (Pauli). Once `N` is macroscopic (~$10^{23}$), the splitting is so fine it looks continuous — that *is* the allowed band.
- **Use `P` as a single knob from "free" to "bound"**: $P=0$ recovers the free-electron parabola; $P \to \infty$ recovers the infinite square-well levels. Real solids live somewhere in between, so the same Kronig–Penney formula interpolates both limits — no separate theory is needed.
- **Use the $|cos ka| \le 1$ filter to read off bands from the plot**: any value of $k_0 a$ for which the LHS leaves $[-1, +1]$ is *forbidden*. Plotting the LHS over $k_0 a$ and shading the outside-of-range regions gives the band/gap structure instantly.
- **Classify solids by gap and filling, not by chemical species**: sodium, magnesium, copper, and aluminum are all conductors for different band-filling reasons. Silicon, germanium, and diamond are all covalent tetrahedral solids — same lattice, different gaps — and one general criterion (filling + gap size) covers all of them.

## Anti-patterns

- **Assuming conduction requires an empty band**: a *partially* filled band conducts (Cu, Na). Conduction is decided by whether *unoccupied states immediately above occupied ones are accessible*, not by whether the whole band is empty.
- **Treating diamond as a conductor from its half-filled band**: counting electrons predicts conduction, but at equilibrium $sp^3$ hybridization *splits* the compound 2s+2p band, opening a $\sim 7$ eV gap. Always check the equilibrium spacing, not the free-atom configuration.
- **Confusing "free electron" with "conduction-band electron"**: a free electron means $\nabla V = 0$ (constant potential), not "any electron in a conductor". Conduction-band electrons still sit in a periodic potential and still feel Bragg scattering at zone boundaries.
- **Concluding "E < V₀ so the electron is bound" without checking which region of the lattice you are in**: in the Kronig–Penney model, $E < V_0$ refers to the relation to the *barrier* height, not to a free-space bound state. Use the dispersion equation, not energy comparison, to classify the state.
- **Plotting $E$ vs $k$ and reading the dashed free-electron parabola as the actual band structure**: the free parabola is a comparison reference; the actual $E(k)$ inside a periodic lattice has discontinuities at $k = \pm n\pi/a$. Treat the parabola as an envelope, not a fit.

## Reference Tables

### Band capacity per atomic level (`N` atoms)

| Level | $\ell$ | States per atom (incl. spin) | Band capacity |
|---|---|---|---|
| s | 0 | 2 | $2N$ |
| p | 1 | 6 | $6N$ |
| d | 2 | 10 | $10N$ |
| f | 3 | 14 | $14N$ |

### Material classification by band filling at 0 K

| Class | Valence band | Conduction band | Gap $E_g$ | Fermi level position |
|---|---|---|---|---|
| Cu-like metal | Partially filled (e.g., 3s half-full in Na) | Above or overlapping | $\approx 0$ | Inside the partially filled band |
| Mg-like metal | Full, but **overlaps** conduction band at equilibrium | Overlaps valence band | Absent | In the overlap region |
| Insulator | Full | Empty | $\gg 1$ eV (e.g., diamond $\sim 7$ eV) | At top of valence band |
| Semiconductor | Full | Empty | $\sim 1$ eV | Middle of the gap |

### Two limits of the Kronig–Penney equation

| Limit | Value of $P$ | Condition on $k$ | Energy spectrum |
|---|---|---|---|
| Strongly bound (infinite well) | $P \to \infty$ | $\sin k_0 a = 0 \Rightarrow k_0 a = n\pi$ | $E_n = n^2 h^2 / (8 m a^2)$, $n=1,2,\ldots$ |
| Completely free | $P \to 0$ | $\cos k a = \cos k_0 a \Rightarrow k_0 a = k a$ | $E = \hbar^2 k^2 / (2m)$ |
| Real solid | Finite $0 < P < \infty$ | $-1 \le P\,\mathrm{sinc}(k_0 a) + \cos k_0 a \le +1$ | Bands separated by gaps at $k = n\pi/a$ |

## Key Equations

### Bloch form and standing-wave decomposition

- Bloch wave: $\psi_k(x) = u_k(x)\,e^{ikx}$ with $u_k(x+a) = u_k(x)$.
- Standing-wave basis: $\psi_+(x) = A e^{ikx}$, $\psi_-(x) = A e^{-ikx}$.
- Even standing wave: $\psi_1(x) = 2A\cos(n\pi x/a)$, charge piles on ion cores.
- Odd standing wave: $\psi_2(x) = 2iA\sin(n\pi x/a)$, charge piles between ion cores.
- Probability densities: $\rho_1(x) = 4A^2 \cos^2(n\pi x/a)$, $\rho_2(x) = 4A^2 \sin^2(n\pi x/a)$.

### Schr. equation in the periodic potential (1-D)

- Region I ($V=0$): $d^2\psi/dx^2 + k_0^2 \psi = 0$, with $k_0^2 = 2mE/\hbar^2$.
- Region II ($V=V_0$): $d^2\psi/dx^2 - k_1^2 \psi = 0$, with $k_1^2 = 2m(V_0 - E)/\hbar^2$.
- Assumption: $E < V_0$ (bound-state-like) and the barrier is narrow ($b \to 0$).

### Kronig–Penney master equation

$$\frac{P \sin k_0 a}{k_0 a} + \cos k_0 a = \cos k a, \qquad P = \frac{m V_0 a b}{\hbar^2}$$

where $P$ measures binding strength (height × width of the periodic potential).

### Allowed-region rule

Allowed values of $k_0 a = \sqrt{2mE}\,a/\hbar$ are those for which the LHS stays in $[-1, +1]$. Discontinuities occur at $k = \pm n\pi/a$.

### Limiting cases

- Strongly bound ($P\to\infty$): $E_n = n^2 h^2/(8 m a^2)$, $n=1,2,3,\ldots$.
- Free ($P\to 0$): $E = \hbar^2 k^2/(2m)$ — the free-electron parabola.

### Dispersion curve shape

- Continuous ranges of $k$ where $-1 \le \text{LHS} \le +1$ → allowed bands.
- Ranges where $|\text{LHS}| > 1$ → forbidden gaps, shaded and discarded in $E$ vs $k$.

## Worked Example: Locate the first Brillouin-zone boundary and compare free vs. periodic $E(k)$

**Setup.** A 1-D crystal has lattice period $a = 4$ Å. An electron has wave-vector $k = \pi/a$.

**Step 1 — Identify the zone boundary.** Discontinuities in $E(k)$ occur at $k = \pm n\pi/a$. For $n=1$: $k = \pm\pi/a$. This is the first Brillouin-zone boundary.

**Step 2 — Free-electron value at this $k$.** $E_\text{free} = \hbar^2 k^2 / (2m) = \hbar^2 \pi^2 / (2 m a^2)$.

**Step 3 — Band-gap condition.** At $k a = \pi$, the Kronig–Penney equation forces $\cos k a = -1$, so $\cos k_0 a = -1 - P\sin(k_0 a)/(k_0 a)$. Two solutions of $k_0 a$ straddle $k_0 a = \pi$ — these are the top of the first allowed band and the bottom of the second allowed band. Their energy separation *is* the first forbidden gap $E_g$.

**Step 4 — Limiting-case checks.**
- $P\to 0$: $\cos k_0 a = \cos k a \Rightarrow k_0 = k$, so $E$ is continuous — no gap, free parabola recovered.
- $P\to\infty$: $\sin k_0 a = 0 \Rightarrow k_0 a = n\pi$, giving $E_n = n^2 h^2/(8 m a^2)$ — infinite-well levels.

**Conclusion.** The free-electron parabola is the dashed envelope; the actual $E(k)$ has cusps at $k = \pm n\pi/a$, with the size of the gap set by $P$. As $P \to 0$ the cusps close up; as $P \to \infty$ the bands collapse to discrete infinite-well levels.

## Key Takeaways

1. **One rule generates all bands**: `N` atoms in a crystal split each atomic level into `N` sub-levels (Pauli). When `N` is macroscopic, that becomes a continuous allowed band; the gaps between successive atomic levels remain forbidden.
2. **Band gaps come from standing waves at zone boundaries**: at $k = \pm n\pi/a$ the two standing waves $\cos(n\pi x/a)$ and $\sin(n\pi x/a)$ concentrate charge in different places, splitting one free-electron energy into two separated values — that *split* is the gap.
3. **`P` is the master knob**: by varying the Kronig–Penney parameter $P = mV_0 ab/\hbar^2$ from $0$ to $\infty$, the same equation sweeps continuously from a free-electron parabola ($P=0$) to an infinite square-well ($P\to\infty$). Real solids live in between.
4. **Material class is decided by filling + gap, not by chemistry**: a half-filled band → conductor (Na); a full band that overlaps the next → conductor (Mg); a full band with a wide gap → insulator (diamond, $E_g \sim 7$ eV); a full band with a $\sim 1$ eV gap → semiconductor (Si, Ge).
5. **Width rules from the Kronig–Penney plot**: allowed bands *widen* with energy; forbidden bands *narrow* with energy; either kind *narrows* with stronger binding (larger $P$). Memorize the three trends together.
6. **Brillouin-zone boundaries are where the action is**: $k = \pm n\pi/a$ are the only points where the periodic-lattice $E(k)$ departs qualitatively from the free parabola. Always inspect $E(k)$ at these points first.
7. **Bloch's theorem is non-negotiable inside a crystal**: any plane-wave assumption is wrong as a stationary state. Always write $\psi_k = u_k(x)\,e^{ikx}$ and let $u_k$ carry the periodicity.

## Connects To

- **Ch 7 (Quantum Physics)** — Bloch's theorem is a direct consequence of applying Schr. equation to a periodic potential; the standing-wave origin of the gap is the same constructive/destructive interference that gives Ch 2's band-pass filters.
- **Ch 22 (Crystal Structure)** — the periodicity `a` used throughout this chapter is the lattice constant introduced there; the 1-D Kronig–Penney model is the conceptual ancestor of the 3-D band structures derived from the reciprocal lattice.
- **Ch 26 (Semiconductors)** — the Fermi-level-mid-gap criterion defined here for semiconductors is the foundation of the p-type/n-type doping band diagrams in Ch 26; the $E_g \sim 1$ eV rule for semiconductors is set here.
- **External: Bloch / Brillouin** — Bloch's theorem generalizes directly to 3-D via $u_{\mathbf{k}}(\mathbf{r})$ with the periodicity of the Bravais lattice, and the gap-opening condition $\mathbf{k} \cdot \mathbf{G} = |\mathbf{G}|^2/2$ (Bragg condition) reduces 3-D band gaps to the same standing-wave picture.
- **External: nearly-free-electron model** — the Kronig–Penney derivation is the 1-D version of the nearly-free-electron model used to compute real band structures of metals like Al from first principles.
- **Ch 7 (Quantum Physics) — explicit re-statement**: Bloch's theorem is the direct consequence of applying Ch 7's time-independent Schr. equation to a periodic V(r); the standing-wave interference that opens the gap is the same constructive/destructive superposition that gives Ch 2's band-pass filters, now in 1-D crystal momentum.
- **Ch 15 (Crystal Structure) — re-statement**: the periodicity `a` used throughout this chapter is the lattice constant introduced in Ch 15; the Brillouin zone is the Wigner–Seitz cell of the reciprocal lattice (Ch 15), and Bloch wavevectors k are restricted to the first BZ.
- **Ch 24 (Electronic Theory of Solids) — predecessor link**: Ch 24's Sommerfeld free-electron model is the E_g → 0 limit of this chapter's bands; Ch 25 is the "lift" that introduces the gap and explains why some conductors (metals) have a half-filled band while others (semiconductors/insulators) have a full valence band.
- **Ch 26 (Semiconductors) — re-statement**: the band diagram drawn in this chapter is the prerequisite for Ch 26's p-type/n-type doping, p-n junction band bending, and the E_g ~ 1 eV rule for semiconductors at room temperature; every Ch 26 figure is a Ch 25 figure with a Fermi level shifted by doping.