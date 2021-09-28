class Node {
    constructor(element) {
        this.element = element
        this.next = null                
    }
}
class LinkedList {
    constructor() {
        this.head =  null
        this.size=0
    }
    add(element){
        let node = new Node(element)
        let current;
        if (this.head==null){
            this.head = node
        }else {
            current=this.head
            while(current.next){
                current=current.next
            }
            current.next=node
        }
        this.size++
    }
    printList(){
        let curr = this.head
        let str = " "
        while (curr){
            str+=`${curr.data} `
            curr = curr.next
        }
        console.log(str)
    }
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
}
export default function mergeTwoLists(l1,l2){
let node1 = new LinkedList()
let node2 = new LinkedList()
l1.forEach(num=>node1.add(num))
l2.forEach(num=>node2.add(num))
console.log(node1)
console.log(node2)
return node1
}


console.log(mergeTwoLists([1,2,4], [1,3,4]))