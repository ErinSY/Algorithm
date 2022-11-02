function solution(nums) { 
let arr=[]
    for (let i=0;i<=nums.length;i++){
      for (let j=i+1;j<=nums.length-1;j++){
        arr.indexOf(nums[i]+nums[j])===-1?arr.push(nums[i]+nums[j]):''
      }
    }
return arr.sort((a,b)=>a-b)
}