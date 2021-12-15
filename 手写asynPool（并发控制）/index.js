async function asyncPool (limitNumber, tasks, finishFn) {
  let resultQueue = [];
  let pendingTasks = [];

  for (let i = 0; i < tasks.length; i++) {
    const data = tasks[i];
    const promiseFn = Promise.resolve().then(() => finishFn(data));
    resultQueue.push(promiseFn);

    if (limitNumber <= tasks.length) {
      const pendingFn = promiseFn.then(() => {
        pendingTasks.splice(pendingTasks.findIndex((fn) => fn === pendingFn), 1)
      })
      pendingTasks.push(pendingFn);
      if (pendingTasks >= limitNumber) {
        await Promise.race(pendingTasks)
      }
    }
  }

  Promise.all(resultQueue);
}

function iterater (data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(data)
      resolve(data);
    }, data)
  })
}

asyncPool(3, [500, 1000, 300, 4000], iterater);

