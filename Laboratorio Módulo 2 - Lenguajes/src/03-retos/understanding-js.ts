// Cuestión 1
// ¿Existe alguna forma de que la expresión x === x de como resultado false?

const x = NaN;

console.log(x === x); // false

// Cuestión 2
// Habiendo resuelto la Cuestión l, ¿como implementarías una función que compruebe si un determinado valor es NaN?

const isNaNValue = (v) => Number.isNaN(v);

console.log(isNaNValue(NaN)); // true
console.log(isNaNValue(3));
console.log(isNaNValue("hola"));

// Cuestión 3
// Habiendo resuelto la Cuestion 2 ¿Existe alguna forma de que la expresión !isNaNValue(x) && x !== x de como resultado true? No debes modificar la implementación isNaNValue en este ejercicio.

const x1 = {
  valueOf: () => NaN,
};

console.log(!isNaNValue(x1) && x1 !== x1); // true

//Cuestión 4
//¿Podrías dar con alguna forma de que la expresión x + 1 === x - 1 arroje true?

const x2 = Infinity;
console.log(x2 + 1 === x2 - 1); // true

//Cuestión 5
//Se te ocurre alguna forma de hacer que la expresión x > x de como resultado true?

const x3 = {
  valueOf: () => Math.random(),
};

console.log(x3 > x3); //
