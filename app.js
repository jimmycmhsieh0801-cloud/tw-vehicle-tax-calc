const TAX_TABLE = {
  car_601_1200: [4320, 4320],
  car_1201_1800: [7120, 4800],
  car_1801_2400: [11230, 6180],
  car_2401_3000: [15210, 7200],
  car_ev: [0, 0],
  moto_51_125: [0, 450],
  moto_126_150: [0, 600],
  moto_151_250: [800, 600],
  moto_251_500: [1620, 900],
  moto_601_1200: [4320, 1800]
};
function calcVehicleTax(type, days = 365) {
  const [lic, fuel] = TAX_TABLE[type] || [0, 0];
  const d = Math.min(366, Math.max(1, Number(days) || 365));
  const ratio = d / 365;
  const lTax = Math.round(lic * ratio);
  const fTax = Math.round(fuel * ratio);
  return { licenseTax: lTax, fuelTax: fTax, total: lTax + fTax };
}
if (typeof document !== "undefined") {
  const vehType = document.getElementById("vehType");
  const daysInput = document.getElementById("daysInput");
  function render() {
    const r = calcVehicleTax(vehType.value, daysInput.value);
    document.getElementById("licTaxEl").textContent = `NT$ ${r.licenseTax.toLocaleString()}`;
    document.getElementById("fuelTaxEl").textContent = `NT$ ${r.fuelTax.toLocaleString()}`;
    document.getElementById("totalTaxEl").textContent = `NT$ ${r.total.toLocaleString()}`;
  }
  [vehType, daysInput].forEach(el => el.addEventListener("input", render));
  render();
}
if (typeof module !== "undefined" && module.exports) module.exports = { calcVehicleTax };