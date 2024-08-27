

class ListNode{
    constructor(value){
        this.value= value;
        this.next = null;
    }
}
/*
//Convert array to a linked list
function arrayToLinkedList (arr){
    if(arr.length ===0){
        return null
    }
    let head = new ListNode(arr[0]);
    let current = head;
    for(let i = 1; i<arr.length;i++){
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
let array = [1, 2, 3, 4, 5];
let linkedList =arrayToLinkedList(array)
function printLinkedList(arr){
    let current = arr;
    while(current !== null){
        console.log(current.value);
        current = current.next;
    }
}
printLinkedList(linkedList);
*/
/*

//Add a node at the end & beginning
class ListNode{
    constructor(value){
        this.value= value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a node at the beginning
    addAtBeginning(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // Method to add a node at the end
    addAtEnd(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to convert an array to a linked list
    arrayToLinkedList(arr) {
        for (let value of arr) {
            this.addAtEnd(value);
        }
    }

    // Method to print the linked list
    printLinkedList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}
let list = new LinkedList();

// Convert array to linked list
list.arrayToLinkedList([2, 3, 4]);
list.printLinkedList();
console.log("");

// Add node at the beginning
list.addAtBeginning(1);
list.printLinkedList();
console.log("");

// Add node at the end
list.addAtEnd(5);
list.printLinkedList();*/
/*
//Delete node with the value specified

class LinkedList {
    constructor() {
        this.head = null;
    }
    addAtEnd(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to convert an array to a linked list
    arrayToLinkedList(arr) {
        for (let value of arr) {
            this.addAtEnd(value);
        }
    }

    // Method to print the linked list
    printLinkedList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Method to delete a node with the specified value
    deleteNode(value) {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }

        // Special case: deleting the head node
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        // Find the node to be deleted
        let current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }

        // If the node was found
        if (current.next !== null) {
            current.next = current.next.next;
        } else {
            console.log("Node not found");
        }
    }
}
let list = new LinkedList();

// Convert array to linked list
list.arrayToLinkedList([1, 2, 3, 4, 5]);
console.log("Original list:");
list.printLinkedList();
console.log("");

list.deleteNode(3);
console.log("List after deleting node with value 3:");
list.printLinkedList();
console.log("");
*/
/*
//Insert a node after & before a node with x data

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a node at the beginning
    addAtBeginning(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // Method to add a node at the end
    addAtEnd(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to convert an array to a linked list
    arrayToLinkedList(arr) {
        for (let value of arr) {
            this.addAtEnd(value);
        }
    }

    // Method to print the linked list
    printLinkedList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Method to insert a node before a node with value x
    insertBefore(x, newValue) {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }

        // Special case: inserting before the head node
        if (this.head.value === x) {
            this.addAtBeginning(newValue);
            return;
        }

        // Find the node with value x
        let current = this.head;
        while (current.next !== null && current.next.value !== x) {
            current = current.next;
        }

        // If the node was found
        if (current.next !== null) {
            const newNode = new ListNode(newValue);
            newNode.next = current.next;
            current.next = newNode;
        } else {
            console.log("Node with value " + x + " not found");
        }
    }

    // Method to insert a node after a node with value x
    insertAfter(x, newValue) {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }

        // Find the node with value x
        let current = this.head;
        while (current !== null && current.value !== x) {
            current = current.next;
        }

        // If the node was found
        if (current !== null) {
            const newNode = new ListNode(newValue);
            newNode.next = current.next;
            current.next = newNode;
        } else {
            console.log("Node with value " + x + " not found");
        }
    }
}
let list = new LinkedList();

// Convert array to linked list
list.arrayToLinkedList([1, 2, 3, 4, 5]);
console.log("Original list:");
list.printLinkedList();
console.log("");

// Insert node with value 0 before node with value 1
list.insertBefore(1, 0);
console.log("List after inserting 0 before 1:");
list.printLinkedList();
console.log("");

// Insert node with value 6 after node with value 5
list.insertAfter(5, 6);
console.log("List after inserting 6 after 5:");
list.printLinkedList();
*/
/*
//Print all elements by order & reverse by order

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a node at the beginning
    addAtBeginning(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // Method to add a node at the end
    addAtEnd(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to convert an array to a linked list
    arrayToLinkedList(arr) {
        for (let value of arr) {
            this.addAtEnd(value);
        }
    }

    // Method to print the linked list in order
    printLinkedList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Method to print the linked list in reverse order using an array
    printLinkedListReverse() {
        let stack = [];
        let current = this.head;
        while (current !== null) {
            stack.push(current.value);
            current = current.next;
        }
        while (stack.length > 0) {
            console.log(stack.pop());
        }
    }

    // Method to print the linked list in reverse order using recursion
    printLinkedListReverseRecursive(node = this.head) {
        if (node === null) {
            return;
        }
        this.printLinkedListReverseRecursive(node.next);
        console.log(node.value);
    }
}

let list = new LinkedList();

// Convert array to linked list
list.arrayToLinkedList([1, 2, 3, 4, 5]);
console.log("Original list:");
list.printLinkedList();
console.log("");

// Print the linked list in reverse order using an array
console.log("Reversed list (using array):");
list.printLinkedListReverse();
console.log("");

// Print the linked list in reverse order using recursion
console.log("Reversed list (using recursion):");
list.printLinkedListReverseRecursive();
*/
/*
//Write a program to remove duplicates in a sorted singly linked list
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a node at the end
    addAtEnd(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to convert an array to a linked list
    arrayToLinkedList(arr) {
        for (let value of arr) {
            this.addAtEnd(value);
        }
    }

    // Method to print the linked list
    printLinkedList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Method to remove duplicates from a sorted linked list
    removeDuplicates() {
        if (this.head === null) {
            return;
        }

        let current = this.head;
        while (current !== null && current.next !== null) {
            if (current.value === current.next.value) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }
}

let list = new LinkedList();

// Convert array to linked list
list.arrayToLinkedList([1, 2, 2, 3, 4, 4, 5]);
console.log("Original list:");
list.printLinkedList();
console.log("");

// Remove duplicates
list.removeDuplicates();
console.log("List after removing duplicates:");
list.printLinkedList();
*/