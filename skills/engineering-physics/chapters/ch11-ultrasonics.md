# Chapter 11: Ultrasonics

## Core Idea
Ultrasonics is the engineering of sound waves above 20 kHz — waves we cannot hear but which can be **produced, detected, wavelength-measured, and harnessed** through three core physical effects (organ-pipe resonance, magnetostriction, piezoelectricity). The single most important practical consequence is **acoustic cavitation** in liquids: controlled bubble implosions that turn ultrasonic energy into extreme local conditions (≈5000 K, ≈2000 atm, jets up to 280 m/s) and drive nearly every industrial, chemical, and medical application.

## Frameworks Introduced

- **Galton's whistle (organ-pipe resonator)**
  - When to use: cheap, simple ultrasonic source for kHz-range dog whistles / lab demos; no electronics needed.
  - How: closed-end air column of length `ℓ` with end correction `x` resonates at `λ = 4(ℓ+x)`, giving `ν = v / [4(ℓ+x)]`. Adjust `ℓ` via micrometer screw to set frequency.

- **Magnetostriction oscillator (Pierce arrangement)**
  - When to use: low-to-mid frequency ultrasonic source using ferromagnetic rods (iron, nickel).
  - How: clamp a ferromagnetic bar; drive with an alternating magnetic field from an LC tank circuit (`ν = 1/[2π√(L₁C₁)]`). Match drive frequency to the rod's natural frequency to get resonance — the rod then emits longitudinal ultrasonic waves at **twice** the AC frequency (length change depends on field magnitude, not sign).

- **Piezoelectric oscillator (Hartley-driven quartz crystal)**
  - When to use: stable, precise high-frequency source (MHz range) — the workhorse for industrial NDT, medical imaging, and sonar.
  - How: cut a non-centrosymmetric crystal (quartz, tourmaline, Rochelle salt) so the polar axis is normal to the face; apply AC voltage along the polar axis (converse piezoelectric effect). Crystal thickness `t` sets the frequency: `ν = v / (2t)` where `v = √(Y/ρ)` along the polar axis.

- **Acoustic grating (Debye–Sears diffraction method)**
  - When to use: measuring the wavelength of ultrasound in a liquid.
  - How: stationary ultrasonic waves in a liquid create alternating nodal (high density) and antinodal (low density) planes separated by `d = λ_uw/2`. Light passing through this column diffracts exactly like an optical grating: `d sin θ_n = nλ_L`, giving `λ_uw = 2nλ_L / sin θ_n`. Combined with a known frequency, also yields speed: `v = λ_uw · ν_uw`.

- **Fathometer / echo-ranging depth formula**
  - When to use: sea-depth measurement, submarine/rock detection, leak testing, sonar ranging.
  - How: transmit a pulse, measure round-trip time `t`; depth `h = vt / 2`. The instrument is calibrated directly in depth (fathometer / echometer).

- **Cavitation threshold framework (stable vs transient)**
  - When to use: designing any ultrasonic liquid process — cleaning, emulsification, sonochemistry, transesterification, cell disruption.
  - How: at intensities `1–3 W/cm²`, bubbles oscillate stably (useful for gentle mixing). Above `≈10 W/cm²`, transient cavitation dominates — bubbles grow to ≥2× initial radius over a few cycles then collapse violently, producing the microreactor conditions (≈5000 K, ≈2000 atm, 280 m/s jets) that drive most chemical effects.

- **Sonar (passive vs active)**
  - When to use: underwater detection, navigation, communication.
  - How: active sonar sends a "ping" and listens for echo (works like radar). Passive sonar only listens to radiated noise from targets — silent, longer range, used in submarine warfare and target motion analysis (TMA).

## Key Concepts

- **Ultrasound vs infrasound**: ultrasound `ν > 20 kHz` (above human hearing); infrasound `ν < 20 Hz` (below; used by elephants for long-range communication).
- **Piezoelectric effect**: mechanical strain on a non-centrosymmetric crystal (quartz, tourmaline, Rochelle salt) produces charge on faces perpendicular to the polar axis; converse effect: applied voltage → strain. Sign of charge flips with compression vs extension.
- **Magnetostriction**: ferromagnetic materials change length in an applied magnetic field; change depends on field magnitude only, so driving frequency produces mechanical vibration at **2× the drive frequency**.
- **Cavitation**: formation and implosion of vapor bubbles in a liquid under the rarefaction phase of an acoustic wave; voids appear when intermolecular spacing exceeds the minimum cohesive distance.
- **Acoustic grating**: liquid with stationary ultrasonic waves acts as a phase grating for light; nodal planes are the "slits", spaced by `λ_uw/2`.
- **Sonar (Sound Navigation And Ranging)**: technique using sound propagation to navigate, communicate, or detect underwater objects; passive = listen only, active = ping + echo.
- **Sonogram**: medical image produced by a piezoelectric transducer that both emits sound into the body and receives the echo; the computer reconstructs the interior picture.
- **Lithotripsy**: focused high-intensity ultrasound used to shatter kidney stones non-invasively.

