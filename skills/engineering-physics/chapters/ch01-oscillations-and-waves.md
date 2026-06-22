# Chapter 1: Oscillations and Waves

## Core Idea
Periodic motion of any kind — mechanical, electrical, or wave-based — is governed by **one second-order linear ODE**: `d²x/dt² + 2γ(dx/dt) + ω₀²x = F(t)/m`. Master this single equation under four regimes (free, damped, forced, coupled) and you simultaneously understand pendulums, RLC circuits, bridges in wind, lasers, and matter waves.

## Frameworks Introduced

- **The Universal Oscillator Equation** `ẍ + 2γẋ + ω₀²x = F(t)/m`
  - When to use: any system with a linear restoring force + dissipative drag + possible driving term.
  - How: identify mass-equivalent `m`, restoring constant `k → ω₀² = k/m`, damping `b → γ = b/2m`, driver amplitude/frequency. Read off behavior from `(γ, ω₀)` ratio.

- **Three damping regimes** (set by `γ` vs `ω₀`)
  - `γ < ω₀` → **underdamped**: oscillates with `ω₁ = √(ω₀²−γ²)`, envelope `e^(−γt)`.
  - `γ = ω₀` → **critically damped**: fastest return to equilibrium, no oscillation.
  - `γ > ω₀` → **overdamped**: slow exponential decay, no oscillation.

- **Quality factor Q** = `ω₁/(2γ) = 2π × (Energy stored / Energy lost per cycle)`
  - High Q → sharp resonance, narrow bandwidth, low losses (laser cavities, quartz crystals).
  - Low Q → broad resonance, fast decay (shock absorbers).

- **Wave packet → group velocity vs phase velocity**
  - Phase velocity `v_p = ω/k` — speed of a single sinusoid's crest.
  - Group velocity `v_g = dω/dk` — speed of the *envelope* / signal / energy.
  - Equal only in non-dispersive media (light in vacuum). Otherwise diverge.

- **Heisenberg Uncertainty (as a wave-packet theorem)** `Δx · Δp ≥ ħ/2`
  - Derived from the *classical* fact that a localized wave packet must contain a spread of wave numbers (`Δx · Δk ≥ 1/2`). Quantum mechanics inherits this from wave kinematics, not from measurement disturbance.

## Key Concepts

- **Mean position / amplitude (r) / time period (T) / frequency (ν)**: `T = 1/ν`.
- **Hooke's Law**: `F = −kx` — defines the linear restoring regime; everything in Ch1 assumes it.
- **Natural angular frequency** `ω₀ = √(k/m)`.
- **Damping coefficient** `γ = b/(2m)` from drag force `F_d = −b(dx/dt)`.
- **Resonance**: driving frequency `ω` matches the system's natural frequency; amplitude peaks.
- **Displacement vs amplitude resonance**: displacement resonance is at `ω_r = √(ω₀² − 2γ²)`, slightly below `ω₀`; only velocity-resonance hits exactly `ω₀`.
- **Coherent vs incoherent superposition**: coherent waves keep a fixed phase relation → stable interference; incoherent ones average to intensity sum.
- **Stationary wave**: counter-propagating identical waves superpose → fixed nodes/antinodes, *no* energy flux across any plane.
- **Wave packet**: spatially localized envelope built from a band of `k`s; carries information.

## Mental Models

- **Use the ODE-isomorphism principle when you see "oscillation"**: any time you see L·d²q/dt² + R·dq/dt + q/C = V(t), recognize it is the *same* equation as the mass-spring-damper — just rename `m→L, b→R, k→1/C, x→q`. Solve once, apply everywhere (LCR circuits, acoustic cavities, NMR).
- **Think of damping as a complex frequency**: substituting `x = e^(pt)` always gives `p = −γ ± √(γ²−ω₀²)`. The sign of the discriminant *is* the regime. No memorization needed.
- **Resonance Q is amplification AND selectivity at once**: doubling Q halves the bandwidth *and* doubles the on-resonance amplitude. You cannot have one without the other in a linear system.
- **Phase velocity is a mathematical artifact; group velocity is physical**: information, energy, and signals always travel at `v_g`. Phase velocity can exceed `c` without violating relativity; group velocity never does.

## Anti-patterns

