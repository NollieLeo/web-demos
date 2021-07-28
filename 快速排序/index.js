function quickSort(arr) {
  if (arr.length <= 0) return arr;
  const midIndex = Math.floor(arr.length / 2);
  const mid = arr.splice(midIndex, 1)[0];

  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    current > mid ? rightArr.push(current) : leftArr.push(current);
  }
  return quickSort(leftArr).concat(mid, quickSort(rightArr));
}

console.log(quickSort([2, 45, 232, 12, 1, 354, 8]));

// 时间复杂度 O(n^2)

