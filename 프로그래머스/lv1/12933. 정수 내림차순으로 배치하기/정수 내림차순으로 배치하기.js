function solution(n) {
let result=[];
  for (let i of n.toString()){
    result.push(i-0)
  }
  return +result.sort((a,b)=>b-a).join('')

}