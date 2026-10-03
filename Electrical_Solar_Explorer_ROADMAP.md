# Electrical & Solar Explorer — Roadmap

## Core Idea
An interactive learning and reference app covering electrical theory, home/building wiring, solar power, electronics, digital logic, microprocessors, and advanced circuits.

The app should focus on:
- Interactive diagrams
- Simulations
- Calculators
- Tap-to-learn components
- Beginner and advanced explanations
- Safe educational guidance

## 1. Electrical Basics
- Ohm's Law calculator
- Power law calculator
- Volts, amps, ohms, and watts
- Series and parallel circuits
- AC vs. DC
- Frequency and RMS basics
- Current-flow simulation
- Open circuit and short circuit simulation

## 2. Wire & Cable
- AWG wire gauge reference
- Common uses for each wire gauge
- Copper vs. aluminum
- Solid vs. stranded
- NM-B, UF-B, THHN/THWN, and other common cable types
- Voltage-drop calculator
- Wire-length calculator
- Conductor resistance
- Visual wire-size comparison
- "What Wire Is This?" identification tool

## 3. Home & Building Wiring
- 120/240V service basics
- Hot, neutral, and ground
- Breaker panels
- Branch circuits
- Receptacles
- Single-pole switches
- 3-way switch concepts
- Dedicated appliance circuits
- GFCI and AFCI
- Grounding and bonding
- Junction boxes
- Conduit basics
- Common electrical symbols
- Interactive house electrical diagram
- Breaker/load simulation

## 4. Equipment Hookup
Interactive diagrams explaining:
- LINE
- LOAD
- NEUTRAL
- GROUND
- L1 / L2
- COM
- NO / NC
- Disconnects
- Fuses
- Breakers
- Nameplate ratings

Equipment examples:
- Motors
- Pumps
- Transformers
- Relays
- Contactors
- Thermostats
- Low-voltage lighting
- Generators
- RV electrical systems
- Solar equipment

### "Where Does This Wire Go?"
Tap a terminal on a diagram to see what it does and where it connects conceptually.

## 5. Resistor Color Codes
- Interactive resistor with tappable color bands
- 4-band resistors
- 5-band resistors
- 6-band resistors
- Resistance and tolerance calculation
- Reverse mode: enter resistance and show the required bands

Example:
Brown - Black - Red - Gold = 1 kΩ ±5%

## 6. Solar Power
- Panel watts, volts, and amps
- Series vs. parallel panels
- Total array voltage/current/wattage
- 12V / 24V / 48V systems
- Peak sun hours
- Daily energy production
- Solar panel sizing
- Charge-controller sizing
- MPPT vs. PWM
- Inverter sizing
- Solar voltage-drop calculator
- Battery charging estimates
- Appliance/load calculator

### Build My Solar System
User enters:
- Number of panels
- Panel wattage
- Battery-bank voltage
- Battery capacity
- Inverter size
- Sun hours
- Loads

The app shows estimated production, charging, runtime, and system compatibility.

### Solar Power Electronics Explorer
- Solar inverters: string, micro, hybrid, and off-grid
- MPPT vs. PWM charge controllers
- Charge-controller power/current estimate
- PV combiner boxes
- Series and parallel string concepts
- PV array Vmp/Imp/power calculator
- DC disconnects
- DC-rated fuses and breakers
- Surge protection
- Rapid shutdown concepts
- Battery disconnects, busbars, and shunts
- Inverter DC-current estimate
- Grounding and bonding concepts
- Simplified solar energy-flow diagrams

## 7. Batteries
- Lead-acid
- AGM
- Lithium
- LiFePO4
- Amp-hours
- Watt-hours
- Series and parallel battery banks
- Runtime calculator
- Charging time
- State-of-charge concepts
- Battery discharge simulation

## 8. Components & Electronics
Interactive lessons for:
- Resistors
- Capacitors
- Inductors
- Diodes
- LEDs
- LCD displays
- Seven-segment displays
- Transistors
- MOSFETs
- Potentiometers
- Relays
- Contactors
- Transformers
- Voltage regulators
- Op-amps
- Oscillators
- Filters
- Amplifiers
- Power supplies

### Power Electronics & Power Modules Explorer
- Power MOSFETs and IGBTs
- Single-switch, half-bridge, full-bridge, and six-pack modules
- Intelligent power modules (IPMs)
- Gate-driver circuits and isolation
- Freewheel diodes and snubbers
- DC-link capacitors
- Laminated busbars
- Current and temperature sensing
- Heatsinks, cold plates, and thermal interface materials
- Precharge circuits and contactors
- Switching-loss and conduction-loss concepts
- Silicon, SiC, and GaN power devices
- Applications in VFDs, solar inverters, UPS systems, EV drives, and converters
- Interactive half-bridge simulator

