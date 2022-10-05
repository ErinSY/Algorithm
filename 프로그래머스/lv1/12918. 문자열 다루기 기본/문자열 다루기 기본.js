function solution(s) {
       return (s-0>=0 && s.length===4 && !s.includes('e')) || (s-0>=0 && s.length===6 && !s.includes('e'))?true:false
return !s.includes('e')
}