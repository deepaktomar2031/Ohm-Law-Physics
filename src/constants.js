export const SimulationTime = 10000; // in ms (As Simulation runs for 10 sec)

export const startTime = new Date().getTime();
export const endTime = startTime + SimulationTime;

export const VoltageSource = 10;
export const Resistor_1 = 0;
export const Resistor_2 = 100000;
export const FixedResistor = 30000;
export const FinalResistance = 100000;

export const SimulatorInterval = 100; // 100 ms interval for Registor
export const VoltmeterInterval = 100; // 100 ms interval for Voltmeter
export const AmmeterInterval = 300; // 300 ms interval for Ammeter
export const OhmmeterInterval = 1000; // 1 sec interval for Ohmmeter
