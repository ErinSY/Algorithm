function solution(d, budget) {
   let newArr=d.sort((a,b)=>a-b)
   let sum=newArr[0]
   let i=1
  while(sum<=budget){
      sum+=newArr[i];
      i++
      
  }
    return i-1
}