- **Treating Heisenberg as "measurement disturbance"**: the inequality is a *kinematic* property of waves; it exists for classical sound packets too. The quantum part is only that `p = ħk`.
- **Confusing phase velocity with signal speed**: claiming "information travels at `v_p`" because the formula looks simpler. In a dispersive medium it is wrong.
- **Forgetting the negative sign in F = −kx**: drops the entire oscillatory behavior — becomes uniform acceleration.
- **Adding amplitudes when sources are incoherent**: amplitudes only add when phases are locked. For incoherent light, *intensities* add.
- **Assuming displacement resonance peaks at ω₀**: the peak shifts to `ω_r = √(ω₀² − 2γ²)` for damped systems; only the *undamped* idealization peaks at ω₀.

## Reference Tables

### Damping regimes
| Condition | Name | Solution | Behavior |
|---|---|---|---|
| `γ = 0` | Undamped (SHO) | `x = A cos(ω₀t + φ)` | Eternal oscillation |
| `0 < γ < ω₀` | Underdamped | `x = A e^(−γt) cos(ω₁t + φ)`, `ω₁ = √(ω₀²−γ²)` | Decaying oscillation |
| `γ = ω₀` | Critically damped | `x = (A + Bt) e^(−γt)` | Fastest non-oscillating return |
| `γ > ω₀` | Overdamped | `x = A₁ e^(p₁t) + A₂ e^(p₂t)` | Slow exponential return |

### Mechanical ↔ Electrical analogy
| Mechanical | Electrical |
|---|---|
| Mass `m` | Inductance `L` |
| Damping `b` | Resistance `R` |
| Spring `k` | Inverse capacitance `1/C` |
| Displacement `x` | Charge `q` |
| Velocity `dx/dt` | Current `i = dq/dt` |
| Force `F` | EMF `V` |
| Natural freq. `√(k/m)` | `1/√(LC)` |

### Progressive vs stationary waves
| | Progressive | Stationary |
|---|---|---|
| Source | Single oscillation | Two identical counter-propagating waves |
| Net energy flux | Yes | **No** |
| Nodes | None | Permanent (zero amplitude) |
| Phase across medium | Continuous change | Same phase within a segment, π flip across nodes |
| All particles at mean position simultaneously? | No | Yes (but at different velocities) |

## Worked Example: Group velocity of a two-wave superposition

Given `ψ₁ = 12 sin(4πt − 5x)` and `ψ₂ = 16 sin(8πt − 7x)`, find `v_g`.

1. Read off `(ω₁, k₁) = (4π, 5)` and `(ω₂, k₂) = (8π, 7)`.
2. For a two-component packet, `v_g = Δω/Δk = (8π − 4π)/(7 − 5) = 4π/2 = 2π ≈ 6.28` m/s.
3. Note the phase velocities differ — `v_{p1} = 4π/5`, `v_{p2} = 8π/7` — so the medium is dispersive and `v_g ≠ v_p`. The envelope of the beat pattern moves at `v_g`.

This is the calculation pattern for any "find group speed" problem: never integrate; just take finite differences of `(ω, k)`.

## Key Takeaways

1. **One ODE, four regimes, two domains** — mechanical and electrical. Don't relearn the math; relabel the symbols.
2. **Use γ vs ω₀ as a switchboard** — the damping regime, the resonance peak shift, and the Q factor all fall out of this single ratio.
3. **High Q = sharp, slow, selective; low Q = broad, fast, forgiving** — pick by application (radio tuner vs door damper).
4. **Group velocity carries signal; phase velocity is a math convenience** — never let a problem use phase velocity for energy transport.
5. **Heisenberg's `Δx·Δk ≥ 1/2` is wave kinematics** — pre-quantum, universal to any wave packet.
6. **Coherence is the precondition for interference** — without phase locking, intensities just add.
7. **Stationary waves transport zero net energy** — the energy sloshes locally between KE and PE between nodes.

## Connects To

- **Ch 2 (Interference)** — superposition principle from §1.16 is the foundation of all interference patterns.
- **Ch 5 (Electromagnetism) / Ch 6 (EM Waves)** — the mechanical-electrical analogy maps spring constants to LC circuits and gives wave equations from Maxwell's equations.
- **Ch 7 (Quantum Physics)** — Heisenberg uncertainty from §1.15 + matter-wave concept (de Broglie) inherit directly from this chapter's wave-packet kinematics.
- **Ch 10 (Architectural Acoustics) / Ch 11 (Ultrasonics)** — stationary waves and resonance directly used in room acoustics and ultrasonic transducer design.
- **External: control theory** — critical damping is the design target for stable, responsive servo systems and shock absorbers.
