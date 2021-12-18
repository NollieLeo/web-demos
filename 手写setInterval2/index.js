
const _setInterval = (function () {
  let timer;
  function setIntervalByFrame (fn, wait) {
    const now = Date.now;
    let startDate = now();
    let endDate = startDate;
    const loop = () => {
      timer = window.requestAnimationFrame(loop);
      endDate = now();
      if (endDate - startDate >= wait) {
        fn(timer);
        startDate = now();
        endDate = now();
      }
    }
    timer = window.requestAnimationFrame(loop);
    return timer
  }
  return setIntervalByFrame
})()

function _clearInterval (timer) {
  window.cancelAnimationFrame(timer);
}

let count = 1

_setInterval((timer) => {
  if (count > 3) {
    _clearInterval(timer)
  }
  console.log('hello Mr.weng' + timer);
  count++;
}, 1000)

