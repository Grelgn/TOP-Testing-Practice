import reverseString from "./reverseString";

test("Reverses the string 'hello'", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("Reverses the string with uppercase letters 'Hello'", () => {
    expect(reverseString("Hello")).toBe("olleH");
});

test("Reverses the string with spaces 'Hello World'", () => {
    expect(reverseString("Hello World")).toBe("dlroW olleH");
});

test("Reverses the string with punctuation `Let's go!`", () => {
    expect(reverseString("Let's go!")).toBe("!og s'teL");
});