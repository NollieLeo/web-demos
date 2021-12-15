Promise._race = function (tasksArr) {
  return new Promise((resolve, reject) => {
    if (!tasksArr || !tasksArr.length) {
      resolve(result)
    }
    for (let i = 0; i < tasksArr.length; i++) {
      const element = tasksArr[i];
      Promise.resolve(element).then((data) => {
        resolve(data);
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

Promise._race(tasks).then(console.log)
Promise.race(tasks).then(console.log);