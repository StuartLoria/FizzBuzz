function Term(term = "", number = 1, evalTermFn = null) {
	this.term = term;
	this.number = number;
	this.evalTermFn = evalTermFn || defaultEval;

	function defaultEval(numberToCompare){
		let result = '';

			const parameterNbrIsMultipleOfNumber = numberToCompare % this.number === 0;
			if(parameterNbrIsMultipleOfNumber) {
				result = this.term;
			}

			// console.log('term number', this.number);
			// console.log('term numberToCompare', numberToCompare);
			// console.log('term result', result);

			return result;
	}
}

function buildNumberCollection(length = 0) {
	let numbersToAnalyze = [];
	
	for (let index = 1; index <= length; index++) {
		numbersToAnalyze.push(index);
	}

	//console.log('numbersToAnalyze length', numbersToAnalyze.length);

	return numbersToAnalyze;
}

function GetFizzBuzzValues(length = 100, termsToEvaluate = [
	new Term("Fizz", 3),
	new Term("Buzz", 5)	
]) {
	var result = [];

	let numbersToAnalyze = buildNumberCollection(length);

	const evaluatedNumbers = numbersToAnalyze.map(currentNumber => {
		//Evaluate the numbers against the Terms

		//console.log('currentNumber', currentNumber);

		//Evaluate the number against all the terms and reduce a single text value
		let evaluatedNumberText = termsToEvaluate.reduce(
			(accumulator, currentTerm) => {
				accumulator += currentTerm.evalTermFn(currentNumber);
				return accumulator;
			}, 
			''
		);
		
		//console.log('evaluatedNumberText', `'${evaluatedNumberText}'`);

		return evaluatedNumberText;
	})
	.map((currentText, index) => {
		//Transform the evaluated values to replace empty values with the numbers
		return currentText === '' ? (index + 1) : currentText
	})
	//.join(', ');
	.forEach(currentText => {
		console.log(currentText);
	});
	
	const processGeneratedAnArray = evaluatedNumbers && evaluatedNumbers instanceof Array;
	if(processGeneratedAnArray) {
		result = evaluatedNumbers
	}

	return result;
}

function Test() {
	console.log('Test');
}

export { Term, GetFizzBuzzValues, Test };