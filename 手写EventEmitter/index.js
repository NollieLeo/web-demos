class EventBus {
  cache = {}

  on (name, callback, once = false) {
    if (!(name in this.cache)) this.cache[name] = [];
    this.cache[name].push({
      once,
      callback
    })
  }

  once (name, callback) {
    this.on(name, callback, true)
  }

  emit (name) {
    if (!(name in this.cache)) return;
    if (!this.cache[name].length) return;
    // 这里要做一层浅拷贝，不然会出事
    this.cache[name].slice().forEach((item, index) => {
      const { callback, once } = item;
      if (once) {
        const i = this.cache[name].findIndex(({ callback: fn }) => callback === fn);
        this.cache[name].splice(i, 1);
        if (!this.cache[name].length) delete this.cache[name]
      }
      callback()
    })
  }

  off (name, callback) {
    if (!name) {
      this.cache = {}
      return
    }
    if (!callback) { delete this.cache[name]; return }
    if (!this.cache[name]) return

    const index = this.cache[name].findIndex((f) => f.callback === callback);
    this.cache[name].splice(index, 1);
    if (!this.cache[name].length) delete this.cache[name]
  }
}

const event$ = new EventBus();

event$.once('weng', () => console.log('fuck'))
event$.on('weng', () => console.log('shit'));

event$.emit('weng');
event$.emit('weng');
event$.emit('weng');
event$.off('weng');
event$.emit('weng');
