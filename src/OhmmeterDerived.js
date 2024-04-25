import Ohmmeter from "./Ohmmeter.js";
import FormattedTimestamp from "./utils.js";
import { startTime } from "./constants.js";

export default class OhmmeterDerived extends Ohmmeter {
    constructor(voltmeter, ammeter) {
        super(voltmeter, ammeter);
        this.voltmeterValues = [];
        this.ammeterValues = [];
    }

    updateValues(voltage, current) {
        this.voltmeterValues.push(voltage);
        this.ammeterValues.push(current);

        const sumVoltage = this.voltmeterValues.reduce((acc, val) => acc + val, 0);
        const averageVoltage = sumVoltage / this.voltmeterValues.length;

        const sumCurrent = this.ammeterValues.reduce((acc, val) => acc + val, 0);
        const averageCurrent = sumCurrent / this.ammeterValues.length;

        const averageResistance = averageVoltage / averageCurrent; // R = V / I

        console.log(`Avg. Resistance at ${FormattedTimestamp(startTime)}: ${averageResistance.toFixed(2)} ohm`);
    }
}
