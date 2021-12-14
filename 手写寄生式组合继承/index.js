function createObject (prototype) {
  function Fn () { };
  Fn.prototype = prototype;
  return new Fn();
}

function inherit (Type, SuperType) {
  let prototype = createObject(SuperType.prototype);
  prototype.contructor = Type;
  Type.prototype = prototype;
}

function SubType () {
  this.name = 'weng';
}

function Super () {
  this.age = '12'
}

inherit(SubType, Super);

const a = new SubType();
console.log(a);