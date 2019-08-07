// Combines two command line arguments (strings).
// console.log(process.argv[2] + process.argv[3]);

// Adds two command line arguments (numbers).
let A = process.argv[2];
console.log(`A=${A}`);
let B = process.argv[3];
console.log(`B=${B}`);
let C = A + B;
console.log(`C=${C}`);
let equals = (A === B);
console.log(`${A} === ${B} ==> ${equals}`);
if (A === B) {
	console.log(`${A} is equal to ${B}`);
} else {
	console.log(`${A} is not equal to ${B}`);
}

// let a = parseFloat(process.argv[2]);
// let b = parseFloat(process.argv[3]);
// let c = a + b;
// console.log(c);
