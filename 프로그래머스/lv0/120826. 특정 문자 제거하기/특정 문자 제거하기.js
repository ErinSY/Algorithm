function solution(str, letter) {
    let answer=str.split('')
    for(let i = 0; i < answer.length; i++) {
    if(answer[i] === letter)  {
  answer.splice(i, 1);
    i--;
  } 
}
    return answer.join('');
}

