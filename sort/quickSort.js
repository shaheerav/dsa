function quickSort(arr){
    if(arr.length <2){
        return arr
    }
    let pivot = arr[arr.length-1];
    let right =[];
    let left =[];
    for(let i = 0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
let arr = [8,20,-2,4,-6];
const arr1 =[10,20,100,-20,-50];
console.log(quickSort(arr))
console.log(quickSort(arr1))