function subarraySumExists(arr, target) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum === target) {
          return true;
        }
      }
    }
    return false;
  }
  
  const arr = [4, 2, 7, 1, 9, 5];
  const target = 17;
  const result = subarraySumExists(arr, target);
  console.log(result); // Output: true