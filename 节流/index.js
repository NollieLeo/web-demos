function _throttle (fn, wait) {
  let pre = Date.now();
  let time;
  return function (...rest) {
    const _self = this;
    time && clearTimeout(time)
    if (Date.now() - pre > wait) {
      fn.call(_self, ...rest);
      pre = Date.now()
    } else {
      time = setTimeout(fn.bind(_self), wait - (pre - now));
    }
  }
}