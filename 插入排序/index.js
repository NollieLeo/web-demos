function insertSort(arr) {
  const l = arr.length;
  for (let i = 1; i <= l - 1; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(insertSort([2, 45, 232, 12, 1, 354, 8]));

// 时间复杂度 O(n^2)
