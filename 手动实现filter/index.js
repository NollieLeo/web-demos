function _filter(callback, thisArgs) {
  const arr = this;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArgs || globalThis, arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

Array.prototype._filter = _filter;

console.log(
  [1, 2, 3, 4]._filter(
    function (a) {
      console.log(`${this}`);
      return a > 3;
    },
    [5, 6, 7, 8, 1]
  )
);
