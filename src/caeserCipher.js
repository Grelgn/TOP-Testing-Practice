export default function caeserCipher(string, shift) {
	let result = "";
	for (let i = 0; i < string.length; i++) {
		if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
			let shifted = string.charCodeAt(i) + shift;
			if (shifted > 90) {
				shifted -= 26;
			}
			result += String.fromCharCode(shifted);
		} else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
			let shifted = string.charCodeAt(i) + shift;
			if (shifted > 122) {
				shifted -= 26;
			}
			result += String.fromCharCode(shifted);
		} else result += string.charAt(i);
	}
	return result;
}
