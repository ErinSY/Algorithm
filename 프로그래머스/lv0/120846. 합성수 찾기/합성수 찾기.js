function solution(n) {
    let answer=0
    let arr=[]
 
    for (let i=4;i<=n;i++){
     for (let j=1;j<=i;j++){
         i%j===0?answer+=1:'';
         answer>=3?arr.push(i):'';
     }
          answer=0
 }
    return  arr.filter((num,idx)=>arr.indexOf(num)===idx).length;
}