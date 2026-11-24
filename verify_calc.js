const assert = require("assert");
const { calcVehicleTax } = require("./app.js");
const r1 = calcVehicleTax("car_1201_1800", 365);
assert.strictEqual(r1.total, 11920);
assert.strictEqual(calcVehicleTax("moto_51_125", 365).total, 450);
assert.strictEqual(calcVehicleTax("car_ev", 365).total, 0);
console.log("VEHICLE_TAX_TESTS_PASSED");