# Chapter 24: Electronic Theory of Solids

## Core Idea
Electrons in a metal behave as a **quantum Fermi gas** confined to a 3D potential box: Pauli exclusion forces them to fill all energy levels up to the Fermi energy $\varepsilon_F$ even at $T = 0$, and only electrons *near* the Fermi surface participate in conduction or heat transport — this single rule fixes the conductivity, specific heat, thermal conductivity, Wiedemann–Franz law, and Hall coefficient.

## Frameworks Introduced

- **Drude–Lorentz (Classical Free Electron) Model**
  - When to use: quick estimates of DC conductivity, Ohm's law, thermal conductivity in metals.
  - How: electrons are independent classical particles colliding with lattice, drift velocity $\langle v \rangle = \lambda / \tau$, equilibrium conductivity $\sigma = Ne^2\tau / m$. Treats electrons as a Maxwell–Boltzmann gas. Fails for specific heat, superconductivity, photoelectric effect, Hall coefficient sign.

- **Sommerfeld Quantum Free Electron Model**
  - When to use: any solid-state property tied to Fermi-level electrons — conductivity, specific heat, magnetic susceptibility, transport.
  - How: model metal as a 3D infinite potential box $V = 0$ for $0 \le x \le a$, $y \le b$, $z \le c$. Solve time-independent Schrödinger, get standing-wave eigenstates, count energy levels using density-of-states argument, fill them per Pauli.

- **Fermi–Dirac Distribution Function** $F(\varepsilon) = \dfrac{1}{e^{(\varepsilon - \varepsilon_F)/kT} + 1}$
  - When to use: probability that an energy level $\varepsilon$ is occupied by an electron at temperature $T$.
  - How: at $T = 0$, $F = 1$ below $\varepsilon_F$, $F = 0$ above. At any $T$, the $+1$ in the denominator (from Pauli) makes $F(\varepsilon_F) = 1/2$. The $+1$ vs $-1$ (Bose) vs absent term (MB) is the distinguishing operator in the master distribution $F(\varepsilon) = 1/(e^\alpha e^{\varepsilon/kT} + \beta)$.

- **Density of Energy States** $g(\varepsilon) = \dfrac{8\sqrt{2}\,\pi m^{3/2}}{h^3} \varepsilon^{1/2} = C\varepsilon^{1/2}$ (per unit volume)
  - When to use: counting how many available quantum states lie between $\varepsilon$ and $\varepsilon + d\varepsilon$.
  - How: count unit cells in first-quadrant spherical shell of $(n_x/a, n_y/b, n_z/c)$ k-space, multiply by $abc = V$. Result: $G(\varepsilon)\,d\varepsilon = 8\sqrt{2}\,\pi m^{3/2} V \varepsilon^{1/2} h^{-3}\,d\varepsilon$.

- **Fermi Energy at 0 K**: $\varepsilon_{F0} = \dfrac{h^2}{8m}\left(\dfrac{3N_0}{\pi}\right)^{2/3}$
  - When to use: baseline quantum energy scale of the electron gas.
  - How: integrate $g(\varepsilon)$ from $0$ to $\varepsilon_F$, set equal to $N_0$, solve. Typical values: Cu $\approx 7.04$ eV, Al $\approx 11.64$ eV, Ag $\approx 5.51$ eV. Dominates thermal energy $kT \approx 0.026$ eV at room $T$.

- **Hall Effect / Hall Coefficient** $R_H = \dfrac{3\pi}{8}\dfrac{1}{Ne}$
  - When to use: identifying carrier type (electron vs hole), measuring carrier concentration, mobility, magnetic field strength.
  - How: current $I$ along $+X$, $\mathbf{B}$ along $+Z$; charge accumulates on the bottom face until $eE_H = evB$. $R_H$ sign tells carrier type: negative for electrons, positive for holes.

## Key Concepts

