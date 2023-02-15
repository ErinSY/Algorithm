function solution(sides) {
    let answer = 0;
    let arr=sides.sort((a,b)=>b-a);
    for(let i=arr[0];arr[1]+i>arr[0];i--){
        answer++
         }
    answer+=arr[1]-1;
    return answer
}