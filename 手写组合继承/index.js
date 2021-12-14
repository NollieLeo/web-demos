function SuperType () {
  this.name = 'weng'
}

function Type () {
  SuperType.call(this);
  this.age = 23
}

SuperType.prototype.sayHi = function () {
  console.log(this.name)
}

Type.prototype = new SuperType();

const a = new Type();

