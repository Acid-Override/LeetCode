/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
   let str = ''
   while ( head ) {
    console.log(head.val)
    str += head.val
    head = head.next
   }
   return str.split('').reverse().join('') === str

};