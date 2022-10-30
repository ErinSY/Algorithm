function solution(str) {
    var answer = 0;
     str.split('').map(num=>!isNaN(num)?answer+=num-0:'');
    return answer
}