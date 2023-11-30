import capitalize from "./capitalize";

test("Capitalizes the word 'hello'", () => {
	expect(capitalize("hello")).toBe("Hello");
});

test("Doesn't ruin already capitalized word 'Hello'", () => {
	expect(capitalize("Hello")).toBe("Hello");
});

test("Doesn't ruin fully uppercase word 'HELLO'", () => {
	expect(capitalize("HELLO")).toBe("HELLO");
});