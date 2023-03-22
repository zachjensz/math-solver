const ADDITION_SUBTRACTION_REGEX =
	/(?<operand1>((?<!\d\s*)(\+|\-))*\d+(e(\+|\-)\d+)?)\s*(?<operation>\+|\-)\s*(?<operand2>(\+|\-)*\d+(e(\+|\-)\d+)?)/
const MULTIPLY_DIVIDE_REGEX =
	/(?<operand1>((?<!\d\s*)(\+|\-))*\d+(e(\+|\-)\d+)?)\s*(?<operation>\*|\/)\s*(?<operand2>(\+|\-)*\d+(e(\+|\-)\d+)?)/
const EXPONENT_REGEX =
	/(?<operand1>((?<!\d\s*)(\+|\-))*\d+(e(\+|\-)\d+)?)\s*(?<operation>\^)\s*(?<operand2>(\+|\-)*\d+(e(\+|\-)\d+)?)/
const BRACKET_REGEX_EXCLUSIVE = /(?<=\()[^()]*(?=\))/
const BRACKET_REGEX_INCLUSIVE = /\([^()]*\)/

export function parse(equation) {
	while (equation.match(BRACKET_REGEX_INCLUSIVE)) {
		const subExpression = equation.match(BRACKET_REGEX_EXCLUSIVE)[0]
		equation = equation.replace(BRACKET_REGEX_INCLUSIVE, parse(subExpression))
	}
	while (equation.match(EXPONENT_REGEX)) {
		const calculation = equation.match(EXPONENT_REGEX).groups
		equation = equation.replace(EXPONENT_REGEX, calc(calculation))
	}
	while (equation.match(MULTIPLY_DIVIDE_REGEX)) {
		const calculation = equation.match(MULTIPLY_DIVIDE_REGEX).groups
		equation = equation.replace(MULTIPLY_DIVIDE_REGEX, calc(calculation))
	}
	while (equation.match(ADDITION_SUBTRACTION_REGEX)) {
		const calculation = equation.match(ADDITION_SUBTRACTION_REGEX).groups
		equation = equation.replace(ADDITION_SUBTRACTION_REGEX, calc(calculation))
	}
	return equation
}

function calc({ operation, operand1, operand2 }) {
	const number1 = parseFloat(operand1)
	const number2 = parseFloat(operand2)
	switch (operation) {
		case '+':
			return number1 + number2
		case '-':
			return number1 - number2
		case '*':
			return number1 * number2
		case '/':
			return number1 / number2
		case '^':
			return number1 ** number2
	}
}
