function solution(order) {
    var answer = 0;
    (order+"").split("").map(v=>(+v%3===0)&&(+v!==0)?answer+=1:'');
    return answer
}