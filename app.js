import * as FizzBuzz from './FizzBuzz.js';

function main() {
	console.log("Main!");

	// TestDefault();

	// TestCustomLength();

	// TestCustomTerms();

	TestCustomLengthAndTerms();
}

function PrintResults(fizzBuzz) {
	const fizzBuzzHasValues = fizzBuzz && fizzBuzz instanceof Array && fizzBuzz.length > 0;

	if(fizzBuzzHasValues) {
		console.log(fizzBuzz);
	}
}

function TestDefault() {
	let fizzBuzz = FizzBuzz.GetFizzBuzzValues();

	PrintResults(fizzBuzz);
}

function TestCustomLength() {
	let fizzBuzz = FizzBuzz.GetFizzBuzzValues(21);

	PrintResults(fizzBuzz);
}

function TestCustomTerms() {
	let fizzBuzz = FizzBuzz.GetFizzBuzzValues(undefined, [
		new FizzBuzz.Term("Tizz", 3),
		new FizzBuzz.Term("Tuzz", 5)	
	]);

	PrintResults(fizzBuzz);
}

function TestCustomLengthAndTerms() {
	let fizzBuzz = FizzBuzz.GetFizzBuzzValues(10, [
		new FizzBuzz.Term("Pair", 2),
		new FizzBuzz.Term("Five", 5)	
	]);

	PrintResults(fizzBuzz);
}

main();