## Mental Models

- **Think of an ultrasonic transducer as a "tuned thickness"**: in a piezoelectric crystal at resonance, the slab thickness is exactly `λ/2` of the sound wave inside it — like a closed organ pipe. So `t = v/(2ν)`. Want 5 MHz in PZT (`v = 4000 m/s`)? You need `t = 0.4 mm`. Want 2725 kHz in quartz (`v = 5450 m/s`)? You need `t = 1 mm`. Always work backward from desired frequency to required slab thickness.

- **Use the "cavitation lever" when designing liquid processes**: there are exactly six knobs — frequency (high freq → harder cavitation, ~10× more power at 400 kHz vs 30 kHz), intensity (must exceed threshold; higher is not always better — it can destroy the transducer), solvent (low viscosity + low surface tension helps), temperature (compromise: high helps break bonds, low makes collapse violent), external pressure (raises threshold AND increases collapse violence), and dissolved gas (monoatomic He/Ar/Ne act as nuclei). The optimum is a Pareto trade-off across all six.

- **Three generation methods, one underlying principle**: Galton's whistle = mechanical resonance of an air column; magnetostriction = electromechanical coupling via field-dependent length; piezoelectric = electromechanical coupling via strain-dependent polarization. All three require matching drive frequency to a natural resonance to get large amplitudes.

- **Echo ranging is just radar underwater**: `distance = (speed × time)/2`. The division by two is the single most-forgotten step — the signal travels down *and* back. Memorize this and you'll never miss a sonar depth problem.

## Anti-patterns

- **Assuming magnetostriction vibrates at the drive frequency**: it vibrates at **twice** the applied AC frequency because the rod's length depends on `|H|`, not on the sign of `H`. A 30 kHz drive produces 60 kHz vibration.
- **Cutting the crystal along an arbitrary axis**: the piezoelectric effect requires the cut to put the polar axis perpendicular to the crystal face for the canonical `t = λ/2` resonance. Wrong cut → no clean resonance mode.
- **Treating higher amplitude as always better**: above the cavitation threshold, more amplitude can (a) destroy the transducer, (b) cause bulk liquid agitation instead of focused cavitation, and (c) produce poor transmission. Higher *viscosity* samples do legitimately need higher amplitude.
- **Confusing displacement-resonance frequency with natural frequency for transducers**: the LC tank frequency `1/[2π√(L₁C₁)]` must equal the rod/crystal's mechanical natural frequency; off-resonance drive gives tiny amplitude.
- **Forgetting the `/2` in depth measurement**: `h = vt/2`, not `vt`. The signal goes down *and* comes back.
- **Ignoring viscosity in cavitation design**: high viscosity and high surface tension both inhibit cavitation. "Just turn up the power" wastes energy and may damage the source.
- **Claiming ultrasound is harmless because it's "just sound"**: intense ultrasound heats tissue, can cavitate dissolved gases inside the body, and is used in *therapy* precisely because it damages cells.

## Reference Tables

### Frequency bands of sound

| Band | Range | Heard by |
|---|---|---|
| Infrasound | `< 20 Hz` | Elephants (long-range communication); some humans sense as "ghost vision" |
| Audible sound | `20 Hz – 20 kHz` | Normal human ear |
| Ultrasound | `> 20 kHz` | Cats, foxes, dogs, dolphins, whales, bats, nocturnal insects |

### Methods of generating ultrasonic waves

| Method | Physical principle | Typical frequency | Best for |
|---|---|---|---|
| Galton's whistle | Closed-end organ pipe resonance (`λ = 4(ℓ+x)`) | kHz range | Dog whistles, simple lab sources |
| Magnetostriction oscillator | Field-dependent length of ferromagnetic rod (vibrates at 2× drive frequency) | Low–mid kHz | Lower-power applications, nickel/iron rods |
| Piezoelectric oscillator | Converse piezoelectric effect in cut quartz crystal; tank = Hartley | MHz range | NDT, medical, sonar — precision source |

