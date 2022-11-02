function solution(s) {
let arr= s.split(' ').map((el)=>el.split(''))
return arr.map(el=>el.map((e,idx)=>idx%2===0?e.toUpperCase():e.toLowerCase()).join('')).join(' ')                  
}