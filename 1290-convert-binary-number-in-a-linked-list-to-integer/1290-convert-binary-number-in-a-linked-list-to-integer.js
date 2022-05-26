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

    let accStr = ''

    while ( head ) {
      accStr += head.val
      console.log(accStr)
      head = head.next
    }
    return parseInt(accStr, 2)
};