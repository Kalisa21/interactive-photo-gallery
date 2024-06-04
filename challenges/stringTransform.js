function transformString(str) {
    let transformedStr = str;
    const len = str.length;
    if (len % 3 === 0) {
        transformedStr = transformedStr.split('').reverse().join('');
    }
    if (len % 5 === 0) {
        transformedStr = transformedStr.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    if (len % 15 === 0) {
        // Both transformations apply
        transformedStr = transformedStr.split('').reverse().join('');
        transformedStr = transformedStr.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    return transformedStr;
}

// Example usage
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"