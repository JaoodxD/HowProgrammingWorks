const symbol1 = Symbol.for('test');
const symbol2 = Symbol.for('test');

console.log(symbol1 === symbol2);
console.log(Symbol.keyFor(symbol1));
