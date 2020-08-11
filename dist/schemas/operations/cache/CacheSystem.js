"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheAllData = void 0;
const operators_1 = require("../operators");
async function cacheAllData() {
    try {
        const result = await operators_1.cacheDecks();
        console.log(result);
    }
    catch (err) {
        console.log("ERROR!!!!");
    }
}
exports.cacheAllData = cacheAllData;
cacheAllData();
//# sourceMappingURL=CacheSystem.js.map