### LEDs & LCDs Explorer
- LED polarity and forward voltage
- LED resistor calculator
- PWM brightness simulation
- Seven-segment display simulation
- LCD segments and pixels
- LCD backlights and contrast
- LED vs. LCD comparison


### Solid-State Switching Explorer
- Solid-state relays (SSRs)
- AC-output vs. DC-output SSRs
- SCRs / thyristors
- TRIACs and DIACs
- Optocouplers / opto-isolators
- Zero-cross switching
- Phase-angle control concepts
- Leakage current and minimum-load behavior
- Holding current, surge current, dv/dt, and di/dt
- Snubbers and thermal management
- Mechanical relay vs. solid-state relay comparison
- Interactive SSR concept simulator
- SSR heat-loss calculator


### Op-Amps & Analog Circuits Explorer
- Operational amplifiers and comparators
- Inverting and non-inverting gain
- Voltage followers and buffers
- Summing and differential amplifiers
- Integrators and differentiators
- Active filters
- Instrumentation amplifiers
- Hysteresis concepts
- 555 timer circuits
- Op-amp gain and 555 timer calculators
- Supply rails, bandwidth, and slew-rate limits

## 9. Motors & Controls
- AC motors
- DC motors
- Single-phase vs. three-phase
- Horsepower
- Running current
- Starting current
- Rotation concepts
- Stators, rotors, shafts, bearings, windings, and cooling fans
- Start and run capacitors
- Centrifugal switches
- Brushes and commutators
- Contactors and motor starters
- Overload relays and thermal protection
- VFDs and soft starters
- Encoders and feedback
- Couplings and gearboxes
- Motor nameplates
- Synchronous-speed and slip calculators
- Motor control diagrams
- Relay/contactor simulation

## 10. Generators & Alternators
- Electromagnetic induction
- AC vs. DC generation
- Rotors and stators
- Field windings and excitation
- Slip rings and commutators
- Automotive alternators
- Rectifier bridges and voltage regulators
- Portable and standby generators
- Governors and AVRs
- Frequency / RPM / pole calculator
- Mechanical-to-electrical power calculator
- Generator safety and transfer switches

## 11. Digital Electronics
- Binary
- Hexadecimal
- AND
- OR
- NOT
- NAND
- NOR
- XOR
- Flip-flops
- Counters
- Registers
- Clocks
- Memory
- Buses
- ADC / DAC

### Logic Simulator
Flip inputs between 0 and 1 and watch outputs change instantly.


### Digital Logic Explorer
- Interactive AND, OR, NOT, NAND, NOR, XOR, and XNOR logic
- Binary, decimal, and hexadecimal conversion
- Latches and flip-flops
- Counters and registers
- Multiplexers and decoders
- ADC and DAC basics
- Live Boolean logic simulator

## 11. Microprocessors & Computer Circuits
- CPU basics
- ALU
- Registers
- Memory
- Clock
- Instruction decoder
- Data buses
- Inputs and outputs
- GPIO
- PWM
- Analog inputs
- Interrupts
- UART
- I2C
- SPI

### Inside the CPU Simulation
Step through a simple instruction one clock cycle at a time and watch data move through the processor.

## Sensors & Switches
- Pushbuttons
- Toggle, rocker, slide, rotary, selector, and key switches
- Emergency-stop concepts
- DIP and reed switches
- SPST, SPDT, DPST, and DPDT contact arrangements
- Normally-open and normally-closed contacts
- Momentary vs. maintained action
- Snap action, contact bounce, and debounce
- Pressure, float/level, flow, temperature, and vacuum switches
- Limit switches
- Inductive and capacitive proximity sensors
- Magnetic / Hall / reed sensing
- Photoelectric sensors: through-beam, retroreflective, diffuse, background suppression
- PNP/NPN and sourcing/sinking concepts
- Sensing distance, hysteresis, response time, and output types
- Interactive switch and sensor simulations

## PLCs & Industrial Automation
- PLC CPUs, scan cycles, and memory
- Digital inputs and outputs
- Analog inputs and outputs
- Ladder logic
- Timers and counters
- 4–20 mA and 0–10 V signals
- HMI basics
- EtherNet/IP, PROFINET, and Modbus concepts
- Interactive START/STOP/fault simulation
- 4–20 mA scaling calculator

## 12. Test Equipment Explorer
### Virtual Multimeter
- DC and AC voltage
- Resistance
- Continuity
- Diode mode
- Simulated readings and explanations

### Oscilloscope Explorer
- Sine, square, and triangle waveforms
- Frequency, period, amplitude, and peak-to-peak voltage
- Waveform visualization

### Other Test Equipment
- Clamp meter concepts
- Inrush current
- Insulation resistance / megohmmeter
- Logic probe basics
- Continuity testing
- Safe meter lead and jack use
- CAT ratings and high-energy measurement concepts
- Common measurement mistakes
- Oscilloscope grounding cautions

