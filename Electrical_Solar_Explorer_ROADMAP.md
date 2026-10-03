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

### LEDs & LCDs Explorer
- LED polarity and forward voltage
- LED resistor calculator
- PWM brightness simulation
- Seven-segment display simulation
- LCD segments and pixels
- LCD backlights and contrast
- LED vs. LCD comparison

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

## 10. Digital Electronics
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

## 12. Virtual Test Equipment
### Virtual Multimeter
- Voltage
- Current
- Resistance
- Continuity
- Diode mode

User places virtual probes on circuit points and sees simulated readings.

Possible future tools:
- Oscilloscope
- Clamp meter
- Logic probe
- Bench power supply

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
