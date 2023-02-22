function solution(number) {
    let answer=0
 for(let i=0;i<number.length-2;i++){
  for(let j=i+1;j<number.length-1;j++){
    for(let a=j+1;a<number.length;a++){
      number[i]+number[j]+number[a]===0?answer++:''
    }
  }
}
    return answer
}