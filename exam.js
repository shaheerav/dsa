class Stack{
    constructor(){
        this.value = [];

    }
    insert(element){
        this.value.push(element);
    }
    popMid(){
        let mid =this.value.length/2;
        let temp = [];
        for(let i =0 ;i< mid ;i++){
            temp.push(this.value[i].pop);
        }
        temp.pop();
        
        return [...temp,...this.value]
    }
}
const stack = new Stack();
stack.insert(10)
stack.insert(20)
stack.insert(30)
stack.insert(40)
stack.insert(50)
console.log(stack.popMid())