### Methods of detecting ultrasonic waves

| Method | Mechanism | Best for |
|---|---|---|
| Piezoelectric detector | Quartz crystal generates feeble voltage from incident wave (amplify to read) | General purpose |
| Kundt's tube | Lycopodium powder heaps at nodes, blown off at antinodes; heap spacing = `λ/2` | Large-wavelength ultrasound |
| Sensitive flame | Flame flickers at nodes (pressure change), steady at antinodes | Visualizing standing-wave pattern |
| Thermal detector | Platinum wire + Wheatstone bridge; resistance changes at nodes (T changes), constant at antinodes | Quantitative mapping |

### Cavitation parameters and their effects

| Parameter | Direction of change | Effect on cavitation |
|---|---|---|
| Frequency | Higher (MHz) | Harder to cavitate — ~10× power needed at 400 kHz vs 30 kHz |
| Intensity | Higher | More cavitation, but >10 W/cm² destroys transducer; above threshold is enough |
| Solvent viscosity | Higher | Inhibits cavitation (cohesive forces harder to overcome) |
| Solvent surface tension | Higher | Inhibits cavitation |
| Temperature | Higher | Easier to break bonds; but vapor in bubbles cushions collapse → less violent |
| External pressure | Higher | Higher cavitation threshold; more violent collapse → stronger sono-chemical effect |
| Dissolved gas | He, Ar, Ne | Acts as nuclei — enhances cavitation |

### Stable vs transient cavitation

| | Stable cavitation | Transient cavitation |
|---|---|---|
| Intensity | `1–3 W/cm²` | `> 10 W/cm²` |
| Bubble behavior | Oscillates about equilibrium size for many cycles | Grows to ≥ 2× initial radius over a few cycles, then collapses violently |
| Local conditions produced | Mild | ≈5000 K, ≈2000 atm, liquid jets up to 280 m/s |
| Main use | Gentle mixing, mild processing | Sonochemistry, emulsification, cell disruption, cleaning |

### Sonar classification

| Type | Action | Pros | Cons |
|---|---|---|---|
| Passive sonar | Only listens to target's radiated noise | Silent, longer range, allows identification (TMA) | Target must be noisy; can't localize quiet targets |
| Active sonar | Sends "ping" + listens for echo | Works on quiet targets, measures range directly | Reveals own position; subject to false echoes (whales, rocks) |

## Key Equations

- **Galton's whistle resonance**: `ν = v / [4(ℓ+x)]` — `ℓ` = air column length, `x` = end correction.
- **Piezoelectric natural frequency**: `ν = v/(2t)` where `v = √(Y/ρ)` is the speed of sound along the polar axis in the crystal — for quartz, `Y = 7.9 × 10¹⁰ N/m²`, `ρ = 2650 kg/m³`, `v ≈ 5450 m/s`, so `ν ≈ 2725/t (Hz·m)` — a 1 mm slab gives 2725 kHz.
- **Acoustic-grating diffraction**: `d sin θ_n = n λ_L`, with `d = λ_uw / 2`, hence `λ_uw = 2n λ_L / sin θ_n`.
- **Ultrasonic speed from wavelength and frequency**: `v = λ_uw · ν_uw`.
- **Echo-ranging depth**: `h = vt / 2`.
- **Signalling beam cone half-angle (disc source of radius r)**: `sin θ = 0.61 λ / r` — smaller `λ` (higher frequency) → tighter beam.
- **LC tank frequency (driving magnetostriction / piezoelectric oscillator)**: `ν = 1 / [2π √(L₁ C₁)]`.

## Worked Example: Crystal thickness for a given ultrasonic frequency (Example 11.1)

A lead zirconate titanate (PZT) piezoelectric has `v = 4000 m/s`. What crystal thickness `t` gives a 5 MHz ultrasonic wave?

**Step 1.** For a piezoelectric crystal at resonance, the slab thickness equals half a wavelength inside the crystal: `t = λ/2 = v/(2ν)`.

**Step 2.** Substitute:
`t = 4000 / (2 × 5 × 10⁶) = 4000 / (10⁷) = 4 × 10⁻⁴ m = 0.4 mm`.

**Answer**: `t = 0.4 mm`.

This is the canonical pattern for any "design a transducer" problem: pick `ν` and `v`, then `t = v/(2ν)`. Always check that the chosen frequency is physically reachable by the crystal's natural mode — for very high `ν`, `t` becomes impractically thin.

