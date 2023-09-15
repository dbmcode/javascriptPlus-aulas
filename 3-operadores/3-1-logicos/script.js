//operador lógico
// E &&
true && true; //true
false && true; //false
false && false; //false
true && false; //false
"casa" && false; //false
"casa" && "carro"; //carro
2 == 4 && true; // false

// Ou ||
true || true; //true
false || true; //true
false || false; //false
true || false; //false
"casa" || false; //false
"casa" || "carro"; //carro
2 == 4 || true; // false

// negação

let casa = false;
let outraCasa = !casa;

console.log(outraCasa);
!casa;
console.log(!casa);
