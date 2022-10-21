function solution(arr, n) {
   let answer=0
    for (let i of arr){
   i===n?answer+=1:null
   
    }
    return answer;
}