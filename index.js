let oldt = 515176;
let newt = 38358;

const reduction = ((oldt - newt) / oldt) * 100;
const increase = ((oldt - newt) / newt) * 100;
const xTimesFaster = oldt / newt;

console.log(reduction);
console.log(increase);
console.log(xTimesFaster);
