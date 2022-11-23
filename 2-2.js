/*
Algo to find the kth to the last element of a singly linked list
Input: Linked List, Element of Linked List
Output: Kth Element, if no kth element return null?

 */

function kthElement(linkedList, k) {
  let head = linkedList.head;
  let headRunner = head

  //headRunner to be ahead kth nodes
  for (let index = 0; index < k; index++) {
    headRunner = headRunner.next;

    if (headRunner === null) {
      return null;
    }
  }

  while (head.next !== null) {
    if (headRunner.next === null) {
      return head.data;
    }

    head = head.next
    headRunner = headRunner.next;
  }

  return headRunner.data;
}

let linkedList = {
  head: {
    data: 'A',
    next: {
      data: 'B',
      next: {
        data: 'C',
        next: {
          data: 'D',
          next: {
            data: 'E',
            next: null,
          }
        }
      }
    }
  }
}

console.log(kthElement(linkedList, 0)); // expect this to be E
console.log(kthElement(linkedList, 1)); // expect this to be D
console.log(kthElement(linkedList, 2)); // expect this to be C
console.log(kthElement(linkedList, 3)); // expect this to be B
console.log(kthElement(linkedList, 4)); // expect this to be A
console.log(kthElement(linkedList, 5)); // expect this to be null