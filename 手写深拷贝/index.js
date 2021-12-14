const map = new WeakMap();


const cloneTargetStringMap = {
  '[object Object]': handleArrAndObj,
  '[object Array]': handleArrAndObj,
  '[object Set]': handleSet,
  '[object WeakSet]': handleSet,
  '[object Map]': handleMap,
  '[object WeakMap]': handleMap,
  '[object RegExp]': handleReg,
}

function handleReg (varias) {
  const constructor = Object.getPrototypeOf(varias).constructor;
  const {
    flags,
    source
  } = varias
  return new constructor(source, flags)
}

function handleMap (varias) {
  const constructor = Object.getPrototypeOf(varias).constructor;
  const group = new constructor();
  for (const key in varias) {
    group.set(deepClone(key), deepClone(varias.get(key)))
  }
  return group
}

function handleSet (varias) {
  const constructor = Object.getPrototypeOf(varias).constructor;
  const group = new constructor();
  for (const iterator of varias) {
    group.add(deepClone(iterator))
  }
  return group
}


function handleArrAndObj (varias) {
  const constructor = Object.getPrototypeOf(varias).constructor;
  const object = new constructor();
  for (const key in varias) {
    if (Object.hasOwnProperty.call(varias, key)) {
      const element = varias[key];
      object[key] = deepClone(element);
    }
  }
  return object
}

function hanldeOtherTypesClone (varias) {
  const constructor = Object.getPrototypeOf(varias).constructor;
  return new constructor(Object.prototype.valueOf.call(varias));
}

function cloneVarias (varias) {
  const stringType = Object.prototype.toString.call(varias);
  if (stringType in cloneTargetStringMap) {
    return cloneTargetStringMap[stringType](varias)
  }
  return hanldeOtherTypesClone(varias);
}

function deepClone (obj) {
  if (typeof obj !== 'object' && obj !== null) {
    return obj
  }
  if (map.get(obj)) {
    return obj
  }
  map.set(obj, true)
  return cloneVarias(obj);
}

const o = {
  name: 'weng',
  age: 12,
  address: new String('fujian'),
  hobby: new Set(),
  test: /\d/,
  uuid: new Date()
}

const a = deepClone(o);

a.hobby.add('weng');
a.test = /\*g/;

console.log(o, a)