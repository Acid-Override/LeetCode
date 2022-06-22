/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
  var pairSum = function(head) {
  let arr = []
  let maxPair = 0
  let pair;

  while ( head ) {
    arr.push(head.val)
    head = head.next
  }
   for ( let i = 0; i <= arr.length/2; i++ ) {
    pair = arr[i] + arr[arr.length - 1 - i]
    maxPair = Math.max(pair, maxPair)
   }
   return maxPair
};