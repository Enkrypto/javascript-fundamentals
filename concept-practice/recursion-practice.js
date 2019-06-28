// Find the factorial of a number
const factorial = x => {
	if(x === 0) return 1;
	return x * factorial(x - 1);
}

console.log(factorial(5)); // prints '120'

// Find a number to a given exponent
const findExponent = (x, e) => {
	if(e === 1) return x;
	return x * findExponent(x, e - 1);
}

console.log(findExponent(5, 5)); // prints '3125'