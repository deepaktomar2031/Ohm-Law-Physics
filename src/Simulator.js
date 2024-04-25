import { SimulationTime, SimulatorInterval } from "./constants.js";

export default class Simulator {
    constructor(startTime, endTime, Vs, r1, r2, rl, finalR) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.Vs = Vs;
        this.r1 = r1;
        this.r2 = r2;
        this.rl = rl;
        this.finalR = finalR;
        this.simulationIntervalId = null;
    }

    startSimulation() {
        this.simulationIntervalId = setInterval(() => {
            const currentTime = new Date().getTime();
            if (currentTime < this.endTime) {
                const elapsedTime = currentTime - this.startTime;
                this.r1 = (this.finalR * elapsedTime) / SimulationTime;
                this.r2 = this.finalR - this.r1;
            } else {
                clearInterval(this.simulationIntervalId);
            }
        }, SimulatorInterval);
    }

    getVoltmeterValue() {
        // V = I * R;
        return this.rl * (this.Vs / (this.rl + this.r1 + this.r2));
    }

    getAmmeterValue() {
        // I = V / R;
        return this.Vs / (this.rl + this.r1 + this.r2);
    }
}
