function solution(arr) {
 let nums=arr.sort((a,b)=>a-b)
return nums[Math.floor(arr.length/2)]
}