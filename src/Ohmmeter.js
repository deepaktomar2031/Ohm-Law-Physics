import { OhmmeterInterval } from "./constants.js";
import FormattedTimestamp from "./utils.js";
import { startTime } from "./constants.js";

export default class Ohmmeter {
    constructor(voltmeter, ammeter) {
        this.voltmeter = voltmeter;
        this.ammeter = ammeter;
        this.timestamp = null;
        this.intervalId = null;
    }

    startOhmmeterMeasurement() {
        this.intervalId = setInterval(() => {
            this.timestamp = this.voltmeter.getLastValue().TimeStamp;
            const voltage = this.voltmeter.getLastValue().LastValue;
            const current = this.ammeter.getLastValue().LastValue;
            const resistance = voltage / current; // R = V / I
            console.log(`Resistance at ${FormattedTimestamp(startTime)}: ${resistance.toFixed(2)} ohm`);
            this.updateValues(voltage, current);
        }, OhmmeterInterval);
    }

    // To be overridden in child class
    updateValues(voltage, current) {}

    clearInterval() {
        clearInterval(this.intervalId);
    }
}
