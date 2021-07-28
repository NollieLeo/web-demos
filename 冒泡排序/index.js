function bubbleSort(arr) {
  const length = arr.length;
  for (let i = 0; i <= length - 1; i++) {
    // 表示第i轮
    for (let j = 0; j < length - i; j++) {
      // 表示当前第j个数字
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([2, 45, 232, 12, 1, 354, 8]));
// 时间复杂度 O(n^2) 空间复杂度O(1)
