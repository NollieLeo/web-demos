function compose (...args) {
  let result;
  const fnArr = Array.from(args);
  return function composer (...props) {
    const fn = fnArr.shift();
    result = fn.call(this, ...props);
    if (!fnArr.length) {
      return result
    }
    return composer(result)
  }
}

const cmp = compose(...[
  function (a) { return a },
  function (a) { return a + 10 },
  function (a) { return a + 20 },
])

console.log(cmp(10))