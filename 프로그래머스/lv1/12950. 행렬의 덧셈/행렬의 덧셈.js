function solution(arr1, arr2) {
    var answer = [];
    arr1.map((arr,idx)=>{answer.push(arr.map((num,index)=>num+arr2[idx][index]))})
    return answer;
}