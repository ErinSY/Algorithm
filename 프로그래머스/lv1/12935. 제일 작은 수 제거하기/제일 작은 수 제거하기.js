function solution(arr) {
     let minIdx=arr.indexOf(Math.min(...arr))
     arr.splice(minIdx,1)
     return arr.length>1?arr:[-1];
}
