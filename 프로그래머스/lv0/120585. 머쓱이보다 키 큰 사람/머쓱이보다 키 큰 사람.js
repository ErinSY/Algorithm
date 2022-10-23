function solution(arr, h) {
    var answer = 0;
    for (let i of arr){
        (i>h)?answer+=1:""
    }
    return answer;
}