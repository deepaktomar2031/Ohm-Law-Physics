import { VoltmeterInterval } from "./constants.js";
import FormattedTimestamp from "./utils.js";
import { startTime } from "./constants.js";

export default class Voltmeter {
    constructor(simulator) {
        this.simulator = simulator;
        this.lastValue = null;
    }

    startVoltmeterMeasurement() {
        this.intervalId = setInterval(() => {
            const voltage = this.simulator.getVoltmeterValue();
            this.lastValue = voltage;
            console.log(`Voltage at ${FormattedTimestamp(startTime)}: ${voltage} V`);
        }, VoltmeterInterval);
    }

    getLastValue() {
        return { LastValue: this.lastValue, TimeStamp: FormattedTimestamp(startTime) };
    }

    clearInterval() {
        clearInterval(this.intervalId);
    }
}
