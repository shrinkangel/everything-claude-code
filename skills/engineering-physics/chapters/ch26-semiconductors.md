# Chapter 26: Semiconductors

## Core Idea
Conductivity in semiconductors is set by the **width of the forbidden band** $E_g$ and the position of the **Fermi level** $\varepsilon_F$ within it: pure (intrinsic) material conducts only because of thermally broken covalent bonds producing electron-hole pairs, while doped (extrinsic) material gains one type of carrier by orders of magnitude through donor (n-type) or acceptor (p-type) impurities whose energy levels sit just inside the forbidden band.

## Frameworks Introduced

- **Three-band classification of solids** by forbidden gap $E_g$
  - When to use: any "is this material conducting?" classification.
  - How: read band filling + gap. Conductor = valence band partially filled (no gap). Insulator = full valence band, empty conduction band, $E_g \gtrsim 5\text{ eV}$. Semiconductor = $E_g \approx 0.2\text{–}2.5\text{ eV}$, finite carriers at room $T$.

- **Effective density of states at a band edge** $N_C$, $N_V$
  - When to use: any "how many carriers per cm³ at temperature T?" calculation.
  - How: $n = N_C \exp[-(\varepsilon_F - E_C)/kT]$, $p = N_V \exp[-(E_V - \varepsilon_F)/kT]$, with $N_C = 2(2\pi m_e^* kT/h^2)^{3/2}$ and $N_V = 2(2\pi m_h^* kT/h^2)^{3/2}$.

- **Intrinsic carrier concentration** $n_i$
  - When to use: undoped (or reference) semiconductor; baseline for doping calculations.
  - How: $n = p = n_i$, $n_i^2 = np$, $n_i = A\,T^{3/2} \exp(-E_g/2kT)$ with $A = 2(2\pi k/h^2)^{3/2}(m_e^* m_h^*)^{3/4}$. Conductivity $\sigma_i = n_i e(\mu_n + \mu_p) = \sigma_0 \exp(-E_g/2kT)$.

- **Fermi-level position in intrinsic semiconductor**
  - When to use: locating $\varepsilon_F$ to draw band diagrams, computing carrier asymmetry.
  - How: $\varepsilon_F = \tfrac{1}{2}(E_C + E_V) + \tfrac{3}{4}kT \ln(m_h^*/m_e^*)$. Sits just above mid-gap when $m_h^* > m_e^*$; rises linearly with $T$.

- **Hydrogenic donor / acceptor model** for impurity levels
  - When to use: estimating $E_d$ or $E_a$ and Bohr radius $r_d$ / $r_a$ of bound carrier.
  - How: replace vacuum permittivity by $\varepsilon_r \varepsilon_0$ and mass by $m^*$; gives $E_d = m_e^* e^4 / 2(4\pi\varepsilon_r \varepsilon_0 \hbar)^2 \approx 0.02\text{ eV}$ in Si, $r_d \approx 31$ Å. Same template for acceptors with $m_h^*$.

- **Majority-carrier concentration in extrinsic semiconductor**
  - When to use: any doped material in the "extrinsic regime" where essentially all donors/acceptors are ionized.
  - How: $n \approx N_d$ for n-type, $p \approx N_a$ for p-type. More precisely $n = (2N_d)^{1/2}\bigl(2\pi m_e^* kT/h^2\bigr)^{3/4}\exp(-\Delta E/2kT)$, $\Delta E = E_C - E_d$. So $n \propto \sqrt{N_d}$, $T^{3/4}$, $\exp(-\Delta E/2kT)$.

- **Fermi level in extrinsic semiconductor at low T**
  - When to use: drawing n-type or p-type band diagram; computing $\varepsilon_{F_e} - \varepsilon_{F_i}$ for a given $N_d$ or $N_a$.
  - How: at $T=0$ K, $\varepsilon_F = \tfrac{1}{2}(E_C + E_d)$ for n-type, $\varepsilon_F = \tfrac{1}{2}(E_a + E_V)$ for p-type. Offset between extrinsic and intrinsic: $\varepsilon_{F_e} - \varepsilon_{F_i} = kT \ln(N_d^+/n_i)$.

## Key Concepts

