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
 var getDecimalValue = function(head) {

    let accArr = []

    while ( head ) {
      accArr.push(head.val)
      console.log(head.val)
      head = head.next
    }
    return parseInt(accArr.join(''), 2)
};