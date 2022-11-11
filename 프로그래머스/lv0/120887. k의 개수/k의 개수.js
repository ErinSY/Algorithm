function solution(i, j, k) {
  let answer = 0;
  for (let num = i; num <= j; num++) {
    answer += [...('' + num)].filter(n => +n === k).length;
  }
  return answer;
}
