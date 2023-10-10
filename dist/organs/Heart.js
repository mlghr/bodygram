"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const organ_1 = require("./organ");
class Heart extends organ_1.Organ {
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