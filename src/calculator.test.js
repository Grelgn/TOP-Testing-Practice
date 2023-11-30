import calculator from "./calculator";

test("add(2, 3) is 5", () => {
	expect(calculator.add(2, 3)).toBe(5);
});

test("add(2, -3) is -1", () => {
	expect(calculator.add(2, -3)).toBe(-1);
});

test("subtract(6, 2) is 4", () => {
	expect(calculator.subtract(6, 2)).toBe(4);
});

test("subtract(2, 6) is -4", () => {
	expect(calculator.subtract(2, 6)).toBe(-4);
});

test("multiply(2, 4) is 8", () => {
	expect(calculator.multiply(2, 4)).toBe(8);
});

test("multiply(-2, 4) is -8", () => {
	expect(calculator.multiply(-2, 4)).toBe(-8);
});

test("divide(8, 4) is 2", () => {
	expect(calculator.divide(8, 4)).toBe(2);
});

test("divide(10, 3) is 3.33", () => {
	expect(calculator.divide(10, 3)).toBe(3.33);
});

test("divide(2, 3) is 0.67", () => {
	expect(calculator.divide(2, 3)).toBe(0.67);
});