function solution(x) {
let str = x+''
let sum=0;
for(let i of str){
    sum+=i-0
}
return x%sum===0? true: false
}