import { startTime, endTime, VoltageSource, Resistor_1, Resistor_2, FixedResistor, FinalResistance, SimulationTime } from "./constants.js";
import Simulator from "./Simulator.js";
import Voltmeter from "./Voltmeter.js";
import Ammeter from "./Ammeter.js";
import Ohmmeter from "./Ohmmeter.js";
import OhmmeterDerived from "./OhmmeterDerived.js";

function runSimulation() {
    // Init & Start Simulator
    const simulator = new Simulator(startTime, endTime, VoltageSource, Resistor_1, Resistor_2, FixedResistor, FinalResistance);
    simulator.startSimulation();

    // Init & start Voltmeter
    const voltmeter = new Voltmeter(simulator);
    voltmeter.startVoltmeterMeasurement();

    // Init & start Ammeter
    const ammeter = new Ammeter(simulator);
    ammeter.startAmmeterMeasurement();

    // Init & start Ohmmeter
    const ohmmeter = new Ohmmeter(voltmeter, ammeter);
    ohmmeter.startOhmmeterMeasurement();

    // Init & start Ohmmeter Derived class
    const ohmmeterDerived = new OhmmeterDerived(voltmeter, ammeter);
    ohmmeterDerived.startOhmmeterMeasurement();

    // Clear Intervals
    setTimeout(() => {
        voltmeter.clearInterval();
        ammeter.clearInterval();
        ohmmeter.clearInterval();
        ohmmeterDerived.clearInterval();
        console.log("-----------------");
        console.log(`End of simulation after ${SimulationTime / 1000} Seconds`);
    }, SimulationTime);
}

runSimulation();
