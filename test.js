var searchRange = function (nums, target) {
  if (!nums.length) {
    return 0;
  }
  let first = -1;
  let last = -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const current = nums[mid];
    if (current === target) {
      first = mid;
      last = mid;
      while (mid <= right) {
        if (nums[right] === target) {
          last = right;
          break;
        }
        right--;
      }
      while (mid >= left) {
        if (nums[left] === target) {
          first = left;
          break;
        }
        left++;
      }
      break;
    } else if (target > current) {
      left = mid + 1;
    } else if (target < current) {
      right = mid - 1;
    }
  }
  return [first, last];
};

console.log(searchRange([1, 2, 3, 5, 5, 5, 6, 8], 5));
