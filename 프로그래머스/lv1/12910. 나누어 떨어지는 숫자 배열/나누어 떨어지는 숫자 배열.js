function solution(arr, divisor) {
    var answer = [];
    for (let i of arr){
        i%divisor===0?answer.push(i):null
    }  
    return answer.length===0?[-1]:answer.sort(function(a, b) { 
    return a - b
});
}