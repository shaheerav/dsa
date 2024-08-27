function insertionSort(arr){
    for(let i = 1;i<arr.length;i++){
        let temp = arr[i];
        let j= i-1;
        while(j>= 0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j--
        }
        arr[j+1] = temp;
    }
    return arr
}
let arr = [8,20,-2,4,-6];
const arr1 =[10,20,100,-20,-50];

console.log(insertionSort(arr))
console.log(insertionSort(arr1))