- **Forbidden energy band (band gap)** $E_g$: range of forbidden energies between valence band top $E_V$ and conduction band bottom $E_C$. Sets conductivity class.
- **Intrinsic semiconductor**: pure crystal where carriers come only from thermally broken covalent bonds; $n = p = n_i$.
- **Extrinsic semiconductor**: doped crystal where one carrier type dominates (majority).
- **Hole**: missing electron in an otherwise-filled valence band; behaves as a positive mobile carrier with effective mass $m_h^*$.
- **Donor atom / donor level $E_d$**: pentavalent (group V) impurity donating a loosely bound electron to the conduction band (e.g. As, Sb, P in Si).
- **Acceptor atom / acceptor level $E_a$**: trivalent (group III) impurity accepting an electron from the valence band, leaving a hole (e.g. B, Ga, In in Si).
- **Mobility** $\mu = v_d/E$: drift speed per unit field; $\sigma = Ne\mu$.
- **Fermi-Dirac distribution** $F(\varepsilon) = 1/[\exp((\varepsilon-\varepsilon_F)/kT)+1]$; at room $T$ with $\varepsilon - \varepsilon_F \gg kT$ collapses to Boltzmann tail $\exp[-(\varepsilon-\varepsilon_F)/kT]$.
- **Negative temperature coefficient of resistance**: characteristic property of pure semiconductors — resistance decreases with temperature because $n_i(T)$ grows exponentially.
- **Majority / minority carrier**: in n-type, electrons majority, holes minority; in p-type, reversed.

## Mental Models

- **Use $E_g$ as the "switch":** everything in intrinsic semiconductors hangs off $\exp(-E_g/2kT)$. Halving $E_g$ raises $n_i$ by orders of magnitude; that is why Ge ($E_g=0.7$ eV) leaks more than Si ($E_g=1.1$ eV).
- **Think of donors/acceptors as "hydrogen atoms inside the crystal":** the impurity electron/hole orbits its parent ion like a 1s electron around a proton, but in a dielectric medium — so binding energy is $\sim 0.02$ eV (vs 13.6 eV for H) and orbit is $\sim 30$ Å (vs 0.5 Å). That's why room-temperature $kT=0.026$ eV is enough to ionize them.
- **Position of the Fermi level is a proxy for "who is winning":** if $\varepsilon_F$ sits near $E_C$, electrons dominate (n-type); if near $E_V$, holes dominate (p-type). At higher $T$, $\varepsilon_F$ migrates back toward mid-gap — that is the device-failure regime.
- **Doping trades off two temperatures**: at low $T$, all donors are frozen onto their atoms; at intermediate $T$, they ionize (extrinsic regime); at high $T$, intrinsic carriers swamp dopants and the material behaves intrinsic again.

## Anti-patterns

- **Confusing "$E_g = 1$ eV = semiconductor" as a sharp threshold**: the author's own MCQ shows that Eg ≈ 1 eV is semiconductor but Eg = 5 eV is insulator — the band filling matters as much as the gap. A conductor needs a *partially filled* band, not just any gap.
- **Assuming $\sigma_i = n_i e \mu_n$ only**: both electrons and holes carry current — total conductivity uses $\sigma_i = n_i e(\mu_n + \mu_p)$. Drop the hole term and you undercount by 30–50% in Ge.
- **Treating $\varepsilon_F$ in intrinsic semiconductor as temperature-independent**: the exact expression $\varepsilon_F = \tfrac{1}{2}(E_C+E_V) + \tfrac{3}{4}kT\ln(m_h^*/m_e^*)$ shows $\varepsilon_F$ rises linearly with $T$ — the mid-gap rule only holds at $T=0$ K when $m_h^* = m_e^*$.
- **Using $n \approx N_d$ at every temperature**: at low $T$ the donors are not yet ionized; at very high $T$ intrinsic carriers dominate. The "all ionized" simplification only applies in the extrinsic temperature window.
- **Forgetting that doping concentration is volumetric**: the question's "1 part in $10^7$" is a *number ratio*, then multiplied by intrinsic atom concentration $N$ (e.g. $5\times 10^{28}$/m³ for Si) to get $N_d$ — students often quote $N_d = 10^{-7}$ and forget the conversion.

## Reference Tables

### Solid classification by band structure

| Class | Valence band | Conduction band | $E_g$ (eV) | Resistivity at 300 K |
|---|---|---|---|---|
| Conductor | Partially filled (or overlaps CB) | Partially filled | 0 | ~$10^{-8}$ Ω·m |
| Semiconductor | Filled at 0 K, slightly empty at 300 K | Empty at 0 K, slightly filled at 300 K | 0.2–2.5 | $10^{-5}$–$10^{3}$ Ω·m |
| Insulator | Filled | Empty | $\gtrsim 5$ (diamond ≈ 7) | ~$10^{17}$ Ω·m |

### Characteristic semiconductor properties (Khan & Panigrahi)

| Property | Value / Sign |
|---|---|
| Temperature coefficient of resistance (pure) | **Negative** (resistance drops with T) |
| Thermoelectric power | Both signs (positive and negative) vs a reference metal |
| p-n junction | **Rectification** |
| Response to light | Generates **photo-voltage** or changes **resistance** |

### Donor vs acceptor summary

