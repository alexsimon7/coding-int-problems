/*
Part 1: Write code to remove duplicates from an unsorted linked list
Part 2: Reformat Without the Buffer


 */

// function removeDuplicates(linkedList) {
//   let head = linkedList.head;
//   let tempBuffer = [];
//   let previousNode = null;
//
//   while (head !== null) {
//     if (tempBuffer.includes(head.value)) {
//       previousNode.next = head.next;
//     } else {
//       tempBuffer.push(head.value);
//       previousNode = head;
//     }
//     head = head.next;
//   }
// }

function removeDuplicates(linkedList) {
  let head = linkedList.head;

  while (head !== null) {
    let headRunner = head;

    while (headRunner.next !== null) {
      if (headRunner.next.value === head.value) {
        headRunner.next = headRunner.next.next;
      } else {
        headRunner = headRunner.next;
      }
    }
    head = head.next;
  }
}

let linkedList1 = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null,
      }
    }
  }
};

let linkedList2 = {
  head: {
    value: 1,
    next: {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        }
      }
    }
  }
}
let linkedList3 = {
  head: {
    value: 1,
    next: {
      value: 1,
      next: {
        value: 3,
        next: {
          value: 3,
          next: null,
        }
      }
    }
  }
}


removeDuplicates(linkedList1);
console.log(JSON.stringify(linkedList1));
removeDuplicates(linkedList2);
console.log(JSON.stringify(linkedList2));
removeDuplicates(linkedList3);
console.log(JSON.stringify(linkedList3));

