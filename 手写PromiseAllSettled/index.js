Promise._allSettled = function (tasksArr) {
  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    for (let i = 0; i < tasksArr.length; i++) {
      const element = tasksArr[i];
      Promise.resolve(element).then((data) => {
        result[i] = {
          value: data,
          status: 'fullfilled'
        }
        if (++count === tasksArr.length) {
          resolve(result);
        }
      }, (err) => {
        result[i] = {
          reason: err,
          status: 'rejected'
        }
        if (++count === tasksArr.length) {
          resolve(result);
        }
      })
    }
  })
}

const tasks = [
  Promise.resolve('121'),
  Promise.reject('21212'),
  new Promise((resolve) => setTimeout(() => {
    resolve('late')
  }), 1000)
]

Promise.allSettled(tasks).then(console.log);
Promise._allSettled(tasks).then(console.log);