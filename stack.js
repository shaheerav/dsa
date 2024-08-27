
class Stack {
    constructor(){
        this.stack = []
    }

    push(element){
        this.stack.push(element)
    }

    pop(){
        if(this.isEmpty()){
            "stack is empty"
        }
        return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            "stack is empty"
        }
        return this.stack[this.size()-1]
    }
    size(){
        return this.stack.length;
    }
    isEmpty(){
        return this.size()=== 0
    }
    printStack(){
        if(this.isEmpty()){
            console.log('stack is empty')
        }
        return console.log(this.stack.join(','))
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
stack.printStack()
stack.pop();
stack.printStack();


/*
//Given an input string s, reverse the order of the words.
//A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
//Return a string of the words in reverse order concatenated by a single space.
//Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
//Example 1:
//Input: s = "the sky is blue"
//Output: "blue is sky the"
function stackReverse (str){
    let string = str.split(" ");
    const stack = []
    for(let i of string){
        stack.push(i)
    }
    let reverce = "";
    while(stack.length){
        let current = stack .pop();
        if(current){
            reverce += " " +current;
        }
    }
    return reverce.trim();
}
console.log(stackReverse("the sky is blue"))*/
/*
//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//An input string is valid if:
//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type.
 //Example 1:
//Input: s = "()"
//Output: true
//Example 2:
//Input: s = "()[]{}"
//Output: true
function isValid(s){
    const stack = [];
    for(let i = 0 ; i<s.length;i++){
        let char = s[i]
        if(char === '{'|| char === '['||char === '('){
            stack.push(char);
        }else if(char === '}'|| char === ']'||char === ')'){
            if(isEmpty(stack)){
                return false;
            }
            const top = stack.pop();
            if(
                (char === ')' && top !== '(')||
                (char === ']' && top !== '[')||
                (char === '}' && top !== '{')
            ){
                return false;
            }
        }
    }
    return isEmpty(stack)
}
function isEmpty(str){
    return str.length === 0
}
console.log(isValid("(}"))*/