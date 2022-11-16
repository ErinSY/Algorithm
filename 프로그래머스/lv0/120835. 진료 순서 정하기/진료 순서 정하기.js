function solution(emergency) {
  let arr = [...emergency].sort((a, b) => b - a);
  return emergency.map(e => arr.findIndex(s => s === e) + 1);
}