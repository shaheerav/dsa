/*
class Node {
    constructor(data){
        this.data= data,
        this.next = null
    }
}
class LinkedList{
    constructor (){
        this.head = null
    }
    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head
        this.head = newNode;
    }
    addLast(data){
        const newNode = new Node(data);
        if(this.head === null){
             this.head = newNode;
             return
        }
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }   
        current.next = newNode;
     }
     removeFirst(){
        if(this.head === null){
            console.log('not such vallues in the arrays');
            return
        }
        this.head = this.head.next;
     };
     removeLast(){
        if(this.head === null){
            console.log('not such vallues in the arrays');
            return
        }
        if(this.head.next === null){
            this.head = null;
            return;
        }
        let current = this.head ;
        while(current.next.next !==null){
            current = current.next;
        }
        current.next =null;
     }
    formArray(arr){
        arr.reverse().forEach(data => {
            this.addFirst(data)
        });
    } 
    printList (){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current .next;
        }
    }
}
const nums = [1,2,3,4,5];
const list = new LinkedList();
list.formArray(nums)
list.addFirst(0);
list.addLast(6);
list.printList();
list.removeFirst();
list.printList();
list.removeLast();
list.printList();*/
/*
function findSum(arr,target){
    let result = [];
    if(arr.length <=0){
        return console.log("no values in the array");
    }
    for(let i =0;i<arr.length ;i++){
        for(let j = i+1;j <arr.length;j++){
            if(arr[i]+arr[j]=== target){
                result.push(arr[i],arr[j]);
            }
        }
    }
    return result;
}
console.log(findSum([6,5,4,3,9,8,0],10))*/
/*function fabinocy(n){
    let fib =[0,1];
    for(let i = 2;i<=n;i++){
        fib[i]= fib[i-1]+fib[i-2];
    }
    return fib;
};
console.log(fabinocy(3))
console.log(fabinocy(7))*/
/*
function factorial (n){
    if(n===1){
        return 1
    }
    return n*factorial(n-1)
}
console.log(factorial(5))*/
/*
function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i =2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(5))
console.log(isPrime(4))*/
/*
function binarySearch(arr,target){
    if(arr.length === 0){
        console.log('no elements there');
    }
    let start = 0;
    let end = arr.length -1;
    while(start =>end){
        let mid = Math.floor((start+end)/2)
        if(arr[mid] === target){
            return mid
        }else if(arr[mid]<target){
            start = mid+1;
        }else{
            end = mid-1;
        }

    }
};
console.log(binarySearch([-5,2,4,6,10],10))*/
/*
function binaryRecursion(arr,target){
    return search (arr,target,0, arr.length-1)
}
function search(arr,target,leftIndex, rightIndex){
    if(leftIndex> rightIndex){
        return -1;
    };
    let mid = Math.floor((rightIndex+leftIndex)/2);
    if(target === arr[mid]){
        return mid;
    }
    if(target <arr[mid]){
        return search(arr,target,leftIndex,rightIndex-1);
    }else{
        return search(arr,target,leftIndex+1,rightIndex);
    }
}
console.log(binaryRecursion([-5,2,4,6,10],10))*/
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class NodeList {
    constructor(){
        this.head = null
        this.size = 0
    }
    addBigin(value){
        let newValue = new Node(value);

        if(this.isEmpty()){
            this.head = newValue
        }else{
            newValue.next = this.head
            this.head = newValue
        }
        this.size++
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    print(){
        if(this.isEmpty()){
            console.log('NO values in the linked list')
        }else{
            let current = this.head;
            while(current !== null){
                console.log(current.value);
                current = current.next;
            }
        }
    }
    addEnd(value){
        let newValue = new Node(value);
        if(this.isEmpty()){
            this.head = newValue
        }else{
            let pre = this.head
            while(pre.next){
                pre = pre.next;
            }
            pre.next = newValue
        }
        this.size ++;
    }
    incert(value,index){
        if(index <0  || index> this.size ){
            return
        }
        if(index === 0){
            this.addBigin(value);
        }else{
            let newValue = new Node(value);
            let prev = this.head;
            for(let i = 0 ; i<index -1 ;i++){
                prev = prev.next;
            }
            newValue.next = prev.next 
            prev.next = newValue
            this.size++
        }
    }
    remove(index){
        if(index <0  || index >this.getSize()){
            return null
        }
        let removal
        if(index === 0){
            removal =this.head 
            this.head = this.head.next
        }else{
            let prev = this.head;
            for(let i = 0 ; i< index -1 ; i++){
                prev= prev.next
            }
            removal = prev.next
            prev.next = removal.next
        }
        return removal
    }
    removeValue(value) {
        // Check if the list is empty
        if (this.size === 0) {
            return null;
        }
    
        // Check if the value is at the head of the list
        if (this.head.value === value) {
            const removedValue = this.head.value;
            this.head = this.head.next;
            this.size--;
            return removedValue;
        }
    
        // Iterate through the list to find the value
        let prev = this.head;
        while (prev.next && prev.next.value !== value) {
            prev = prev.next;
        }
    
        // If the value was found, remove it
        if (prev.next) {
            const removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--;
            return removedNode.value;
        }
    
        // If the value was not found
        return null;
    }
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i =0;
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }
    reverce(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let next = curr.next
            curr.next =prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    
    } 
let list = new NodeList();
console.log(list.isEmpty());
console.log(list.getSize());
list.addBigin(1)
list.addBigin(10)
list.addBigin(100)


list.addEnd(55);

list.incert(6,2);

list.remove(0);

list.removeValue(55)
console.log(list.search(1))
list.reverce()
list.print()