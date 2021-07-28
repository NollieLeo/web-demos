function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const l = arr.length;
  const mid = Math.floor(l / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let res = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  while (left.length) res.push(left.shift());
  while (right.length) res.push(right.shift());
  return res;
}

console.log(mergeSort([2, 45, 232, 12, 1, 354, 8]));

