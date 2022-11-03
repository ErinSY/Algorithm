function solution(cipher, code) {
    let arr =[]
    cipher.split('').map((el,idx)=>(idx+1)%code===0?arr.push(el):'')
    return arr.join('')
}