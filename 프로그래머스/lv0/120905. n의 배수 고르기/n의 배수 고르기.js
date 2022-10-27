function solution(n, list) {
    var answer = [];
    for (let i of list){
        (i%n===0)&&answer.push(i)
    }
    return answer;
}