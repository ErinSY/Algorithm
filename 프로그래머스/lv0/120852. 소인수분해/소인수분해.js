function solution(a) {
    let answer=[]
     if(a%2===0){
        answer.push(2)
          while(a%2 ==0){
                    a=a/2
          }
       }  

    for (let i=3;i<=a;i+=2){
        if(a%i===0){
            answer.push(i)
            while(a%i ==0){
                    a=a/i
                }
        }
    if(a===1)break
}
    return answer
}