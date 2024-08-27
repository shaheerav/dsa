/*
//Ques 1: Implement Lineat search in javascript
//write a function to search "target" in nums. If target exists, then return its index.
//Otherwise, return -1. You must write an algorithm with o(n) runtime complexity.

// input: nums= [4,5,6,7,0,1,1], target =0 ---->>> output : 4
// input: nums= [4,5,6,7,0,1,1], target =3 ---->>> output: -1
function lineatSearch(nums,target){
    for(let i =0; i<nums.length ;i++){
        if(target === nums[i]){
            return i;
        }
    }
    return -1;
}
//time complecity o(n)
//space complecity o(1)
console.log(lineatSearch([4,5,6,7,0,1,1],0));
console.log(lineatSearch([4,5,6,7,0,1,1],3));

//global linear search
function globalLinearSearch(nums,target){
    const result = [];
    for(let i =0; i<nums.length ; i++){
        if(target === nums[i] ){
            result.push(i)
        }
    }
    if(result.length === 0) return -1
    return result;
}
//time complexity - o(n)
//space complexity - o(n)
console.log(globalLinearSearch([4,5,0,7,0,1,0],0))*/

/*
//Ques : Kth Missing posittive number (leetcode 1539)
//Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
//Return the kth positive integer that is missing from this array.

//Input: arr = [2,3,4,7,11], k = 5
//Output: 9
//Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
function findKth(nums,k){
    let count= 0;
    for(let i= 0 ;i<nums.length;i++){
        if(nums[i]<=k +count){
            count++
        }
    }
    return k+count;
}
console.log(findKth([2,3,4,7,11], 5))*/