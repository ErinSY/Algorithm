function solution(s) {
result=[Math.min(...s.split(' ')),Math.max(...s.split(' '))]
  
    return result.join(' ');
}