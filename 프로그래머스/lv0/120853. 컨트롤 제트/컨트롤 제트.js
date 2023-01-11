function solution(s) {
    let arr = s.split(' ')
    let result =0 
    let filtered= arr.filter((el,idx)=>arr[idx+1]!=='Z').filter((el)=>el!=="Z")
     filtered.forEach((el)=>result+=Number(el))
    return result
}

