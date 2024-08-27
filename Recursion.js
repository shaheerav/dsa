/*
//Factorial of n 
// n=5=> 5*4*3*2*1
function factorial (n){
    let result = 1;
    for(let i =n;i>=1;i--){
        result *=i;
    };
    return result;
}
console.log(factorial(5));
function recurtion(n){
    if(n===1){
        return 1
    }else  return n*recurtion(n-1);
   
};
console.log(recurtion(5))*/
/*
//ques 2: Create an array with range of numbers
// Input : start = 1, end=5 ---->>>> Output:[1,2,3,4,5]
function rangeOfNumbers(start,end){
    const arr =[];
    for (let i = start; i<= end;i++){
        arr.push(i);
    }
    return arr;
}
function rangeOfNumbersWithRecursion(start,end){
    if(end < start){
        return []
    }else{
        const numbers = rangeOfNumbersWithRecursion(start,end-1);
        numbers.push(end);
        return numbers;
    }
}
console.log(rangeOfNumbersWithRecursion(1,5));*/
//ques 6 - Subsets (backtracking Algorithm using Recursion)
//Given an integer array nums of unique elements, return all possible subsets (the power set).
//The solution set must not contain dublicate subsets. Return the solution in any order.
//Input :[1,2,3] ---->>>> output :[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
//Input :[0]     ---->>>> Output :[[],[0]]
/*function subsets(nums){
    let result =[];
    let temp =[];
    function recursiveSubsets(nums,i){
        if(i=== nums.length){
            return result.push([...temp]);
        };
        temp.push(nums[i]);
        recursiveSubsets(nums,i+1);
        temp.pop();
        recursiveSubsets(nums, i+1);
    }
    recursiveSubsets(nums,0);
    return result;
}
console.log(subsets([1,2,3]))*/
/*
//Loops vs Recursion

function multiply(arr){
    let product =1;
    for(let i =0 ;i<arr.length ;i++){
        product *= arr[i];
    }
    return product;
}
console.log(multiply([1,2,3,4]));
function multiplyRecursion(arr){
    if(arr.length <=0){
        return 1;
    }else return arr[arr.length -1]*multiplyRecursion(arr.slice(0,arr.length -1))
    
};
console.log(multiplyRecursion([1,2,3,4]))*/
/*
//Give an integer x, return x is a palindrome, and false otherwise.
//input: x= 121 ---->>>> output :true;
function isPalindrome(num){
    let str = num.toString();
    function checkPalindrome(start, end){
        if(start >= end){
            return true;
        }
        if(str[start]!== str[end]){
            return false;
        }
        return checkPalindrome(start+1,end-1);
    }
    return checkPalindrome(0,str.length - 1);
}
console.log(isPalindrome(120));*/
/*
//ques 4 : Fibonacci Number
// Fibonacci Series -> 0,1,1,2,3,5,8,13,21,34,55,89,144,233...
// F(0) = 0, f(1)= 1
// F(n) = f(n - 1)b+ f(n-2),for n >1
//Input :n = 3 ---->>>> Output :2
function fibWithLoop(n){
    let arr = [0,1];
    for (let i=2;i<= n;i++){
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr[n]
};
console.log(fibWithLoop(3));
function fibRecursion(n){
    if(n<= 1) return n;
    return fibRecursion(n-1)+fibRecursion(n-2);
};
console.log(fibRecursion(3))*/

/*
// Ques 5 - Reverse a String 
// Input : "hello" ----->>>> Output : "olleh"

function reverseString(str){
    if(str === ""){
        return "";
    }else{ 
    return reverseString(str.substr(1))+str.charAt(0);
    }
}
console.log(reverseString('hello'))*/
/*
function numbers(n){
    for(let i = 1; i<= n ;i++){
        console.log(i)
    }
};
numbers(5);
function recursionNumbers(n){
   if(n>0){
    console.log(n)
    recursionNumbers(n-1);
   }
};
recursionNumbers(5)*/
let s = "raya fathima"
s.replace('hari');
console.log(s)