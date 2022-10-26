function solution(list) {
    var a=0
    var b=0
    list.map((i)=>i%2===0?a+=1:b+=1)
    return[a,b]
}