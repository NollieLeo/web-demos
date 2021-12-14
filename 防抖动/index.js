function _debounce (fn, wait, immediat) {
  let timer;
  return function () {
    const _self = this;
    timer && clearTimeout(timer);
    if(immediat){
      const callnow = !timer;
      timer = setTimeout(()=>{
        timer = null
      },wait);
      callnow && fn.call(this);
      return
    }
    timer = setTimeout(fn.bind(_self), wait);
  }
}