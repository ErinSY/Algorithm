function solution(arr) {
    var answer = 0;
    for(let i of arr){
        answer +=(i*1)
    }
    return answer/arr.length;
}