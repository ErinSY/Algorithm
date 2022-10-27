function solution(s, n) {
    return (n%s===0)?n/s:Math.floor(n/s)+1;
}