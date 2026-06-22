# Chapter 12: Non-Destructive Testing

## Core Idea
Non-destructive testing (NDT) is a portfolio of six complementary physical probes (visual, dye penetrant, magnetic particle, eddy current, radiographic, ultrasonic) — each one locks onto a different combination of material class (ferrous vs non-ferrous vs non-conductor) and flaw depth (surface, near-surface, internal) — and the right method is selected by cross-referencing the matrix of material × flaw type, not by a single "best" technique.

## Frameworks Introduced

- **Six core NDT methods** (the author's canonical list)
  - When to use: as a decision tree — first classify the material (ferrous / non-ferrous / non-conductor), then the flaw depth (surface / near-surface / internal), then the geometry access (single-sided / both sides).
  - How: Visual & optical → Dye penetrant → Magnetic particle → Eddy current → Radiography → Ultrasonic, matching each method's capability window to the inspection need.

- **Pulse–echo ultrasonic ranging** `ℓ = (1/2) v Δt`
  - When to use: any single-sided thickness or flaw-depth measurement in a homogeneous elastic solid where the speed of sound `v` is known.
  - How: launch a short ultrasonic pulse from a piezoelectric transducer, time the round trip `Δt` to the interface or flaw, divide `v · Δt` by 2 to get the one-way distance. Calibrate against a reference block of the same material.

- **Wave-mode velocity formulas** for an elastic solid (thin rod / longitudinal / transverse)
  - When to use: identifying a material from its sound velocity, choosing the right probe mode, or computing echo times without direct measurement.
  - How: pick the mode matching the geometry — `v_t` for thin rods (purely longitudinal in a wire), `v_L` for bulk longitudinal, `v_T` for bulk transverse — then apply in `ℓ = ½ v Δt`.

- **Radiographic absorption contrast** — denser / thicker regions → more X-ray or γ-ray absorption → lighter (or, for voids on light background, darker) areas on film
  - When to use: detecting internal volumetric flaws, voids, slag, porosity in welds and castings, especially when a permanent pictorial record is needed.
  - How: place object between radiation source and film; differential absorption maps the internal density geometry to film darkness.

- **Flux-leakage principle** (Magnetic particle testing)
  - When to use: surface and near-surface cracks in ferromagnetic parts only.
  - How: magnetize the part with field lines crossing the suspected crack direction. At the crack edges the field "leaks" out into air; iron particles (dry or in liquid suspension) cluster at the leak points, making the invisible crack visible. Magnetize in **at least two directions** to avoid missing cracks parallel to the first field.

- **Eddy-current impedance sensing**
  - When to use: surface and near-surface flaws in *electrical conductors only*, plus material-property measurements (alloy, hardness, heat-treat condition, conductivity).
  - How: drive a coil with AC; the induced eddy currents in the part produce a back-magnetic field that changes coil impedance. Flaws and property variations register as minute impedance changes; no physical contact with the part is needed.

- **Dye penetrant — capillary bleed-out**
  - When to use: surface-breaking flaws in *non-ferromagnetic* parts where no electrical/magnetic probe can be used.
  - How: clean → apply penetrant (≈15 min capillary dwell) → remove excess → apply developer (chalk powder) → developer acts as blotter drawing trapped penetrant out of the crack → read the "bleedout" visually or under UV (fluorescent dye).

## Key Concepts

- **NDT / NDI / NDE** — three names for the same idea: analyze a part without damaging it. NDT = testing, NDI = inspection, NDE = evaluation (NDE is the broadest, including property measurement).
- **Flaw detection vs property measurement** — NDT is not just pass/fail crack detection; it also measures fracture toughness, ductility, conductivity, hardness, grain size, nodularity, thickness.
- **Ultrasound**: sound at `f > 20 kHz`; in NDT typically `0.5–25 MHz` (wavelengths in mm); lower band `50–500 kHz` for wood, concrete, cement.
- **Piezoelectric transducer** — the same crystal both generates the pulse (driven electronically) and receives the echo (quiescent detection mode).
- **Couplant** — a liquid (glycerine, oil, grease) between probe and part. Required because ultrasonic energy is heavily reflected at a solid/air interface.
- **Time base** — horizontal sweep on the CRT of a flaw detector, calibrated so the trace distance corresponds to depth in the material.
- **Two-dimensional vs three-dimensional defects** — planar defects (cracks) need the beam perpendicular to their plane; volumetric defects (porosity) reflect from any angle.
- **Pulse–echo round-trip**: `Δt` measured between initial pulse (point "a") and flaw echo (point "b") and back-wall echo (point "c") on the CRT.
- **Young's modulus `Y`, shear modulus `G`, density `ρ`, Poisson's ratio `σ`** — the four material constants that set ultrasonic velocities in a solid.

## Mental Models

- **Use the material-flaw matrix as the selection tool**: rows = material class (ferrous forgings, ferrous welds, non-ferrous components, castings, aircraft parts…), columns = flaw type (surface crack, sub-surface, internal discontinuity, lack of bond/fusion, inclusions, thickness). Each cell names the *recommended* method(s). Don't pick a method by intuition — read across the row.
- **Think of ultrasonic inspection as radar in metal**: same geometry as sonar / radar — emit a short pulse, time the echo, infer range. The ½ factor in `ℓ = ½ v Δt` is the round-trip compensation.
- **Think of NDT methods as a sensitivity pyramid**: visual (no physical probe, lowest sensitivity) → penetrant / magnetic particle (surface only) → eddy current (surface/near-surface, conductors) → ultrasonic / radiographic (full bulk, highest sensitivity, highest cost). Move up only when the lower methods fail the requirement.
- **Magnetize in two directions**: the magnetic particle method has a *blind direction* — cracks parallel to the applied field produce no leakage. Always re-magnetize perpendicular to the first direction.

## Anti-patterns

- **Picking "ultrasound" as a universal answer**: UT requires couplant, smooth accessible surfaces, and skilled interpretation; coarse-grained cast iron gives high signal noise; thin or rough parts are difficult. It is not a default — it is the right answer only after material and geometry fit.
- **Using dye penetrant or magnetic particle for internal flaws**: both are *surface* methods by physical principle (capillary action / flux leakage in air gap). Internal flaws need ultrasound or radiography.
- **Applying eddy current to insulators**: the method *requires* an electrical conductor to host eddy currents. Insulators, plastics, ceramics need a different method entirely.
- **Magnetizing a part in only one direction for MT**: leaves a blind quadrant of crack orientations. The chapter explicitly requires at least two perpendicular magnetizations.
- **Treating the CRT peak height as flaw size directly**: it is *roughly* proportional to the reflector area, not the flaw size; only relative comparison against a calibration block is quantitative.
- **Forgetting single-sided vs two-sided access when choosing radiography**: RT needs the source on one side and the film on the other. If only one side is accessible, radiography is impossible — pulse–echo UT is the substitute.
- **Confusing the radiographic image polarity**: thicker/denser regions *stop more radiation* and appear *lighter*; voids appear *darker* (more radiation reached the film). Forgetting the sign inverts the diagnosis.
- **Reading UT echoes without calibration against the test material's `v`**: the time base is only meaningful once the sound velocity of *that specific* material is set on the instrument. Calibrate against a reference block.

## Reference Tables

### Comparison of NDT methods (reproduced from §12.4)

| Attribute | U.T. (Ultrasonic) | R.T. (Radiography) | E.T. (Eddy current) | M.T. (Magnetic particle) | P.T. (Penetrant) |
|---|---|---|---|---|---|
| Capital cost | Medium to high | High | Low to medium | Medium | Low |
| Consumable cost | Very low | High | Low | Medium | Medium |
| Time of results | Immediate | Delayed | Immediate | Short delay | Short delay |
| Effect of geometry | Important | Important | Important | Not too important | Not too important |
| Access problems | Important | Important | Important | Important | Important |
| Type of defect | Internal | Most | External | External near surface | Surface breaking |
| Relative sensitivity | High | Medium | High | Low | Low |
| Operator skill | High | High | Medium | Low | Low |
| Operator training | Important | Important | Important | Important | Not important |
| Training needs | High | High | Medium | Low | Low |
| Portability of equipment | High | Low | High to medium | High to medium | High |
| Capabilities | Thickness gauging, composition testing | Thickness gauging | Thickness gauging, grade sorting | Defects only | Defects only |

### Material × flaw-type → recommended NDT method (reproduced from §12.5)

| Material | Surface cracks | Sub-surface | Internal flaws | Lack of bond/fusion | Inclusions / slag / porosity | Thickness |
|---|---|---|---|---|---|---|
| Ferrous forgings / stampings | M.T. | M.T. & U.T. | R.T. & U.T. | — | R.T. & U.T. | U.T. |
| Ferrous raw / rolled | M.T. | M.T. & U.T. | U.T. | — | M.T. & U.T. | U.T. |
| Ferrous tube & pipe | M.T. & E.T. | M.T. & U.T. | U.T. | U.T. | M.T. & U.T. | U.T. |
| Ferrous welds | M.T. & U.T. | U.T. | R.T. & U.T. | R.T. & U.T. | R.T. & U.T. | U.T. |
| Steel castings | M.T. | M.T. & U.T. | R.T. & U.T. | — | R.T. & U.T. | U.T. |
| Iron castings | M.T. | U.T. & E.T. | U.T. | — | R.T. & U.T. (U.T. for material quality) | U.T. |
| Non-ferrous components (raw) | P.T. & E.T. | — | R.T. & U.T. | U.T. | P.T. & U.T. | U.T. |
| Ferrous components (finished) | M.T. | U.T. & E.T. | R.T. & U.T. | U.T. | M.T. & U.T. | U.T. |
| Non-ferrous components (finished) | P.T. & E.T. | U.T. & E.T. | R.T. & U.T. | — | U.T. & E.T. | U.T. |
| Aircraft ferrous components | R.T. & M.T. | M.T. & U.T. | R.T. & U.T. | U.T. | M.T. & U.T. | U.T. |
| Aircraft non-ferrous components | R.T., P.T. & E.T. | R.T. & U.T. | R.T. & U.T. | U.T. | P.T. & U.T. | U.T. |

### NDT frequency / application map

| Method | Frequency / probe | Typical application |
|---|---|---|
| UT — flaw detection | 1–6 MHz | Most metals, plastics, composites |
| UT — general NDT | 0.5–25 MHz | mm wavelengths in metals |
| UT — low frequency | 50–500 kHz | Wood, concrete, cement (less dense) |
| Eddy current | Varies with coil & material | Conductors only, surface/near-surface |
| Radiography | X-rays, γ-rays (<100 nm wavelength) | Internal volumetric flaws |
| MT (iron particles) | 20–30 μm particles in liquid or dry | Ferromagnetic surface/near-surface |
| Penetrant dwell | ≈15 min capillary | Surface-breaking in non-ferrous |

## Key Equations

- **Pulse–echo ranging**: $\ell = \dfrac{1}{2}\, v \, \Delta t$ — round-trip time × velocity ÷ 2 = one-way distance to the flaw or back wall.
- **Thin-rod (wire) longitudinal velocity**: $v_t = \sqrt{\dfrac{Y}{\rho}}$ — applies when the rod diameter is small compared to the wavelength.
- **Bulk longitudinal velocity**: $v_L = \sqrt{\dfrac{Y(1-\sigma)}{\rho\,(1+\sigma)(1-2\sigma)}}$ — fastest mode in an unbounded elastic solid.
- **Bulk transverse (shear) velocity**: $v_T = \sqrt{\dfrac{Y}{2\rho(1+\sigma)}} = \sqrt{\dfrac{G}{\rho}}$ — slower than longitudinal; right-angle polarization to propagation.
- **Poisson's ratio from `Y` and `G`**: $\sigma = \dfrac{Y}{2G} - 1$ — bridge between the two elastic moduli when only one is tabulated.

## Worked Example: Ultrasound in a brass rod (Example 12.2 + 12.3 from the text)

Given `Y = 9.1 × 10¹⁰ N/m²`, `G = 3.5 × 10¹⁰ N/m²`, `ρ = 8500 kg/m³`. Find thin-rod velocity, then longitudinal and transverse bulk velocities.

1. Compute Poisson's ratio first (it is needed for the bulk velocities):
$$\sigma = \frac{Y}{2G} - 1 = \frac{9.1 \times 10^{10}}{2 \times 3.5 \times 10^{10}} - 1 = 1.3 - 1 = 0.3$$

2. Thin-rod velocity:
$$v_t = \sqrt{\frac{Y}{\rho}} = \sqrt{\frac{9.1 \times 10^{10}}{8500}} \approx 3272.0 \text{ m/s}$$

3. Bulk longitudinal velocity:
$$v_L = \sqrt{\frac{Y(1-\sigma)}{\rho(1+\sigma)(1-2\sigma)}} = \sqrt{\frac{9.1 \times 10^{10} \times 0.7}{8500 \times 1.3 \times 0.4}} \approx 3796.3 \text{ m/s}$$

4. Bulk transverse velocity:
$$v_T = \sqrt{\frac{Y}{2\rho(1+\sigma)}} = \sqrt{\frac{9.1 \times 10^{10}}{2 \times 8500 \times 1.3}} \approx 2029.2 \text{ m/s}$$

5. **Sanity check the mode ordering**: always `v_L > v_t > v_T` for metals. Here `3796 > 3272 > 2029` — correct ordering, so the numbers are physically plausible. Note also that `v_t < v_L` because bulk longitudinal stiffens as the rod's lateral contraction is suppressed — the `(1+σ)(1−2σ)` factor in the denominator is < 1 for any `σ > 0`.

## Worked Example: Locating an internal crack by pulse–echo (Example 12.1)

Given `v = 6400 m/s` (ultrasound in aluminum) and round-trip time `Δt = 10⁻⁴ s`. Find the depth of the crack.

1. Apply the pulse–echo formula:
$$\ell = \frac{1}{2} v \Delta t = \frac{6400 \times 10^{-4}}{2} = \frac{0.64}{2} = 0.32 \text{ m} = 32 \text{ cm}$$

2. **Interpretation**: the echo came back after `10⁻⁴` s, which is the time to travel down *and back*. Without the ½ factor you would have diagnosed a 64 cm crack that does not exist. This is the single most common UT calculation error.

## Key Takeaways

1. **Use the material × flaw-type matrix to pick the method** — never default to UT. The same method can be ideal for one cell and impossible for an adjacent cell.
2. **UT and RT are the only methods that see internal flaws** — all the others (VOT, DPT, MT, ET) are surface or near-surface by physical principle.
3. **Magnetize in at least two directions for MT** — single-direction magnetization has a blind quadrant; the chapter explicitly requires the second orthogonal sweep.
4. **`ℓ = ½ v Δt` is the workhorse equation of UT** — always calibrate the time base against a known thickness of the same material before trusting any depth reading.
5. **Mode matters in UT** — longitudinal waves are faster and reach deeper; transverse waves reveal different flaw orientations; thin-rod velocity applies only to wire-like geometries. Pick by mode, not just by frequency.
6. **Dye penetrant is the universal fallback for non-ferrous surface cracks** — when the part isn't magnetic and isn't an electrical conductor, DPT is often the only simple option.
7. **Skill ceiling varies dramatically across methods** — penetrant and MT need low operator skill; UT and RT need high skill. Budget training time, not just equipment cost.

## Connects To

- **Ch 1 (Oscillations and Waves)** — ultrasonic NDT is applied acoustics: the wave equation, reflection at impedance discontinuities, and pulse-echo ranging all rely on the kinematics from Ch 1.
- **Ch 5 (Electromagnetism) / Ch 6 (EM Waves)** — eddy current testing is built on Faraday's law; radiography is the penetration of EM waves shorter than 100 nm through matter, governed by absorption-vs-thickness density laws.
- **Ch 11 (Ultrasonics)** — the ultrasonic transducer (piezoelectric crystal), pulse generation, and velocity formulas `v_L`, `v_T`, `v_t` come directly from the ultrasonic principles chapter; Ch 12 adds the NDT application and CRT readout.
- **Ch 8 (Elasticity / Mechanical Properties of Materials)** — the `Y`, `G`, `σ`, `ρ` constants in the velocity formulas are the same elastic moduli used to classify materials; UT is in fact a tool for *measuring* those constants (e.g., nodularity in S.G. cast iron).
- **External: ASTM / ASME standards** — real NDT practice is governed by standards such as ASTM E1444 (MT), E1419 (UT), E1742 (RT), E165 (PT). The chapter's matrix maps directly to the standard method codes.
- **External: medical ultrasound** — the same pulse-echo principle used in flaw detection is used in obstetric imaging; the difference is frequency and the medium (gel vs couplant, tissue vs metal).
