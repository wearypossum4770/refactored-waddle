class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    let node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  printList() {
    let curr = this.head;
    let str = " ";
    while (curr) {
      str += `${curr.data} `;
      curr = curr.next;
    }
    console.log(str);
  }
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
}
/**
 *
 * @param {Array<number>} l1
 * @param {Array<number>} l2
 * @returns
 */
function setUpTest(array1, array2) {
  let node1 = new LinkedList();
  for (let i = 0; i < array1.length; i++) {
    node1.add(array1[i]);
    node1.add(array2[i]);
  }
  return node1;
}
export function mergeTwoLists(l1, l2) {
  let array = setUpTest(l1, l2);
  let target = Array(array.size);
  return target;
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
