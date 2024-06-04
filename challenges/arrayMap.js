function hasSubarrayWithSum(arr, target) {
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (currentSum === target) {
            return true;
        }
        // If the current sum exceeds the target, slide the window
        if (currentSum > target) {
            currentSum -= arr[i - 1];
        }
    }
    return false; // No subarray found
}

// Example usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target)); // Output: true