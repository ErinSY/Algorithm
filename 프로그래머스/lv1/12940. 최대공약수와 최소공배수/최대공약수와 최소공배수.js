function solution(n, m) {
let arr =[n,m]
let max =Math.max(...arr)
let mcdArr=[]
for(let i=1;i<=max;i++){
    (n%i===0 && m%i===0)&&mcdArr.push(i)
}
const mcd=mcdArr.pop() //최대공약수
// n*m=최소공배수 * 최대공약수
const lcm = (n*m)/mcd // 그냥공식
  return[mcd,lcm]}