- **Fermi gas**: valence electrons of a metal treated as a non-interacting quantum gas confined to the crystal.
- **Free electron model**: ion-core potential taken uniform ($V$ const), electrons free throughout solid.
- **Relaxation time** $\tau$: average time between electron collisions; order $10^{-14}$ s for metals.
- **Mean free path** $\lambda = \langle v \rangle \tau$.
- **Fermi energy** $\varepsilon_F$: highest occupied level at 0 K; the energy with 50% occupation probability at any temperature.
- **Density of energy states** $g(\varepsilon)$: number of available energy states per unit volume per unit energy range.
- **Degeneracy**: multiple distinct $(n_x, n_y, n_z)$ combinations producing the same energy; e.g. $(1,2,3)$ and its permutations → degeneracy 6.
- **Hall field / Hall voltage**: transverse $\mathbf{E}$ and $\Delta V$ developed perpendicular to current and $\mathbf{B}$.
- **Mobility** $\mu = v/E$: drift velocity per unit applied field; connected to Hall coefficient via $\mu = \sigma R_H$.
- **Fermi velocity** $v_F$: speed of electrons near Fermi level — $v_F^2 = 2\varepsilon_{F0}/m$.
- **Lorentz number** $L = \pi^2 k^2 / (3 e^2) \approx 2.45 \times 10^{-8}$ W$\Omega$K$^{-2}$: constant ratio $K/(\sigma T)$ for all metals (Wiedemann–Franz).

## Mental Models

- **Use the potential-box + Pauli picture as the master lens**: any "free electron" problem starts by writing the 3D infinite well, separating variables in $\psi$, applying $\psi = 0$ at walls to get standing-wave eigenstates with quantum numbers $n_x, n_y, n_z \ge 1$. From there, count states in k-space to get $g(\varepsilon)$, fill them up to $\varepsilon_F$, and all thermal/transport quantities drop out.

- **Think of the electron gas as a sea filled to a level**: at $T = 0$ the "sea level" is $\varepsilon_F$. Only electrons within $\sim kT$ of that surface can change state when you heat or apply a field — which is why specific heat is linear in $T$ rather than the classical $3R/2$, and why thermal conductivity uses $v_F$ not $\langle v \rangle$.

- **Apply the drift-velocity / relaxation-time analogy from Drude to anything that scatters**: when an electric field is applied, electrons accelerate, but a frictional force $m \langle v \rangle / \tau$ mimics collisions. Steady state gives $\langle v \rangle = eE\tau / m$. Same form works for mobility $\mu = e\tau/m$.

- **Use Hall-field sign as a carrier-type probe**: deflected charge sign determines whether $E_H$ points with or against $v \times B$. Negative $R_H \Rightarrow$ electron carriers (most metals); positive $R_H \Rightarrow$ hole carriers (Be, Zn, Cd, p-type semiconductors).

- **Cross-check with the Wiedemann–Franz bridge**: the ratio $K/(\sigma T)$ being *universal* across metals means thermal and electrical transport are carried by the *same* particles. Classical Drude predicts the right form but the wrong constant; Sommerfeld with Fermi-Dirac statistics yields the measured $2.45 \times 10^{-8}$ W$\Omega$K$^{-2}$.

## Anti-patterns

- **Treating free electrons as a classical ideal gas**: gets Ohm's law right but predicts specific heat $C_V = (3/2)R$ per mole — about 100× too large. Real metals have $C_V \propto T$ because only $\sim kT/\varepsilon_F \sim 0.003$ fraction of electrons participate.

- **Forgetting Pauli exclusion when filling states**: classical filling puts all electrons in the lowest level; Pauli forces them into a *Fermi sea* up to $\varepsilon_F$. Without Pauli, the entire transport picture (Fermi velocity, Lorentz number, electronic specific heat) is wrong.

- **Assuming Hall coefficient sign equals charge sign of majority carriers directly**: only true to first order. Rigorous $R_H = (3\pi/8)(1/Ne)$ has a factor $> 1$ from energy-dependent scattering; sign convention still works for identification, but magnitude needs the correction.

- **Using Maxwell–Boltzmann distribution for electrons**: the $+1$ in the Fermi–Dirac denominator is not cosmetic — it caps $F(\varepsilon) \le 1$. Using MB ($+1 \to 0$) for a metal at room temperature produces nonsense because $kT \ll \varepsilon_F$.

