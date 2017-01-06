function Deque(item) {
  const storage = {};
  let start = 0;
  let end = 0;

  storage[start] = item;
  start -= 1;
  end += 1;

  this.isEmpty = function () {
    if ((end - start) <= 1) {
      return true;
    }
    return false;
  };

  this.size = function () {
    return (Math.abs(end) + Math.abs(start)) - 1;
  };

  this.addFirst = function (val) {
    storage[start] = val;
    start -= 1;
  };

  this.addLast = function (val) {
    storage[end] = val;
    end += 1;
  };

  this.removeFirst = function () {
    if (this.isEmpty()) {
      return 'Deque is empty, please add items before removing them';
    }
    start += 1;
    const temp = storage[start];
    delete storage[start];
    return temp;
  };

  this.removeLast = function () {
    if (this.isEmpty()) {
      return 'Deque is empty, please add items before removing them';
    }
    end -= 1;
    const temp = storage[end];
    delete storage[end];
    return temp;
  };

  this.iterator = function () {
    let nextIndex = start;
    const that = this;
    return {
      next() {
        nextIndex += 1;
        if (!that.isEmpty() && nextIndex < end) {
          return {
            value: storage[nextIndex],
            done: (nextIndex + 1) === end,
          };
        } else if (!that.isEmpty() && (nextIndex + 1) >= end) {
          return {
            done: true,
          };
        }
        return {
          value: "Can't call iterator on empty Deque",
          done: "Can't call iterator on empty Deque",
        };
      },
    };
  };
}


function RandomizedQueue(item) {
  const storage = {};
  storage[0] = item;
  let end = 1;
  let size = 1;

  this.isEmpty = function () {
    return size === 0 ? true : false;
  };

  this.size = function () {
    return size;
  };

  this.enqueue = function (val) {
    storage[end] = val;
    end += 1;
    size += 1;
  };

  this.dequeue = function () {
    if (this.isEmpty()) {
      return 'Queue is empty, please add items before trying to dequeue';
    }
    const randomIndex = Math.floor(Math.random() * end);
    const tempItem = storage[randomIndex];
    size -= 1;

    if (randomIndex === (end - 1)) {
      delete storage[randomIndex];
      end -= 1;
      return tempItem;
    } else {
      end -= 1;
      storage[randomIndex] = storage[end];
      delete storage[end];
      return tempItem;
    }
  };

  this.sample = function () {
    const randomIndex = Math.floor(Math.random() * end);
    return storage[randomIndex];
  };

  this.iterator = function () {
    let arr = [];
    let nextIndex = -1;
    for (let i = 0; i < size; i++) {
      arr.push(i);
    }
    arr = shuffle(arr);
    const that = this;

    return {
      next() {
        nextIndex += 1;
        if (that.isEmpty()) {
          return {
            value: "Can't call iterator on empty Queue",
            done: "Can't call iterator on empty Queue",
          };
        }
        if (nextIndex < size) {
          return {
            value: storage[arr[nextIndex]],
            done: false,
          };
        }
        if (nextIndex >= size) {
          return {
            done: true,
          };
        }
      },
    };
  };
}

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    const randomIndex = Math.floor(Math.random() * counter);
    counter -= 1;
    const temp = array[counter];
    array[counter] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}
