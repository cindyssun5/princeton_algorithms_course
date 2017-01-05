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

