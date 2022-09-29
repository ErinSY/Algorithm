function solution (n){
  let num = Math.sqrt(n);
  let answer =0; 
  (num+"").includes('.')? answer=-1 :answer=(num+1)**2;
  return answer
}