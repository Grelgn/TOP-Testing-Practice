const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => Math.round(x / y * 100) / 100;

const calculator = {
	add,
	subtract,
	multiply,
	divide,
};

export default calculator;
