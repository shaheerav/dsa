/*
//Ques 2: Implement Binary Search in JavaScript
//Giben an array of integers nums which is sorted in ascending order,  and an integer target,
//write a function to search target in nums. If target exists, then return its index.
//Otherwise, return -1. You must write an algorithm with o(log n) runtime complexity.

//input: nums = [-1,0,3,5,9,12], targer =9 ---->>> output : 4
//input: nums = [-1,0,3,5,9,12], targer =2 ---->>> output : -1
function search (nums, target){
    let start = 0;
    let end = nums.length-1;
    while(start<= end){
        let middle = Math.floor((start+end)/2);
        if(nums[middle] === target){
            return middle;
        }else if(nums[middle]<target){
            start = middle+1;
        }else{
            end = middle -1;
        }
    }
    
    return -1;
};
console.log(search([-1,0,3,5,9,12],9))*/

//Ques maximum-count-of-positive-integer-and-negative-integer
//Given an array nums sorted in non-decreasing order, 
//return the maximum between the number of positive integers and the number of negative integers.

//Input: nums = [-2,-1,-1,1,2,3]
//Output: 3
//Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

function maimumCount(nums){
    return Math.max(upperBount(nums),lowerBount(nums));
}
function upperBount(nums){
    let low =0,
    high = nums.length - 1;

    while(low<high){
        let mid = Math.ceil((low + high)/2);
        if(nums[mid] < 0) low = mid;
        else high = mid -1;
    }
    return nums[0] >=0? 0:low+1;
}
function lowerBount(nums){
    let low =0,
    high = nums.length -1;
    while(low < high){
        let mid = Math.floor((low + high)/2);
        if(nums[mid]>0)high = mid;
        else low = mid +1;
    }
 return nums[nums.length -1]<= 0 ? 0 : nums.length -low;
}
console.log(maimumCount([-3,-2,-1,-1,1,2,3]))
/*
function binarySearch(arr,t){
    let start = 0;
    let end = arr.length -1;
    while(start <= end){
        let middle = Math.floor((start+end)/2);
        if(arr[middle]===t){
            return middle;
        }else if(arr[middle]<target){
            start = middle+1
        }else{
            end = middle -1;
        }
    }
    return -1
}
console.log(binarySearch([1, 3, 5, 6,7, 8, 9],6))*/