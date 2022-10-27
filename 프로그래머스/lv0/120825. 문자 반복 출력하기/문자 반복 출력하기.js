function solution(str, n) {
let answer=[]
for(let i of str){
    answer.push(i.repeat(n))
}
    return answer.join('');
}