| | n-type (donor) | p-type (acceptor) |
|---|---|---|
| Dopant valence | Pentavalent (V) — As, Sb, P, Bi | Trivalent (III) — B, Ga, In, Al |
| Covalent bonding | 4 of 5 electrons bond; 5th is loosely bound | 3 of 4 bonds complete; 4th has a hole |
| Energy level created | $E_d$ just below $E_C$ | $E_a$ just above $E_V$ |
| Typical ionization $\Delta E$ | ~0.02 eV (Si) | ~0.05 eV (Si) |
| Bohr orbit radius | ~31 Å (Si) | smaller, similar order |
| Majority carrier | Electrons | Holes |
| Minority carrier | Holes | Electrons |
| $\varepsilon_F$ at $T=0$ K | $\tfrac{1}{2}(E_C + E_d)$ | $\tfrac{1}{2}(E_a + E_V)$ |
| $\varepsilon_F$ as $T \uparrow$ | Falls toward mid-gap | Rises toward mid-gap |

### Compound semiconductors by family

| Family | Examples | Notes |
|---|---|---|
| III–V | GaAs, GaP, InP, InAs, InSb, AlP, AlGaAs | Covalent, zinc-blende structure, higher $\mu_e$ than Si |
| II–VI | ZnO, ZnS, ZnSe, CdS, CdSe, HgS | Often used in optoelectronics (LEDs) |
| IV–VI | PbS, PbSe, PbTe | Rock-salt structure, 6 neighbours |
| Ternary alloy | Al$_x$Ga$_{1-x}$As | Bandgap tunable by composition |
| Quaternary alloy | Al$_x$Ga$_{1-x}$As$_y$Sb$_{1-y}$ | Two degrees of freedom |

## Key Equations

**Band-edge carrier concentrations** (Boltzmann-tail limit, $\varepsilon - \varepsilon_F \gg kT$)
$$n = N_C \exp\!\left[-\frac{\varepsilon_F - E_C}{kT}\right],\quad N_C = 2\!\left(\frac{2\pi m_e^* kT}{h^2}\right)^{3/2}$$
$$p = N_V \exp\!\left[-\frac{E_V - \varepsilon_F}{kT}\right],\quad N_V = 2\!\left(\frac{2\pi m_h^* kT}{h^2}\right)^{3/2}$$

**Intrinsic carrier concentration**
$$n_i = A\,T^{3/2} \exp\!\left(-\frac{E_g}{2kT}\right),\quad A = 2\!\left(\frac{2\pi k}{h^2}\right)^{3/2}(m_e^* m_h^*)^{3/4}$$

**Intrinsic conductivity**
$$\sigma_i = n_i e(\mu_n + \mu_p) = \sigma_0 \exp\!\left(-\frac{E_g}{2kT}\right)$$

**Fermi level in intrinsic semiconductor**
$$\varepsilon_F = \tfrac{1}{2}(E_C + E_V) + \tfrac{3}{4}kT \ln\!\left(\frac{m_h^*}{m_e^*}\right)$$

**Hydrogenic donor / acceptor**
$$r_d = \frac{4\pi \varepsilon_r \varepsilon_0 \hbar^2}{m_e^* e^2} \quad (\approx 31\text{ Å in Si})$$
$$E_d = \frac{m_e^* e^4}{2(4\pi \varepsilon_r \varepsilon_0 \hbar)^2} \quad (\approx 0.02\text{ eV in Si})$$

**Majority carrier in extrinsic regime** (with $\Delta E = E_C - E_d$ or $E_a - E_V$)
$$n = (2N_d)^{1/2}\!\left(\frac{2\pi m_e^* kT}{h^2}\right)^{3/4}\exp\!\left(-\frac{\Delta E}{2kT}\right) \;\propto\; \sqrt{N_d}\cdot T^{3/4} \cdot e^{-\Delta E/2kT}$$

**Fermi level offset between extrinsic and intrinsic**
$$\varepsilon_{F_e} - \varepsilon_{F_i} = kT \ln\!\left(\frac{N_d^+}{n_i}\right) \quad \text{(n-type)}$$

## Worked Example: Fermi level relative to intrinsic, n-type Si

n-type Si wafer, donor concentration $N_d = 10^{14}\text{ cm}^{-3}$, $T=300$ K, $n_i = 1.45\times 10^{10}\text{ cm}^{-3}$. Find $\varepsilon_{F_e} - \varepsilon_{F_i}$.

1. The Fermi-level offset formula applies directly:
$$\varepsilon_{F_e} - \varepsilon_{F_i} = kT \ln(N_d^+/n_i)$$

2. With $N_d^+ \approx N_d$ (extrinsic regime, full ionization):
$$\varepsilon_{F_e} - \varepsilon_{F_i} = (1.38\times 10^{-23})(300)\,\ln\!\left(\frac{10^{14}}{1.45\times 10^{10}}\right)\text{ J}$$

