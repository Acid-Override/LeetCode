/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
   const accArr = []
   let node = head
  while (node) {
    console.log(node.val)
    accArr.push(node.val)
    node = node.next
  }
  console.log('accArr', accArr)
 let middleIndex = Math.ceil((accArr.length + 1)/2)
 console.log('middleValue', middleIndex)
 let counter = 1;

 while (head) {   
   if ( counter === middleIndex ) {     
     return head
   }
   head = head.next
   counter++
 }
};