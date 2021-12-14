function _curry (fn, ...outerProps) {
  function curried (...props) {
    if (props.length >= fn.length) {
      return fn.call(this, ...props);
    }
    return function (...innerProps) {
      return curried.call(this, ...props.concat(innerProps));
    }
  }
  // 第一次执行的时候就传了值进来的时候
  if (outerProps?.length) {
    return curried(...outerProps);
  }
  return curried
}

const cur = _curry((a, b, c, d) => a + b + c + d, 10);

console.log(cur(1)(2)(3));