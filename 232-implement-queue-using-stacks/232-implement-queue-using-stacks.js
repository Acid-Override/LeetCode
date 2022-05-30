var MyQueue = function() {
    this.head = 0;
    this.tail = 0;
    this.que = {};
};

MyQueue.prototype.push = function(x) {
  if( !this.tail ) {
    this.que[this.head] = x
    this.tail++
  } else {
    this.que[this.tail] = x
    this.tail++
  }
};

MyQueue.prototype.pop = function() {
  const firstElement = this.que[this.head]
  if(this.que[this.head]) {
    delete this.que[this.head]
    this.head++
  }
  return firstElement
};

MyQueue.prototype.peek = function() {
  return this.que[this.head]

};

MyQueue.prototype.empty = function() {
  return this.tail - this.head === 0

};



