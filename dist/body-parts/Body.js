"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Body = void 0;
const RightLeg_1 = require("./RightLeg");
class Body {
    constructor(head, torso, abdomen, leftLeg, leftArm, rightLeg, rightArm) {
        this.head = head;
        this.torso = torso;
        this.abdomen = abdomen;
        this.leftLeg = leftLeg;
        this.rightLeg = RightLeg_1.RightLeg;
        this.rightArm = rightArm;
    }
}
exports.Body = Body;
//# sourceMappingURL=Body.js.map