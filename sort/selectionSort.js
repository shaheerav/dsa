function selectionSort(arr){
    let n = arr.length;
    for(i=0;i<n-1;i++){
        let min = i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min= j;
            }
        }
        if(min != i ){
            [arr[i],arr[min]]= [arr[min],arr[i]]
    }    
}
return arr;
}
let arr = [8,20,-2,4,-6];
const arr1 =[10,20,100,-20,-50];
console.log(selectionSort(arr))
console.log(selectionSort(arr1))