## 13. Interactive Circuit Lab
### Build It and Test It
Allow users to assemble virtual circuits using:
- Batteries
- Power supplies
- Switches
- Resistors
- Lamps
- LEDs
- Fuses
- Relays
- Motors
- Solar panels
- Loads

The app calculates and displays:
- Voltage
- Current
- Resistance
- Wattage
- Component state

### Fault Simulator
Introduce:
- Open circuit
- Short circuit
- Reversed polarity
- Failed component
- Blown fuse
- Overload
- Ground fault concept

Then let the user diagnose the problem.

## 14. Simulations
- Current flow
- Series/parallel circuits
- Breaker trip
- Voltage drop
- Solar production
- Battery charging/discharging
- Motor starting
- Relay operation
- Transformer operation
- AC waveform
- Resistor bands
- Logic gates
- CPU instruction cycle
- Multimeter readings

### Slow Motion Mode
Pause or slow a simulation so the user can see each stage and read explanations.

## 15. Learning Modes
- Beginner explanations
- Advanced explanations
- Tap-to-learn diagrams
- Interactive quizzes
- Electrical symbols quiz
- Troubleshooting trainer
- Homeowner mode
- Student mode
- Solar mode
- Electronics mode
- Advanced circuit mode

## Radio & RF
- RF frequency and wavelength
- Quarter-wave antenna estimates
- Antennas and radiation concepts
- AM, FM, PM, ASK, FSK, PSK, and QAM
- 50 Ω and 75 Ω transmission lines
- Coaxial cable and characteristic impedance
- SWR and reflected power
- RF filters
- Mixers and local oscillators
- Low-noise amplifiers and power amplifiers
- Demodulation
- RF safety concepts

## Advanced Transformers & Power Distribution
- Three-phase power systems
- Delta and wye connections
- Line vs. phase voltage/current relationships
- Three-phase kVA/kW calculations
- Transformer turns ratios
- Current transformers (CTs)
- Potential / voltage transformers (PTs/VTs)
- Isolation transformers
- Autotransformers
- Control and distribution transformers
- Dry-type and pad-mounted transformers
- Generation-to-service distribution path
- Transformer and distribution safety

## Troubleshooting Explorer
- Systematic troubleshooting method
- Symptom definition and expected-condition comparison
- Divide-and-conquer diagnosis
- Interactive fault trainer
- Virtual electrical measurements
- Open-circuit and short-circuit patterns
- Voltage-drop and bad-connection heating calculator
- Intermittent-fault concepts
- Motor, sensor, power-supply, battery, and control faults
- Choosing multimeter, scope, clamp meter, insulation tester, and logic tools
- Safe troubleshooting practices

## Protection Devices
- Fuses and circuit breakers
- GFCI / RCD
- AFCI
- Motor overload protection
- Surge protective devices
- MOVs, TVS diodes, and gas-discharge tubes
- Time-current concepts
- Layered protection
- Interactive overcurrent demonstrator

## Grounding, Bonding & Shielding
- Grounding vs. bonding
- Equipment grounding conductors
- Grounding electrodes
- Neutral / grounded-conductor concepts
- Bonding jumpers
- Ground loops
- Cable shields
- EMI / RFI coupling
- Signal ground vs. protective earth
- Simplified ground-loop calculator

## Lighting & Lamps
- Incandescent and halogen
- Fluorescent and ballasts
- HID lighting
- LEDs and LED drivers
- OLED basics
- Lumens, lux, and efficacy
- Color temperature and CRI
- Dimming methods
- Flicker concepts
- Interactive lighting calculator

## 16. Safety & Code
- Clearly separate electrical theory from code requirements
- Country/code-region selector
- Warn that electrical rules vary by jurisdiction and code edition
- Encourage de-energizing circuits before work
- Never tell users to rely on wire color alone
- For mains/building wiring, explain when a qualified electrician or permit may be required
- Manufacturer instructions take priority for equipment connections

## Possible App Names
- Electrical & Solar Explorer
- Electrical Explorer
- Electrical Learning Lab
- ElectroLab
- Electrical & Electronics Explorer

## Core Design Principle
**Read it → See it → Simulate it → Change it → Test what you learned**

A DONCO-BAYCITY™ App


## Learning Tools & Progress
- A–Z Electrical Glossary with instant search
- Alphabet filtering
- Direct links from glossary terms to related Explorer pages
- Section quizzes for Electrical Basics, Components, Motors & Controls, PLCs & Automation, Test Equipment, and Troubleshooting
- Best quiz scores saved locally on the device
- My Progress page
- User-marked completed learning sections
- Overall completion percentage
- Quiz score summary
- Local progress storage with no account required
