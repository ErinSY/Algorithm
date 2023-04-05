function solution(A,B){
    let answer=0
    let Aarr= A.sort((a,b)=>a-b)
    let Barr= B.sort((a,b)=>b-a)
    let length = A.length
    
    Barr.forEach((el,i)=>{answer+=(el*Aarr[i])})
    return answer
}