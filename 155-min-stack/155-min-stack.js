var MinStack = function() {
    this.stack = []
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
 // debugger
  let i = 0;
    while(this.stack[i] !== undefined) {
      i++;
    }
    this.stack[i] = val
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

  let i = 0;
  let result = []
  while (this.stack[i] !== undefined) {
    i++
  }
  for ( let j = 0; j < i - 1; j++ ) {
    result.push(this.stack[j])
  }
  this.stack = result

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  debugger
  let i = 0;
  while ( this.stack[i] !== undefined ) {
    i++
  }
  return this.stack[i - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (!this.stack.length) {return this.stack}
  let i = 1;
  let min = this.stack[0]
  while ( this.stack[i] !== undefined ) {
    if ( this.stack[i] < min) {
      min = this.stack[i]
    }
    i++;
  }
  return min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */