function solution(str) {
    let arr=[]
    for (let i=0;i<=9;i++){
      str.split('').map(el=>+el===i?arr.push(+el):'')
        }
    return arr.sort((a,b)=>a-b)
    }