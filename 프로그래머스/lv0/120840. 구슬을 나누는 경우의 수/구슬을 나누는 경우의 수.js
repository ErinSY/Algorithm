function solution(balls, share) {
   let n=BigInt(1)
   let m=BigInt(1)
   let s=BigInt(1)
   
for (let i=balls;i>=1;i--){
  n=n*BigInt(i)
}

for (let i=balls-share;i>=1;i--){
  m=m*BigInt(i)
}

for (let i=share;i>=1;i--){
  s=s*BigInt(i)
}


return n/(m*s)
}