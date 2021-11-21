const Events = function () {
  const eventLists = {};
  return class MyMessageEvents {
    static listen(key, fn) {
      debugger;
      if (!eventLists[key]) {
        eventLists[key] = [];
      }
      eventLists[key].push(fn);
    }

    static remove(key, fn) {
      if (!eventLists[key] || !eventLists[key].length) {
        return;
      }
      if (fn) {
        const currentIndex = eventLists[key].findIndex(
          (tempFn) => tempFn === fn
        );
        eventLists[key].splice(currentIndex, 1);
      } else {
        delete eventLists[key];
      }
      console.log(eventLists[key]?.length);
    }

    static trigger(key, ...rest) {
      const list = eventLists[key];
      if (!list && !list.length) {
        return;
      }
      list.forEach((fn) => {
        fn.call(this, ...rest);
      });
    }
  };
};

const KEY_1 = "fuckme";

function myOrder(...rest) {
  console.log("fuckyou", ...rest);
}

MyMessageEvents.listen(KEY_1, myOrder);

MyMessageEvents.trigger(KEY_1, "three times");

console.log(eventLists[KEY_1].length);

MyMessageEvents.remove(KEY_1);
