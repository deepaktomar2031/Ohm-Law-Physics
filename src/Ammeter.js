import { AmmeterInterval } from "./constants.js";
import FormattedTimestamp from "./utils.js";
import { startTime } from "./constants.js";

export default class Ammeter {
    constructor(simulator) {
        this.simulator = simulator;
        this.lastValue = null;
    }

    startAmmeterMeasurement() {
        this.intervalId = setInterval(() => {
            const current = this.simulator.getAmmeterValue();
            this.lastValue = current;
            console.log(`Current at ${FormattedTimestamp(startTime)}: ${current} A`);
        }, AmmeterInterval);
    }

    getLastValue() {
        return { LastValue: this.lastValue, TimeStamp: FormattedTimestamp(startTime) };
    }

    clearInterval() {
        clearInterval(this.intervalId);
    }
}
