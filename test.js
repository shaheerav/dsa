function factorial(n){
    if(n===1){
        return 1
    }
    return n*factorial(n-1);

};
console.log(factorial(6))
//sorted_list = [1, 3, 4, 5, 6, 9, 11, 15, 18, 21, 25]
const arr = [1, 3, 4, 5, 6, 9, 11, 15, 18, 21, 25]
target_element = 15
function binarySearch (arr,t){
    let start = 0;
    let end = arr.length-1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]=== t){
            return mid
        }else if(arr[mid]<t){
            start = mid+1
        }else{
            end = mid -1
        }
    }
    return -1
}
console.log(binarySearch(arr,15))