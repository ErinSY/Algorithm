function solution(arr) {
    let sum=0
     arr.join('').split('').map((el)=>+el===7?sum+=1:'')
    return sum
}