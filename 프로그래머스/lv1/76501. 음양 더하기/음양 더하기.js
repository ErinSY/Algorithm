function solution(abs, signs) {
    let answer = 0;
    for(let i in abs){
    answer+=signs[i]?abs[i]:-abs[i]
         }
    return answer;
}