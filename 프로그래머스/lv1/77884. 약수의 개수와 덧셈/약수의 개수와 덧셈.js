function solution(left, right) {
    var answer = 0;
    var arr=[];
    for (let i=left;i<=right;i++){
        for(let j=1;j<=i;j++){
            i%j===0?arr.push(j):null
        }
            arr.length%2===0?(answer+=i,arr=[]):(answer-=i,arr=[])
    }
    return answer;
}