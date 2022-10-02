function solution(numbers) {
    var answer = 0;
    for(let i=0;i<=9;i++){
    answer+=numbers.indexOf(i)===-1?i:null
    }
    return answer;
}