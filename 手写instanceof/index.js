function _instanceof (obj, Fn) {
  const proto = obj.__proto__;
  const prototype = Fn.prototype;
  while (true) {
    if (proto === null) {
      return false
    }
    if (proto === prototype) {
      return true
    }
    proto = proto.__proto__;
  }
}
function Person () {
  this.name = 'weng'
}

const a = new Person();

console.log(a instanceof Object)