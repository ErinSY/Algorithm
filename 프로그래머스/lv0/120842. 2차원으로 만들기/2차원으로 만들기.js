function solution(arr, n) {
    let add=n
    let ans=[]
        for(let i=0;n<=arr.length;n+=add){
            ans.push(arr.slice(i,n))
            i=n
            }
    return ans
}