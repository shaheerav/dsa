let arr = [8,20,-2,4,-6];
function bubbleSort (arr){
    let n = arr.length;
    for(let i = 0 ; i<n-1;i++){
        let flag =0
        for(let j = 0 ;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]]= [arr[j+1] ,arr[j]]
                flag = 1;
            }
        }
        if(flag===0) break
    }
    return arr
}
console.log(bubbleSort(arr));
const arr1 =[10,20,100,-20,-50];
console.log(bubbleSort(arr1))