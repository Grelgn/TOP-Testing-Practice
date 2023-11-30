import caeserCipher from "./caeserCipher";

test(`caeserCipher("ABCD", 1) is 'BCDE'`, () => {
	expect(caeserCipher("ABCD", 1)).toBe("BCDE");
});

test(`caeserCipher("hello", 3) is 'khoor'`, () => {
	expect(caeserCipher("hello", 3)).toBe("khoor");
});

test(`caeserCipher("ABCDEF", 23) is 'XYZABC'`, () => {
	expect(caeserCipher("ABCDEF", 23)).toBe("XYZABC");
});

test(`caeserCipher("Let's go!", 10) is 'Vod'c qy!'`, () => {
	expect(caeserCipher("Let's go!", 10)).toBe("Vod'c qy!");
});
