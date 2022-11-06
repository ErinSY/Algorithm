function solution(str, n) {
    let arr=[]
    for (let i=0;i<str.length;i+=n){
        arr.push((str.split('').slice(i,n+i)).join(''))
        }
    return arr
}