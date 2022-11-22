function solution(ingredient) {
    let answer=0
    let remove=[]

    for (let i of ingredient){
    remove.push(i)
  
     if(remove.slice(-4).join('')==='1231'){
          remove.splice(-4)
          answer++
         }
    }
    return answer
}