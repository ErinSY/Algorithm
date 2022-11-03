function solution(numbers, direction) {
   let arr=[];
    direction==="right"?
        numbers.map((el,idx)=>idx===numbers.length-1?arr[0]=el:arr[idx+1]=el):
        numbers.map((el,idx)=>idx===0?arr[numbers.length-1]=el:arr[idx-1]=el)
    return arr;
}