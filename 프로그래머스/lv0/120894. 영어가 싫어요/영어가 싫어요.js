function solution(numbers) {
   let arr=['zero','one','two','three','four','five','six','seven','eight','nine']
    arr.forEach((el,idx)=>numbers=numbers.replaceAll(el,idx))
    return Number(numbers)
}