function solution(n) {
    var answer = [];
    for(let i of (n+"")){
        answer.unshift(i-0)
    }
    return answer;
}