- **Ignoring the lowest-energy quantum state $E_0 = 3\pi^2\hbar^2 / (2mL^2)$**: zero-point energy in the 3D box. Quantum numbers cannot be zero ($n_x, n_y, n_z \ge 1$); otherwise $\psi$ vanishes, contradicting electron presence.

- **Conflating drift velocity with Fermi velocity in thermal/electrical transport**: classical Drude substitutes $\langle v \rangle$; Sommerfeld correctly uses $v_F$ because only Fermi-surface electrons respond to $\mathbf{E}$ or $\nabla T$.

## Reference Tables

### Three statistics — master formula $F(\varepsilon) = 1/(e^\alpha e^{\varepsilon/kT} + \beta)$

| Statistics | $\beta$ | Applicable to | Distribution |
|---|---|---|---|
| Maxwell–Boltzmann | $0$ | Distinguishable particles (atoms, gas molecules) | $F_{MB} = Ae^{-\varepsilon/kT}$ |
| Bose–Einstein | $-1$ | Indistinguishable bosons, no Pauli (photons) | $F_{BE} = 1/(e^{\varepsilon/kT} - 1)$ |
| Fermi–Dirac | $+1$ | Indistinguishable fermions, Pauli-obeying (electrons) | $F_{FD} = 1/(e^{(\varepsilon-\varepsilon_F)/kT} + 1)$ |

### Drude vs Sommerfeld (key outcomes)

| Quantity | Drude (Classical) | Sommerfeld (Quantum) | Experimental |
|---|---|---|---|
| $C_V$ per electron | $(3/2)k$ | $\sim (\pi^2/2)(kT/\varepsilon_F)k$ | $\propto T$, $\ll (3/2)k$ |
| Lorentz number $K/(\sigma T)$ | Wrong constant | $\pi^2 k^2/(3e^2) \approx 2.45\times10^{-8}$ W$\Omega$K$^{-2}$ | Universal across metals |
| Drift/transport speed | $\langle v \rangle$ (thermal) | $v_F = \sqrt{2\varepsilon_F/m}$ | Fermi speed matches data |
| $R_H$ sign | $1/Ne$ (no factor) | $(3\pi/8)(1/Ne)$ | Sign identifies carrier type |

### Hall effect geometry

| Axis | Quantity | Direction |
|---|---|---|
| $+X$ | Current $\mathbf{I}$ | Carrier flow direction (positive charges) |
| $+Z$ | Applied $\mathbf{B}$ | External field |
| $\pm Y$ | Hall field $\mathbf{E}_H$ / Hall voltage $V_H$ | Sign set by carrier charge |
| Magnitude | $V_H = R_H B I / w$ | $R_H = 3\pi/(8Ne)$ |

### Energy degeneracy in 3D cubical box

| Quantum numbers $(n_x, n_y, n_z)$ | Energy | Degeneracy |
|---|---|---|
| $(1,1,1)$ | $3E_0$ | 1 |
| $(1,1,2)$ + permutations | $6E_0$ | 3 |
| $(1,2,3)$ + permutations | $14E_0$ | 6 |
| $(2,2,2)$ | $12E_0$ | 1 |

($E_0 = \pi^2\hbar^2 / (2mL^2)$; total energy $E = E_0(n_x^2 + n_y^2 + n_z^2)$.)

## Key Equations

### Energy levels in 3D potential box
$$E_{n_x n_y n_z} = \frac{h^2}{8m}\left(\frac{n_x^2}{a^2} + \frac{n_y^2}{b^2} + \frac{n_z^2}{c^2}\right)$$
Zero-point energy in cubical box of side $L$: $E_0 = 3\pi^2\hbar^2 / (2mL^2)$.

### Drude conductivity
$$\sigma = \frac{Ne^2 \tau}{m} \qquad \langle v \rangle = \frac{eE\tau}{m}$$

### Density of states (per unit volume)
$$g(\varepsilon) = C\varepsilon^{1/2}, \quad C = \frac{8\sqrt{2}\,\pi m^{3/2}}{h^3} = 6.8 \times 10^{27}\ \text{m}^{-3}\text{eV}^{-3/2}$$

