function solution(s) {
    var answer = [];
    for (let i=s.length-1;i>0;i--){
        let findIndex=s.slice(0,i).lastIndexOf(s[i])
        findIndex===-1?answer.unshift(-1):answer.unshift(i-findIndex)
}
    answer.unshift(-1)
    return answer;
}