3. Compute the logarithm: $\ln(10^{14}/1.45\times 10^{10}) = \ln(6.9\times 10^{3}) = 8.84$.

4. Convert to eV: divide by $1.6\times 10^{-19}$:
$$\varepsilon_{F_e} - \varepsilon_{F_i} = \frac{8.84 \cdot (1.38\times 10^{-23})(300)}{1.6\times 10^{-19}}\text{ eV} \approx 0.229\text{ eV}$$

5. Interpretation: $\varepsilon_F$ sits 0.229 eV above the intrinsic Fermi level — i.e., closer to $E_C$, confirming n-type behaviour.

## Key Takeaways

1. **Conductivity class is decided by $E_g$ and band filling** — conductors have a partially filled band (no gap), insulators $E_g \gtrsim 5$ eV, semiconductors $E_g \approx 0.2\text{–}2.5$ eV. Memorize the limits; the middle is the engineering space.
2. **Intrinsic $n_i \propto T^{3/2}\exp(-E_g/2kT)$** — the exponential dominates. Halve the gap and you get orders of magnitude more carriers. This is the temperature coefficient of resistance.
3. **Dopant levels sit ~0.02 eV from a band edge in Si** — the hydrogenic model. Room-temperature $kT = 0.026$ eV is enough to ionize them all, so $n \approx N_d$ in the extrinsic window.
4. **Always include both carriers in intrinsic conductivity**: $\sigma_i = n_i e(\mu_n + \mu_p)$, not just the electron term.
5. **The Fermi level is a position sensor, not a fixed object** — it migrates from the donor level toward mid-gap as $T$ rises. Crossing into the intrinsic regime destroys the device's designed doping.
6. **Compound semiconductors buy you three things over Si**: higher $\mu_e$ (speed), tunable $E_g$ (optoelectronics — LEDs, lasers), and radiation hardness. Cost and wafer size are the trade-offs.
7. **"1 part in $10^7$" is a number ratio** — multiply by the intrinsic atom concentration $N$ to get the actual $N_d$ per m³. A common exam trap.

## Connects To

- **Ch 11 (Band theory of solids)** — Chapter 26 reads entirely off the energy-band diagram established earlier: valence band, conduction band, forbidden gap, Fermi level. The three solid classes are defined there and applied here.
- **Ch 22 (Optoelectronic devices)** — compound semiconductors GaAs, InGaAsP are the engine of LEDs and laser diodes; the "$E_g$ vs emitted wavelength" relationship in Ch 22 directly extends this chapter's $n_i \propto \exp(-E_g/2kT)$.
- **Ch 24 (Electronic theory of solids)** — effective mass $m^*$, drift velocity, mobility $\mu = v_d/E$ all enter Ch 24 transport theory; this chapter gives their carrier-concentration side.
- **External: Hall effect / drift velocity (Ch 13 in this book)** — used to *measure* the sign and density of majority carriers derived here; the chapter explicitly references Hall-effect techniques.
- **External: statistical mechanics** — the Fermi-Dirac distribution $F(\varepsilon) = 1/[e^{(\varepsilon-\varepsilon_F)/kT}+1]$ underpinning all carrier-statistics derivations.
- **External: device physics (p-n junction, MOSFET)** — the donor/acceptor picture built here is the foundation for junction rectification noted in the chapter's "characteristic properties" list.
- **Ch 19 (Magnetic Properties of Materials) — Hall effect link**: the Hall effect (V_H = IB/qnd) is the canonical experimental probe used in this chapter to determine the sign and concentration of majority carriers (electron vs hole, n vs p); the same Ch 19 physics that gives the Hall voltage in metals is used quantitatively in semiconductor wafer characterization.
- **Ch 22 (Optoelectronic Devices) — re-statement**: compound semiconductors (GaAs, InGaAsP, AlGaAs) are the active medium of Ch 22's LEDs and laser diodes; the E_g-vs-emission-wavelength λ = hc/E_g relationship in Ch 22 directly extends this chapter's n_i ∝ exp(−E_g/2kT), and the direct/indirect band gap (Ch 25) determines whether radiative recombination is allowed.
- **Ch 25 (Energy Bands) — re-statement**: the band structure derived in Ch 25 (direct vs indirect gap, effective mass at band edges, density of states) is what determines n-type vs p-type doping behaviour, mobility, and optical transition rates in this chapter; the Fermi-level-mid-gap criterion is the starting point of every Ch 26 band diagram.
- **Ch 16 (Defects in Crystals) — deeper link**: dopants are point defects (Ch 16) introduced at controlled concentrations; dislocations and grain boundaries (Ch 16) are unintentional carrier-recombination centers that degrade this chapter's device performance, motivating defect-engineering in Czochralski-grown silicon.