### Fermi energy and average energy
$$\varepsilon_{F0} = \frac{h^2}{8m}\left(\frac{3N_0}{\pi}\right)^{2/3}, \qquad \langle E \rangle = \frac{3}{5}\varepsilon_{F0}$$
$$\varepsilon_F = \varepsilon_{F0}\left[1 - \frac{\pi^2 k^2 T^2}{12 \varepsilon_{F0}^2}\right], \qquad \langle E \rangle = \frac{3}{5}\varepsilon_{F0}\left[1 + \frac{5\pi^2 k^2 T^2}{12 \varepsilon_{F0}^2}\right]$$

### Electronic specific heat
$$C_{VE} = \frac{\pi^2 N k^2 T}{2\varepsilon_{F0}}, \qquad C_{VEM} = \frac{\pi^2 R k T}{2\varepsilon_{F0}} \approx 0.0128 R \text{ at 300 K}$$

### Wiedemann–Franz law
$$\frac{K}{\sigma T} = \frac{\pi^2 k^2}{3e^2} \equiv L \approx 2.45 \times 10^{-8}\ \text{W}\Omega\text{K}^{-2}$$

### Hall coefficient
$$R_H = \frac{3\pi}{8}\frac{1}{Ne}\quad (\text{electrons, negative}); \qquad R_H = \frac{3\pi}{8}\frac{1}{pe}\quad (\text{holes, positive})$$
$$V_H = R_H \frac{B I}{w}; \qquad \theta_H = \tan^{-1}\!\left(\frac{3\pi}{8}B\mu\right)$$

## Worked Example: Fermi Energy of Copper at 0 K

Given: density of copper $\rho = 8.94 \times 10^3$ kg/m³, atomic mass $M_{At} = 63.5$ amu, one free electron per atom.

**Step 1 — Number density of atoms:**
$$N_0 = \frac{\rho N_A}{M_{At}} = \frac{8.94 \times 10^3 \times 6.022 \times 10^{23}}{63.5 \times 10^{-3}} = 8.47 \times 10^{28}\ \text{atoms/m}^3$$
Since each Cu atom contributes one electron, $N_0 = 8.47 \times 10^{28}$ electrons/m³.

**Step 2 — Apply Fermi-energy formula:**
$$\varepsilon_{F0} = \frac{h^2}{8m}\left(\frac{3N_0}{\pi}\right)^{2/3} = \frac{(6.626 \times 10^{-34})^2}{8 \times 9.11 \times 10^{-31}}\left(\frac{3 \times 8.47 \times 10^{28}}{22/7}\right)^{2/3}\ \text{J}$$
$$= 7.04\ \text{eV}$$

**Step 3 — Average energy at 0 K:**
$$\langle E \rangle = \frac{3}{5}\varepsilon_{F0} = \frac{3}{5} \times 7.04\ \text{eV} = 4.22\ \text{eV}$$

**Interpretation:** even at absolute zero, every free electron in copper carries $\sim$4 eV average kinetic energy — vastly more than the classical prediction of zero. This non-zero ground-state energy is purely quantum (Pauli-driven), and is what makes the "electron sea" stiff.

## Worked Example: Hall Voltage in a Copper Slab

Given: $I = 5$ A, $w = 2$ cm $= 0.02$ m, $t = 0.5$ cm $= 0.005$ m, $B = 1.5$ T, $N = 8.4 \times 10^{28}$ m$^{-3}$.

**Step 1 — Hall coefficient:**
$$R_H = \frac{3\pi}{8 Ne} = \frac{3 \times 3.1416}{8 \times 8.4 \times 10^{28} \times 1.6 \times 10^{-19}} = 8.33 \times 10^{-11}\ \text{m}^3/\text{C}$$

**Step 2 — Hall voltage:**
$$V_H = \frac{R_H B I}{w} = \frac{8.33 \times 10^{-11} \times 1.5 \times 5}{0.02} = 3.12 \times 10^{-8}\ \text{V}$$

This tiny voltage is exactly what makes Hall-effect sensors a sensitive magnetic-field probe (down to mT range).

## Key Takeaways

