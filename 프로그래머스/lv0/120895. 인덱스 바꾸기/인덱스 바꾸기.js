function solution(str, num1, num2) {
   let arr = str.split('')
    let el=arr[num1]
    arr[num1]=arr[num2]
    arr[num2]=el
    return arr.join('')
}