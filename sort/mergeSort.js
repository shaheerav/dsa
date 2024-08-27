function mergeSort(arr){
    if(arr.length <2){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    const sortArr = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sortArr.push(left.shift())
        }else{
            sortArr.push(right.shift())
        }
    }
    return [...sortArr,...left,...right]
}
let arr = [8,20,-2,4,-6];
const arr1 =[10,20,100,-20,-50];
console.log(mergeSort(arr))
console.log(mergeSort(arr1))
