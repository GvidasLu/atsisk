import vaisius from "./classes/vaisius.js";
import krepsys from "./classes/krepsys.js";

let grauztukai = new Map();

krepsys.pripildyti();

console.log(krepsys);

const Vaisius = new vaisius();

let valgomasPirmas = krepsys.isimti();

valgomasPirmas.prakastas = vaisius.prakasti();

console.log(valgomasPirmas);

grauztukai.set(valgomasPirmas.id, valgomasPirmas)

let valgomasAntras = krepsys.isimti();

valgomasAntras.prakastas = vaisius.prakasti();

console.log(valgomasAntras);

grauztukai.set(valgomasAntras.id, valgomasAntras)

console.log(grauztukai);

console.log(krepsys);

krepsys.papildyti();

console.log(krepsys);

// console.log('isimti' krepsys, vaisius)