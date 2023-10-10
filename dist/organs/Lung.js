"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const organ_1 = require("./organ");
class Heart extends organ_1.Organ {
    constructor(name, chambers) {
        super(name);
        this.chambers = chambers;
    }
    getChambers() {
        return this.chambers;
    }
    pump() {
        console.log(`The ${this.getName()} is pumping blood.`);
    }
}
//# sourceMappingURL=Lung.js.map