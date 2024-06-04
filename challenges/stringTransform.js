function transformString(str) {
    if (str.length % 3 === 0 && str.length % 5 === 0) {
        return str.split("").map(char => char.charCodeAt(0)).join(" ");
    } else if (str.length % 3 === 0) {
        return str.split("").reverse().join("");
    } else if (str.length % 5 === 0) {
        return str.split("").map(char => char.charCodeAt(0)).join(" ");
    } else {
        return str;
    }
}

// Example usage
const str1 = "Hamburger";
const str2 = "Pizza";
const str3 = "Chocolate Chip Cookie";

console.log(transformString(str1)); // Output: "regrubmaH"
console.log(transformString(str2)); // Output: "80 105 122 122 97"
console.log(transformString(str3)); // Output: "eikooCpihCetalocohC"