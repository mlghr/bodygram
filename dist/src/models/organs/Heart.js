"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heart = void 0;
const Organ_1 = require("./Organ");
class Heart extends Organ_1.Organ {
    constructor(capacity) {
        super("heart");
        this.capacity = capacity;
    }
    getCapacity() {
        return this.capacity;
    }
    setCapacity(capacity) {
        this.capacity = capacity;
    }
}
exports.Heart = Heart;
//# sourceMappingURL=Heart.js.map