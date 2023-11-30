export default function reverseString(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        result += string.charAt(string.length - 1 - i);
    }
    return result;
}
