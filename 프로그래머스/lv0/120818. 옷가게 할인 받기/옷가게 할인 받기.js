function solution(p) {
  return  p >= 500000? Math.floor(p * 0.8): (p >= 300000 && p<500000)? Math.floor(p * 0.9): (p >= 100000 && p<300000) ? Math.floor(p * 0.95):p
}