function hasContiguousSubarray(arr, target) {
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (currentSum === target) {
            return true;
        }
        if (currentSum > target) {
            while (currentSum > target && i >= 0) {
                currentSum -= arr[i];
                i--;
            }
            if (currentSum === target) {
                return true;
            }
        }
    }
    return false;
}

// Example usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
const result = hasContiguousSubarray(arr, target);
console.log(result); // Output: true