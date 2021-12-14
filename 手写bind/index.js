Function.prototype._bind = function(obj, ...outerProps){
  if (typeof this !== 'function') {
    // MDN上的
    throw new Error('Function.prototype.bind - what is trying to be bound is not callable"')
  }
  const _self = this;
  function binder (...props) {
    return _self.call(this instanceof binder ? this : obj, ...[...outerProps, ...props]);
  }
  binder.prototype = this.prototype
  return binder;
}

function Person () {
  this.name = 'weng';
}

const objer = {};

const NewPerson = Person._bind(objer, 'tet');

console.log(new NewPerson('hloo'));