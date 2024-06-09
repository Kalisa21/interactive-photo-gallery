function transformString(str) {
    let result = str; // Initialize result with the original string
  
    if (str.length % 3 === 0) { // Divisible by 3
      result = result.split('').reverse().join(''); // Reverse the string
    }
  
    if (str.length % 5 === 0) { // Divisible by 5
      result = str.split('').map(char => char.charCodeAt(0)).join(' '); // Convert to ASCII codes
    }
  
    if (str.length % 15 === 0) { // Divisible by 15
      result = result.split('').reverse().join(''); // Reverse first
      result = result.split('').map(char => char.charCodeAt(0)).join(' '); // Convert to ASCII codes
    }
  
    return result;
  }
  
  const input1 = "Hamburger";
  const input2 = "Pizza";
  const input3 = "Chocolate Chip Cookie";
  
  console.log(transformString(input1)); // Output: "regrubmaH"
  console.log(transformString(input2)); // Output: "80 105 122 122 97"
  console.log(transformString(input3)); // Output: "eikooCpihCetalocohC"