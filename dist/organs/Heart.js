"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Organ_1 = require("./Organ");
class Heart extends Organ_1.Organ {
    constructor(name, capacity) {
        super(name);
        this.capacity = capacity;
    }
    getCapacity() {
        return this.capacity;
    }
    breathe() { }
}
//# sourceMappingURL=Heart.js.map