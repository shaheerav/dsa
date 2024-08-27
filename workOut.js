//To find the middle element in a linked list
class Node {
    constructor(value){
        this.value = value ;
        this.next = null
    }
}
class NodeList{
    constructor(){
        this.head = null
    }
    append(value){
        const newValue = new Node(value);
        if(!this.head){
            this.head = newValue;
            return
        }
        let current = this.head;
        while (current.next){
            current = current.next
        }
        current.next = newValue;
    }
    midleValue(){
        let slow = this.head;
        let fast = this.head;
        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow ? slow.value: null; 
    }
}
const nodeList = new NodeList();
nodeList.append(10);
nodeList.append(20);
nodeList.append(30);
nodeList.append(40);
nodeList.append(50);
nodeList.append(60);
nodeList.append(70);
nodeList.append(80);
nodeList.append(90);
nodeList.append(22);
nodeList.append(33);
console.log(nodeList.midleValue())
