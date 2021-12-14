function _setInterval(fn,wait){
  let timer = {
    flag:true,
  }
  function start(){
    if(timer.flag){
      fn.call(this)
      setTimeout(start, wait);
    }
  }

  setTimeout(start, wait);

  return timer;
}

function _clearInterval(timer){
  timer.flag = false;
}

let count = 0;
let time =  _setInterval(()=>{
  console.log('hello');
  count++;
  if(count===4){
    _clearInterval(time);
  }
},1000)