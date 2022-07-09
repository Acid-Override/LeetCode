/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
 
  let base = new ListNode(0);
  let tail = base; // helper pointer to keep base clean
  let closure = value()

  while (l1 || l2) {
    let v1 = 0, v2 = 0;

    l1 ? v1 = l1.val : v1
    l2 ? v2 = l2.val : v2

    tail.next = new ListNode(closure(v1, v2));

    // walk down street
    tail = tail.next;
    l1 ? l1 = l1.next : null;
    l2 ? l2 = l2.next : null; 

  }
  var final = closure()
  if ( final ) {
    tail.next = new ListNode(final)
  }
  return base.next;
};

var value = function () {
  
  let carryOver = 0
  return function summation(v1 = 0, v2 = 0) {
    
    let sum = v1 + v2 + carryOver;
    carryOver = 0  //reset for next iteration


    if (sum > 9) {
      carryOver = parseInt(sum.toString()[0]);
      return sum % 10;
    } else {
      return sum
    }
  };
};