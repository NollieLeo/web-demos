function _new (fn, ...rest) {
  if (typeof fn !== 'function') {
    return
  }
  const obj = new Object();
  obj.__proto__ = fn.prototype;

  const res = fn.call(obj, ...rest);

  const isObject = typeof res === 'object' && res !== null;
  const isFunction = typeof res === 'function';

  return isObject || isFunction ? res : obj
}

function Person(){
  this.name='weng';
}

const a = _new(Person);

console.log(a);