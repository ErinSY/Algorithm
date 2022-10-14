function solution(s) {
  tArr=s.split(' ')
   return tArr.map((str)=>str.split('').map((i,idx)=>idx%2===0?str[idx].toUpperCase():str[idx].toLowerCase()).join('')).join(' ');
}