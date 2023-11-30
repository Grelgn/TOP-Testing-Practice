import analyzeArray from "./analyzeArray";

test("Test 1", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

test("Test 2", () => {
	expect(analyzeArray([6, 2, 4, 3, 5])).toStrictEqual({
		average: 4,
		min: 2,
		max: 6,
		length: 5,
	});
});

test("Test 3", () => {
	expect(analyzeArray([9, 5, 0, 3, 7, 6, 8, 4])).toStrictEqual({
		average: 5.25,
		min: 0,
		max: 9,
		length: 8,
	});
});