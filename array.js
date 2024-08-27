//rotate-array (189)
//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
//Input: nums = [1,2,3,4,5,6,7], k = 3
//Output: [5,6,7,1,2,3,4]
//Explanation:
//rotate 1 steps to the right: [7,1,2,3,4,5,6]
//rotate 2 steps to the right: [6,7,1,2,3,4,5]
//rotate 3 steps to the right: [5,6,7,1,2,3,4]
/*
function rotateArray(nums,k){
    let size = nums.length;
    if(size >k ){
        k= k % size;
    }
    reverse(nums,0,nums.length -1);
    reverse(nums, 0,k-1);
    reverse(nums, k, nums.length - 1);

    return nums;
}
function reverse(nums, left, right){
    while (left < right){
        const temp = nums [left];
        nums[left++]= nums[right];
        nums[right--]=temp;
    }
}
console.log(rotateArray([1,2,3,4,5,6,7],3))
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.


//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
var twoSum = function(nums, target) {
    let result = [];
    for(let i =0 ;i <nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] === target){
                result.push(i);
                result.push(j);
            }
        }
    }
   return result;
    
};

var twoSum = function(nums, target) {
    var obj ={};
    for(let i =0; i <nums.length;i++){
        var n = nums[i];
        if(obj[target - n]>=0){
            return [obj[target-n],i]
        }else{
            obj[n]=i
        }
    }
    
};
//----------------------
//You are given an array prices where prices[i] is the price of a given stock on the ith day.

//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
//Input: prices = [7,1,5,3,6,4]
//Output: 5
//Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
*/
function merge(arr1,arr2){
    return arr1.concat(arr2).sort();
};
console.log(merge([1,2,4],[1,3,4]))