Promise._all = function (taskArr) {
  return new Promise((resolve, reject) => {
    let result = [];
    let count = [];
    if (!taskArr || !taskArr.length) {
      resolve(result)
    }
    for (let i = 0; i < taskArr.length; i++) {
      const element = taskArr[i];
      Promise.resolve(element).then((data) => {
        result[i] = data;
        if (++count === taskArr.length) {
          resolve(result)
        }
      }, (err) => {
        reject(err);
        return
      })
    }
  })
}

const tasks = [
  Promise.resolve('21212'),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello world')
    }, 1000)
  }),
  Promise.reject('error'),
  Promise.resolve('last')
]

Promise._all(tasks).then(console.log)
Promise.all(tasks).then(console.log)
