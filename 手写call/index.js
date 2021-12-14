Function.prototype._call = (obj, ...rest) => {
  if (typeof this !== 'function') {
    return
  }
  if (!(obj instanceof Object)) {
    return obj
  }
  if (Object.isFrozen(obj) || Object.isSealed(obj)) {
    return obj
  }
  const fn = Symbol('fn');
  (obj || window)[fn] = this;
  const result = obj[fn](...rest);
  return result;
}