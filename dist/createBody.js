"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBody = void 0;
const Body_1 = require("./body-parts/Body");
function createBody() {
    const body = new Body_1.Body();
    console.log(JSON.stringify(body));
}
exports.createBody = createBody;
//# sourceMappingURL=createBody.js.map