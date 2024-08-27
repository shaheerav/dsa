/*
//Ques 1: Truncate the text 
// Write a function called truncate that checks the length of a given string - str, and if 
//it surpasses a specified maximum lenght, maxlength, it replaces the end of the string
//with the ellipsis character "..." so that the length matches the maximum length

//input: str = "Subscribe to Canel", maxlenth =9;
//output :'subscribe..'
function truncate (str,maxlength){
    if(str.length > maxlength)
        return str.slice(0,maxlength)+"..."
    else return str
}
console.log(truncate('Subscribe to my channel',9))*/
/*
//Ques 2 - Palindrome 
//

function isPalindrome(x){
    return x<0 ? false :  x === x.toString().split("").reverse().join("");
};
console.log(isPalindrome('malayalam'))
*/
/*
//ques 3: Hamming Distance
//Given two string x and y, return the Hamming distance between them.
//Input : x ="hello" , y ="hwllr"
//output:2
function hammingDistance(x,y){
    if(x.length !== y.length ){
        throw new Error('String must be the same length');
    }
    let distance =0;
    for(let i=0 ;i<x.length ;i++){
        if(x[i] !== y[i]){
            distance ++
        }
    }
    return distance;
}
console.log(hammingDistance('hello','hwllr'));
//variation 2 :Givenn two integers x and y, return the Hamming distance between their bits.
function bitHammingDistance(x,y){
    x = x .toString(2);
    y = y .toString(2);
    if(x.length<y.length){
        while (x.length !== y.length)x="0"+x
    }else{
        while(x.length!== y.length)y="0"+y
    }
    let distance =0;
    for(let i=0 ;i<x.length ;i++){
        if(x[i] !== y[i]){
            distance ++
        }
    }
    return distance;

}
console.log(bitHammingDistance(2,4))*/
/*
//Ques 4 - valid Anagram 
//An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.
//input :(s= "anagram "), (t ="nagaram"): ---->>> output:true;
//input :(s= "rat"),(t="car"):---->>> output :false;
//first approch
function isAnagram (x,y){
    x= x.split("").sort().join("");
    y= y.split("").sort().join("");
    return x===y;
};
console.log(isAnagram('rat','car'))
//second approch
function isAnagramDSA(x,y){
    if(x.length !== y.length)return false;
    let obj1 ={};
    let obj2 ={};
    for(let i =0; i<x.length;i++){
        obj1[x[i]] = (obj1[x[i]] || 0) +1;
        obj2[y[i]] = (obj2[y[i]] || 0) +1;
    };
    for(const key in obj1){
        if(obj1[key]!== obj1[key]){
            return false;
        }
    }
    return true
}
console.log(isAnagramDSA('rat','car'));*/