---

**Supplementary worked example (Example 11.3) — acoustic-grating wavelength**:

Given: 3rd-order diffraction maximum of sodium light (`λ_L = 5890 Å`) at `θ = 2°`, ultrasonic wave in water forms an acoustic grating.

**Step 1.** Apply `λ_uw = 2n λ_L / sin θ_n`.
**Step 2.** Substitute: `λ_uw = (2 × 3 × 5890 × 10⁻¹⁰ m) / sin 2° = (3.534 × 10⁻⁶) / 0.0349 ≈ 1.01 × 10⁻⁴ m`.

**Answer**: `λ_uw ≈ 1.01 × 10⁻⁴ m`.

## Key Takeaways

1. **Three generation methods, all resonance-driven**: Galton's whistle (air column), magnetostriction (ferromagnetic rod), piezoelectric (quartz crystal). Each requires matching drive frequency to natural frequency for large amplitudes — off-resonance, you get nothing.
2. **Piezoelectric quartz is the standard transducer**: cut crystal so polar axis ⊥ face, drive with Hartley oscillator at `1/(2π√(LC))`, tune to crystal natural frequency, and you have a stable MHz-range source. Crystal thickness sets frequency: `t = v/(2ν)`.
3. **Acoustic grating = phase grating for light**: stationary ultrasonic waves in a liquid create alternating density planes spaced by `λ_uw/2`. Diffraction of monochromatic light through this gives wavelength via `λ_uw = 2nλ_L/sin θ_n` — the textbook method for measuring ultrasonic wavelength.
4. **Cavitation is the workhorse of ultrasonic processing**: stable (1–3 W/cm²) for gentle mixing, transient (>10 W/cm²) for sonochemistry. Transient bubble collapse is essentially a microreactor at ≈5000 K / ≈2000 atm — this is why ultrasound cleans, emulsifies, transesterifies oil to biodiesel, and disintegrates cells.
5. **Echo ranging is the universal sonar formula**: `h = vt/2`. Always divide by two; the signal goes down and back. Same formula applies to fathometers, leak detection, and submarine detection.
6. **Six parameters control cavitation**: frequency, intensity, solvent, temperature, external pressure, dissolved gas. Higher frequency makes cavitation harder; higher viscosity/surface tension inhibit it; monoatomic gas enhances it via nucleation.
7. **Ultrasound is not intrinsically safe**: high-intensity systems heat tissue and cavitate dissolved gases — they are used in *therapy* precisely because they damage cells. Low-intensity imaging (sonography) is the safe regime.

## Connects To

- **Ch 1 (Oscillations and Waves)** — every transducer in this chapter is a forced damped oscillator driven at resonance; the universal oscillator equation `ẍ + 2γẋ + ω₀²x = F(t)/m` governs quartz, magnetostrictive rods, and air columns alike.
- **Ch 5/6 (Electromagnetism / EM Waves)** — the LC tank circuit driving these oscillators, and the diffraction-grating formalism applied to acoustic gratings, both reuse the wave optics and circuit theory from earlier chapters.
- **Ch 12 (Non-Destructive Testing)** — ultrasonic crack detection (§11.7.d.ii) is one of the canonical NDT techniques introduced in the next chapter; this chapter supplies the physics, Ch 12 supplies the engineering workflow.
- **External: piezoelectric materials science** — beyond quartz, modern transducers use PZT (lead zirconate titanate), PVDF polymers, and lithium niobate; the piezoelectric coupling constant `d₃₃` is the standard figure of merit.
- **External: medical ultrasound / sonography** — the same piezoelectric transducer serves as both emitter and receiver in a sonogram; the time-of-flight echo principle (`h = vt/2`) underlies obstetric imaging, echocardiography, and lithotripsy.
- **External: sonar engineering** — passive and active sonar are direct applications of §11.9, with synthetic aperture sonar and target motion analysis (TMA) being the modern extensions.
- **Ch 3 (Diffraction)**: acoustic gratings used for steering ultrasonic beams (and the angular spectrum of a phased-array probe) reuse the single-slit and grating-diffraction formalisms from Ch 3; transducer-array beamforming is the engineering application of grating theory.
- **Ch 23 (Dielectric Materials) — deeper link**: the piezoelectricity that powers every transducer in this chapter is a Ch 23 topic (the direct piezoelectric effect); the standard figures of merit (d₃₃, k_t, g₃₃) are material parameters from Ch 23's electromechanical coupling framework.