1. **Master the 3D-box + Pauli pipeline**: Schrödinger → standing waves → quantum numbers $(n_x, n_y, n_z) \ge 1$ → count states in k-space → fill to $\varepsilon_F$. Every transport coefficient in the chapter follows from this one argument.
2. **Only Fermi-surface electrons matter for transport**: thermal conductivity uses $v_F$, specific heat is $\propto kT/\varepsilon_F$, the drift speed that responds to $\mathbf{E}$ is the Fermi speed. The "bulk" of the sea is frozen by Pauli.
3. **Drude vs Sommerfeld is a battle over statistics**: classical MB fails specific heat and the Lorentz number; quantum FD with the $+1$ Pauli operator gets both right. The sign and the constant are not optional.
4. **$\varepsilon_F$ is set by $N_0$, not by $T$**: $\varepsilon_{F0} = (h^2/8m)(3N_0/\pi)^{2/3}$. At room temperature $kT \ll \varepsilon_F$, so thermal smearing affects only the top $\sim kT/\varepsilon_F \sim 0.003$ of the distribution.
5. **Hall sign identifies carriers; Hall magnitude measures concentration**: negative $R_H$ for n-type (electron) carriers, positive for p-type (hole) carriers in Be, Zn, Cd and p-semiconductors.
6. **Wiedemann–Franz is the bridge**: $K/(\sigma T) = L$ universal because heat and charge are carried by the *same* particles. Confirms the free-electron picture and that the carriers are electrons.
7. **The Sommerfeld zero-point energy is real**: $E_0 = 3\pi^2\hbar^2/(2mL^2)$ for a cubical box of side $L$. Don't truncate to "zero kinetic energy at $T=0$" — that is the classical answer and is wrong.

## Connects To

- **Ch 23 (Dielectric Materials)**: extends from free-electron transport (this chapter) to bound electrons in insulators — same Maxwell-equation framework, different boundary conditions.
- **Ch 25 onward (Semiconductors / Band Theory)**: free-electron model fails to explain metal vs insulator vs semiconductor distinction — band theory (Bloch's theorem, Brillouin zones) is the necessary next step that this chapter explicitly sets up.
- **Quantum statistics (Ch 7 / Ch 8)**: the Fermi–Dirac distribution is a direct application of quantum statistics to a particle gas; Maxwell–Boltzmann and Bose–Einstein appear as siblings with $\beta = 0$ and $\beta = -1$.
- **External: solid-state physics / Kittel**: Ashcroft & Mermin and Kittel use exactly the same Sommerfeld model as their opening chapter before introducing Bloch's theorem — this chapter is the engineering-physics path into that tradition.
- **External: Hall sensor engineering**: magnetic-field meters (10 mT to 1 T range), contactless keyboards, current multipliers, and EM-wave power measurement all exploit $V_H \propto B$.
- **External: thermoelectrics**: Wiedemann–Franz is the foundational relationship that sets the upper bound on thermoelectric ZT — high electrical $\sigma$ implies proportionally high $K$, hurting the figure of merit.
- **Ch 15 (Crystal Structure)**: the free-electron gas of this chapter lives *inside* the Bravais lattice geometry established in Ch 15; the lattice constant `a` fixes the electron-number density `N` that enters σ = Ne²τ/m.
- **Ch 23 (Dielectric Materials) — deeper link**: bound electrons (Ch 23) and free electrons (this chapter) are the two limits of a solid's response to E; the dielectric function ε(ω) interpolates between them, with the Drude tail at low ω and the Lorentz oscillator peak at high ω.
- **Ch 25 (Energy Bands / Bloch's theorem)**: the free-electron model of this chapter is the zeroth approximation to Ch 25's periodic-potential model; the band gap E_g = 0 in the free-electron limit is why metals "conduct" in this chapter but Ch 25 must introduce periodic V to explain semiconductors/insulators.
- **Ch 26 (Semiconductors)**: effective mass m* and mobility μ = v_d/E used throughout Ch 26's transport equations are the Ch 24 quantities, with m* modified by Ch 25's band curvature; doped-semiconductor conductivity is σ = nq(μₑ + μₕ), the Ch 24 formula with two carrier species.