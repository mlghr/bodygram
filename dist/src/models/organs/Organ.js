"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organ = void 0;
class Organ {
    constructor(name) {
        this.name = name;
        this.isVisible = true;
    }
    getName() {
        return this.name;
    }
    getVisibility() {
        return this.isVisible;
    }
    setVisibility() {
        this.isVisible = !this.isVisible;
    }
}
exports.Organ = Organ;
//# sourceMappingURL=Organ.js.map